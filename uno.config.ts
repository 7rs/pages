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
  extendTheme(theme) {
    /* { Default breakpoints
      sm: '40rem', "640px"
      md: '48rem', "768px"
      lg: '64rem', "1024px"
      xl: '80rem', "1280px"
      '2xl': '96rem' "1536px"
    } */

    const extendSizes = {
      ...theme.breakpoint,
      "4xs": "12rem", // 192px
      "3xs": "16rem", // 256px
      "2xs": "22rem", // 348px
      xs: "30rem", // 480px
      sm: "40rem", // 640px
      md: "48rem", // 768px
      lg: "56rem", // 896px
      xl: "60rem", // 960px
      "2xl": "64rem", // 1024px
      "sb-min": "12rem", // 192px
      "sb-max": "18rem", // 288px
      "sb-display": "60rem" // 960px
    };
    theme.breakpoint = {
      ...extendSizes
    };
    theme.container = {
      ...extendSizes
    };
    theme.breakpoints = theme.breakpoint;
  },
  rules: [...generateDaisyUIColorRules(DAISYUI_COLOR_PROPERTY_MAPS, DAISYUI_COLORS)],
  shortcuts: {
    "header-icon": "scale-125 color-primary",
    "article-grid": "w-full grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2",

    "header-layout":
      "grid-area-[header] sticky top-0 z-900 | w-full | flex justify-center bg-[var(--color-base-100)]/50 backdrop-blur-md backdrop-brightness-125 shadow-sm",
    "header-body": "navbar | px-4 max-w-lg",
    "header-actions": "flex-none flex gap-x-4 text-2xl",

    "footer-layout": "grid-area-[footer] w-full | flex justify-center | bg-base-100",
    "footer-body": "py-10 px-4 sm:px-0 max-w-lg w-full | flex flex-col gap-y-8 | text-base",
    "footer-navs": "w-full flex flex-wrap justify-center gap-x-8",
    "footer-socials": "px-4 sm:px-0 w-full | flex flex-wrap justify-around sm:justify-center sm:gap-x-8",
    "footer-copyright": "w-full inline text-center"
  }
});
