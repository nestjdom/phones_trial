import type { NextConfig } from "next";

const isDevelopment = process.env.BUILD_MODE === 'development';

const nextConfig: NextConfig = {
  output: 'standalone',
  
  images: {
    // Only disable optimization in development builds
    ...(isDevelopment && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'prueba-tecnica-api-tienda-moviles.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Only override defaults when explicitly in development build mode
  ...(isDevelopment && {
    swcMinify: false,
    compress: false,
  }),
};

export default nextConfig;
