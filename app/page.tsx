import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const timeline = [
  {
    company: 'Cásper Líbero',
    role: 'Estagiário de Conteúdo',
    period: 'jan 2011 – jul 2012',
    current: false,
  },
  {
    company: 'Cásper Líbero',
    role: 'Web Designer Jr',
    period: 'jul 2012 – dez 2016',
    current: false,
  },
  {
    company: 'Cásper Líbero',
    role: 'Web Designer Pleno',
    period: 'dez 2016 – fev 2019',
    current: false,
  },
  {
    company: 'Bionexo',
    role: 'Product Designer',
    period: 'fev 2019 – nov 2019',
    current: false,
  },
  {
    company: 'Bionexo',
    role: 'Senior Product Designer',
    period: 'nov 2019 – jan 2021',
    current: false,
  },
  {
    company: 'Bionexo',
    role: 'Lead Product Designer',
    period: 'jan 2021 – abr 2022',
    current: false,
  },
  {
    company: 'Pipo Saúde',
    role: 'Lead Product Designer',
    period: 'abr 2022 – dez 2023',
    current: false,
  },
  {
    company: 'Coderhouse',
    role: 'Professor e tutor',
    period: 'jun 2022 – fev 2023',
    current: false,
  },
  {
    company: 'Hotmart',
    role: 'Senior Product Designer',
    period: 'abr 2024 – abr 2026',
    current: false,
  },
  {
    company: 'Hotmart',
    role: 'Staff Product Designer',
    period: 'abr 2026 – atual',
    current: true,
  },
];

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <div>
      {/* ── Hero + Timeline (first fold) ──────────────── */}
      <section
        className="flex flex-col pb-0 pt-12 md:pt-16"
        style={{ minHeight: 'calc(100svh - 81px)' }}
      >
        {/* Text content */}
        <div className="flex flex-1 flex-col justify-center gap-8 md:gap-10">
          {/* Eyebrow */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2.5 font-sans text-sm font-semibold text-ink">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Staff Product Designer — Hotmart
            </span>
          </div>

          {/* Name */}
          <div className="animate-fade-up delay-100">
            <h1
              className="font-serif leading-[0.88] tracking-tight text-ink"
              style={{ fontSize: 'clamp(3.6rem, 11vw, 10rem)' }}
            >
              <span className="block font-black">Walter</span>
              <span className="block font-extralight italic text-ink/60">Darcie</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-up delay-200 max-w-lg">
            <p className="font-sans text-base leading-relaxed text-muted md:text-lg">
              Mais de 15 anos de trajetória em produtos digitais que passam por B2B e B2C
              em edtechs, healthtechs e entretenimento. Hoje focado em produtos financeiros,
              crédito e collections na América Latina.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-5">
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
            <Link
              href="/projects"
              className="font-sans text-sm text-muted no-underline transition-colors hover:text-ink"
            >
              Ver projetos
            </Link>
          </div>
        </div>

        {/* Timeline carousel */}
        <div className="animate-fade-up delay-500 border-t border-line pt-8">
          <p className="mb-6 font-sans text-xs font-light uppercase tracking-[0.25em] text-muted/60">
            +15 anos de trajetória em produto
          </p>

          {/* Full-bleed horizontal scroll */}
          <div className="-mx-6 overflow-x-auto scrollbar-hide md:-mx-10">
            <div className="flex px-6 pb-10 md:px-10">
              {timeline.map((item, i) => (
                <div key={`${item.company}-${i}`} className="flex w-[200px] shrink-0 flex-col">
                  {/* Dot + connector */}
                  <div className="flex items-center">
                    <div
                      className={`z-10 h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
                        item.current
                          ? 'bg-accent shadow-[0_0_0_4px_rgba(241,87,35,0.2)]'
                          : 'border border-muted/30 bg-paper'
                      }`}
                    />
                    {i < timeline.length - 1 && (
                      <div className="h-px flex-1 bg-line" />
                    )}
                  </div>
                  {/* Labels */}
                  <div className="mt-4 pr-4">
                    <p
                      className={`font-sans text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        item.current ? 'text-accent' : 'text-muted/50'
                      }`}
                    >
                      {item.company}
                    </p>
                    <p className="mt-1 font-serif text-sm font-semibold leading-tight text-ink">
                      {item.role}
                    </p>
                    <p className="mt-1 font-sans text-[10px] leading-relaxed text-muted/50">
                      {item.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────── */}
      <AnimateOnScroll>
        <section className="border-t border-line pb-24 pt-16">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-light text-ink md:text-4xl">Projetos</h2>
            <p className="mt-2 font-sans text-sm text-muted">
              Cases de produto com impacto mensurável.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col bg-white no-underline transition-shadow hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden bg-line">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.tags?.slice(0, 2).map((tag, i) => (
                        <span key={tag} className="flex items-center gap-2">
                          {i > 0 && <span className="text-line">·</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink md:text-[1.65rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-6 text-muted line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                  {/* Always at the card bottom */}
                  <div className="mt-auto border-t border-line pt-5 flex items-center justify-between">
                    <span className="font-sans text-xs text-muted/60">{project.date}</span>
                    <span className="font-sans text-xs font-semibold uppercase tracking-wide text-ink transition-colors group-hover:text-accent">
                      Ver case →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
