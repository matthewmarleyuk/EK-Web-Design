/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/EK-Web-Design' : '',
  // Configure images for both local development and production
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required when using output: 'export'
  },
}

module.exports = nextConfig 