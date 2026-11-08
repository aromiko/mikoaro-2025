import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compile-time checking of <Link href> and router.push() against real routes.
  typedRoutes: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
