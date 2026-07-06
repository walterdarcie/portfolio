'use client';

import { useEffect, useRef } from 'react';

/* Halftone sphere: ink dots on paper, dot size renders the shading of a lit
   sphere plus a soft drop shadow. Dots swell and drift gently near the cursor.
   Tuning knobs below; keep INK_ALPHA low so the name stays the darkest element. */
const SPACING = 16; // grid pitch (px)
const DOT_MAX = 0.36; // max dot radius as fraction of SPACING
const INK_ALPHA = 0.25; // peak ink opacity
const DRIFT = 0.00072; // wobble speed (rad/ms)
const WOBBLE = 0.05; // wobble amplitude added to tone
const CURSOR_RADIUS = 120; // px, gaussian falloff of cursor influence
const CURSOR_SWELL = 0.85; // extra dot radius at the cursor
const CURSOR_PUSH = 6; // max px dots get pushed away from the cursor
const INK_RGB = '29, 29, 27'; // ink #1d1d1b
const ACCENT = '#F15723';

const LIGHT = (() => {
  const [x, y, z] = [-0.5, -0.62, 0.6];
  const m = Math.hypot(x, y, z);
  return { x: x / m, y: y / m, z: z / m };
})();

export function HalftoneField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    const ctx: CanvasRenderingContext2D = context;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let raf = 0;
    let width = 0;
    let height = 0;
    let inView = false;

    const pointer = { x: 0, y: 0, tx: 0, ty: 0, strength: 0, active: false };

    const hash = (ix: number, iy: number) => {
      const s = Math.sin(ix * 127.1 + iy * 311.7) * 43758.5453;
      return s - Math.floor(s);
    };

    const smooth = (a: number, b: number, v: number) => {
      const k = Math.min(1, Math.max(0, (v - a) / (b - a)));
      return k * k * (3 - 2 * k);
    };

    function draw(time: number) {
      if (width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height);

      const size = Math.min(width, height);
      const cx = width * 0.5;
      const cy = height * 0.47;
      const radius = size * 0.38;
      const shadowCx = cx + radius * 0.2;
      const shadowCy = cy + radius * 0.26;
      const t = time * DRIFT;

      pointer.x += (pointer.tx - pointer.x) * 0.14;
      pointer.y += (pointer.ty - pointer.y) * 0.14;
      pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.08;

      const cols = Math.ceil(width / SPACING);
      const rows = Math.ceil(height / SPACING);

      for (let gy = 0; gy <= rows; gy++) {
        for (let gx = 0; gx <= cols; gx++) {
          const x = gx * SPACING + SPACING / 2;
          const y = gy * SPACING + SPACING / 2;

          const dx = (x - cx) / radius;
          const dy = (y - cy) / radius;
          const d2 = dx * dx + dy * dy;

          // Tone = darkness of the halftone: lit areas get no ink
          let tone = 0;
          if (d2 <= 1) {
            const nz = Math.sqrt(1 - d2);
            const shade = Math.max(0, dx * LIGHT.x + dy * LIGHT.y + nz * LIGHT.z);
            tone = Math.pow(1 - shade, 1.35) * 0.92;
          } else {
            const sd = Math.hypot(x - shadowCx, y - shadowCy) / (radius * 1.06);
            tone = 0.16 * (1 - smooth(0.7, 1.15, sd));
          }

          if (tone > 0.02 && !reduceMotion) {
            const phase = gx * 0.55 + gy * 0.38 + hash(gx, gy) * 2.4;
            tone += Math.sin(t + phase) * WOBBLE * smooth(0.02, 0.18, tone);
          }

          let px = x;
          let py = y;
          let mul = 1;
          if (pointer.strength > 0.01) {
            const pdx = x - pointer.x;
            const pdy = y - pointer.y;
            const g =
              Math.exp(-(pdx * pdx + pdy * pdy) / (CURSOR_RADIUS * CURSOR_RADIUS)) *
              pointer.strength;
            if (g > 0.004) {
              const pd = Math.hypot(pdx, pdy) || 1;
              px += (pdx / pd) * CURSOR_PUSH * g;
              py += (pdy / pd) * CURSOR_PUSH * g;
              mul = 1 + CURSOR_SWELL * g;
            }
          }

          const r = Math.min(Math.max(tone, 0) * SPACING * DOT_MAX * mul, SPACING * 0.48);
          if (r < 0.35) continue;

          const alpha = INK_ALPHA * (0.5 + 0.5 * Math.min(tone, 1));
          ctx.fillStyle = `rgba(${INK_RGB}, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Single accent dot resting in the highlight, echoing the eyebrow bullet
      const ax =
        Math.round((cx - radius * 0.34 - SPACING / 2) / SPACING) * SPACING + SPACING / 2;
      const ay =
        Math.round((cy - radius * 0.4 - SPACING / 2) / SPACING) * SPACING + SPACING / 2;
      ctx.fillStyle = ACCENT;
      ctx.beginPath();
      ctx.arc(ax, ay, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }

    function frame(now: number) {
      draw(now);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (!raf && inView && !document.hidden && !reduceMotion) {
        raf = requestAnimationFrame(frame);
      }
    }

    function stop() {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion) draw(0);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left;
      pointer.ty = e.clientY - rect.top;
      if (!pointer.active) {
        pointer.active = true;
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
    };
    const onLeave = () => {
      pointer.active = false;
    };
    if (!reduceMotion) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
    }

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
