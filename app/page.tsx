import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-24">
      <section className="max-w-3xl space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">Lead Product Designer</p>
        <h1 className="font-serif text-5xl leading-tight text-ink md:text-7xl">Walter Darcie</h1>
        <p className="max-w-2xl text-xl leading-9 text-muted md:text-2xl md:leading-10">
          Designer de produto com atuação em healthtech B2B e B2C, orientado por impacto de
          negócio, adoção de produto e clareza de decisão.
        </p>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Conecto estratégia, pesquisa e execução para transformar dados complexos em experiências
          que apoiam decisões mais inteligentes de clientes e times internos.
        </p>
      </section>

      <section className="max-w-3xl border-t border-line pt-10">
        <h2 className="font-serif text-3xl text-ink md:text-4xl">Trajetória resumida</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
          <p>
            Minha trajetória combina atuação hands-on e liderança de design em produtos digitais com
            alto grau de complexidade operacional.
          </p>
          <p>
            Na Pipo Saúde, liderei iniciativas de Product Design voltadas à evolução da experiência
            de análise de dados de saúde para RH, aproximando uso do produto, narrativa estratégica
            e retenção.
          </p>
          <p>
            Atuo definindo direção de produto com PM e Engenharia, conduzindo discovery, validação e
            desdobramento tático até a implementação.
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
