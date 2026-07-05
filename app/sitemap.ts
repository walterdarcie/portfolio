import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/projects', '/sobre', '/contato'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectPages = getAllProjects().map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...projectPages];
}
