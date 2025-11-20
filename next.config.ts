import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/api/payment/notification/:path*",
        headers: [
          { key: "Access-control-allow-origin", value: "*" },
          { key: "Access-control-allow-methods", value: "GET, POST" },
          {
            key: "Access-control-allow-headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length,Content-MD5,Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ki4nwbu0j00dtjng.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
