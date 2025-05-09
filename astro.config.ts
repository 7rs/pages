import { getAliases } from "./scripts/alias.ts";
import { defineConfig } from "astro/config";
import UnoCSS from 'unocss/astro'

import tsconfig from "./tsconfig.json" with { type: "json" };

import icon from "astro-icon";

export default defineConfig({
  server: { host: true, port: 2999 },
  integrations: [UnoCSS(), icon()],
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
  },
  site: "https://7rs.dev",
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: "dracula",
    },
  },
});
