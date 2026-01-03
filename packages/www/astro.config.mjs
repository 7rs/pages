import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';
import PagesUI from '@7rs/pages-ui/integration';
import { svgoOptions, playformCompressOptions, compressorOption, getAliases } from '@7rs/pages-config';

import tsconfig from './tsconfig.json' with { type: 'json' };

export default defineConfig({
  vite: {
    resolve: { alias: getAliases(tsconfig.compilerOptions.paths) },
    plugins: [tailwindcss()],
  },
  integrations: [
    PagesUI(),
    svelte(),
    icon(svgoOptions),
    playformCompress(playformCompressOptions),
    compressor(compressorOption),
  ],
});
