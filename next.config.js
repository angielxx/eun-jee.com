const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'lh3.googleusercontent.com',
      'tech.socarcorp.kr',
      'nextjs.org',
      'velog.velcdn.com',
      'miro.medium.com',
      'media.crystallize.com',
    ],
  },
};

module.exports = withContentlayer(nextConfig);
