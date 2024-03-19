import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import qwikdev from '@qwikdev/astro';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import purgecss from 'astro-purgecss';
import Compress from 'astro-compress';
import icon from 'astro-icon';

import path from 'path'

// https://astro.build/config
export default defineConfig({
  site: 'https://7rs.dev',
  server: {
    host: true,
    port: 2999
  },
  scopedStyleStrategy: "attribute",
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    fallback: {
      en: 'ja'
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },
  integrations: [mdx(), svelte(), qwikdev(), robotsTxt(), sitemap(), pagefind(),
  // purgecss(),
    Compress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true
    }), icon({
      iconDir: 'src/icons',
      include: {
        materialSymbols: ['wb-sunny-outline', 'search', 'copyright-outline', 'menu', 'package-2-outline-sharp']
      }
    })],
  vite: {
    resolve: {
      alias: {
        '@lib': path.resolve('./scripts/lib'),
      }
    }
  }
});
