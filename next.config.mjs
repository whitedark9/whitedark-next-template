/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lodash"], // node_modules package name
  },
};

export default nextConfig;
