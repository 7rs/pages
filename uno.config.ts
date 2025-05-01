import { defineConfig, type Rule } from "unocss";
import presetWind4 from "@unocss/preset-wind4";
import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";

export const LIGHT_THEME = "emerald";
export const DARK_THEME = "dracula";

function convertDaisyColorsToUnoRules(names: string[]) {
  const rules: Rule<Record<string, unknown>>[] = [];

  for (const name of names) {
    rules.push([`color-${name}`, { color: `var(--color-${name})` }]);
    rules.push([`bg-${name}`, { "background-color": `var(--color-${name})` }]);
  }

  return rules;
}

export default defineConfig({
  presets: [
    presetWind4(),
    presetDaisy({
      styled: false,
      themes: [`${LIGHT_THEME} --default`, `${DARK_THEME} --prefersdark`]
    })
  ],
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
  ])
});
