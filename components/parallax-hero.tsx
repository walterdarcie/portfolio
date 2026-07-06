'use client';
import { useEffect, useRef } from 'react';

type ParallaxHeroProps = {
  backgroundSrc: string;
  logoSrc?: string;
  logoAlt?: string;
  title: string;
  tags?: string;
  summary?: string;
  year?: string;
  impact?: string;
};

// Máscara diagonal: revela a imagem a partir do canto superior direito.
// `edge` controla até onde a imagem aparece ao longo da diagonal (225deg).
function maskFor(edge: number) {
  return `linear-gradient(225deg, rgba(0,0,0,1) ${edge - 30}%, rgba(0,0,0,0) ${edge}%)`;
}

const EDGE_START = 48; // cobertura inicial: só o canto superior direito
const EDGE_END = 160; // cobertura final: imagem completa
const REVEAL_DISTANCE = 700; // px de scroll para completar a revelação
const PARALLAX_FACTOR = 0.25;
const SMOOTHING = 0.08;

export function ParallaxHero({ backgroundSrc, logoSrc, logoAlt, title, tags, summary, year, impact }: ParallaxHeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf = 0;
    let current = window.scrollY;

    const tick = () => {
      const target = window.scrollY;
      current += (target - current) * SMOOTHING;
      if (Math.abs(target - current) < 0.1) current = target;

      el.style.transform = `translate3d(0, ${-current * PARALLAX_FACTOR}px, 0)`;

      const progress = Math.min(Math.max(current / REVEAL_DISTANCE, 0), 1);
      const mask = maskFor(EDGE_START + progress * (EDGE_END - EDGE_START));
      el.style.webkitMaskImage = mask;
      el.style.maskImage = mask;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const tagList = tags ? tags.split('·').map(t => t.trim()).filter(Boolean) : [];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 'clamp(520px, 78vh, 760px)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginBottom: '4rem',
        marginTop: '0',
      }}
    >
      {/* Background com parallax suave, ancorado no canto superior direito.
          Revelado progressivamente pela máscara diagonal conforme o scroll. */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 top-0 will-change-transform"
        style={{
          height: '150%',
          WebkitMaskImage: maskFor(EDGE_START),
          maskImage: maskFor(EDGE_START),
        }}
      >
        <img
          src={backgroundSrc}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          style={{ objectPosition: 'right top' }}
        />
      </div>

      {/* Glass card */}
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div
          className="flex flex-col items-center text-center"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(32px) saturate(200%)',
            WebkitBackdropFilter: 'blur(32px) saturate(200%)',
            borderRadius: '22px',
            border: '1px solid rgba(255,255,255,0.70)',
            boxShadow:
              '0 2px 2px rgba(0,0,0,0.03), 0 12px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
            padding: 'clamp(2rem, 4.5vw, 3.5rem) clamp(2.5rem, 7vw, 5rem)',
            maxWidth: '660px',
            width: '100%',
          }}
        >
          {/* Logo */}
          {logoSrc && (
            <img src={logoSrc} alt={logoAlt ?? ''} className="mb-5 h-7 w-auto" />
          )}

          {/* Tag chips */}
          {tagList.length > 0 && (
            <div className="mb-4 flex flex-wrap justify-center gap-1.5">
              {tagList.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-full border border-line/50 bg-white/60 px-2.5 py-0.5 font-sans text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="font-serif font-semibold text-ink"
            style={{ fontSize: 'clamp(1.75rem, 4.2vw, 3rem)', lineHeight: 1.1 }}
          >
            {title}
          </h1>

          {/* Summary */}
          {summary && (
            <p
              className="mt-3 font-sans text-muted"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1.05rem)',
                lineHeight: 1.65,
                maxWidth: '520px',
              }}
            >
              {summary}
            </p>
          )}

          {/* Meta row */}
          {(year || impact) && (
            <div
              className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t pt-5"
              style={{ borderColor: 'rgba(0,0,0,0.08)' }}
            >
              {year && (
                <div className="flex flex-col items-center gap-0.5">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-muted/50">
                    Ano
                  </span>
                  <span className="font-sans text-sm font-medium text-ink">{year}</span>
                </div>
              )}
              {impact && (
                <div className="flex flex-col items-center gap-0.5">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-muted/50">
                    Impacto
                  </span>
                  <span className="font-sans text-sm font-medium text-accent">{impact}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
