import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Cases de Product Design com foco em impacto, processo e tomada de decisão.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="pb-24 pt-12">
      <div className="animate-fade-up mb-12 max-w-2xl">
        <p className="mb-4 font-sans text-xs font-light uppercase tracking-[0.25em] text-muted">
          Seleção de trabalhos
        </p>
        <h1
          className="font-serif font-light leading-tight text-ink"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Projetos
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">
          Cases de Product Design com foco em impacto, processo e tomada de decisão.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <AnimateOnScroll key={project.slug} delay={i * 80}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col bg-white no-underline transition-shadow hover:shadow-xl h-full"
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
                    {project.tags?.slice(0, 2).map((tag, j) => (
                      <span key={tag} className="flex items-center gap-2">
                        {j > 0 && <span className="text-line">·</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink md:text-[1.65rem]">
                    {project.title}
                  </h2>
                  <p className="mt-3 font-sans text-sm leading-6 text-muted line-clamp-3">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-auto border-t border-line pt-5 flex items-center justify-between">
                  <span className="font-sans text-sm text-muted/60">{project.date}</span>
                  <span className="font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-colors group-hover:text-accent">
                    Ver case →
                  </span>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
