/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    SERVER_URL:'https://antennat2-api.online',
    STRIPE_PUBLIC_KEY:"pk_test_51L6E7PHPQFJcZwWjgM8ILkVPeIaezesvdOPyQSELLRk55YgwI4i2po0ZxHpXvfpQ8XK3RXENtWcA24VR4yXOkPbE00C8iGmsPd",
    ANALYZE:"false",
  },
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source:'/public/robots.txt',
        destination: '/api/robots'
      }
    ]
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});
module.exports = nextConfig
