const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/Illuminators_Path" : undefined,
  assetPrefix: isGithubPages ? "/Illuminators_Path/" : undefined,
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
