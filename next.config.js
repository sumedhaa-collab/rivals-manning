/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";

const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages can only serve static files, so only export statically
  // for that build. Vercel gets the full Next.js server runtime.
  ...(isGithubActions && {
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath ? `${basePath}/` : undefined,
    images: {
      unoptimized: true,
    },
  }),
};

module.exports = nextConfig;
