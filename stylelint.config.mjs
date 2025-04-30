/** @type {import('stylelint').Config} */

export default {
  extends: [
    "stylelint-config-html",
    "stylelint-config-html/svelte",
    "stylelint-config-html/astro"
  ],
  customSyntax: "postcss-html"
};
