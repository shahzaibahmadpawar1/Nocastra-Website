import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  trailingSlash: true, // Creates clean folders for sub-pages on cPanel
  images: {
    unoptimized: true, // Disables the Node.js dynamic image optimizer
  },
};

export default nextConfig;
