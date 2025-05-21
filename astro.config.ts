import { getAliases } from "./scripts/alias.ts";
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import UnoCSS from "unocss/astro";
import compress from "astro-compress";
import compressor from "astro-compressor";

import tsconfig from "./tsconfig.json" with { type: "json" };

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
  },
  markdown: {
    gfm: true,
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
    expressiveCode(),
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
