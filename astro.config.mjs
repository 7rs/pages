import { defineConfig, passthroughImageService } from 'astro/config';
import Compress from "astro-compress";
import mdx from "@astrojs/mdx";
import purgecss from "astro-purgecss";
import svelte from "@astrojs/svelte";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // https://astro.build/integrations/
  integrations: [Compress({
    CSS: true,
    HTML: true,
    Image: false,
    JavaScript: true,
    SVG: true,
  }), mdx(), purgecss(), svelte(), robotsTxt(), sitemap(), icon({
    iconDir: "src/icons",
    include: {
      simpleIcons: [
        "youtube",
        "twitch",
        "tiktok",
        "pinterest",
        "applemusic",
        "github",
        "gitlab",
        "internetarchive",
        "patreon",
        "paypal",
        "reddit",
        "zenn",
        "qiita",
        "x",
        "mastodon",
        "discord",
        "telegram"
      ],
      materialSymbols: [
        "wb-sunny-outline",
        "search",
        "copyright-outline",
        "menu",
      ],
      cib: [
        "creative-commons-pd",
        "creative-commons-zero"
      ],
      octicon: [
        "law-16",
      ]
    }
  }
  )],
  // https://docs.astro.build/guides/images/
  image: {
    service: passthroughImageService()
  },
  // https://docs.astro.build/guides/internationalization/
  // https://docs.astro.build/recipes/i18n/
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: "ja",
    }
  },
  // https://docs.astro.build/guides/markdown-content/
  // https://github.com/shikijs/shiki/blob/main/docs/languages.md
  // https://github.com/shikijs/shiki/blob/main/docs/themes.md
  markdown: {
    shikiConfig: {
      theme: "dracula"
    }
  },
  // https://github.com/alextim/astro-lib
  // https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt
  site: "https://7rs.dev"
});
