import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

const trajectory = [
  {
    company: 'Hotmart',
    role: 'Staff Product Designer',
    period: 'abr 2026 — atual',
    description:
      'Liderança técnica da vertical de Credit. Internacionalização de BNPL, collections e antecipação de recebíveis na América Latina.',
    current: true,
  },
  {
    company: 'Hotmart',
    role: 'Senior Product Designer',
    period: 'abr 2024 — abr 2026',
    description:
      'Design e experiência de internacionalização de meios de pagamento parcelados e Buy Now Pay Later para novos mercados.',
    current: false,
  },
  {
    company: 'Pipo Saúde',
    role: 'Lead Product Designer',
    period: 'abr 2022 — dez 2023',
    description:
      'Líder de tribo em produtos B2B2C. Foco em aquisição, adoção e retenção em benefícios de saúde corporativa.',
    current: false,
  },
  {
    company: 'Bionexo',
    role: 'Lead Product Designer',
    period: 'jan 2021 — abr 2022',
    description:
      'Liderança de design em ferramentas SaaS B2B para supply-chain na área da saúde. Times de produto distribuídos.',
    current: false,
  },
];

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="flex min-h-[88vh] flex-col justify-between py-16 md:py-20">
        {/* Eyebrow */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2.5 font-sans text-xs font-light uppercase tracking-[0.28em] text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Staff Product Designer — Hotmart
          </span>
        </div>

        {/* Name */}
        <div className="animate-fade-up delay-100 my-8 md:my-0">
          <h1
            className="font-serif leading-[0.88] tracking-tight text-ink"
            style={{ fontSize: 'clamp(3.8rem, 12vw, 10.5rem)' }}
          >
            <span className="block font-black">Walter</span>
            <span className="block font-extralight italic text-ink/70">Darcie</span>
          </h1>
        </div>

        {/* Description + CTA */}
        <div className="animate-fade-up delay-200 max-w-lg">
          <p className="font-sans text-base leading-relaxed text-muted md:text-lg">
            Designer de produto com foco em produtos financeiros, crédito e collections.
            Atuo na internacionalização de BNPL e na redução de inadimplência em produtos
            de pagamento na América Latina.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="mailto:walter.darcie@yahoo.com.br"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent no-underline transition-opacity hover:opacity-70"
            >
              Falar comigo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
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

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-600 hidden md:flex items-end gap-3 self-end">
          <div className="h-16 w-px bg-gradient-to-b from-line/0 via-line to-line/0" />
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted/50">scroll</span>
        </div>
      </section>

      {/* ── Trajectory ───────────────────────────────────── */}
      <section className="animate-fade-up delay-300 border-t border-line pb-24 pt-16">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-serif text-3xl font-light text-ink md:text-4xl">
            Trajetória
          </h2>
          <span className="font-sans text-xs uppercase tracking-widest text-muted/60">
            +7 anos
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {trajectory.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className={`bg-white p-7 transition-shadow hover:shadow-md ${
                item.current ? 'border-l-2 border-accent' : 'border-l-2 border-transparent'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`font-sans text-xs font-semibold uppercase tracking-wider ${
                    item.current ? 'text-accent' : 'text-muted/60'
                  }`}
                >
                  {item.company}
                </span>
                {item.current && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 font-sans text-[10px] uppercase tracking-wider text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Atual
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold leading-tight text-ink">
                {item.role}
              </h3>
              <p className="mt-1 font-sans text-xs text-muted/60">{item.period}</p>
              <p className="mt-4 font-sans text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
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
              className="group block bg-white no-underline transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden bg-line">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.tags?.slice(0, 2).map((tag, i) => (
                    <span key={tag} className="flex items-center gap-2">
                      {i > 0 && <span className="text-line">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink md:text-[1.6rem]">
                  {project.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-6 text-muted line-clamp-3">
                  {project.summary}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
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
    </div>
  );
}
