/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  cleanDistDir: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',

        protocol: 'https',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  poweredByHeader: false,
  swcMinify: true,
};

export default nextConfig;
