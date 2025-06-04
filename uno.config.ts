import { defineConfig, transformerDirectives, type Rule } from "unocss";
import { createRemToPxProcessor } from "@unocss/preset-wind4/utils";
import presetWind4 from "@unocss/preset-wind4";
import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";

export const LIGHT_THEME = "emerald";
export const DARK_THEME = "dracula";

const DAISYUI_COLORS = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "base",
  "base-100",
  "base-200",
  "base-300",
  "info",
  "success",
  "warning",
  "error"
];
type PropertyMap = [string[], string];
const DAISYUI_COLOR_PROPERTY_MAPS: PropertyMap[] = [
  [["text", "color"], "color"],
  [["bg"], "background-color"],
  [["border", "divide"], "border-color"],
  [["from"], "--tw-gradient-from"],
  [["via"], "--tw-gradient-via"],
  [["to"], "--tw-gradient-to"],
  [["ring"], "--tw-ring-color"],
  [["fill"], "fill"],
  [["stroke"], "stroke"],
  [["shadow"], "--tw-shadow-color"],
  [["outline"], "outline-color"],
  [["accent"], "accent-color"],
  [["caret"], "caret-color"],
  [["decoration"], "text-decoration-color"],
  [["placeholder"], "--tw-placeholder-color"],
  [["ring-offset"], "--tw-ring-offset-color"]
];

function generateDaisyUIColorRules(propertyMaps: PropertyMap[], colorNames: string[]) {
  const rules: Rule<Record<string, unknown>>[] = [];

  for (const propertyMap of propertyMaps) {
    for (const propertyKey of propertyMap[0]) {
      for (const colorName of colorNames) {
        if (colorName !== "base") {
          rules.push([`${propertyKey}-${colorName}`, { [propertyMap[1]]: `var(--color-${colorName})` }]);
        }

        if (!(colorName.startsWith("base-") && colorName.endsWith("00"))) {
          rules.push([
            `${propertyKey}-${colorName}-content`,
            { [propertyMap[1]]: `var(--color-${colorName}-content)` }
          ]);
        }
      }
    }
  }

  return rules;
}

function getDaisyUITheme(lightTheme: string, darkTheme?: string) {
  return {
    styled: false,
    themes: darkTheme == null ? [`${lightTheme} --default`] : [`${lightTheme} --default`, `${darkTheme} --prefersdark`]
  };
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
      ...getDaisyUITheme(LIGHT_THEME, DARK_THEME)
    })
  ],
  transformers: [transformerDirectives()],
  rules: [...generateDaisyUIColorRules(DAISYUI_COLOR_PROPERTY_MAPS, DAISYUI_COLORS)],
  shortcuts: {
    "header-icon": "scale-125 color-primary"
  }
});
