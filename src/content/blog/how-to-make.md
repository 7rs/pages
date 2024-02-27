---
layout: "@layouts/Blog.astro"
title: "新しいウェブサイトを作る"
tags: ["frontend", "cloudflare", "astro", "stylus", "typescript", "svelte"]
published: true
published_at: "2024-02-25"
---

## どうして作ったのか  

  大したきっかけがあるわけでもなく、**作ってみたかったから**です。また、**費用を掛けたくなかった**という理由もあります。  

[nuxt]: https://nuxt.com/  
[github-pages]: https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages  
[next]: https://nextjs.org/  
[vercel]: https://vercel.com/  
[netlify]: https://www.netlify.com/  
[astro]: https://astro.build/  
[cloudflare-pages]: https://pages.cloudflare.com/  

## ホスティング・技術選定  

  [Nuxt.js][nuxt]と[GitHub Pages][github-pages]でウェブサイトを作ったことがあり、
  次は[Next.js][next]と[Vercel][vercel]をで作るつもりでした。  
  しかし、[Astro][astro]と[Cloudflare Pages][cloudflare-pages]を知り、
  それらでウェブサイトを作ることにしました。  
  静的ホスティングなら[Netlify][netlify]もありますが、個人的にCloudflareに信頼があったためです。

[integrations]:  https://astro.build/integrations/
[@astrojs/react]: https://docs.astro.build/ja/guides/integrations-guide/react/
[@astrojs/vue]: https://docs.astro.build/ja/guides/integrations-guide/vue/
[@astrojs/tailwind]: https://docs.astro.build/en/guides/integrations-guide/tailwind/
[official-integrations]: https://docs.astro.build/ja/guides/integrations-guide/#%E5%85%AC%E5%BC%8F%E3%82%A4%E3%83%B3%E3%83%86%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3
[integration-add]: https://docs.astro.build/ja/guides/integrations-guide/#%E3%82%A4%E3%83%B3%E3%83%86%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E8%87%AA%E5%8B%95%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97
[integration-update]: https://docs.astro.build/ja/guides/integrations-guide/#%E8%87%AA%E5%8B%95%E3%82%A2%E3%83%83%E3%83%97%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%89

