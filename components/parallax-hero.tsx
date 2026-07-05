'use client';
import { useEffect, useRef } from 'react';

type ParallaxHeroProps = {
  backgroundSrc: string;
  title: string;
  subtitle: string;
};

export function ParallaxHero({ backgroundSrc, title, subtitle }: ParallaxHeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 'clamp(480px, 70vh, 680px)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginBottom: '4rem',
        marginTop: '-3rem',
      }}
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-15%', height: '130%' }}
      >
        <img
          src={backgroundSrc}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />

      {/* Glass card */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          className="flex flex-col items-center text-center"
          style={{
            background: 'rgba(255,255,255,0.70)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.65)',
            boxShadow:
              '0 2px 2px rgba(0,0,0,0.04), 0 8px 40px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)',
            padding: 'clamp(2rem, 5vw, 3.5rem) clamp(2.5rem, 8vw, 6rem)',
            maxWidth: '640px',
            width: '100%',
          }}
        >
          <img
            src="/images/projects/collections-hotmart/logo-da-hotmart.svg"
            alt="Hotmart"
            className="mb-6 h-8 w-auto"
          />

          <h1
            className="font-serif font-semibold text-ink"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.25rem)', lineHeight: 1.08 }}
          >
            {title}
          </h1>

          <p
            className="mt-3 font-sans text-muted"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', fontWeight: 400 }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
