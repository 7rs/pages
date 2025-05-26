import { getAliases } from "./scripts/alias.ts";
import { defineConfig } from "astro/config";

// Astro Integrations
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";
import compress from "astro-compress";
import compressor from "astro-compressor";
import d2 from "astro-d2";

// remark/rehype plugins
import emoji from "remark-emoji";
import mdxMermaid from "mdx-mermaid";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import tsconfig from "./tsconfig.json" with { type: "json" };

export default defineConfig({
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
    domains: ["cdn.jsdelivr.net"],
  },
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid", "d2"],
    },
    gfm: true,
    remarkPlugins: [[emoji, { accessible: true }], [mdxMermaid, { output: "svg" }], remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
  },
  server: { host: true, port: 2999 },
  site: "https://7rs.dev",
  integrations: [
    expressiveCode(),
    d2(),
    mdx(),
    icon({
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "convertPathData",
            params: {
              floatPrecision: 2,
            },
          },
        ],
      },
    }),
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
