/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "it", "ro"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig;