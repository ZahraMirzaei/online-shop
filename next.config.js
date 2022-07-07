/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  use: {
    loader: "url-loader",
    options: {
      limit: 100000,
      name: "[name].[ext]",
    },
  },
};

module.exports = nextConfig;
