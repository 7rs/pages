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

  高速でシンプルなウェブサイト。  

  [![LICENSE](https://img.shields.io/github/license/7rs/pages?style=flat-square&labelColor=black&color=purple)](https://github.com/7rs/pages/blob/main/LICENSE)
  [![Activity](https://img.shields.io/github/commit-activity/t/7rs/pages?style=flat-square&labelColor=black&color=blue)](https://github.com/7rs/pages/commits/main)
  [![Last commit](https://img.shields.io/github/last-commit/7rs/pages/main?style=flat-square&label=%20&color=blue)](https://github.com/7rs/pages/commits/main)
  [![issues](https://img.shields.io/github/issues-raw/7rs/pages?style=flat-square&label=issues&labelColor=black&color=red)](https://github.com/7rs/pages/issues)
  [![closed issues](https://img.shields.io/github/issues-closed-raw/7rs/pages?style=flat-square&label=%20&color=green)](https://github.com/7rs/pages/issues?q=is%3Aissue+is%3Aclosed)

## 機能  

- [オープンソース](https://wikipedia.org/wiki/FLOSS)
- [PageSpeed Insights](https://pagespeed.web.dev/)にて、90点以上を目標としている  
- 様々なブラウザへの対応 (FireFox、Chrome、Safariなど)  
- [ダークモードへの対応](https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-color-scheme).  
- [多言語化](https://wikipedia.org/wiki/Internationalization_and_localization) (日本語と英語のみ).  
- [VSCode][vscode]用の簡略化されたセットアップ  
- 再利用可能なコンポーネント  
- クラスレスのスタイル指定 [(スコープ付きCSS).](https://docs.astro.build/ja/guides/styling/#%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97%E3%81%95%E3%82%8C%E3%81%9F%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB)  
- マークアップとスタイルシートの分離  
- [SEO最適化](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)  

また、使用したツール等を以下に示す  

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

ここに書かれているのはあくまで目標であり、必ずしも実装されているわけではありません。  

## ベンチマーク  

| Mobile | Desktop |
| -: | -: |
| 99 | 100 |  

> [PageSpeed Insights (2024-01-13 21:25:12)](https://pagespeed.web.dev/analysis/https-7rs-dev/x0q7ws96dt?form_factor=desktop)

## 動作環境  

  | Package | Node | Version |
  |-|-|-|
  | [Astro](https://www.npmjs.com/package/astro) | ![version](https://img.shields.io/node/v/astro?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/astro?style=flat-square&label=%20) |
  | [Sharp](https://www.npmjs.com/package/sharp) | ![version](https://img.shields.io/node/v/sharp?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/sharp?style=flat-square&label=%20) |
  | [Stylus](https://www.npmjs.com/package/stylus) | ![version](https://img.shields.io/node/v/stylus?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/stylus?style=flat-square&label=%20) |
  | [PostCSS](https://www.npmjs.com/package/postcss) | ![version](https://img.shields.io/node/v/postcss?style=flat-square&label=%20) | ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/postcss?style=flat-square&label=%20) |
  | [Svelte](https://www.npmjs.com/package/svelte) | ![version](https://img.shields.io/node/v/svelte?style=flat-square&label=%20) |   ![version](https://img.shields.io/github/package-json/dependency-version/7rs/pages/svelte?style=flat-square&label=%20) |

  PagesはCloudflare Pagesでの運用を想定していますが、その他のホスティングサービスでも恐らく動作するはずです。  
  [Cloudflare Pages](https://pages.cloudflare.com/)  

## 導入（インストール）  

### Pagesプロジェクトをクローンする (SSH)  

  ```sh
  git clone git@github.com:7rs/pages.git --depth 1
  ```  

#### HTTPS  

  ```sh  
  git clone https://github.com/7rs/pages.git --depth 1
  ```  

  > [Git - git-clone Documentation (英語)](https://git-scm.com/docs/git-clone)  

### 依存環境のインストール (pnpm)  

  ```sh
  pnpm install
  ```  

#### yarn  

  ```sh
  yarn install
  ```  

#### npm  

  ```sh
  npm install
  ```  

### ブラウザでプレビューを起動する (pnpm)  

  ```sh
  pnpm run dev
  ```  

#### yarn  

  ```sh
  yarn run dev
  ```  

#### npm  

  ```sh
  npm run dev
  ```  

[7bynNtRqu4E]: https://unsplash.com/photos/7bynNtRqu4E
[unsplash-license]: https://unsplash.com/license

### ライセンス  

  **Pages** は [CC0][cc0] の下、公開されていますが、アセットファイル（画像など）については含まれません。  
  以下にある程度のライセンスの情報を記します。ここに書いてあるものが全てではありません。  

  [バナー画像について](resources/banner.md)  

  | タイトル | 作者 | ライセンス |
  |-|-|-|
  | [Person sitting on top of building during daytime (pfp)][7bynNtRqu4E] | @smnzhu | [Unsplash License][unsplash-license] |

## 貢献（コントリビュート）  

### 言語について  

  日本語か英語を使用してください。  

- [DeepL Translator][deepl]  
- [Google Translator][google-translator]
- [ChatGPT][chatgpt]  

### スタイルガイド（コーディング規約）  

  これらはツールによって制御することとします。 [VSCode][vscode] を使えば、そのほとんどが自動で設定されるはずです。  
  また、 [Stylus][stylus] については後程定義する予定です。  

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

#### [VSCode][vscode] 拡張機能  

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)  
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)  
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)  
- [Stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)  
- [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)  
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)  

## 作者  

- [Cbrnex](https://github.com/7rs)  
