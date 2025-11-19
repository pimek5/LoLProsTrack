import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/LoLProsTrack',
  assetPrefix: '/LoLProsTrack/',
};

export default nextConfig;
