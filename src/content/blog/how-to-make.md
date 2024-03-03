---
layout: "@layouts/Blog.astro"
title: "新しいウェブサイトを作る"
tags: ["frontend", "cloudflare", "porkbun", "astro", "stylus", "typescript", "svelte", "qwik"]
published: true
published_at: "2024-01-07"
updated_at: "2024-03-03"
---

## どうして作ったか  

  大したきっかけがあるわけでもなく、**作ってみたかったから**です。
  また、苦手なフロントエンドを克服しようとも考えたからです。
  <!-- また、**費用を掛けたくなかった**という理由もあります。   -->

[nuxt]: https://nuxt.com/
[github-pages]: https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages
[next]: https://nextjs.org/
[vercel]: https://vercel.com/
[gatsby]: https://www.gatsbyjs.com/
[hugo]: https://gohugo.io/
[netlify]: https://www.netlify.com/
[astro]: https://astro.build/
[cloudflare-pages]: https://pages.cloudflare.com/

## ホスティング・技術選定  

  以前、[Nuxt.js][nuxt]と[GitHub Pages][github-pages]でウェブサイトを作ったことがあります。
  次は[Next.js][next]と[Vercel][vercel]をで作るつもりでした。  
  しかし、[Astro][astro]と[Cloudflare Pages][cloudflare-pages]を知り、
  それらでウェブサイトを作ることにしました。  

  フロントエンドフレームワークやSSGで挙げるならば[Gatsby][gatsby]や[Hugo][hugo]がありますが、
  パフォーマンスの点でそれらと比べると[Astro][astro]は一つ抜けている感じはします。  
  静的ホスティングなら[Netlify][netlify]もありますが、
  CloudflareのCDNを使えるというだけでも[Cloudflare Pages][cloudflare-pages]には大きな価値があります。  

  選定の基準としては、
  **パフォーマンス** >= **メンテナンスの状態** >= **使いやすさ**といった感じです。  

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

  Astroの素晴らしい点は沢山ありますが、代表的なのは以下となります。  

