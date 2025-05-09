import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

import * as ImportX from "eslint-plugin-import-x";
import pluginPromise from "eslint-plugin-promise";
import nodePlugin from "eslint-plugin-n";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginAstro from "eslint-plugin-astro";
import oxlint from "eslint-plugin-oxlint";

export default tseslint.config(
  {
    ignores: [
      "**/*.{js,mjs,jsx,ts,tsx,config.mjs,config.ts}",
      "**/.astro/**",
      "**/.vscode/**",
      "**/.vscode/**",
      "**/dist/**",
      "**/node_modules/**",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ImportX.flatConfigs.recommended,
  ImportX.flatConfigs.typescript,
  pluginPromise.configs["flat/recommended"],
  nodePlugin.configs["flat/recommended-script"],
  jsxA11y.flatConfigs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...oxlint.configs["flat/recommended"],
  {
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          bun: true,
        }),
      ],
    },
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "n/no-unsupported-features/node-builtins": [
        "error",
        {
          version: ">=22.0.0",
        },
      ],
      'n/no-missing-import': 'off',
    },
  },
);
