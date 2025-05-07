import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['printeriorstudios.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'printeriorstudios.com',
      },
    ],
  },
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
