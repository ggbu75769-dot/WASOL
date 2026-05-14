import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "WASOL";
const basePath = isGithubPages ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  assetPrefix: basePath,
  basePath,
  devIndicators: false,
  images: {
    unoptimized: isGithubPages,
  },
  output: isGithubPages ? "export" : undefined,
  poweredByHeader: false,
  trailingSlash: isGithubPages,
};

export default nextConfig;
