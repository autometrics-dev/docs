import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  latex: true,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/configuring-prometheus/:slug*",
        destination: "/deploying-prometheus/:slug*",
        permanent: true,
      },
    ];
  },
};

export default withNextra(nextConfig);
