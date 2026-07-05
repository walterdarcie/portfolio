import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { mdxComponents } from '@/components/mdx-components';
import { getAllProjects, getProjectBySlug, type ProjectFrontmatter } from '@/lib/projects';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.thumbnail }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const { content } = await compileMDX<ProjectFrontmatter>({
    source: project.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <article className={`pb-24 ${project.customHero ? 'pt-2' : 'pt-12'}`}>
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-sans text-sm text-muted no-underline transition-colors hover:text-ink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Todos os projetos
      </Link>

      {!project.customHero && (
        <>
          {/* Header */}
          <header className="mt-10 border-b border-line pb-12 animate-fade-up">
            <div className="flex flex-wrap items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
              {project.tags.slice(0, 2).map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  {i > 0 && <span className="text-line">·</span>}
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="animate-fade-up delay-100 mt-4 font-serif font-semibold leading-tight text-ink"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {project.title}
            </h1>

            <p className="animate-fade-up delay-200 mt-5 max-w-2xl font-sans text-lg leading-8 text-muted">
              {project.summary}
            </p>

            {/* Meta row */}
            <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted/50">Ano</span>
                <span className="font-sans text-sm font-medium text-ink">{project.date}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted/50">Impacto</span>
                <span className="font-sans text-sm font-medium text-accent">{project.impact}</span>
              </div>
            </div>
          </header>

          {/* Thumbnail — full viewport bleed */}
          <div
            className="animate-fade-up delay-400 my-12"
            style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-auto w-full"
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className="max-w-[860px] mx-auto prose-editorial">{content}</div>
    </article>
  );
}
