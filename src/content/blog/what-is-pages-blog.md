---
layout: "@layouts/BlogLayout.astro"
title: "Pages Blogとは何か"
description: "Pages Blogの目標と思想について"
tags: ["Astro", "Frontend", "Development"]
published: true
published_at: "2024-04-20"
updated_at: "2024-04-30"
---

## Pages  

  [GitHub - 7rs/pages](https://github.com/7rs/pages)  

  Pagesは**高速**で**読みやすく**、**柔軟**なWebサイトを作成する**ツール・Webサイト**です。
  Pagesは[7rs.dev](https://7rs.dev/)のWebサイトとして運営されていて、
  その要素の一つが**Pages Blog**です。  

  そんな**Pages Blog**について説明します。  

[affiliate-wiki]: https://w.wiki/9pJ3
[asp-wiki]: https://w.wiki/3h4e

### 広告が無い  

  インターネットの利用率の増加に伴い、Web広告も増えてきました。
  しかし、広告の中に**は好ましくない内容を表示**したり、**危険な動作**をするもあります。
  広告全体が悪い訳では無いですが、**無能な[ASP][asp-wiki]**によってそのような事態が起きています。
  また、<u>商品やサービスのプロモーション</u>にこじつけるがために、
  [アフィリエイト][affiliate-wiki]目的のWebサイトは **情報に偏り、もしくは方向性の偏り** が見られることがあります。

  Pages Blogは**不要な要素を排除**し、**読むことに集中**できるレイアウトやデザインを目指しています。
  さらに、誤解を生む要素となる**主観的な意見**や**御幣**を**最小限**にしています。
  **複雑な言い回し**や**難語・専門用語**も**最小限**にしています
  （これは達成できていないかもしれません）。  

  なぜなら、Pages Blogは単に**情報の共有と発信**のためにあるからです。  

  > [Wikipedia - インターネット広告](https://w.wiki/9ve2)
  > [ニコニコ大百科 - アフィカス](https://dic.nicovideo.jp/id/5317017)
  > [なんJ AdGuard部 Wiki - 広告ブロックって何？](https://wikiwiki.jp/nanj-adguard/%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F#wd456489)
  > [なんJ AdGuard部 Wiki - アフィカスの主張](https://wikiwiki.jp/nanj-adguard/%E3%82%A2%E3%83%95%E3%82%A3%E3%82%AB%E3%82%B9%E3%81%AE%E4%B8%BB%E5%BC%B5)
  > [Wikipedia - Wikipedia:中立的な観点](https://w.wiki/4pv)
  > [Wikipedia - Wikipedia:完璧な記事](https://w.wiki/5D5J)

[astro-fast]: https://docs.astro.build/ja/concepts/why-astro/#%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E3%81%A7%E9%AB%98%E9%80%9F
[cloudflare-fast]: https://www.cloudflare.com/ja-jp/network/
[hosting-wiki]: https://w.wiki/9pJo

### 無料である  

  <u>途中まで読ませて、残りの内容を読むには**会員登録が必要**</u>という流れのWebサイトがあります。
  「良い情報だと思ったら有料かい！」と**閲覧者をがっかりさせてしまいます**。
  否定はしませんが、**閲覧者のストレス**となります。  

  Pages Blogの記事は**完全に無料**です。
  運営費(?)は[年間$10程度](https://porkbun.com/tld/dev)なので、**広告や寄付を必要としません**。
  **応答速度**についても、[Astro][astro-fast]や[Cloudflare][cloudflare-fast]によって既に**高速**なので、
  資金の確保は必要ありません。  

  Cloudflareが利用できなくなっても、Pagesは**高負荷な処理を最小限**に設計されているため、
  [ホスティング][hosting-wiki]の変更による速度の低下は許容範囲だと考えています。  

  > [Zenn - Zennについて](https://zenn.dev/about)
  > [Astro Docs - デフォルトで高速](https://docs.astro.build/ja/concepts/why-astro/#%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E3%81%A7%E9%AB%98%E9%80%9F)

[seo-wiki]: https://w.wiki/4cKc
[open-source-wiki]: https://w.wiki/rFd

### オープンソースである  

  Pages Blogは**情報の共有と発信**が目的です。
  誰でも**そのまま二次利用**でき、細かく考えることはありません。
  そうするのは、<u>二次利用によって**さらなる情報の広がり**</u>が見込めるからです。いわゆる、**拡散**です。  

  <u>クローズドな情報しかない状況</u>は**界隈の敷居が高く**なり、**技術の成長を防ぐ要因**となります。
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

  公式のドキュメントやリファレンスが用意されていても、**情報の不足や言語の壁**の問題があります。
  **小難しい言い回し**や**専門用語**だらけなこともよくあります。初学者に限らず、
  [サバイバルTypeScript][typescriptbook]や[Mdn Web Docs][mdn-web-docs]に助けられた人は多いはずです。  

  例えば「ある関数の使い方」を知りたいとき、**論文レベルの長さ**のリレファレンスを読むのは**苦痛**です。
  <u>長ったらしい前段も**不要**</u>で、<u>コピーしてそのまま動くのが**理想**</u>です。
  [逆引き][reverse]においてはそもそも**情報をキャッチできない**こともあります。  

  私自身、そういった壁にぶつかることは多々あります。
  **忘れる**ことはありますし、<u>**基本的な情報でも**発信されていると**助かり**</u>ます。
  また、**界隈の成長を促す**ことにもつながると考えています。  

  このような背景から、**情報の共有と発信**が目的としているのです。  

  > [シマウマ用語集 - オープンウェブ（open web）とは](https://makitani.net/shimauma/open-web)

[^wontfix]: GitHubのIssueで、取り組む必要性が無いと判断されたときに付けられる。
  [GitHub Docs - ラベルを管理する](https://docs.github.com/ja/issues/using-labels-and-milestones-to-track-work/managing-labels)
