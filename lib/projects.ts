import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  date: string;
  order: number;
  impact: string;
  tags: string[];
  thumbnail: string;
  customHero?: boolean;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDirectory).filter((file) => file.endsWith('.mdx'));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, file);
      const source = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(source);

      return {
        slug,
        content,
        ...(data as ProjectFrontmatter),
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
