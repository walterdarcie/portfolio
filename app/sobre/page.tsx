import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Staff Product Designer com mais de 15 anos de trajetória em produtos digitais, hoje focado em produtos financeiros na América Latina.',
};

export default function AboutPage() {
  return (
    <section className="pb-24 pt-12">
      {/* Header */}
      <div className="animate-fade-up max-w-3xl">
        <p className="mb-4 font-sans text-xs font-light uppercase tracking-[0.25em] text-muted">
          Sobre
        </p>
        <h1
          className="font-serif font-light leading-tight text-ink"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Walter<br />
          <span className="italic font-extralight text-ink/60">Darcie</span>
        </h1>
      </div>

      {/* Bio */}
      <AnimateOnScroll className="mt-16 max-w-2xl">
        <p className="font-sans text-lg leading-8 text-muted">
          Staff Product Designer com mais de 15 anos de trajetória em produtos digitais
          que atravessam B2B e B2C em edtechs, healthtechs e entretenimento.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-6 max-w-2xl" delay={100}>
        <p className="font-sans text-lg leading-8 text-muted">
          Hoje na Hotmart, lidero tecnicamente a vertical de Credit: internacionalização
          de BNPL, experiências de collections e antecipação de recebíveis para a América
          Latina. Conecto estratégia, dados e execução para criar produtos financeiros que
          reduzem inadimplência e aumentam confiança na jornada de pagamento.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-6 max-w-2xl" delay={200}>
        <p className="font-sans text-lg leading-8 text-muted">
          Antes da Hotmart, passei pela healthtech na Bionexo e Pipo Saúde, onde liderei
          times de design em produtos SaaS B2B e plataformas de benefícios corporativos.
          Comecei a carreira em entretenimento digital na Fundação Cásper Líbero, onde
          construí a base em UX, sistemas de design e desenvolvimento front-end.
        </p>
      </AnimateOnScroll>

      {/* Stats */}
      <AnimateOnScroll className="mt-16 border-t border-line pt-12" delay={100}>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { value: '+15', label: 'anos em produto digital' },
            { value: 'B2B+B2C', label: 'edtech, healthtech, entretenimento' },
            { value: 'LATAM', label: 'produtos financeiros ativos' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="font-serif font-black text-ink"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {stat.value}
              </p>
              <p className="mt-1 font-sans text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll className="mt-16" delay={150}>
        <a
          href="mailto:walter.darcie@yahoo.com.br"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent no-underline transition-opacity hover:opacity-70"
        >
          Falar comigo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </AnimateOnScroll>
    </section>
  );
}
