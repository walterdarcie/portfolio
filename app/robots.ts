import type { MetadataRoute } from 'next';

// Crawl liberado de propósito: é lendo a página que o Google
// encontra a meta robots "noindex" e mantém o site fora do índice.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}
