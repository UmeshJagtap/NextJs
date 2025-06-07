import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'dummyjson.com',
      'encrypted-tbn0.gstatic.com',
    ],
  },
};

export default nextConfig;
