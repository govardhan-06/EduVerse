import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fotoyxjncpaxhjzckizf.supabase.co',
        pathname: '/storage/v1/object/public/assets/spaces/*',
      },
    ],
  },
};

export default nextConfig;
