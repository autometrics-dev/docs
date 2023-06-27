import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./src/components/Header/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  darkMode: false,
  banner: {
    key: "cli-release",
    text: (
      <a href="/local-development" target="_blank" rel="noreferrer">
        Run Prometheus locally and validate your metrics with the Autometrics
        CLI and Explorer 📈
      </a>
    ),
  },
  nextThemes: {
    forcedTheme: "light",
  },
  project: {
    link: "https://github.com/autometrics-dev",
  },
  toc: {
    float: true,
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
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/AutometricsFavicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/AutometricsFavicon-32x32.png"
      />
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
  primaryHue: 269,
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
