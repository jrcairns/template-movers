/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'],
    },
    async redirects() {
        return [
            {
                source: '/robots.txt',
                destination: '/robots',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
