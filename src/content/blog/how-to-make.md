---
layout: "@layouts/BlogLayout.astro"
title: "新しいウェブサイトを作る"
tags: ["frontend", "cloudflare", "porkbun", "astro", "stylus", "typescript", "svelte", "qwik"]
authors: ["Cbrnex"]
published: true
published_at: "2024-01-07"
updated_at: "2024-03-03"
---

## どうして作ったか  

  自身のウェブサイトを作りたいと前々から思っていて、
  苦手なフロントエンドを克服することを目標に当ウェブサイトを開発・運営しています。

[nuxt]: https://nuxt.com/
[github-pages]: https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages
[next]: https://nextjs.org/
[vercel]: https://vercel.com/
[gatsby]: https://www.gatsbyjs.com/
[hugo]: https://gohugo.io/
[netlify]: https://www.netlify.com/
[astro]: https://astro.build/
[cloudflare-pages]: https://pages.cloudflare.com/
[sveltekit]: https://kit.svelte.jp/
[remix]: https://remix.run/

## ホスティング・技術選定  

  経験としては[Nuxt][nuxt]と[GitHub Pages][github-pages]を少しだけ触ったことがあります。
  今回は<u>**界隈の情勢**や**将来性**</u>も含め[Next.js][next]と[Vercel][vercel]でウェブサイトを作るつもりでした。  
  しかし、[Astro][astro]と[Cloudflare Pages][cloudflare-pages]を知り、
  それらでウェブサイトを作ることにしました。  
  (一応、[74のウェブサイト](https://github.com/74gg/74gg.github.io)は
  [Next.js][next]と[GitHub Pages][github-pages]で開発されていますが、
  当ウェブサイトよりは開発が活発ではありません。)  

  **メタフレームワーク（フロントエンドフレームワーク）** では、
  [Next.js][next]や[Nuxt][nuxt]、[SvelteKit][sveltekit]、[Remix][remix]などが挙げられ、  
  **SSG**では[Gatsby][gatsby]や[Hugo][hugo]などが挙げられますが、
  カスタマイズ性とパフォーマンスの点においては、[Astro][astro]はずば抜けています。  

  > - [Astro - 2023 Web Framework Performance Report](https://astro.build/blog/2023-web-framework-performance-report/)  
  > - [Astro Docs - フレームワークコンポーネント](https://docs.astro.build/ja/guides/framework-components/)  

  **静的ホスティング**は[Netlify][netlify]や[Vercel][vercel]が挙げられますが、
  無料プランにおいては[Cloudflare Pages][cloudflare-pages]が抜きん出ているでしょうか。  

  > - [Zenn (@catnose99) - Cloudflare Pages・Vercel ・Netlify の違いや使い分けをまとめる](https://zenn.dev/catnose99/scraps/6780379210136f)  
  > - [Zenn (@yutopia898) - webサイトをAstroにリライトしてパフォーマンスが上がった話](https://zenn.dev/yutopia898/articles/d8d83b67b4cf26)  

  選定の基準としては、  
  **パフォーマンス（ネットワークの速度）** >= **メンテナンスの状態** >= **使いやすさ**の順で評価しています。  

[integrations]:  https://astro.build/integrations/
[@astrojs/react]: https://docs.astro.build/ja/guides/integrations-guide/react/
[@astrojs/vue]: https://docs.astro.build/ja/guides/integrations-guide/vue/
[@astrojs/tailwind]: https://docs.astro.build/en/guides/integrations-guide/tailwind/
[official-integrations]: https://docs.astro.build/ja/guides/integrations-guide/#%E5%85%AC%E5%BC%8F%E3%82%A4%E3%83%B3%E3%83%86%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3
[integration-add]: https://docs.astro.build/ja/guides/integrations-guide/#%E3%82%A4%E3%83%B3%E3%83%86%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E8%87%AA%E5%8B%95%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97
[integration-update]: https://docs.astro.build/ja/guides/integrations-guide/#%E8%87%AA%E5%8B%95%E3%82%A2%E3%83%83%E3%83%97%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%89

[astro-development]: https://docs.astro.build/ja/concepts/why-astro/#%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E3%81%A7%E9%AB%98%E9%80%9F
[astro-island]: https://docs.astro.build/ja/concepts/islands/
[zero-js]: https://docs.astro.build/ja/basics/astro-components/
[client-directives]: https://docs.astro.build/ja/reference/directives-reference/#client-directives
[astro-components]: https://docs.astro.build/ja/basics/astro-components/#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E6%A7%8B%E9%80%A0
[astro-is-easy]: https://docs.astro.build/ja/concepts/why-astro/#%E7%B0%A1%E5%8D%98%E3%81%AB%E4%BD%BF%E3%81%88%E3%82%8B

[tutorial]: https://docs.astro.build/ja/tutorial/0-introduction/

## [Astro][astro]  

  全ては説明しきれませんが、いくつか**Astroの素晴らしい点**をご紹介します。  

### インテグレーション  

  `package.json`に追加されるので、<u>Astro専用のパッケージ</u>という立ち位置です。  
  [React][@astrojs/react]や[Vue][@astrojs/vue]などの**JSライブラリ**や、
  [TailwindCSS][@astrojs/tailwind]などの**CSSフレームワーク**に加えて、
  [SSRアダプターや便利なインテグレーションが多くあります。][official-integrations]  

  ```sh
  pnpm astro add react
  ```  

  ```sh
  pnpm astro add react tailwind partytown
  ```  

  １コマンドで[インストールから設定まで自動で行ってくれます。][integration-add]  

  ```sh
  pnpm dlx @astrojs/upgrade
  ```  

  １コマンドで[アップグレード（アップデート）も一括で行ってくれます。][integration-update]  

  > [Astro Docs - インテグレーションを追加する](https://docs.astro.build/ja/guides/integrations-guide/)  
  > [Astro - Integrations][integrations]  

### 高速  

  [パフォーマンスを重視して開発されている][astro-development]ので、
  [<u>JavaScriptのコードが全てHTMLとCSSに変換されるので、</u>][zero-js]
  （出来上がった形としてクライアントに送信される）とにかく速いです。
  しかし、そんなことをすれば<u>動的なコンテンツは動かなくなります</u>。
  その**対応策**として[クライアントディレクティブ][client-directives]があります。
  これを使えば[一部（コンポーネント）のみがJavaScriptで制御される][astro-island]ことになります。  

  > [デフォルトで高速][astro-development]  

  この一部が[Astroコンポーネント][astro-components]になるわけですが、
  [React][@astrojs/react]や[Vue][@astrojs/vue]などで作ったコンポーネントも呼び出せ、<u>これらのUIフレームワークを**混合的**に使えます</u>。
  もちろん、完全に静的なコンポーネントを作ることも可能で、その場合は通常通り変換が行われます。  

  この高速化に<u>複雑な設定は必要ありません</u>。
  もっと多くのことをしようとすれば複雑にはなりますが、これについても言及されています。  
  <u>単純な**JSXのみ**で記述することも出来るし</u>（UIフレームワークなしで）、
  必要ならば、より踏み込んだ機能（新しい機能やAPI、UIフレームワークなど）**にも手を出せる。**  

  > [Astroを選ぶ理由 - 簡単に使える][astro-is-easy]  

### ドキュメント  

  [公式ドキュメントが日本語に対応しています。](https://docs.astro.build/ja/getting-started/)
  日本語化が進んでいない部分がありますが、基本的な機能や技術については書かれています。
  [チュートリアルは**ブログの作成**][tutorial]が日本語化されています。

  日本語の記事もそれなりに書かれていますが、<u>技術に**偏り**があるのは事実です。</u>  
  より多くのことをしたいなら、**英語の記事**を読む必要はあります。  

- [Qiita](https://qiita.com/tags/astro)
- [Zenn](https://zenn.dev/topics/astro)

### 所感  

  <u>特定のJSライブラリに依存</u>しないので、移行について考える必要が少なくなりますし、
  技術や仕様的に不可能だったことが出来るようになる可能性もあります。  

  学習コストは低いですが、ドキュメントの**一部は英語**であったり、
  新しい機能について日本語の記事はもちろん、<u>英語の記事もほとんどない</u>ことがあります。  

  高速化は簡単に行えるわけですが、あえて簡単だとは言いません。  
  なぜなら、コンテンツやUIフレームワーク、ホスティングサービス（サーバ）に依存するからです
  （ボトルネックとなる部分はAstro以外にもあるので）。  
  その点を除けば、簡単に速いウェブサイトが作れると言えるでしょうか。  

  > - [Kinsta - 人気の静的サイトジェネレーターAstroとは](https://kinsta.com/jp/blog/astro-js/)  
  > - [Qiita (@udayaan) - 話題の最新フロントエンドフレームワーク「Astro」を使ってみた](https://qiita.com/udayaan/items/24ecb2f5f4608fc1df4c)  
  > - [Zenn (@yamakenji24) - AstroのIslandsでUIフレームワーク混ぜて遊んでみた](https://zenn.dev/yamakenji24/articles/b035c4ffb86cbf#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)  
  > - [Zenn (@morinokami) - Astro で Islands Architecture を始めよう](https://zenn.dev/morinokami/articles/islands-architecture-with-astro)  
  > - [Zenn (@morinokami) - Astro ゆく年くる年](https://zenn.dev/morinokami/articles/astro-2023-2024)  

[cloudflare-cdn]: https://www.cloudflare.com/ja-jp/application-services/products/cdn/
[cloudflare-security]: https://www.cloudflare.com/ja-jp/security/
[cloudflare-transfar]: https://www.cloudflare.com/ja-jp/plans/developer-platform/
[cloudflare-workers]: https://www.cloudflare.com/ja-jp/developer-platform/workers/

## [Cloudflare Pages][cloudflare-pages]  

### メリット  

  注目すべきはレスポンス速度で、[CloudflareのCDN][cloudflare-cdn]が優秀であることは言うまでもないでしょう。
  [Cloudflareが提供するセキュリティの機能][cloudflare-security]も利用可能で、
  設定はSaaSで非常に簡単に行えます。  
  また、[無制限の転送量][cloudflare-transfar]が挙げられます。  

  **SSR**については[Vercelのようなサーバーレス関数][cloudflare-workers]が用意されています。
  これは無制限ではありませんが、**1日10万リクエストまで**とそれなりの制限があります。  

  **ビルドや高速化の設定**もSaaSで簡単に行えます。様々なフレームワークに最適化することも出来ます([Astro][astro]や[Next.js][next]、[Nuxt][nuxt]など)。
  ビルドにかかる時間は**フレームワークに依存**しますが、**キャッシュ機能**があるのでさほどストレスは無いと思います。  

### デメリット  

  <u>**1か月**に**500デプロイ**までの制限</u>があります。
  有料プランは決して安く無いため、<u>**更新頻度か高い**ウェブサイトや複数のウェブサイトの運用には向いていない</u>でしょうか・・・。  

  > - [Qiita (@akitkat) - 日本国内だとNetlifyよりCloudflare Pagesの方が速い！](https://qiita.com/akitkat/items/dcbe4fcaacc051753e2b)  
  > - [Zenn (@kwntky) - ブログを公開したい？...5分もあれば十分だ](https://zenn.dev/rivine/articles/2023-06-23-deploy-hugo-to-cloudflare-pages)  
  > - [Kinsta - Cloudflareの市場シェア](https://kinsta.com/jp/cloudflare-market-share/)  

[stylus]: https://stylus-lang.com  
[sass]: https://sass-lang.com/  
[postcss]: https://postcss.org/  

[boilerplate-code]: https://ja.wikipedia.org/wiki/%E3%83%9C%E3%82%A4%E3%83%A9%E3%83%BC%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%B3%E3%83%BC%E3%83%89
[stylus-vitejs]: https://ja.vitejs.dev/guide/features.html#css-pre-processors
[stylus-syntax]: https://github.com/stylus/stylus/issues/2293

## [Stylus][stylus]  

  [Stylus][stylus]の特徴は[ボイラープレートコード][boilerplate-code]が最小限であることです。  

<details>
  <summary>CSS</summary>
  <div>

  ```css
  div {
    display: flex;
  }

  div > a {
    text-decoration: none;
  }

  div > a:hover {
    text-decoration: underline;
  }
  ```  

  </div>
</details>

<details>
  <summary>SCSS</summary>
  <div>

  ```scss
  div {
    display: flex;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  ```  

  </div>
</details>

<details>
  <summary>SASS</summary>
  <div>

  ```sass
  div
    display: flex
    a
      text-decoration: none
      &:hover
        text-decoration: underline
  ```  

  </div>
</details>

<details open>
  <summary>Stylus</summary>
  <div>

  ```stylus
  div
    display flex
    a
      text-decoration none
      &:hover
        text-decoration underline
  ```  

  </div>
</details>

  このように、**波括弧**や**コロン・セミコロン**を省略できます。
  上の二つのコードも[Stylus][stylus]ではエラーになりません。
  <u>**CSS**には完全に下位互換</u>があり、[SASS/SCSS][sass]には一部下位互換があります。  
  [SASS/SCSS][sass]ほど情報が充実しておらず、機能も[SASS/SCSS][sass]の方がありますが、[Stylus][stylus]はその構文及び言語仕様に価値があります。  

  しかし、[セミコロン等を記述しなければ正しく構文を理解しなかったり][stylus-syntax]、
  [importエイリアスに対応していない（対応しない？）][stylus-vitejs]などから、
  <u>[SASS/SCSS][sass]からポジションを奪取するほどの強さは感じられません。  </u>

  ちなみに、[PostCSS][postcss]と[Stylus][stylus]は併用することが出来ます。  
  JSXの`<style>`であれば、[SASS/SCSS][sass]などとファイルごとに使い分けられると思います。
  （なので選定の必要がそもそもないと言っても過言ではないかもしれません。）  

  > - [Qiita (@morishitter) - Stylus入門したときのまとめ](https://qiita.com/morishitter/items/b9a2d78c79c3c07de776)  
  > - [Qiita (@miwashutaro0611) - stylusについて](https://qiita.com/miwashutaro0611/items/2da8100691c0454d6e4f)  

[google-domains]: https://support.google.com/domains/answer/13689670?hl=ja
[squarespace]: https://www.squarespace.com/
[onamae]: https://www.onamae.com/
[xdomain]: https://www.xdomain.ne.jp/
[muumuu]: https://muumuu-domain.com/
[cloudflare-dev]: https://www.reddit.com/r/CloudFlare/comments/134267y/for_those_who_havent_seen_it_yet_cloudflare_added/
[cloudflare-x]: https://twitter.com/CloudflareDev/status/1686812617153593355
[porkbun-paypal]: https://porkbun.com/support/payment_options
[cloudflare-registrar]: https://www.cloudflare.com/ja-jp/products/registrar/
[porkbun]: https://porkbun.com/
[porkbun-ssl]: https://porkbun.com/products/ssl

## [Porkbun][porkbun]  

  ドメインを買おうとしたのは**2023年の夏頃**だったと記憶してますが、
  その当時[Google Domains][google-domains]が[Squarespace][squarespace]という全然知らない企業に移行するという話がありました。
  そのため、購入先は別の企業からと考えていました。  
  [お名前.com][onamae]や[Xserver domain][xdomain]、[ムームードメイン][muumuu]など日本の企業は沢山ありますが、
  これらは<u>更新費が簡単にチェックできない</u>ため非常に面倒です（それも戦略なのでしょうが・・・）。  

  調べていくと、[**Cloudflare**が**安価**でドメインを販売している][cloudflare-registrar]ようでした。
  しかし、その当時は[**.devドメイン**は販売しておらず、追加も怪しい状況][cloudflare-dev]にありました（[後日、追加されたようです][cloudflare-x]）。  
  調査の末、[Porkbun][porkbun]という企業を見つけました。
  この[Porkbun][porkbun]は安価で、<u>更新費を包み隠さず</u>、
  当然のごとく<u>**Whois代行**を無料</u>でつけてくれます。
  支払いの手段も多く、[Paypal][porkbun-paypal]が使えます。  
  [SSLも無料で使えます][porkbun-ssl]が、
  私はCloudflareで管理しているのでこの恩恵特に受けていませんが、
  Cloudflareを使っていない人にとっては助けになるかもしれません。  

[svelte]: https://svelte.jp/
[react]: https://ja.react.dev/
[pagefind-default-ui]: https://pagefind.app/docs/ui-usage/
[revanced]: https://revanced.app/

## [Svelte][svelte]  

  [Svelte][svelte]も[ボイラープレートコード][boilerplate-code]が少なく、
  [React][react]などと比べて<u>学習コストが低い</u>です（**日本語**のドキュメントとチュートリアルがあります）。
  ただし、[React][react]を使い続けてきたエンジニアにとっては
  言語仕様の点で異なる点があるので少しとっつきにくい部分はあります。  

  <u>パフォーマンスが高く</u>、アニメーションの機能を標準で搭載していたり、**便利で高速**というのが[Svelte][svelte]のメリットです。
  <u>**エコシステム**（ライブラリやパッケージ）が[React][react]などより少ない</u>こと、知見が少ないなどがデメリットでしょうか。
  **大規模なウェブサイト・Webアプリケーションの開発**には[React][react]の方が分があります。
  個人的に[Svelte][svelte]は[Astro][astro]と非常に相性が良いと思っています（ランタイムがほぼなく、バンドルサイズが小さいため）。  

  ちなみに[PagefindのDefaultUI][pagefind-default-ui]や、
  [YouTube ReVancedのウェブサイト][revanced]は[Svelte][svelte]で作られています。  

  > - [Svelte をはじめる](https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)  
  > - [Kinsta - SvelteとReactの違いを徹底比較](https://kinsta.com/jp/blog/svelte-vs-react/)  
  > - [Zenn (@toshitoma) - Svelteとは](https://zenn.dev/toshitoma/articles/what-is-svelte)  

[mitosis]: https://github.com/BuilderIO/mitosis
[qwik]: https://qwik.dev/
[qwik-react]: https://qwik.dev/docs/integrations/react

## [Qwik][qwik]  

  まず、レンダリングの手法として

- クライアントでレンダリングする**CSR**
- クライアントの情報をもとにサーバーでレンダリングする**SSR**
- ビルド時にレンダリングを終わらせる**SSG**
- SSRを毎回行わない賢いSSR、**ISR**  
- SSGのうち、必要な部分のみSSRにする**Islands Architecture**  

<!---->

  このうちSSRとSSG、Islands Architectureでは**Hydration**という処理が行われます。
  動的なコンテンツを使用する場合、
  <u>JSのダウンロードと有効化（スクリプトの解析・実行）をして、
  静的なコンテンツに落とし込む必要</u>があります。
  完全な表示には<u>Hydrationが**ボトルネック**</u>となるわけです（**Web上のランタイム**みたいな感じ）。  
  **Islands Architecture**ではそれを**部分的**に行い、**最小限のHydration**を実現していますが、<u>範囲が限定的になってしまう</u>のは言うまでもないでしょう。  
  何かに例えるならば、<u>乾いたHTML(**砂漠**)にHydration(**水分補給**)</u>をして、
  <u>ウェブサイトが動き出す（**緑化して動物などが生き生きとしている**）</u>ようなイメージでしょうか（~~ゴミみたいな例えですみません~~）。  

  そこで提唱されたのが**Resumable**という新しい概念であり、
  これは<u>イベントが発生（発火）してからJSのダウンロードや実行</u>を行います。
  プリフェッチや非同期的なダウンロードを自動的に設定し、
  最適化を行うことで**別次元のSSR**を実現しているようです。  

  構文的には[React][react]に近いです。
  <u>Reactからの移行を重点的にサポートしている</u>ようで、
  [Qwik React][qwik-react]などがあります。  

  [Qwik][qwik]の懸念点はその**学習コストの高さ**です。<u>情報量も極めて少なく</u>、
  <u>ドキュメントもエコシステムも若干不十分</u>なところがあるのは事実です。
  制約が厳しく、初心者向けではありません。自己解決力が強く、
  英語に全くアレルギーが無いエンジニアにとっては、
  やりがいのあるチャレンジになるかもしれません。  

  <u>各フレームワークのコードに変換</u>できる[mitosis][mitosis]のようなイカれたプロジェクトもあるので、
  <u>学習コストがそもそも無くなる場合もありますが</u>、
  は知名度も高いとは言い切れず、<u>確立されたフレームワークで無い</u>ことも確かです。  
  **BuilderIO**が今後どのような動きを見せるのか注目すべきではあります。  

  > - [Zenn (@aiji42) - Qwikの基本概念である Resumable を理解する](https://zenn.dev/aiji42/articles/fafa354f79660d)  
  > - [Zenn (@hedrall) - qwikをざっくり調べてみた](https://zenn.dev/hedrall/articles/c15276e01725e0)  
  > - [Zenn (@mizchi) - 「理論上は最強」の Qwik/QwikCity を、フロントエンドの共通基盤にできないか](https://zenn.dev/mizchi/articles/micro-frontend-qwik)  

## 開発環境は?  

  実は実装時に**変更**したものや、**移行**したものがあります。  

  | 移行前 (検討時) | 移行後 (実装時)  |
  | :----------   | :-----------   |
  | Tailwind CSS  | Stylus         |
  | Lit           | Svelte & Qwik  |
  | WSL2          | Windows        |
  | Algolia       | Pagefind       |

  能力的な問題や、仕様的な問題がほとんどです。  
  現在は**Windows 11**で**VSCode**をエディタとして開発しています。
  環境はCargoから**fnm**をインストールして構築しています。  
  ソースコードは**GitHub**で管理し、**Cloudflare Page**sにデプロイして公開しています。
  ドメインも、Cloudflareのネームサーバを指定してCloudflareのDNSを使って公開しています。  

## おわりに  

### [7rs/pages](https://github.com/7rs/pages)

  ちなみにこのウェブサイトは**オープンソース**です。  
  <u>貢献して頂けるのなら非常に助かります</u>が、 ~~私にやる気があるかはわかりません。~~  
  質の良い答えを返せるかどうかわかりませんが、**質問**なども受け付けます。
  **指摘があれば是非お願いします。**  

  本日は以上です。ありがとうございました。  
