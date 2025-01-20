import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  latex: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "lodash-es": "lodash",
    };
    return config;
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default withNextra(nextConfig);
