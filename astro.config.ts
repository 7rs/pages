import { defineConfig } from 'astro/config';
import path from 'node:path';

import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  server: { host: true, port: 2999 },
  scopedStyleStrategy: 'attribute',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    fallback: {
      en: 'ja',
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  site: 'https://7rs.dev',
  integrations: [svelte({ emitCss: false }), mdx(), icon({ iconDir: 'src/icons' }), robotsTxt(), sitemap(), purgecss()],
  // https://vitejs.dev/config/
  vite: {
    resolve: {
      alias: {
        '@lib': path.resolve('./scripts/lib'),
      },
    },
  },
});
