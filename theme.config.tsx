import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./src/components/Header/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  darkMode: false,
  nextThemes: {
    forcedTheme: "light",
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
  head: (
    <>
      <meta
        property="og:title"
        content="Autometrics - Developer-first Observability Framework"
      />
      <meta
        property="og:description"
        content="Autometrics is a developer-first observability framework for understanding the error rate, response time, and  production usage of any function in your code. Implemented in Rust, Typescript, Golang and Python. Built on Open Telemetry and Prometheus."
      />
    </>
  ),
  primaryHue: 240,
  docsRepositoryBase: "https://github.com/autometrics-dev/docs",
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
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
