/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pravatar.cc", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
