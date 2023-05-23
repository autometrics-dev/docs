import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./src/components/Header/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  darkMode: false,
  nextThemes: {
    forcedTheme: "light"
  },
  project: {
    link: "https://github.com/autometrics-dev",
  },
  chat: {
    link: "https://discord.gg/MJr7pYzZQ4",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Autometrics",
    };
  },
  primaryHue: 240,
  docsRepositoryBase: "https://github.com/autometrics-dev/docs",
  sidebar: {
    toggleButton: true,
  },
  footer: {
    text: (
      <span>
        MIT/Apache-2.0 {new Date().getFullYear()} ©{" "}
        <a href="https://autometrics.dev">Autometrics</a>
      </span>
    ),
  },
};

export default config;
