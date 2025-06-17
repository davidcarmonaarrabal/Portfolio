import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // ¡NO pongas "i18n" aquí!
  experimental: {
    serverActions: true
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
