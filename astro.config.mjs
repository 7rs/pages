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

export default defineConfig({
  site: 'https://7rs.dev',
  /*
    https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
    https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=Unassigned
    https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

    - 2998: Real Secure
    - 2999 RemoteWare Unassigned
    - 3000: HBCI, RemoteWare Client (Ruby on Rails)
    - 4000: Terabase, ICQ, Diablo II
    - 4321: Remote Who Is (Astro default)
    - 5173-5189: Unassigned (5173: Vite)
    - 8080: HTTP Alternate, Apache Tomcat
    - 8888: NewsEDGE server TCP, HyperVM (Known Unauthorized Use)
  */
  server: {
    host: true,
    port: 2999,
  },
  // vite: {
  //   build: {
  //     cssMinify: 'lightningcss',
  //   }
  // },
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
  // image: {
  //   service: passthroughImageService()
  // },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  // I'm not sure whether why postcss remove comments.
  // I don't wanna disable purgecss...
  integrations: [
    mdx(),
    svelte(),
    qwikdev(),
    robotsTxt(),
    sitemap(),
    pagefind(), // purgecss(),
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
        simpleIcons: [
          'porkbun',
          'cloudflarepages',
          'powershell',
          'purgecss',
          'googlefonts',
          'iconify',
          'unsplash',
          'sharp',
          'pagespeedinsights',
        ],
        Logos: [
          'cloudflare',
          'git',
          'github',
          'sublimetext-icon',
          'nodejs',
          'pnpm',
          'microsoft-windows',
          'firefox',
          'chrome',
          'microsoft-edge',
          'html-5',
          'stylus',
          'postcss',
          'javascript',
          'typescript',
          'markdown',
          'vitejs',
          'astro',
          'svelte',
          'qwik',
          'zod',
          'autoprefixer',
          'prettier',
          'lighthouse',
          'editorconfig',
        ],
        materialSymbols: ['wb-sunny-outline', 'search', 'copyright-outline', 'menu', 'package-2-outline-sharp'],
        cib: ['creative-commons-pd', 'creative-commons-zero'],
        octicon: ['law-16'],
      },
    }),
  ],
});
