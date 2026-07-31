import type { NextConfig } from "next";

// Hostinger static upload: `npm run build:static`
// Vercel (needs /api/contact): `npm run build` — do not use export there
const isStaticExport =
  process.env.STATIC_EXPORT === "true" ||
  process.env.npm_lifecycle_event === "build:static";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
