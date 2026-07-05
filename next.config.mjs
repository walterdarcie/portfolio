/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/projects/primeiro-case',
        destination: '/projects/health-analytics',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
