/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable in dev: React Strict Mode renders every component TWICE,
    // doubling all DB queries and making dev 2x slower.
    reactStrictMode: false,
    images: {
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
};

export default nextConfig;
