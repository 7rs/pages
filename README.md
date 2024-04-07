[main-version]: https://img.shields.io/github/package-json/v/7rs/pages/main?style=flat-square&label=main&labelColor=000&color=blue
[main-modified]: https://flat.badgen.net/github/last-commit/7rs/pages/main?label&color=purple
[pre-version]: https://img.shields.io/github/package-json/v/7rs/pages/pre?style=flat-square&label=pre&labelColor=000&color=blue
[pre-modified]: https://flat.badgen.net/github/last-commit/7rs/pages/pre?label&color=purple
[dev-version]: https://img.shields.io/github/package-json/v/7rs/pages/dev?style=flat-square&label=dev&labelColor=000&color=blue
[dev-modified]: https://flat.badgen.net/github/last-commit/7rs/pages/dev?label&color=purple

[vscode]: https://code.visualstudio.com/  

<picture>
  <source srcset=".github/assets/banner.avif" />
  <source srcset=".github/assets/banner.webp" />
  <img src=".github/assets/banner.jpg" alt="banner" />
</picture>

![Version][main-version]![Last commit][main-modified]
![Version][pre-version]![Last commit][pre-modified]
![Version][dev-version]![Last commit][dev-modified]  

# [Pages](https://7rs.dev/)  

  **Fast**, **Readable** and **Flexible**.  
  A tool to create awesome websites. And an website.  

[pagespeed-insights]: https://pagespeed.web.dev/

## Features (Goals)  

### Fast  

Pages is developed with the emphasis on performance.  
A goal is to score 90+ on [PageSpeed Insights][pagespeed-insights].  

### Readable  

Splits huge codes and mark up semantically (Minimize div tags).  
And reduces multi-line Flexboxes by using a grid layout instead.  
So **reuse** and **semantics HTML**.  

### Flexible  

Pages has no `!important`.  And the use of classes is minimal.  
So you can override styles and use any class name!  
Also, because used Astro, PostCSS, UI frameworks such as Svelte, etc., you can use their ecosystems.  

### For all users  

- [Responsive web design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Dark mode](https://en.wikipedia.org/wiki/Light-on-dark_color_scheme)
- [i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization)
- [use pnpm](https://pnpm.io/motivation)
- [use TypeScript](https://www.typescriptlang.org/)
- [use VSCode](https://code.visualstudio.com/)

## Benchmarks  

  Images

## Installation  

### Requirement (Recommended)  

- [fnm](https://github.com/Schniz/fnm)
- [pnpm](https://pnpm.io/)

#### Clone the pages project (SSH)  

  ```sh
  git clone git@github.com:7rs/pages.git --depth 1
  ```  

### Install Node.js with [codename]((https://nodejs.org/en/about/previous-releases)) (fnm)  

  ```sh
  fnm install lts/hydrogen
  fnm use lts/hydrogen
  ```

#### Install dependencies  

  ```sh
  pnpm install
  ```  

#### Activate preview in your browser  

  ```sh
  pnpm dev  
  ```  

#### Build website  

  ```sh
  pnpm build
  ```  

[unsplash-badge]: https://img.shields.io/badge/Unsplash-black?style=for-the-badge&logo=unsplash
[unsplash-license]: https://unsplash.com/license
[cc0]: https://creativecommons.org/publicdomain/zero/1.0/

## License  

  **Pages** is published under [CC0][cc0] except for asset files.  

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/large.svg)](https://astro.build/)  [![Unsplash][unsplash-badge]][unsplash-license]

## Contributing  

### Languages  

  Please use **Japanese** or **English**.  

### Style Guides  

  Styleguides are controlled by tools. [VSCode][vscode] makes it so easy to complete the setup.  

### Community  

  [![Static Badge](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://7rs.dev/d)

## Author  

- [Cbrnex](https://github.com/7rs)  
