import { defineConfig } from 'unocss';
import presetWind4 from "@unocss/preset-wind4";
import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";

export default defineConfig({
  presets: [presetDaisy(), presetWind4()],
});
