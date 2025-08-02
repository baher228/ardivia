import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fabrikuk.com",
      },
      {
        protocol: "https",
        hostname: "www.belderbos.co.uk",
      },
    ],
  },
};

export default nextConfig;
