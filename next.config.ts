import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт в папку out/ — подходит и для GitHub Pages, и для nginx в Docker
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