[astro-development]: https://docs.astro.build/ja/concepts/why-astro/#%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E3%81%A7%E9%AB%98%E9%80%9F
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

  [１コマンドでインストールから設定まで自動で行ってくれます。][integration-add]  

  ```sh
    pnpm dlx @astrojs/upgrade
  ```  

  [アップグレード（アップデート）も一括で行ってくれます。][integration-update]  

  [詳しくはドキュメントをご覧ください。](https://docs.astro.build/ja/guides/integrations-guide/)  

  Astro公式が開発していないインテグレーションを含む[リストはこちらになります。][integrations]  
  私が使用しているインテグレーションは以下になります。

- [@astrojs/svelte](https://docs.astro.build/ja/guides/integrations-guide/svelte/)
- [@astrojs/mdx](https://docs.astro.build/ja/guides/integrations-guide/mdx/)
- [@astrojs/sitemap](https://docs.astro.build/ja/guides/integrations-guide/sitemap/)
- [@astrojs/rss](https://docs.astro.build/ja/guides/rss/)
- [astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt)
- [astro-compress](https://github.com/astro-community/AstroCompress)
- [astro-purgecss](https://github.com/codiume/orbit/tree/main/packages/astro-purgecss)
- [astro-icon](https://www.astroicon.dev/)
- [astro-pagefind](https://github.com/shishkin/astro-pagefind)  

### 高速  

  [パフォーマンスを重視して開発されている][astro-development]ので、とにかく速いです。
  [JavaScriptのコードが全てHTMLとCSSに変換されます][zero-js]（出来上がった形としてクライアントに送信される）。  
  しかし、そんなことをすれば動的なコンテンツは全てCSSで制御することになります。
  その対応策として[クライアントディレクティブ][client-directives]があります。
  これを使えば一部（コンポーネント）のみがJavaScriptで制御されることになります。  

  この一部が[Astroコンポーネント][astro-components]になるわけですが、
  [React][@astrojs/react]や[Vue][@astrojs/vue]などで作ったコンポーネントも呼び出せます。
  これにより、複数のUIフレームワークを混合的に使えます。  
  [Qwik](https://qwik.dev/)をぶち込めばより高速になりそうですが、この辺は不明です。今後試していくつもりです。

  この高速化は複雑な設定をすることなくできる点が非常に良いです。
  もっといろいろなことをしようとすれば複雑にはなりますが、これについても解説されています。  
  **単純なJSXのみで記述することも出来るし**（UIフレームワークなしで）、
  必要ならば、**より踏み込んだ機能**（新しい機能やAPI、UIフレームワークなど）**にも手を出せる。**
  [これらをAstroの開発陣は「複雑さへのオプトイン」と呼んでいるそうです。][astro-is-easy]  

### ドキュメント  

  [公式ドキュメントが日本語に対応しています。](https://docs.astro.build/ja/getting-started/)
  日本語化が進んでいない部分がありますが、基本的な機能や技術については書かれています。
  [チュートリアル][tutorial]は**ブログの作成**が日本語化されています。

  <u>日本語の記事もそれなりに書かれていますが、**技術に偏りがあるのは事実です。**</u>  
  <u>変わったことをする場合は**英語の記事を読む必要はあります。**</u>

- [Qiita](https://qiita.com/tags/astro)
- [Zenn](https://zenn.dev/topics/astro)

### 所感  

  学習コストは低いですが、新しい機能などはドキュメントが英語なので厳しい部分もあります。
  追加されて間もない機能は英語の記事もほとんどありません。  

  特定のUIフレームワークに依存しない点は、移行について考える必要が少なくなりますし、
  技術的に不可能なことが出来る場合もあります。  

  高速化については簡単に行えるわけですが、あえて簡単だとは言いません。  
  理由としては、コンテンツやUIフレームワーク・ホスティングサービス（サーバ）に依存するからです。  
  その点を除けば、簡単に速いウェブサイトが作れると断言できるでしょう。  

[cf-github]: https://developers.cloudflare.com/pages/configuration/git-integration/#github-1  
[github]: https://ja.wikipedia.org/wiki/GitHub  
[cdn]: https://ja.wikipedia.org/wiki/Content_delivery_network  
[cdn-usage]: https://kinsta.com/jp/cloudflare-market-share/  
[tls]: https://ja.wikipedia.org/wiki/Transport_Layer_Security  
[http3]: https://ja.wikipedia.org/wiki/HTTP/3  

## [Cloudflare Pages][cloudflare-pages]  

### メリット  

  CloudflareのCDNが使える点にあります。
  Cloudflareが提供するセキュリティもできます。また、セキュリティの設定もSaaSで非常に簡単に行えます。  

  静的ホスティングサービスとしては、無制限の転送量が挙げられます。
  SSRについてはVercelのようなサーバーレス関数が用意されています。
  これは無制限ではありませんが、１日１０万リクエストというそれなりの制限があります。  

  ビルドや高速化の設定もSaaSで簡単に行えます。様々なフレームワークに最適化することも出来ます。
  ビルドにかかる時間はフレームワークに依存しますが、キャッシュの機能がついています。  

### デメリット  

  一か月に500デプロイまでの制限があることです。
  有料プランは決して安くは無いため、更新頻度か高いウェブサイトや複数のウェブサイトの運用には向いていないでしょうか・・・。  

- 簡単なビルド設定[^cloudflare-build]
- [GitHub][github]との[連携][cf-github]
- 無制限の転送量
- [世界一][cdn-usage]の[CDN][cdn]
- [TLS][tls]と[HTTP3(QUIC)][http3]

<!--divide -->

  > - Pagesを使用すると、信頼できるフルスタックアプリケーションをわずかな時間で構築、デプロイ、配信できます。最低限の設定で、開発者、デザイナー、製品がコラボし、デプロイできます。  
  > - ビルドのキャッシュ機能により、プロジェクトの一部をキャッシュして以降の構築での時間の節約することで、強力なPages体験をお届けします。  
  > [Cloudflare Pagesで次のビッグアイデアを実現しよう](https://www.cloudflare.com/ja-jp/developer-platform/pages/)  
  > - Cloudflareが提供する世界最速クラスの広範なグローバルネットワークは、世界のインターネット人口のおよそ95%から約50ミリ秒圏内にあります。  
  > [Cloudflareのグローバルネットワーク](https://www.cloudflare.com/ja-jp/network/)  
  > - Cloudflareでは、Webサイト所有者がオリジンを変更することなく、HTTP/3のサポートを有効にすることができます。  
  > [HTTP/3とは？](https://www.cloudflare.com/ja-jp/learning/performance/what-is-http3/)  

  **[Cloudflare Pages][github-pages]** の[無料プランでは1ヶ月500デプロイの制限](https://www.cloudflare.com/ja-jp/plans/developer-platform/)があるので、
  更新頻度が高いウェブサイトは厳しいです。また、Cloudflareの有料プランは普通に高いです。  

[^cloudflare-build]: ![cf-build](/images/cf-build.png)

[stylus]: https://stylus-lang.com  
[important]: https://developer.mozilla.org/ja/docs/Web/CSS/important  
[less]: https://lesscss.org/  
[sass]: https://sass-lang.com/  
[stylus-docs]: https://stylus-lang.com/docs/  
[postcss]: https://postcss.org/  

## スタイルはどうしてる?  

  [Stylus][stylus]を使ってます。CSSフレームワーク[^css-framework]は使いません。  

- HTMLはマークアップ言語であり、スタイルを指定する言語ではないから[^opinion]
- [!important][important]が嫌い
  
  などが理由です。標準化されたスタイルが欲しいだけで、私が設定したスタイルを上書きされるのは鬱陶しいです。また、[Astro][astro]のスタイルは[名前空間][scoped-css]を持つので、ほとんどの場合は[!important][important]を使う必要がないです。

## [Stylus][stylus]  

- 波括弧やコロン・セミコロンを省略可能
- プログラミング言語の概念を使える
- CSS、[SCSS/SASS][sass]、[Less][less]の記法が使える
- ChatGPTが対応している
- [ドキュメント(英語)][stylus-docs]

  > [Stylus][stylus] is Expressive, dynamic, and robust CSS  
  > [Implementation Comparisons](https://stylus-lang.com/docs/compare.html)  

  記事がほとんどないので苦労はしますが、非常に書きやすいです。[PostCSS][postcss]と連携も出来ます。試し書きとしては以下のようになりますが、機能はもっとあります。  

  ```stylus
  colors: {
    background: white,
    icon: black,
    link: blue,
    dark: {
      background: black,
      icon: white,
      link: red,
    }
  }

  snas-latin = "Fira Sans"

  body
    background colors.background
    @media (prefers-color-scheme dark)
      background colors.dark.background

  hoverable(_color)
    color _color
    &:hover
      color rgba(_color, 0.5)

  sans(size, height)
    font size/height snas-latin, "Trebuchet MS", Verdana, Arial, sans-serif

  p
    sans(1rem, 1.5rem)
    a
      hoverable(colors.link)
      @media (prefers-color-scheme dark)
        hoverable(colors.dark.link)

  .title
    sans(2rem, 2.5rem)

  .brand
    @extend .title
    display flex
    gap 0.75rem
    img
      mask-image var(--iconURL)
      background colors.icon
      @media (prefers-color-scheme dark)
        background colors.dark.icon
  ```  

[^css-framework]: CSSフレームワークとは、標準化されたスタイルやコンポーネントを簡単に使えるツールのことです。  
  また、以下も参照してください。  
  [Wikipedia](https://en.wikipedia.org/wiki/CSS_framework)  
  デザインやスタイルを効果的かつ迅速に構築するためのツールセット。標準化されたデザインやコンポーネントを使ってスタイルを適用することができる。(ChatGPT 3.5)  

[^opinion]: 主観的な意見ですが、スタイルに問題があるとき、スタイルシートのファイルに限られたが保守性は高いです。無理なくスタイルシートを記述出来れば、CSSフレームワークは必須ではないのです。(無論、チームの場合は別。)  

[modrinth]: https://modrinth.com/  
[mdn-web-docs]: https://developer.mozilla.org/ja/docs/Web  
[apple-color]: https://developer.apple.com/design/human-interface-guidelines/color  
[iosevka]: https://typeof.net/Iosevka/  
[discord]: https://discord.com/  
[zenn]: https://zenn.dev/  

## デザインはどうやって?  

- [Modrinth][modrinth]
- [MDN Web Docs][mdn-web-docs]
- [Zenn][zenn]
- [Discord][discord]
- [Iosevka][iosevka]
- [Color | Apple Developer Documentation][apple-color]  

  以上のサイトを参考にしました。特に[Modrinth][modrinth]や[Zenn][zenn]のデザインが好きです。速度や使いやすさも重要ですが、かっこいいサイトは気持ちも上がります。  

[porkbun]: https://porkbun.com/  
[google-domains]: https://support.google.com/domains/answer/13689670  
[square-space]: https://domains.squarespace.com/  
[cloudflare-register]: https://www.cloudflare.com/ja-jp/products/registrar/  
[onamae]: https://www.onamae.com/  
[xserver-domain]: https://www.xdomain.ne.jp/  
[porkbun-kb]: https://kb.porkbun.com/  
[porkbun-ssl]: https://porkbun.com/products/ssl  
[porkbun-whois]: https://porkbun.com/products/whois_privacy  
[porkbun-payment]: https://porkbun.com/support/payment_options  
[tld]: https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%83%E3%83%97%E3%83%AC%E3%83%99%E3%83%AB%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3  

## ドメインはどこで?  

  [Porkbun][porkbun]を使いました。
  当時、[Google Domains][google-domains]が[SquareSpace][square-space]に移行する段階で安定しておらず、[Cloudflare][cloudflare-register]は.devに対応していませんでした。
  [お名前.com][onamae]や[Xserver Domain][xserver-domain]は知名度と信頼はありますが、安くはないのです。加えて大量のメールを送り付けてきたり、購入直前まで価格がはっきりしないのも気に食わないです（価格表示について[お名前.com][onamae]はマシな方だと思います）。
  ちなみに、移行先の[SquareSpace][square-space]はこの中で一番高いです。
  候補にすらなりません。また、[Cloudflare][cloudflare-register]は現在`.dev`に対応しています。  

## [Porkbun][porkbun]  

- 良心価格
- 価格表示
- [ドキュメント(英語)][porkbun-kb]
- 無料の[WHOIS代行][porkbun-whois]と[SSL][porkbun-ssl]
- [PayPal][porkbun-payment]が使用可能
- 対応している[TLD][tld]の数

  > We are the #1 ranked registrar for lowest registration and renewal prices.  
  > 登録・更新価格の安さ1位のレジストラ  
  > Paying too much? Transfer your domain to us and get the best multi-year value.  
  > 支払いすぎてない？ドメインをPorkbunに移管して、費用を削減しよう。  
  > [Porkbun][porkbun]  

  Porkbunの良いと感じる部分はセール後の価格や更新価格を隠さないことです。
  安いのもそうですが、こういった意識があるのは好ましいです。
  ただ、`.jp`はないですし、日本語は対応してません。`.dev`や`.app`は買えます。
  ちなみに、Paypalなどを通して$で払うことになるので、価格が変動します。  

[vscode-astro]: https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode
[vscode-change-case]: https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case
[vscode-code-snap]: https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap
[vscode-editorconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vscode-git-graph]: https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph
[vscode-git-history]: https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory
[vscode-github-pull]: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
[vscode-git-lens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[vscode-gremlins]: https://marketplace.visualstudio.com/items?itemName=nhoizey.gremlins
[vscode-indent-rainbow]: https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow
[vscode-intelli-code]: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode
[vscode-js-and-ts]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next
[vscode-markdown]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
[vscode-path-intellisense]: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-stylus]: https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus
[vscode-tabnine]: https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode
[vscode-dracula]: https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula
[vscode-bracket-lens]: https://marketplace.visualstudio.com/items?itemName=wraith13.bracket-lens
[vscode-error-lens]: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
[vscode-glass-it]: https://marketplace.visualstudio.com/items?itemName=s-nlf-fh.glassit
[vscode-peacock]: https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock

[wsl2]: https://learn.microsoft.com/ja-jp/windows/wsl/compare-versions  
[vscode]: https://code.visualstudio.com/  
[alacritty]: https://alacritty.org/  
[fish]: https://github.com/fish-shell/fish-shell  
[starship]: https://starship.rs/ja-JP/  
[fnm]: https://github.com/Schniz/fnm  
[pnpm]: https://pnpm.io/ja/  
[parallels]: https://www.parallels.com/jp/  
[mac]: https://www.apple.com/jp/mac/  
[apple-m-series]: https://ja.wikipedia.org/wiki/Apple%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3#M%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA  
[bootcamp]: https://support.apple.com/ja-jp/102622  
[laptop]: https://jp.msi.com/Laptop/GF63-Thin-11UX  
[arch]: https://www.archlinux.jp/  

## 開発環境は?

- [WSL 2][wsl2]
- [fnm][fnm]  
- [pnpm][pnpm]  
- [Alacritty][alacritty]  
- [fish][fish]  
- [Starship][starship]  
- [VSCode][vscode]  
  - [Dracula][vscode-dracula]  
  - [Astro][vscode-astro]  
  - [stylus][vscode-stylus]
  - [JavaScript and TypeScript Nightly][vscode-js-and-ts]  
  - [Markdown All in One][vscode-markdown]  
  - [Prettier][vscode-prettier]  
  - [EditorConfig for VS Code][vscode-editorconfig]  
  - [GitLens][vscode-git-lens]  
  - [Git Graph][vscode-git-graph]  
  - [Git History][vscode-git-history]  
  - [GitHub Pull][vscode-github-pull]  
  - [indent-rainbow][vscode-indent-rainbow]  
  - [Error Lens][vscode-error-lens]  
  - [Bracket Lens][vscode-bracket-lens]  
  - [Gremlins tracker for Visual Studio Code][vscode-gremlins]  
  - [change-case][vscode-change-case]  
  - [Path Intellisense][vscode-path-intellisense]  
  - [IntelliCode][vscode-intelli-code]  
  - [Tabnine][vscode-tabnine]  
  - [Peacock][vscode-peacock]  
  - [CodeSnap][vscode-code-snap]
  - [GlassIt-VSC][vscode-glass-it]  

  また、[Stackshare](https://stackshare.io/7rs/pages)もご参照下さい。  

  正直[Mac][mac]で開発する方が楽ではあるのですが、[M Series][apple-m-series]では[BootCamp][bootcamp]がほぼ使えない状態で、
  [Parallels Desktop][parallels]で使うのも好ましくないので[Windowsのノート][laptop]を買いました。
  Windowsで開発する場合、[WSL][wsl2]を使うのが楽なのですが、[WSL][wsl2]はかなりゴミです。もちろん、[Linux][arch]をインストールすることは可能ですが、利便性は悪いです。  

  > [7rs/pages](https://github.com/7rs/pages)  

  ちなみに、このウェブサイトはオープンソースです。貢献して頂けるのなら非常に助かりますが、私にやる気があるかはわかりません。現在は多言語化に頭を悩ませております。  
  
  本日は以上です。ありがとうございました。  