### インテグレーション  

  `package.json`に追加されるので、Astro専用のパッケージという立ち位置です。  
  [React][@astrojs/react]や[Vue][@astrojs/vue]などのUIフレームワークや、
  [TailwindCSS][@astrojs/tailwind]などのCSSフレームワークに加えて、
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

  詳しくは[ドキュメントをご覧ください。](https://docs.astro.build/ja/guides/integrations-guide/)  
  Astro公式が開発していないインテグレーションを含む[リストはこちらになります。][integrations]  

### 高速  

  [パフォーマンスを重視して開発されている][astro-development]ので、とにかく速いです。
  [JavaScriptのコードが全てHTMLとCSSに変換されます][zero-js]（出来上がった形としてクライアントに送信される）。  
  しかし、そんなことをすれば動的なコンテンツは動かなくなります。
  その対応策として[クライアントディレクティブ][client-directives]があります。
  これを使えば[一部（コンポーネント）のみがJavaScriptで制御される][astro-island]ことになります。  

  この一部が[Astroコンポーネント][astro-components]になるわけですが、
  [React][@astrojs/react]や[Vue][@astrojs/vue]などで作ったコンポーネントも呼び出せます。
  更に、複数のUIフレームワークを混合的に使えます。
  もちろん、完全に静的なコンポーネントを作ることも可能で、その場合は通常通り変換が行われます。  

  この高速化に複雑な設定は必要ありません。
  もっと多くのことをしようとすれば複雑にはなりますが、これについても言及されています。  

  > **単純なJSXのみで記述することも出来るし**（UIフレームワークなしで）、
  必要ならば、**より踏み込んだ機能**（新しい機能やAPI、UIフレームワークなど）**にも手を出せる。**  

  これらをAstroの開発陣は[「複雑さへのオプトイン」][astro-is-easy]と呼んでいるそうです。  

### ドキュメント  

  [公式ドキュメントが日本語に対応しています。](https://docs.astro.build/ja/getting-started/)
  日本語化が進んでいない部分がありますが、基本的な機能や技術については書かれています。
  [チュートリアルは**ブログの作成**][tutorial]が日本語化されています。

  <u>日本語の記事もそれなりに書かれていますが、**技術に偏りがあるのは事実です。**</u>  
  <u>より多くのことをしたいなら、**英語の記事を読む必要はあります。**</u>

- [Qiita](https://qiita.com/tags/astro)
- [Zenn](https://zenn.dev/topics/astro)

### 所感  

  学習コストは低いですが、新しい機能などはドキュメントが英語なので厳しい部分もあります。
  追加されて間もない機能は英語の記事もほとんどありません。  

  特定のUIフレームワークに依存しない点は、移行について考える必要が少なくなりますし、
  技術的に不可能なことが出来る場合もあります。  

  高速化については簡単に行えるわけですが、あえて簡単だとは言いません。  
  理由としては、コンテンツやUIフレームワーク・ホスティングサービス（サーバ）に依存するからです。  
  その点を除けば、簡単に速いウェブサイトが作れると言えるでしょうか。  

[cloudflare-cdn]: https://www.cloudflare.com/ja-jp/application-services/products/cdn/
[cloudflare-security]: https://www.cloudflare.com/ja-jp/security/
[cloudflare-transfar]: https://www.cloudflare.com/ja-jp/plans/developer-platform/
[cloudflare-workers]: https://www.cloudflare.com/ja-jp/developer-platform/workers/

## [Cloudflare Pages][cloudflare-pages]  

### メリット  

  [CloudflareのCDN][cloudflare-cdn]が使える点にあります。
  [Cloudflareが提供するセキュリティの機能][cloudflare-security]も利用可能で、
  設定はSaaSで非常に簡単に行えます。  
  また、[無制限の転送量][cloudflare-transfar]が挙げられます。  

  SSRについては[Vercelのようなサーバーレス関数][cloudflare-workers]が用意されています。
  これは無制限ではありませんが、**1日10万リクエストまで**とそれなりの制限があります。  

  ビルドや高速化の設定もSaaSで簡単に行えます。様々なフレームワークに最適化することも出来ます([Astro][astro]や[Next.js][next]、[Nuxt][nuxt]など)。
  ビルドにかかる時間は**フレームワークに依存**しますが、**キャッシュ機能**があるのでさほどストレスは無いかもしれません。  

### デメリット  

  1か月に500デプロイまでの制限があります。
  有料プランは決して安く無いため、更新頻度か高いウェブサイトや複数のウェブサイトの運用には向いていないでしょうか・・・。  

[stylus]: https://stylus-lang.com  
[sass]: https://sass-lang.com/  
[postcss]: https://postcss.org/  

[boilerplate-code]: https://ja.wikipedia.org/wiki/%E3%83%9C%E3%82%A4%E3%83%A9%E3%83%BC%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%B3%E3%83%BC%E3%83%89
[stylus-vitejs]: https://ja.vitejs.dev/guide/features.html#css-pre-processors
[stylus-syntax]: https://github.com/stylus/stylus/issues/2293

## [Stylus][stylus]  

  [Stylus][stylus]の特徴的な点は[ボイラープレートコード][boilerplate-code]が最小限であることです。  

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

  ```stylus
  div
    display flex
    a
      text-decoration none
      &:hover
        text-decoration underline
  ```  

  このように、波括弧やコロン・セミコロンが省略されていることが分かります。
  上のコードも[Stylus][stylus]ではエラーになりません。
  CSSには完全に下位互換があり、[SASS/SCSS][sass]には一部下位互換があります。  
  [SASS/SCSS][sass]ほど情報が充実しておらず、機能も[SASS/SCSS][sass]の方がありますが、[Stylus][stylus]はその構文及び言語仕様に価値があります。  

  しかし、[セミコロン等を記述しなければ正しく構文を理解しなかったり][stylus-syntax]、
  [importエイリアスに対応していない（対応しない？）][stylus-vitejs]などもあるので、
  まだまだ[SASS/SCSS][sass]からポジションを奪取するほどの強さは感じられません。  

  ちなみに、[PostCSS][postcss]と[Stylus][stylus]は併用することが出来ます。  

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

  ドメインを買おうとしたのは2023年の夏頃だったと記憶してますが、
  その当時[Google Domains][google-domains]が移行するという話がありました。
  移行先の[Squarespace][squarespace]は全く知らない企業で、
  購入先は別の企業からと考えていました。  
  [お名前.com][onamae]や[Xserver domain][xdomain]、[ムームードメイン][muumuu]など日本の企業は沢山ありますが、
  これらは更新費が簡単にチェックできないため非常に面倒です（それも戦略なのでしょうが・・・）。  

  調べていると、[Cloudflareがかなり安価でドメインを販売している][cloudflare-registrar]ようでした。
  しかし、その当時は[.devドメインは販売しておらず、追加も怪しい状況][cloudflare-dev]にありました（[後日、追加されたようです][cloudflare-x]）。  
  調査の末、[Porkbun][porkbun]という企業を見つけました。  
  この[Porkbun][porkbun]は安価で、更新費を包み隠さないところや、
  Whois代行を当然のようにタダでつけてくれます。
  支払いの手段も多く、
  [Paypal][porkbun-paypal]が使えます。  
  [SSLも無料で使えます][porkbun-ssl]が、
  私はCloudflareで管理しているのでこの恩恵特に受けていません。
  どうしてもCloudflareを使えない・使いたくない人は使うといったところでしょうか。  

[svelte]: https://svelte.jp/
[react]: https://ja.react.dev/
[pagefind-default-ui]: https://pagefind.app/docs/ui-usage/

## [Svelte][svelte]  

  [Svelte][svelte]も[ボイラープレートコード][boilerplate-code]が少なく、
  [React][react]などと比べて学習コストが低いです（日本語のドキュメントとチュートリアルがあります）。
  ただし、[React][react]を使い続けてきたエンジニアにとっては
  言語仕様の点で異なる点があるので少しとっつきにくい部分はあります。  

  パフォーマンスが高く、アニメーションの機能を標準で搭載していたり、便利で高速というのが[Svelte][svelte]のメリットです。
  エコシステム（ライブラリやパッケージ）が[React][react]などより少ないこと、知見が少ないなどがデメリットでしょうか。
  少なくとも大規模なウェブサイトやWEBアプリケーションの開発には[React][react]の方が分がある気がします。
  個人的に[Svelte][svelte]は[Astro][astro]と非常に相性が良いと思っています（ランタイムがほぼなく、バンドルサイズが小さいため）。  

  ちなみに[PagefindのDefaultUI][pagefind-default-ui]は[Svelte][svelte]で作られています。  

[visible]: https://docs.astro.build/ja/reference/directives-reference/#clientvisible
[mitosis]: https://github.com/BuilderIO/mitosis
[qwik]: https://qwik.dev/
[qwik-city]: https://qwik.dev/docs/qwikcity/

## [Qwik][qwik]  

  パフォーマンスが非常に高いフレームワークで、Hydrationを行いません。
  HydrationとはSSGなどで生成されたHTMLにインタラクティブな要素を追加するための下準備のことです。
  乾いたHTML(砂漠)にHydration(水分補給)をして、
  ウェブサイトが動き出す（緑化して動物などが生き生きとしている）ようなイメージでしょうか（ゴミみたいな例えですみません）。
  従来のフレームワークでは非同期的にバッググラウンドでイベントスクリプトをロードするわけですが、
  この[Qwik][qwik]はイベントが発生する際にダウンロードします。
  しかし、それではイベントの発生にラグが生じるのではと思うかもしれません。
  それについては[Qwik City][qwik-city]によるキャッシュやプリフェッチなどで最適化されるようです。
  Astroなどは一部をダウンロードするので従来より大幅に改善していますが、初回ロードでは[Qwik][qwik]には適いません。
  Astroで[Qwik][qwik]を使用することは可能ですが、[Qwik City][qwik-city]の恩恵を受けることが出来ない為、
  [Qwik][qwik]をフルで活用したいならば[Qwik City][qwik-city]を使わなければなりません。

  構文的には[React][react]に近いです。[React][react]にある機能がそのまま移植されていたり、
  名前がほとんど同じだったりすることがあります。
  しかし、[Qwik][qwik]の問題点はその学習コストの高さです。情報量も極めて少なく、
  ドキュメントもエコシステムも若干不十分なところがあるのは確かです。
  正直、妥協して[Svelte][svelte]を使う方が全然楽です。
  [Astro][astro]には[client:visibleというクライアントディレクティブ][visible]があり、
  これは画面内に映った時点でロードするというものであり初回ロードをかなり改善できます。
  そう考えていくと[Qwik][qwik]を使わずともかなりのパフォーマンスを維持できることは間違いないでしょうが、
  [Qwik][qwik]には絶対的なパフォーマンスがあるため、学習コストに見合う価値があるのは間違いないです。

  各フレームワークのコードに変換できる[mitosis][mitosis]のようなイカれたプロジェクトもあるので、
  学習コストがそもそも無くなる場合もあります。しかしながら[Qwik][qwik]は知名度も高いとは言い切れず、確率されたフレームワークで無いことも確かです。
  BuilderIOが今後どのような動きを見せるのか注目すべきではありそうです。

## 開発環境は?
  
  > [7rs/pages](https://github.com/7rs/pages)  

  ちなみに、このウェブサイトはオープンソースです。貢献して頂けるのなら非常に助かりますが、私にやる気があるかはわかりません。現在は多言語化に頭を悩ませております。  
  
  本日は以上です。ありがとうございました。  
