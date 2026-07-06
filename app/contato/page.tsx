import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com Walter Darcie sobre design de produto, liderança, produtos financeiros e novos desafios.',
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-12">
      <div className="animate-fade-up max-w-3xl">
        <p className="mb-4 font-sans text-xs font-light uppercase tracking-[0.25em] text-muted">
          Contato
        </p>
        <h1
          className="font-serif font-light leading-tight text-ink"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Vamos<br />
          <span className="italic font-extralight text-ink/60">conversar?</span>
        </h1>
      </div>

      <AnimateOnScroll className="mt-10 max-w-lg">
        <p className="font-sans text-lg leading-8 text-muted">
          Disponível para conversas sobre design de produto, liderança, produtos
          financeiros e novos desafios.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-12 flex flex-col gap-5" delay={100}>
        <a
          href="mailto:walter.darcie@yahoo.com.br"
          className="inline-flex items-center gap-3 font-sans text-base font-medium text-ink no-underline transition-colors hover:text-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          walter.darcie@yahoo.com.br
        </a>

        <a
          href="https://wa.me/5511971642798"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-sans text-base font-medium text-ink no-underline transition-colors hover:text-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          (11) 9 7164-2798
        </a>

        <a
          href="https://br.linkedin.com/in/walterdarcie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-sans text-base font-medium text-ink no-underline transition-colors hover:text-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn · walterdarcie
        </a>
      </AnimateOnScroll>
    </section>
  );
}
