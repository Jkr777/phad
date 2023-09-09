/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  i18n: {
    locales: ["en", "it", "ro"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig;