export const siteName = 'Walter Darcie';
export const siteTitle = 'Walter Darcie · Staff Product Designer';
export const siteDescription =
  'Portfólio de Product Design com foco em produtos financeiros, crédito e collections na América Latina.';

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');
