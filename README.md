[cc0]: https://creativecommons.org/publicdomain/zero/1.0/  

[deepl]: https://www.deepl.com/translator
[google-translator]: https://translate.google.com
[chatgpt]: https://chat.openai.com/
[vscode]: https://code.visualstudio.com/
[stylus]: https://stylus-lang.com/

<picture>
  <source srcset=".github/assets/banner.avif" />
  <source srcset=".github/assets/banner.webp" />
  <img src=".github/assets/banner.jpg" alt="banner" />
</picture>

# [Pages](https://7rs.dev/)  

  **Fast** and **simple design** website.  

  [![LICENSE](https://img.shields.io/github/license/7rs/pages?style=flat-square&labelColor=black&color=purple)](https://github.com/7rs/pages/blob/main/LICENSE)
  [![Activity](https://img.shields.io/github/commit-activity/t/7rs/pages?style=flat-square&labelColor=black&color=blue)](https://github.com/7rs/pages/commits/main)
  [![Last commit](https://img.shields.io/github/last-commit/7rs/pages/main?style=flat-square&label=%20&color=blue)](https://github.com/7rs/pages/commits/main)
  [![issues](https://img.shields.io/github/issues-raw/7rs/pages?style=flat-square&label=issues&labelColor=black&color=red)](https://github.com/7rs/pages/issues)
  [![closed issues](https://img.shields.io/github/issues-closed-raw/7rs/pages?style=flat-square&label=%20&color=green)](https://github.com/7rs/pages/issues?q=is%3Aissue+is%3Aclosed)

## Features  

- [Open source](https://wikipedia.org/wiki/FLOSS).
- Targeting a score of 90+ on [PageSpeed Insights](https://pagespeed.web.dev/).  
- Compatible with many browsers (FireFox, Chrome, Safari, etc.).  
- [Supports dark mode](https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-color-scheme).  
- [Supports i18n](https://wikipedia.org/wiki/Internationalization_and_localization) (Japanese and English).  
- Easy setup for [VSCode][vscode].  
- Reusable components.  
- Styling without classes [(Scoped CSS).](https://docs.astro.build/en/guides/styling/#scoped-styles)  
- Separations of markups and styles.  
- [Optimization SEO.](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)  

and using:  

- [Astro](https://astro.build/)  
  - [Stylus](https://docs.astro.build/en/guides/styling/#stylus)  
  - [Sharp](https://docs.astro.build/en/guides/images/#default-image-service)  
  - [PostCSS](https://docs.astro.build/en/guides/styling/#postcss)  
    - [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)  
    - [autoprefixer](https://github.com/postcss/autoprefixer)  
  - [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)  
  - [@astrojs/svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/)  
  - [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)  
  - [astro-compress](https://github.com/astro-community/AstroCompress)  
  - [astro-icon](https://www.astroicon.dev)  
  - [astro-purgecss](https://github.com/codiume/orbit/tree/main/packages/astro-purgecss)  
  - [astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt)  
- [FFmpeg](https://ffmpeg.org/)  
- [sharp-cli](https://github.com/vseventer/sharp-cli)  

What are written here are **goals**, **not necessarily** implemented.  

## Benchmark (Score)  

| Mobile | Desktop |
| -: | -: |
| 99 | 100 |  

> [PageSpeed Insights (2024-01-13 21:25:12)](https://pagespeed.web.dev/analysis/https-7rs-dev/x0q7ws96dt?form_factor=desktop)

## Requirement  

  | Package | Node | Version |
  |-|-|-|
  | [Astro](https://www.npmjs.com/package/astro) | ![version](https://img.shields.io/node/v/astro?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/astro?style=flat-square&label=%20) |
  | [Sharp](https://www.npmjs.com/package/sharp) | ![version](https://img.shields.io/node/v/sharp?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/sharp?style=flat-square&label=%20) |
  | [Stylus](https://www.npmjs.com/package/stylus) | ![version](https://img.shields.io/node/v/stylus?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/stylus?style=flat-square&label=%20) |
  | [PostCSS](https://www.npmjs.com/package/postcss) | ![version](https://img.shields.io/node/v/postcss?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/postcss?style=flat-square&label=%20) |
  | [Svelte](https://www.npmjs.com/package/svelte) | ![version](https://img.shields.io/node/v/svelte?style=flat-square&label=%20) |   ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/svelte?style=flat-square&label=%20) |

  Pages assumes Cloudflare Pages, but probably other hosting services be available.
  [Cloudflare Pages](https://pages.cloudflare.com/)  

## Installation  

  These are descriptions of how to do it using a shell.  

### Clone the pages project (SSH)  

  ```sh
  git clone git@github.com:7rs/pages.git --depth 1
  ```  

#### HTTPS  

  ```sh  
  git clone https://github.com/7rs/pages.git --depth 1
  ```  

  > [Git - git-clone Documentation](https://git-scm.com/docs/git-clone)  

### Install dependencies (pnpm)  

  ```sh
  pnpm install
  ```  

#### Install dependencies (yarn)  

  ```sh
  yarn install
  ```  

#### Install dependencies (npm)  

  ```sh
  npm install
  ```  

### Activate a preview in a browser (pnpm)  

  ```sh
  pnpm run dev
  ```  

#### Activate a preview in a browser (yarn)  

  ```sh
  yarn run dev
  ```  

#### Activate a preview in a browser (npm)  

  ```sh
  npm run dev
  ```  

[7bynNtRqu4E]: https://unsplash.com/photos/7bynNtRqu4E
[unsplash-license]: https://unsplash.com/license

### License  

  **Pages** is published under [CC0][cc0] except for asset files.  
  Licensing information for files is as follows. **Some are not listed.**  

  [Banner](resources/banner.md)  

  | Name | Author | License |
  |-|-|-|
  | [Person sitting on top of building during daytime (pfp)][7bynNtRqu4E] | @smnzhu | [Unsplash License][unsplash-license] |

## Contributing  

### Languages  

  Please use **Japanese** or **English**.  
  If you have difficulty using those languages, I recommend using the following tools.  

- [DeepL Translator][deepl]  
- [Google Translator][google-translator]
- [ChatGPT][chatgpt]  

### Style Guides  

  Styleguides are controlled by tools. [VSCode][vscode] makes it so easy to complete the setup.  
  I'll define the styleguide for [Stylus][stylus] later.  

#### Tools  

- [EditorConfig](https://editorconfig.org/)  
- [Prettier (HTML, CSS)](https://prettier.io/)  
- [Prettier for Astro](https://github.com/withastro/prettier-plugin-astro)  
- [Prettier for Stylus](https://github.com/lsdsjy/prettier-plugin-stylus)  
- [Prettier for Svelte](https://github.com/sveltejs/prettier-plugin-svelte)  
- [ESLint](https://eslint.org/)  
- [Astro](https://docs.astro.build/editor-setup/#other-code-editors)  
- [Stylelint](https://eslint.org/)  
- [Svelte](https://svelte.dev/docs/introduction#editor-tooling)  
- [Markdownlint](https://github.com/DavidAnson/markdownlint)  

#### [VSCode][vscode] extensions  

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)  
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)  
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)  
- [Stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)  
- [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)  
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)  

## Author  

- [Cbrnex](https://github.com/7rs)  
