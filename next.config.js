/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Images configuration
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 