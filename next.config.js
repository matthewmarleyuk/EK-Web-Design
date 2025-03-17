/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/EK-Web-Design' : '',
  // Disable image optimization since it's not supported with output: 'export'
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 