---
layout: ../../layouts/Layout.astro
title: How did you develop this website?
tags: [frontend, cloudflare, astro, stylus]
slug: "how-to-make"
---

# どうやってサイトを作ったの?

[nuxt]: https://nuxt.com/  
[github-pages]: https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages  
[next]: https://nextjs.org/  
[vercel]: https://vercel.com/  
[netlify]: https://www.netlify.com/  
[astro]: https://astro.build/  
[cloudflare-pages]: https://pages.cloudflare.com/  
## 何を使ったの?  

  ### [Astro][astro]と[Cloudflare Pages][cloudflare-pages]を使っています  
  以前は、[Nuxt.js][nuxt]と[GitHub Pages][github-pages]でウェブサイトを作りました。次は[Next.js][next]と[Vercel][vercel]を使う予定でした。静的ホスティングでいえば[Netlify][netlify]もありますね。しかし、[Astro][astro]と[Cloudflare Pages][cloudflare-pages]を知り、それらでウェブサイトを作ることにしました。  

  [integrations]: https://docs.astro.build/ja/guides/integrations-guide/  
  [scoped-css]: https://ja.vuejs.org/api/sfc-css-features  
## [Astro][astro]  

  - [複数のコンポーネントライブラリ][integrations]を同じプロジェクトで使用可能    
  - 名前空間のあるCSS ([Scoped CSS][scoped-css])  
  - JavaScriptのコードを最小限にし、高速化  
  - 充実した日本語のドキュメント  

  > - Astroはオールインワンのウェブフレームワークです。Astroには、ウェブサイトを作成するために必要なすべてが組み込まれています。  
  > - デフォルトで高速: Astroで遅いウェブサイトを作成することは不可能であるべきです。私たちの目標は、Astroを使えば、遅いウェブサイトを作るのはほぼ不可能になることです。  
  > - コミュニティの何百人ものコントリビューターによって積極的にメンテナンスされ14の言語で提供されているドキュメント  
  > [Astroを選ぶ理由](https://docs.astro.build/ja/concepts/why-astro/)  

  しかし、日本の記事は全然無いので厳しい部分はあると思います。  

  [github]: https://ja.wikipedia.org/wiki/GitHub  
  [cdn]: https://ja.wikipedia.org/wiki/Content_delivery_network  
  [tls]: https://ja.wikipedia.org/wiki/Transport_Layer_Security  
  [http3]: https://ja.wikipedia.org/wiki/HTTP/3  
## [Cloudflare Pages][cloudflare-pages]  

  - 自動のビルド設定（Astroの設定はほぼいらない） 
  - [GitHub][github]との連携（メイン・プレビューの2つ）  
  - 無制限の転送量（サーバーレスやバックエンドは含まれない）  
  - 当然のようについてくる[CDN][cdn]  
  - [TLS][tls]化はもちろん、[HTTP3(QUIC)][http3]に対応  

  > - Pagesを使用すると、信頼できるフルスタックアプリケーションをわずかな時間で構築、デプロイ、配信できます。最低限の設定で、開発者、デザイナー、製品がコラボし、デプロイできます。  
  > - ビルドのキャッシュ機能により、プロジェクトの一部をキャッシュして以降の構築での時間の節約することで、強力なPages体験をお届けします。  
  > [Cloudflare Pagesで次のビッグアイデアを実現しよう](https://www.cloudflare.com/ja-jp/developer-platform/pages/)  
  > - Cloudflareが提供する世界最速クラスの広範なグローバルネットワークは、世界のインターネット人口のおよそ95%から約50ミリ秒圏内にあります。  
  > [Cloudflareのグローバルネットワーク](https://www.cloudflare.com/ja-jp/network/)  
  > - Cloudflareでは、Webサイト所有者がオリジンを変更することなく、HTTP/3のサポートを有効にすることができます。  
  > [HTTP/3とは？](https://www.cloudflare.com/ja-jp/learning/performance/what-is-http3/)  
 
  しかし、 **[Cloudflare Pages][github-pages]** の[無料プランでは1ヶ月500デプロイの制限](https://www.cloudflare.com/ja-jp/plans/developer-platform/)があるので、更新頻度が高いウェブサイトは難しいです。また、 **[Astro][astro]** はドキュメントは翻訳されてるものの、情報は少ないので開発する上で英語の記事を読む必要はあります。  


[stylus]: https://stylus-lang.com  
[important]: https://developer.mozilla.org/ja/docs/Web/CSS/important  
[less]: https://lesscss.org/  
[sass]: https://sass-lang.com/  
[stylus-docs]: https://stylus-lang.com/docs/  
[postcss]: https://postcss.org/  
## スタイルはどうしてる?  

  #### [Stylus][stylus]を使ってます  
  CSSフレームワーク[^css-framework]は使いません。  
  - HTMLはマークアップ言語であり、スタイルを指定する言語ではないから[^opinion]  
  - [!important][important]が嫌い  
  
  などが理由です。標準化されたスタイルがほしいだけなのです。[Astro][astro]のスタイル指定は特殊で、ほとんどの場合は[!important][important]を使う必要がないです。

## [Stylus][stylus]  

  - 記述量が少なく、波括弧やコロン・セミコロンも省略可能
  - プログラミング言語の概念を使える  
  - CSS、[SCSS/SASS][sass]、[Less][less]の記法が使える  
  - ChatGPTが対応している  
  - [ドキュメント(英語)][stylus-docs]   

  > [Stylus][stylus] is Expressive, dynamic, and robust CSS  
  > [Implementation Comparisons](https://stylus-lang.com/docs/compare.html)  

  記事もほぼなく、難易度は高いですが、需要はあります。  
  [Astro][astro]では[PostCSS][postcss]を使いたければ、使いたいときに使いたい範囲だけ使えます。  

[^css-framework]:  CSSフレームワークとは、繰り返し行うデザインを定義化して、車輪の再開発を減らすツールです。また、コンポーネントのような要素を簡単に再利用できるので、JavaScriptやCSSの詳しい知識が無くてもプロのようなウェブサイトデザインを実現できます。  
  また、以下も参照することを推奨します。  
  簡単に標準に準拠したWebデザインを可能にするライブラリ。 ([Wikipedia](https://en.wikipedia.org/wiki/CSS_framework))  
  デザインやスタイルを効果的かつ迅速に構築するためのツールセット。標準化されたデザインやコンポーネントを使ってスタイルを適用することができる。(ChatGPT 3.5)  

[^opinion]: CSSフレームワークはファイルとして分離されているのですが、問題を発見したときに、調査するのはHTMLファイルです。その次はスタイルシートのファイルで、最後にCSSフレームワークでしょう。これは実に非効率です。スタイルに問題があるならスタイルシートのみに絞られている方が保守性は高いです。これは主観的な意見ですが、MDN Docsなどを参考にしてスタイルシートを記述できるのなら、我慢してCSSフレームワークを使う必要はありません。(当然、チームの場合は要相談だとは思いますが。)


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

  [Porkbun][porkbun]を使いました。当時、Google DomainsがSquareSpaceに移行する段階で安定しておらず、[Cloudflare][cloudflare-register]は.devに対応していませんでした。[お名前.com][onamae]や[Xserver Domain][xserver-domain]は知名度と信頼はありますが、安くはないのです。

## [Porkbun][porkbun]  

  - 良心価格  
  - 隠さない値段(セール後の値段や更新費用など)  
  - 充実した[ドキュメント(英語)][porkbun-kb]  
  - 当然のようについてくる[WHOIS代行][porkbun-whois]と[SSL][porkbun-ssl]  
  - [PayPal][porkbun-payment]が使える  
  - 対応し過ぎな[TLD][tld]の数([Cloudflare][cloudflare-register]に勝っている点)  

  > We are the #1 ranked registrar for lowest registration and renewal prices.  
  > 登録・更新価格の安さ1位のレジストラ  
  > Paying too much? Transfer your domain to us and get the best multi-year value.  
  > 支払いすぎてない？ドメインをPorkbunに移管して、費用を削減しよう。  
  > [Porkbun][porkbun]  

  .jpはないですし、日本語は対応していません。.devや.appは買えますよ！  


[wsl2]: https://learn.microsoft.com/ja-jp/windows/wsl/compare-versions  
[vscode]: https://code.visualstudio.com/  
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
[fnm]: https://github.com/Schniz/fnm  
[pnpm]: https://pnpm.io/ja/  
[alacritty]: https://alacritty.org/  
[fish]: https://github.com/fish-shell/fish-shell  
[starship]: https://starship.rs/ja-JP/  
## 開発環境は?   

  - [WSL 2][wsl2]    
  - [VSCode][vscode]  
    - [Dracula][vscode-dracula]  
      One Dark ProとかMonokaiってよりはAyuに近いテーマ。  
    - [Astro][vscode-astro]  
    - [stylus][vscode-stylus]   
    - [JavaScript and TypeScript Nightly][vscode-js-and-ts]  
    - [Markdown All in One][vscode-markdown]  
    - [Prettier][vscode-prettier]  
      様々な言語に対応してるフォーマッタ。空白削除を無効化する方法は無い。  
    - [EditorConfig for VS Code][vscode-editorconfig]  
      色々なエディタに対応している記法統一エディタ。  
    - [GitLens][vscode-git-lens]  
      コードにGitの情報が表示される。  
    - [Git Graph][vscode-git-graph]  
      `git log`とかウェブサイトで見る必要が無くなる。  
    - [Git History][vscode-git-history]  
      Graphと同じ。  
    - [GitHub Pull][vscode-github-pull]  
      Graphと同じ。  
    - [indent-rainbow][vscode-indent-rainbow]  
      インデントに色がつく。どれだけネストしているか分かる。  
    - [Error Lens][vscode-error-lens]  
      エラーの行が強調表示される。  
    - [Bracket Lens][vscode-bracket-lens]  
      括弧で囲ったとき、最初に記述された内容が最後の行にも表示される。  
    - [Gremlins tracker for Visual Studio Code][vscode-gremlins]  
    - [change-case][vscode-change-case]  
      キャメルケースからスネークケースに自動で変更とかできる。  
    - [Path Intellisense][vscode-path-intellisense]  
    - [IntelliCode][vscode-intelli-code]  
    - [Tabnine][vscode-tabnine]  
    - [Peacock][vscode-peacock]  
      ワークスペースごとにアクティビティーバーの色を変えられる。  
    - [CodeSnap][vscode-code-snap] 
    - [GlassIt-VSC][vscode-glass-it]  
      背景を透過できる。  
  - [fnm][fnm]  
    Rust製のバージョンマネージャー。  
  - [pnpm][pnpm]  
    パッケージマネージャー。Yarnよりパフォーマンスが良い訳ではない。ストレージ使用量が減るらしい。  
  - [Alacritty][alacritty]  
    クロスプラットフォームでGPUレンダリングしてるRust製のターミナル。タブの機能がないので中級者向け。  
  - [fish][fish]  
    POSIX互換は無いが、高機能なシェル。  
  - [Starship][starship]  
    どんなシェルだろうがかっこよくなるプロンプト。Rust製。  

  また、[Stackshare](https://stackshare.io/7rs/pages)もご参照下さい。  

[modrinth]: https://modrinth.com/  
[mdn-web-docs]: https://developer.mozilla.org/ja/docs/Web  
[apple-color]: https://developer.apple.com/design/human-interface-guidelines/color  
[iosevka]: https://typeof.net/Iosevka/  
[discord]: https://discord.com/  
[zenn]: https://zenn.dev/  
## デザインについて  

  以下のサイトを参考にしました。  

  - [Modrinth][modrinth]  
  - [MDN Web Docs][mdn-web-docs]  
  - [Zenn][zenn]  
  - [Discord][discord]  
  - [Iosevka][iosevka]
  - [Color | Apple Developer Documentation][apple-color]  



[roadmap]: https://roadmap.sh/  
[mdn]: https://developer.mozilla.org/ja/  
[astro-docs]: https://docs.astro.build/ja/getting-started/  
[ts-docs]: https://www.typescriptlang.org/docs/  
[svelte]: https://svelte.jp/  
[vite]: https://ja.vitejs.dev/  
[sharp]: https://sharp.pixelplumbing.com/  
[sharp-cli]: https://github.com/vseventer/sharp-cli  
[ffmpeg]: https://ffmpeg.org/  
[real-esrgan]: https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan  
[zenn-web]: https://zenn.dev/topics/web  
[cloudflare]: https://www.cloudflare.com/ja-jp/  
[aws]: https://aws.amazon.com/jp/  
[gcp]: https://console.cloud.google.com/  
[unsplash]: https://unsplash.com/ja  
[simple-icons]: https://simpleicons.org/  
[google-icons]: https://fonts.google.com/icons  
[google-fonts]: https://fonts.google.com/  
[firefox]: https://www.mozilla.org/ja/firefox/  
[chrome]: https://www.google.com/intl/ja_jp/chrome/  
[edge]: https://www.microsoft.com/ja-jp/edge?form=MA13FJ  
[chatgpt]: https://chat.openai.com/  
[deepl]: https://www.deepl.com  
[can-i-use]: https://caniuse.com/  
[CSS Web Safe Fonts]: https://www.w3schools.com/cssref/css_websafe_fonts.php  
[vps]: https://vpshikaku.com/  
[nextui]: https://nextui.org  
[yarn]: https://yarnpkg.com/  
[tailwind]: https://tailwindcss.com/  
# 終わりに   

  ここで紹介したものは一部にすぎません。ウェブの世界はとても広いです。  
  参考になりそうなページを掲載しておきます。

  - [Roadmap][roadmap]  
    エンジニアとして学ぶべきことが図で分かるサイト。  
  - [MDN Web Docs][mdn]  
    Mozillaが出してるWEB開発のドキュメント。  
  - [Zenn][zenn-web]  
    Qiitaに近いけど、段違いでシンプル。YahooJAPANみたいな機能性を求める人向けではない。  
  - [Astro][astro-docs]  
    オールインフレームワーク。NuxtやNextのように開拓されてはいない。使いやすいけど、初心者向けではないかも。  
  - [TypeScript][ts-docs]  
    JavaScriptに型がついた言語。TypeScriptが使えたらJavaScriptも使える（はず）。  
  - [Svelte][svelte]  
    Astroも対応しているが、AstroKitというフレームワークもある。  
  - [Vite][vite]  
    Astroの裏で動いてる。  あ
  - [Tailwind CSS][tailwind]  
    新しめのCSSフレームワーク。コンポーネントはない。  
  - [PostCSS][postcss]  
    新しいCSSメタ言語。プラグインを入れて色々なことが出来る。  
  - [NextUI][nextui]  
    UIライブラリ。コンポーネントを作りたくない人向け。  
  - [pnpm][pnpm]  
  - [Yarn][yarn]  
    npmより速いパッケージマネージャー（pnpmよりも速いかも）。  
  - [Mozilla FireFox][firefox]  
  Mozillaが開発したブラウザ。プライバシーが気になる人向け。  
  - [Google Chrome][chrome]  
  Googleが開発したブラウザ。世界で一番使われてる。FLOSSなChromiumというブラウザがベース。  
  - [Microsoft Edge][edge]  
  Microsoftが開発したブラウザ。Windowsにプリインストールされている。実は世界で二番目に使われてる。  
  - [Sharp][sharp]  
    Squooshの後継？みたいなやつ。mozjpegという非常に小さなjpgに圧縮できる。AVIFやWEBPにも対応している。  
  - [sharp-cli][sharp-cli]  
  - [Real ESRGAN][real-esrgan]  
    主に絵などの画像の解像度を上げ、ノイズを削除する。waifu2xの最終形態。  
  - [ChatGPT][chatgpt]  
    AIの中でもなかなか話せる。翻訳とコーディングが強い。  
  - [DeepL][deepl]  
    一番精度が高い翻訳。好ましくない単語も訳してくれる。  
  - [Can I use?][can-i-use]  
    技術がどのブラウザに対応してるとか載ってる。  
  - [Cloudflare][cloudflare]  
    速い、無料、プライバシー保護、神。有料プランは安くない。  
  - [AWS][aws]  
    一番需要高い。サービスめっちゃある。  
  - [GCP][gcp]  
    AWSの対抗。機械学習はこっちの方が強いかも。  
  - [VPS比較.com][vps]  
    日本のVPSは高い。そんな人向け。日本のVPSの情報もあるけど。
  - [Google Fonts][google-fonts]  
    ほとんどオープンソースのフォントがある。外部のフォント使うときはこれしかない。速すぎるから。  
  - [Material Symbols and Icons][google-icons]  
    シンプルでマテリアルなアイコン。画像としても使えるし、フォントとしても使えるみたい。  
  - [Simple Icons][simple-icons]  
    ブランドのアイコンとか。結構ある。解像度が高い。  
  - [Unsplash][unsplash]  
    背景がいっぱいある。著作権フリー。    
