/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,

  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack5: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  future: {
    webpack5: true,
  },
}

module.exports = nextConfig
