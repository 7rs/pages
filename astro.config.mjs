import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), tailwind(), compress()]
});