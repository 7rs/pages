import { getAliases } from "./scripts/alias.ts";
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import UnoCSS from "unocss/astro";
import compress from "astro-compress";
import compressor from "astro-compressor";

import tsconfig from "./tsconfig.json" with { type: "json" };

import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
  },
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: "dracula",
    },
  },
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
  },
  server: { host: true, port: 2999 },
  site: "https://7rs.dev",
  integrations: [
    mdx(),
    icon(),
    UnoCSS(),
    compress({
      HTML: {
        "html-minifier-terser": {
          sortClassName: false,
        },
      },
    }),
    compressor({ gzip: false, brotli: true }),
  ],
});
