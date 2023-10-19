/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        pathname: '/images/ysyoo719/profile/**',
      },
    ],
  },
};

module.exports = nextConfig;
