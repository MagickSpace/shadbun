import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import yaml from "@rollup/plugin-yaml";
import tina from "astro-tina";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  site: 'https://shadbun.vercel.app',
  integrations: [
    react(), 
    mdx(), 
    tailwind({
    applyBaseStyles: false,
  }), 
  sitemap({
    entryLimit: 10000
  }), 
  partytown(),
  tina()]
});