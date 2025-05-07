/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['printeriorstudios.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'printeriorstudios.com',
            },
        ],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        });
        return config;
    },
    experimental: {
        output: 'export'
    },
    output: 'standalone',
    staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;
