import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import yaml from '@rollup/plugin-yaml'
import tina from 'astro-tina'
import million from "million/compiler";
import partytown from '@astrojs/partytown'
import { remarkReadingTime } from './src/utils/readTime.ts'
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [million.vite({ mode: "react", server: true, auto: {
      threshold: 0.05,
      skip: ["useBadHook", /badVariable/g],
    }, }), yaml()],
  },
  site: 'https://shadbun.vercel.app',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      drafts: true,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      entryLimit: 10000,
    }),
    partytown(),
    tina(),
  ],
})
