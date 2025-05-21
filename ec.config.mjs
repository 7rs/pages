import { defineEcConfig } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  useStyleReset: false,
  styleOverrides: {
    codeFontFamily: "var(--font-mono)",
  },
  plugins: [pluginLineNumbers()],
  themes: ["dracula", "github-light"],
  defaultProps: {
    showLineNumbers: false,
  },
});
