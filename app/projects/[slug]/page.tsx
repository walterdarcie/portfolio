import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { mdxComponents } from '@/components/mdx-components';
import { getAllProjects, getProjectBySlug, type ProjectFrontmatter } from '@/lib/projects';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
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
    <article className="max-w-4xl space-y-10">
      <header className="space-y-5 border-b border-line pb-10">
        <p className="text-sm uppercase tracking-wide text-muted">Case de Product Design</p>
        <h1 className="font-serif text-4xl leading-tight md:text-6xl">{project.title}</h1>
        <p className="text-xl leading-9 text-muted">{project.summary}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <span>{project.date}</span>
          <span>Impacto: {project.impact}</span>
          <span>{project.tags.join(' · ')}</span>
        </div>
      </header>
      <div className="prose-editorial">{content}</div>
    </article>
  );
}
