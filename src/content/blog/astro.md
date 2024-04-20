---
layout: "@layouts/BlogLayout.astro"
title: "Astro"
tags: ["Astro", "HTML", "CSS", "JavaScript", "TypeScript", "Frontend"]
---

## 結論  

  速くてより良いウェブサイトを作れるフレームワーク、Astro。

<!--  -->
- JavaScriptのコードをHTMLとCSSに変換してくれるからめっちゃ高速だよ
- ReactやVue、Svelteなどのフレームワークをコンポーネントとして呼び出せるよ
- 部分的にスクリプトが動くから、SSGを保ちながらインタラクティブなUIを設置できるよ (Islands Architecture)
- 部分的にSSRにできるよ (ハイブリッドレンダリング)
<!--  -->

[astro]: https://astro.build/
[why-astro]: https://docs.astro.build/ja/concepts/why-astro/
[remix]: https://remix.run/
[nextjs]: https://nextjs.org/
[nuxt]: https://nuxt.com/
[react]: https://ja.react.dev/
[vuejs]: https://ja.vuejs.org/
[framework-components]: https://docs.astro.build/ja/guides/framework-components/
[astro-syntax]: https://docs.astro.build/ja/basics/astro-syntax/

## [Astroとは何か？][why-astro]  

<!--  -->
- [Kinsta (Maciek Palmowski) - 人気の静的サイトジェネレーターAstroとは（入門編）](https://kinsta.com/jp/blog/astro-js/)
- [Zenn (@morinokami) - Astro ゆく年くる年](https://zenn.dev/morinokami/articles/astro-2023-2024)
- [Zenn (@yend724) - Astro使ってみたのでその所感](https://zenn.dev/yend724/articles/20220701-430vndv085eh6xn2)
- [Qiita (@udayaan) - 話題の最新フロントエンドフレームワーク「Astro」を使ってみた](https://qiita.com/udayaan/items/24ecb2f5f4608fc1df4c)
- [Qiita (@shadowTanaka) - 好きなUIフレームワークを手に取れ。そしてAstroを使え。](https://qiita.com/shadowTanaka/items/e0492547596ca94ec6da)
<!--  -->

  > [Astro Docs - Astroを選ぶ理由][why-astro]（一部抜粋・編集済み）  
  > Astroはコンテンツ駆動のウェブサイトを作成するために必要なすべてが組み込まれた、オールインワンのウェブフレームワークです。  
  > 他と比較してJavaScriptのオーバーヘッドと複雑さを低減し、高速でSEOに優れています。  

  おおよそ[Next.js][nextjs]や[Nuxt][nuxt]と同じですが、[Astro][astro]はこれらと大きく異なる点があります。  
  それは、１つのフレームワークに縛られないという点です。  

  例えば、[Next.js][nextjs]や[Remix][remix]は[React][React]用のフレームワークで、[Nuxt][nuxt]は[Vue.js][vuejs]用のフレームワークです。  
  しかし、[Astro][astro]は[React][react]も[Vue.js][vuejs]も他のフレームワークも
  [**コンポーネントとして**混合的に利用できます。][framework-components]  

[islands]: https://docs.astro.build/ja/concepts/islands/

## [Islands Architecture][islands]  

<!--  -->
- [Qiita (@oekazuma) - アイランドアーキテクチャ(Islands Architecture)とは何なのか](https://qiita.com/oekazuma/items/87923acea03990fd71a2)
- [Zenn (@morinokami) - Astro で Islands Architecture を始めよう](https://zenn.dev/morinokami/articles/islands-architecture-with-astro)
- [Zenn (@shuufei) - Astro(Island Architecture)とNext.jsのパフォーマンス比較](https://zenn.dev/shuufei/articles/6e115fe4c8f74e)
<!--  -->

  ここで登場するのが[Islands Architecture][islands]です。SSRと似た概念ですが、その上位互換と言っても過言では無いです。  
  SSRではページ全体を動的に生成しますが、[Islands Architecture][islands]、つまり[Astro][astro]でコンポーネントとして呼び出した部分のみが動的に生成されます。  

  ```astro
  ---
  import ReactComponent from "react-component.tsx";
  import VueComponent from "VueComponent.vue";
  ---

  <ReactComponent client:load />
  <VueComponent client:load />
  ```  

  コンポーネントとして利用するということは、ルートとしてそれらのフレームワークを使うことはありません。  
  基本的には[Astroテンプレート][astro-syntax]で制御し、その中でそれぞれのフレームワークをコンポーネントとして呼び出すことになります。  
  なので、[React][react]などで[Astro][astro]のコンポーネントや他のフレームワークのコンポーネントを呼び出すことはできません。  

[astro-ssr]: https://docs.astro.build/ja/guides/server-side-rendering/
[astro-adapters]: https://astro.build/integrations/?search=&categories%5B%5D=adapters
[endpoint]: https://docs.astro.build/ja/guides/endpoints/
[middleware]: https://docs.astro.build/ja/guides/middleware/
[data-fetching]: https://docs.astro.build/ja/guides/data-fetching/
[javascript]: https://developer.mozilla.org/ja/docs/Web/JavaScript

## SSRとハイブリッドレンダリング  

<!--  -->
- [Vue.js - サーバーサイドレンダリング (SSR)](https://ja.vuejs.org/guide/scaling-up/ssr)
- [Zenn (@a_da_chi) - もう迷わないNext.jsのCSR/SSR/SSG/ISR](https://zenn.dev/a_da_chi/articles/105dac5573b2f5)
- [Zenn (@rinda_1994) - SPA, SSR, SSGって結局なんなんだっけ？](https://zenn.dev/rinda_1994/articles/e6d8e3150b312d)
- [Zenn (@mt877) - SPA/MPAとCSR/SSR/SSGの分類](https://zenn.dev/mt877/articles/6dc3afe99ee794)
- [Qiita (@manabito76) - 【図解】SPA、SSR、SSGの違いについて](https://qiita.com/manabito76/items/fe91eefe11a74dcf5126)
- [Amazon Web Services ブログ (稲田大陸) - Next.js Web アプリケーションにおける SSG とSSR の比較： 正しいレンダリングアプローチの選択](https://aws.amazon.com/jp/blogs/news/ssg-vs-ssr-in-next-js-web-applications-choosing-the-right-rendering-approach/)
- [Wikipedia (EN) - Static site generator](https://en.wikipedia.org/wiki/Static_site_generator)
<!--  -->

  CSR, SSR, SSG, ISRについては[この記事](ssg-isr-ssr-csr)で一応解説しています。  

  [Astroテンプレート][astro-syntax]は基本的にSSGです。  
  インタラクティブなUI、つまりデフォルトでSSRをしたければ[React][react]などのフレームワークを使用しなければなりません。  

  しかし、コンポーネント同士で相互的な値の受け渡しが出来るわけでもないので、不便な場合があります。  
  なので、[AstroはSSRに対応しています。][astro-ssr]
  全体としてSSRになりますが、そうすれば[Islands Architecture][islands]のメリットは当然無くなります。  
  そこで登場するのが**ハイブリッドレンダリング**です。  

  静的・動的の両方で利用可能な機能として、

<!--  -->
- [エンドポイント][endpoint]
- [ミドルウェア][middleware]
- [データフェッチ][data-fetching]
<!--  -->

  が用意されています。
  SSRの機能を有効にしていない状態で[Astroテンプレート][astro-syntax]から使用すると、これらはビルド時に実行されることになります。
  `fetch()`は[Astro][astro]によるものではなく[JavaScript][javascript]が持つグローバル関数なので、[Islands Architecture][islands]から使用できます。

  また、SSRをするにあたっては[SSRアダプター][astro-adapters]の設定が必要になります
  （当然ですが、SSRをするためのサーバーが必要になるからです。）。  

<!--  -->
- [MDN Web Docs - fetch() グローバル関数](https://developer.mozilla.org/ja/docs/Web/API/fetch)
- [MDN Web Docs - フェッチ API の使用](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
<!--  -->

## Zero JS  

  恐らくほとんどの記事では[Islands Architecture][islands]よりも先に紹介されている機能ですが、[Astro][astro]はJavaScriptのコードを最小限にします。  
  ここで、あえて0だと言わないのはデフォルトでゼロJSと書かれている通り、
  ビュートランジションの機能を使った場合などは0にならないからです
  （これはAstroが生成するので）。

  しかしながら、[Astroテンプレート][astro-syntax]はSSGのため、ビルド時にHTMLとCSSに変換されます。
  コンポーネントの最初に記述されるフロントマターについては、JavaScriptやTypeScriptで記述されますが、
  これらはすべてビルド時に実行されるので、実際には残りません。  
  MarkdownやMDXについても基本的にSSGとしてビルド時にHTMLとCSSに変換されます。

  このSSGは何が嬉しいのか。サーバーに対する負荷が最小限になることと、レスポンス速度が向上することが挙げられます。
  SSRなどでは、サーバーでHTMLを生成しますが、その生成には当然負荷がかかります。負荷がかかるのと同時にレスポンス速度にも影響します。

[integrations]: https://astro.build/integrations/
[integrations-guide]: https://docs.astro.build/ja/guides/integrations-guide/

## [インテグレーション][integrations-guide]  

  この[インテグレーション][integrations-guide]ですが、実際は`package.json`に追加されるので、ただのパッケージです。  
  通常のパッケージと違うのは[Astro][astro]に最適化され、少ない行数と作業で使用できるということです。  

  設定ファイルへの記述なども自動で行ってくれます。
  あとは[Astroテンプレート][astro-syntax]内で呼び出すだけで使用できるため、簡単に利用できるわけです。  
  さらに、アップデートも[Astro][astro]と複数の[インテグレーション][integrations-guide]とともに１コマンドで行えます。  

  [インテグレーション][integrations-guide]はかなりの量ありますが、よく使われそうな[インテグレーション][integrations-guide]のリストを載せときます。  
  [インテグレーション][integrations-guide]は[Integrationsで検索できます。][integrations]  

<!--  -->
- [Starlight](https://starlight.astro.build/ja/)
- [Astro Docs - React](https://docs.astro.build/ja/guides/integrations-guide/react/)
- [Astro Docs - Vue.js (EN)](https://docs.astro.build/ja/guides/integrations-guide/vue/)
- [Astro Docs - Svelte (EN)](https://docs.astro.build/ja/guides/integrations-guide/svelte/)
- [Qwik Documentation - Astro (EN)](https://qwik.dev/docs/integrations/astro/)
- [Astro Docs - MDX](https://docs.astro.build/ja/guides/integrations-guide/mdx/)
- [Astro Icon (EN)](https://astroicon.dev/)
- [Astro Docs - TailwindCSS (EN)](https://docs.astro.build/ja/guides/integrations-guide/tailwind/)
- [GitHub (EN) - shishkin/astro-pagefind](https://github.com/shishkin/astro-pagefind)
<!--  -->

## スコープ付きCSS  

## 学習コスト  

## 将来性やプロジェクトの状況
