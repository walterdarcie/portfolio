'use client';
import { useEffect, useRef } from 'react';

type ParallaxHeroProps = {
  backgroundSrc: string;
  title: string;
  tags?: string;
  summary?: string;
  year?: string;
  impact?: string;
};

export function ParallaxHero({ backgroundSrc, title, tags, summary, year, impact }: ParallaxHeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${-window.scrollY * 0.55}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
      {/* Background block — flush in the top-right corner, ~60% of the hero, rises as user scrolls */}
      <div className="absolute right-0 top-0 overflow-hidden" style={{ width: '60%', height: '60%' }}>
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform"
          style={{ top: '-20%', height: '140%' }}
        >
          <img
            src={backgroundSrc}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{ objectPosition: 'right top' }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
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
          <img
            src="/images/projects/collections-hotmart/logo-da-hotmart.svg"
            alt="Hotmart"
            className="mb-5 h-7 w-auto"
          />

          {/* Tag chips */}
          {tagList.length > 0 && (
            <div className="mb-4 flex flex-wrap justify-center gap-1.5">
              {tagList.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-full border border-line/50 bg-white/60 px-2.5 py-0.5 font-sans text-[11px] font-medium text-muted"
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
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-muted/50">
                    Ano
                  </span>
                  <span className="font-sans text-sm font-medium text-ink">{year}</span>
                </div>
              )}
              {impact && (
                <div className="flex flex-col items-center gap-0.5">
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-muted/50">
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
