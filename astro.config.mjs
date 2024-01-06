import { defineConfig, passthroughImageService } from 'astro/config';
import Compress from "astro-compress";
import mdx from "@astrojs/mdx";

// https://github.com/shikijs/shiki/blob/main/docs/languages.md
// https://github.com/shikijs/shiki/blob/main/docs/themes.md
import purgecss from "astro-purgecss";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [Compress({
    CSS: true,
    HTML: true,
    Image: false,
    JavaScript: true,
    SVG: false
  }), mdx(), purgecss(), svelte()],
  markdown: {
    shikiConfig: {
      theme: "dracula"
    }
  },
  image: {
    service: passthroughImageService()
  },
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});