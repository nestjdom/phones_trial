import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
};

export default nextConfig;
