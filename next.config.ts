import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in `out/`, deployed to Cloudflare Pages.
  output: "export",
  // /en/ -> out/en/index.html, which static hosts serve without rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // One 404 page for the whole site, since the root layout lives under [lang].
    globalNotFound: true,
  },
  turbopack: {
    // A stray package-lock.json in the home folder would otherwise be picked as the root.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
