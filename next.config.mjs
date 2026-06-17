/** @type {import('next').NextConfig} */

// export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig = {
  /* config options here */
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
