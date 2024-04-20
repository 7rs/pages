---
layout: "@layouts/BlogLayout.astro"
title: "Astroとは何か"
tags: ["Astro", "Frontend", "Development"]
---

## はじめに  

  パフォーマンスが高く、学習コストが低い
  柔軟なWebフレームワーク、もしくはフロントエンドフレームワークです。
  本格的なWebアプリケーションというよりは、Webサイトを作りたい人向けです。  

  公式や他記事では、コンテンツ駆動のウェブサイトを作成するための
  オールインワンのWebフレームワークと題していたりします。  

## 高速  

[view-transitions]: https://docs.astro.build/ja/guides/view-transitions

### 究極のSSG

  [SSG (Static Site Generator)](https://w.wiki/9orW)  

  Astroはscriptに対して様々なアプローチを取っています。
  基本はすべてのscriptがビルド時に実行され、静的な要素に変換されます。
  ただし、動的なscriptや要素も記述できます。ビルド時にはscriptは最小限(最小で0)になります。  

  [ビュートランジション][view-transitions]のような機能を使うと、互換性のためにscriptが追加されたりします。  

### 動的なUI (`is:inline`)  

  [is:inline - Astro Docs](https://docs.astro.build/ja/reference/directives-reference/#isinline)  

  動的な要素を設置する最も簡単な方法です。
  `is:inline`を記述すると、scriptはビルド時に実行されません。
  `is:inline`を記述しなくても、iframeを生成するscriptはビルド時に実行されません。

### アイランド (Islands Architecture)  

  [Astroアイランド - Astro Docs](https://docs.astro.build/ja/concepts/islands/)  

  コンポーネントを部分的にSSR（CSR）化させる仕組みになります。
  ReactやVue、Svelte等を使って記述できます。
  ロードのタイミングや条件を指定できるため、ページ全体への影響を改善できます。

### Resumable  

  [Resumable - Qwik Documentation](https://qwik.dev/docs/concepts/resumable/)  

  Astroの機能では無いですが、Qwikに対応しているのでコンポーネントとしてResumableが使えます。
  ここだけでは説明しきれないほど、Qwikは難易度が高いです。
  優れたパフォーマンスを求めているならばSvelteやSolid，Preactを使うのが無難だと思います。

### オンデマンドレンダリング  

<!--  -->
- [レンダリングモード - Astro Docs](https://docs.astro.build/ja/basics/rendering-modes/)
- [オンデマンドレンダリングアダプター - Astro Docs](https://docs.astro.build/ja/guides/server-side-rendering/)
<!--  -->

  一部のページのみをSSR化する仕組みです。
  独立したコンポーネントではなく、全体をSSRで制御したいときに使えます。
  デフォルトのレンダリングをSSRかSSGのどちらかに指定できます。
