import { defineConfig, transformerDirectives, type Rule } from "unocss";
import { createRemToPxProcessor } from "@unocss/preset-wind4/utils";
import presetWind4 from "@unocss/preset-wind4";
import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";

export const LIGHT_THEME = "emerald";
export const DARK_THEME = "dracula";

function convertDaisyColorsToUnoRules(names: string[]) {
  const rules: Rule<Record<string, unknown>>[] = [];

  for (const name of names) {
    rules.push([`color-${name}`, { color: `var(--color-${name})` }]);
    rules.push([`bg-${name}`, { "background-color": `var(--color-${name})` }]);

    if (!(name.startsWith("base") && name.endsWith("00"))) {
      rules.push([`color-${name}-content`, { color: `var(--color-${name})-content` }]);
    }
  }

  return rules;
}

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        theme: {
          process: createRemToPxProcessor()
        }
      }
    }),
    presetDaisy({
      styled: false,
      themes: [`${LIGHT_THEME} --default`, `${DARK_THEME} --prefersdark`]
    })
  ],
  transformers: [transformerDirectives()],
  rules: convertDaisyColorsToUnoRules([
    "primary",
    "secondary",
    "accent",
    "neutral",
    "base-100",
    "base-200",
    "base-300",
    "info",
    "success",
    "warning",
    "error"
  ]),
  shortcuts: {
    "header-icon": "scale-125 color-primary"
  }
});
