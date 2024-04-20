---
layout: "@layouts/BlogLayout.astro"
title: "Pages Blogとは何か"
description: "Pages Blogの目標と思想について"
tags: ["Astro", "Frontend", "Development"]
published: true
published_at: "2024-04-20"
---

## Pages  

  [GitHub - 7rs/pages](https://github.com/7rs/pages)  

  Pagesは**高速**で**読みやすく**、**柔軟**なWebサイトを作成する**ツール・Webサイト**です。
  Pagesは[7rs.dev](https://7rs.dev/)としてWebサイトを運営しています。デモでありながら、通常のWebサイトでもあります。
  その一つの機能としてブログを書いています。それが**Pages Blog**なのです。  

  そんな**Pages Blogの特徴**を詳しく説明します。  

[affiliate-wiki]: https://w.wiki/9pJ3

### 広告が無い  

  広告が悪だとは思いませんが、[アフィリエイト][affiliate-wiki]目的のブログは**情報に偏り**が見られます。
  <u>商品やサービスのプロモーション</u>にこじつける記事のことです。
  <u>セルフプロモーション</u>や<u>主観的な記事</u>も同様に、**情報の偏りは誤解**につながります。  

  Pages Blogは<u>言及無き**主観的な意見**</u>と**御幣**を**最小限**に書かれています。
  また、**複雑な言い回し**や**難語**、**マニアックな専門用語**も**最小限**にしています
  （これは達成できていないかもしれません）。
  Pages Blogは私が気持ちよくなるためでもなく、[アフィリエイト][affiliate-wiki]のためでもなく、
  単に**情報の共有と発信**のためにあります。  

  > [なんJ AdGuard部 Wiki - 広告ブロックって何？](https://wikiwiki.jp/nanj-adguard/%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F#wd456489)

[astro-fast]: https://docs.astro.build/ja/concepts/why-astro/#%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E3%81%A7%E9%AB%98%E9%80%9F
[cloudflare-fast]: https://www.cloudflare.com/ja-jp/network/
[hosting-wiki]: https://w.wiki/9pJo

### 無料である  

  <u>途中まで読ませて、あとは**会員登録が必要**</u>だという流れの記事があります。
  「良い情報だと思ったら有料かい！」と**閲覧者をがっかりさせてしまいます**。
  否定はしませんが、**閲覧者のストレス**となるのは間違いないです。  

  Pages Blogの記事は**完全に無料**です。
  運営費は[ドメインの料金のみで年間で2000円未満程度](https://porkbun.com/tld/dev)です。
  広告や寄付を必要としません。高性能なサーバが無くても、
  [Astro][astro-fast]や[Cloudflare][cloudflare-fast]によって既に**高速**だからです。

  Cloudflareが利用できなくなっても、Pagesは**高負荷な処理を最小限**に設計されていて、
  <u>通常のブログやWebサイトよりも**軽量**</u>です。
  なので、[ホスティング][hosting-wiki]の変更による速度の低下は許容範囲です。  

  > [Zenn - Zennについて](https://zenn.dev/about)

[seo-wiki]: https://w.wiki/4cKc
[open-source-wiki]: https://w.wiki/rFd

### オープンソースである  

  Pages Blogは**情報の共有と発信**が目的です。それ以外の目的はありません。
  クリエイターは**そのまま情報を利用**でき、細かく考えることはありません。
  これは、<u>二次利用によって**さらなる情報の広がり**</u>が見込めるからです。いわゆる、**拡散**です。  

  また、<u>クローズドな情報しかない状況</u>は**界隈の敷居が高く**なり、**技術の成長を防ぐ要因**となります。
  ~~クローズドなコミュニティならば、閉鎖的に行われるべきです~~。
  Pages Blogは[検索エンジンに引っかかること][seo-wiki]を認識していて、それを重んじています。

  > [Wikipedia - オープンソース][open-source-wiki]
  > [クリエイティブ・コモンズ・ジャパン - CC0について ― “いかなる権利も保有しない”](https://creativecommons.jp/sciencecommons/aboutcc0/)

[issue]: https://docs.github.com/ja/issues/tracking-your-work-with-issues/about-issues  
[reverse]: https://w.wiki/9pKF

## なぜそんな取り組みをするのか  

  この取り組みが理解できない方は一定数いると思います。
  しかし、**エンジニア**にとって、<u>クローズドな情報しかない状況は極めて**不快**</u>です。  

### クローズドなOSS  

  あるツールが[オープンソース][open-source-wiki]だからと言って、すべての情報が公開されているとは限りません。
  サポートが**閉鎖的**で、[Issue][issue]を投げかけてもwontfix[^wontfix]とされることもあります。
  そういったプロジェクトでは**初心者の愚問を嫌う**こともあります。
  質問するコミュニティにおいても同様で、**厳しい言い方**をされることがあります。  

  > [Wikipedia - FLOSS](https://w.wiki/9pKh)  

[typescriptbook]: https://typescriptbook.jp/
[mdn-web-docs]: https://developer.mozilla.org/ja/docs/Web

### 情報が集めにくい  

  また、公式のドキュメントやリファレンスが用意されていても、**情報の不足や言語の壁**の問題があります。
  **小難しい言い回し**や**専門用語**だらけなこともよくあります。初学者に限らず、
  [サバイバルTypeScript][typescriptbook]や[Mdn Web Docs][mdn-web-docs]に助けられた人は多いはずです。  

  例えば、「この関数はどうやって使うのだろう」と考えたとき、**論文レベルの長さ**のリレファレンスを読むのは**苦痛**です。
  <u>興味もない長ったらしい前段も**不要**</u>です。<u>コピーしてそのまま動くのが**理想**</u>です。
  [逆引き][reverse]においてはそもそも**情報をキャッチできない**こともあります。  

  そういったぶつけようのない怒りをおさめ、**界隈の成長を促す**ためにあります。
  私自身、そういった壁にぶつかることは多々あり、不満を募らせていました。
  **忘れる**ことはありますし、<u>**基本的な情報でも**発信されていると**助かる**</u>ことはあります。
  このような背景を踏まえて、**情報の共有と発信**が目的としているのです。  

  > [シマウマ用語集 - オープンウェブ（open web）とは](https://makitani.net/shimauma/open-web)

[^wontfix]: GitHubのIssueで、取り組む必要性が無いと判断されたときに付けられる。
  [GitHub Docs - ラベルを管理する](https://docs.github.com/ja/issues/using-labels-and-milestones-to-track-work/managing-labels)
