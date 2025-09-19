/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Type checking is handled by your IDE and build process
    ignoreBuildErrors: false,
  },
  eslint: {
    // ESLint is handled by your IDE and build process
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizeCss: false,
    typedRoutes: true, // Enable typed routes for better type safety
  },
  // Configure headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig