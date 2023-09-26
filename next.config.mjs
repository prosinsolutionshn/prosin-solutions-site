import { Time } from '@sapphire/duration';
import withNextTranslate from 'next-translate-plugin';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  cleanDistDir: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    minimumCacheTTL: Time.Hour * 12,
  },
  poweredByHeader: false,
  swcMinify: true,
};

export default withNextTranslate(nextConfig);
