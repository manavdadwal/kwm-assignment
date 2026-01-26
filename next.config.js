/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false, // Enable image optimization
  },
  // For static export, use: output: 'export'
  // For API routes and SSR, remove output config
  // output: 'export', // Uncomment for static export only
}

module.exports = nextConfig
