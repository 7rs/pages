import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import qwikdev from '@qwikdev/astro';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import purgecss from 'astro-purgecss';
import Compress from 'astro-compress';
import icon from 'astro-icon';

import { vitePreprocess } from '@astrojs/svelte';



import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://7rs.dev',
  server: {
    host: true,
    port: 2999,
  },
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
  integrations: [
    mdx(),
    svelte({ preprocess: vitePreprocess() }),
    qwikdev(),
    robotsTxt(),
    sitemap(),
    pagefind(),
    purgecss(),
    Compress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
    icon({
      iconDir: 'src/icons',
      include: {
        materialSymbols: [
          'search',
          'menu',
          'upload-sharp',
          'update',
          'dark-mode',
          'light-mode-outline',
          'comments-outline',
        ],
        mdi: ['language', 'share-outline', 'comments-outline', 'ads-off', 'money-off'],
        cib: ['creative-commons-zero'],
        simpleIcons: [
          'discord',
          'github',
          'python',
          'reddit',
          'mastodon',
          'bluesky',
          'hatenabookmark',
          'youtube',
          'zenn',
          'patreon',
          'rss',
          'pocket',
          'x',
        ],
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@lib': path.resolve('./scripts/lib'),
      },
    },
  },
});
