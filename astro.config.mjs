import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [, compress(), mdx()]
});