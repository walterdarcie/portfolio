import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="font-serif text-4xl md:text-6xl">Projetos</h1>
        <p className="text-lg leading-8 text-muted">
          Cases de Product Design com foco em impacto, processo e tomada de decisão.
        </p>
      </header>
      <div className="divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <article key={project.slug} className="py-8">
            <h2 className="font-serif text-2xl md:text-3xl">
              <Link href={`/projects/${project.slug}`} className="no-underline hover:underline">
                {project.title}
              </Link>
            </h2>
            <p className="mt-2 max-w-3xl text-lg leading-8 text-muted">{project.summary}</p>
            <p className="mt-3 text-sm text-muted">{project.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
