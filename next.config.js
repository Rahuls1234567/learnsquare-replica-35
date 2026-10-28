/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable in dev: React Strict Mode renders every component TWICE,
    // doubling all DB queries and making dev 2x slower.
    reactStrictMode: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    experimental: {
        // Tree-shake heavy UI libraries so only used icons/components are bundled
        optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-dialog'],
    },
    async redirects() {
        return [
            // www duplicates the site: send every www URL to the same path on the bare domain.
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.learnsquare.co' }],
                destination: 'https://learnsquare.co/:path*',
                statusCode: 301,
            },
            // Retired products: send old links to the home page instead of a 404.
            { source: '/myskillforge/:path*', destination: '/', statusCode: 301 },
            { source: '/test-prep-pro/:path*', destination: '/', statusCode: 301 },
        ];
    },
};

export default nextConfig;
