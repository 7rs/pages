import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import tsParser from "@typescript-eslint/parser";
import oxlint from 'eslint-plugin-oxlint';
import eslintPluginAstro from 'eslint-plugin-astro';
import svelte from 'eslint-plugin-svelte';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...oxlint.configs['flat/recommended'],
  ...eslintPluginAstro.configs.recommended,
  ...svelte.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  }
);
