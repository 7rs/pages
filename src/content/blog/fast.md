---
layout: "@layouts/Blog.astro"
title: "速いウェブサイトを作る"
tags: ["frontend", "cloudflare", "astro", "stylus"]
published: false
published_at: "2024-01-14"
---

## 速いウェブサイトとは？  

体感で速度の違いが分かることはありますが、ベンチマークテストを行うのが基本です。  

- [FCP](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint)  
  First Contentful Paintの略で、最初に描画を完了したDOMコンテンツの描画までかかった時間を示します。  

- [LCP](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint)  
  Largest Contentful Paintの略で、最後に描画を完了したDOMコンテンツの描画までかかった時間を示します。  

- [TBT](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time)  
  Total Blocking Timeの略で、文字の入力やボタンの押下など、ユーザーが操作可能な状態になるまでの時間を示します。  

- [CLS](https://web.dev/articles/cls)  
  Cumulative Layout Shiftの略で、レイアウトシフトが発生するまでの時間を示します。  

[PageSpeed Insights](https://pagespeed.web.dev/)はこれらの四項目を基に、ウェブサイトのパフォーンマンスについて評価してくれます。
高速なウェブサイトを作るには、FCPとLCPの時間を短くし、TBTとCLSの時間は0にすることが理想です。  
Webフレームワークなどがこれで性能を示すことも多いです。  

## 何が必要か？

  無論、速いサーバーが必要です。
  ただ、ホームページやブログなどの軽量なウェブサイトである場合は、バックエンドは必要ありません。
  ここで、便利なサービスとして静的ホスティングサービスというものがあります。

- Github Pages  
- Netlify  
- Vercel  
- Cloudflare Pages  

  色々賛否両論がある中で、主観として私はVercelかCloudflare Pagesの2択に絞りました。
  GitHub Pagesはパフォーマンスが抜きん出ているわけではないので、除外です。
  Netlifyは日本のCDNが充実してないそうで、これも除外です。  

### Vercel  

  ではVercelの魅力とは何か。言わずもがな、VercelはNext.jsと相性が良いことが挙げられます。
  Next.jsなので、Reactと相性が良いです。はい、NextUIとも相性がいいです。機能をフル活用できます。
  結論、何が言いたいか。情報量が多いのです。要するに未開拓のフレームワークより、
  Reactのような広く知られたフレームワークから情報網が広がっていくので、それに付随して情報量が多いということです。  

  デメリットは、利用規約によって、Google AdSenseは無料プランで使用できません。
  ちなみに、SSRについて言及しないのはVercel固有で無くなったのもありますが、
  SSRより高速なSSGが

### Cloudflare Pages  

  対照的にCloudflare Pagesの魅力とは何か。まず、Vercelに対抗した部分についてです。
  SSRは対応しましたし、サーバーレス関数にも対応しました。ビルドの時間もキャッシュにより改善されました。
  メリットを列挙します。  
  CloudflareはCDN最強です。ここについては絶対的な優位性を持ってます。
  また、HTTP3に対応しています。詳しい説明は省きますが、HTTP3の影響で高速化できるようです。
  それ以外にはRocket Loaderがあります。Japascriptのコードを爆速化してくれるのですが、ボタン一つで完了します。
  Cloudflare Fontsというのもあります。Google Fontsなどのフォントを使う場合に爆速化してくれます。
  Cloudflareはセキュリティに力を入れていますが、ウェブサイトの高速化にも力を入れているのです。
  転送量も無制限で、ページ数などに制限は無いです。  

  デメリットは、404ページが無料プランでは使えません。これは痛い。
  また、ビルドの数に制限があります。1か月500デプロイまでです。大規模なサイトは無料プランでは厳しいです。

## 所感  

  私はCloudflareを崇拝しているので、なるべく平等に比較したつもりですが、Cloudflare Pagesの方が利はありそうです。
  強いて言えば、Reactを使っていてNext.jsを使っていて、NextUIを使っているならばVercelを使った方が良いです。  
