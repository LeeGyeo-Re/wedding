import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/wedding-invitation',
  // assetPrefix: '/wedding-invitation/', // Not typically needed with basePath for Next.js 13+ App Router static exports for GH Pages.
  // reactStrictMode: true, // This is often a default, can be explicitly set if needed.
};

export default nextConfig;
