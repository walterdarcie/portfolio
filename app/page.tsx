import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-24">
      <section className="max-w-3xl space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">Product Designer</p>
        <h1 className="font-serif text-5xl leading-tight text-ink md:text-7xl">
          Walter Darcie
        </h1>
        <p className="max-w-2xl text-xl leading-9 text-muted md:text-2xl md:leading-10">
          Designer de produto com foco em decisões estratégicas, clareza de execução e
          experiência digital orientada a impacto de negócio.
        </p>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Atuo conectando design, produto e liderança para transformar problemas complexos em
          soluções viáveis, desejáveis e escaláveis.
        </p>
      </section>

      <section className="max-w-3xl border-t border-line pt-10">
        <h2 className="font-serif text-3xl text-ink md:text-4xl">Trajetória resumida</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
          <p>
            Construí minha atuação em Product Design em ambientes de produto digital com alta
            exigência de colaboração entre design, tecnologia e negócio.
          </p>
          <p>
            <strong className="font-medium text-ink">Empresas e contexto:</strong> [placeholder para
            inserir empresas, segmentos e períodos com precisão].
          </p>
          <p>
            <strong className="font-medium text-ink">Escopo de liderança:</strong> [placeholder para
            detalhar liderança de times, mentoria e governança de design].
          </p>
        </div>
      </section>

      <section className="border-t border-line pt-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Projetos</h2>
          <Link href="/projects" className="text-sm text-muted">
            Ver todos
          </Link>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <article key={project.slug} className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div className="max-w-3xl space-y-3">
                <h3 className="font-serif text-2xl text-ink md:text-3xl">
                  <Link href={`/projects/${project.slug}`} className="no-underline hover:underline">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-lg leading-8 text-muted">{project.summary}</p>
                <p className="text-sm uppercase tracking-wide text-muted">Impacto: {project.impact}</p>
              </div>
              <div className="text-sm text-muted">{project.date}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-3xl border-t border-line pt-10">
        <h2 className="font-serif text-3xl text-ink md:text-4xl">Contato</h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          Para conversas sobre design de produto, liderança ou novos desafios:
          <br />
          <a href="mailto:[seu-email]" className="text-ink">
            [seu-email]
          </a>
        </p>
      </section>
    </div>
  );
}
