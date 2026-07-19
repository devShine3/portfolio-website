import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/skills", destination: "/about", permanent: true },
      { source: "/education", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
