import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from "./src/components/Header/Logo"

const config: DocsThemeConfig = {
  logo: <Logo />,
	darkMode: false,
  project: {
    link: 'https://github.com/autometrics-dev',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/autometrics-dev/docs',
  footer: {
    text: 'Autometrics',
  },
}

export default config
