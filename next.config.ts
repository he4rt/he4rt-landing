import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
};

export default nextConfig;
