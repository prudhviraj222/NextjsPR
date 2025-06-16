import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['printeriorstudios.com', 'github.com', 'githubusercontent.com', 'raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'printeriorstudios.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
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
