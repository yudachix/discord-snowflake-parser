import bundleAnalyzer from "@next/bundle-analyzer";

const BASE_PATH = process.env.BASE_PATH;

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "1"
});

/**
 * @type {import("next").NextConfig}
 */
export default withBundleAnalyzer({
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH
});
