---
layout: ../../layouts/Markdown.astro
title: こんにちは！
tags: [profile]
slug: "0"
---

こんにちは！まんじです。  
私についてお話することは特にありませんので、このサイトの作成過程などを記します。  


## Astro  

##### [Astroを選ぶ理由](https://docs.astro.build/ja/concepts/why-astro/)  
> *__他のフレームワークでは不可能な機能__ を提供している点です。*
*__何もせずとも驚くようなWebパフォーマンス__ を発揮することができるのです。*
*私たちの目標は、Astroを使えば、 __遅いウェブサイトを作るのはほぼ不可能__ になることです。*  
*Astroは、クライアントサイドのレンダリングよりも __サーバーサイドのレンダリングを可能な限り活用__ します。*  

要約すると __簡単に高速なWebサイトが作れる__ みたいです。  
__Nuxt/Next等はSPA__ と呼ばれ、基本的には __クライアント側でレンダリング__ が行われ、  
__WordPress, Laravel, Rails等はMPA__ と呼ばれ、基本的には __サーバー側でレンダリングされ送られるのはHTMLとCSSのみ__ らしい。  

既にリポジトリを削除しているので正確には分かりませんが、以前Nuxt.jsを使ったことがあります。  
~~地道にHTMLとCSS, JSをクソみたいなエディタで書く時代が終わった~~のは知っていましたが、更に一歩進んだようですね。  
再びフロンドエンドに挑戦しようと、Next.jsについて調べていました。  
すると、Astroというフレームワークがあることを知って、というのが経緯です。  


## Porkbun  

Google Domainsでドメインを探していたのですが、どうやらサ終するようで。  
そこでCloudflareがドメインを原価で売っているという情報を入手。  
そのとき、サイトはCloudflare Pagesで作ることを予定していました。(~~勝手にGitHub Pagesはもう一番手でもないだろうと思っていただけですが~~)  
全部Cloudflareなら楽じゃん！と思ってましたが、どうやら.devには対応していないらしい。。。  

- [Request Cloudflair Registrar To Support .Dev Domain](https://community.cloudflare.com/t/request-cloudflair-registrar-to-support-dev-domain/330897/6)  
- [.dev support](https://www.reddit.com/r/CloudFlare/comments/sznkea/dev_support/)  
- [TLD Policies](https://www.cloudflare.com/en-gb/tld-policies/)  
- [TLDポリシー](https://www.cloudflare.com/ja-jp/tld-policies/)  

海外のお兄さんたちが話し合ってますが、CloudflareのTLDポリシーのページ、何か変です。  
あったり消えたりよく分からない状況となっています。希望は薄いかな。。。  
~~お〇前.comは好きではないので候補には挙がりません。~~  そこで挙がったのが、

- [Gandi](https://www.gandi.net/ja)  
- [porkbun](https://porkbun.com/)  

の二つです。どちらでも良かったんですが、Gandiは検索結果を並べ替えできなかったのでPorkbunにしました。  
$1が￥140くらいだったんですが、~~それでもお〇前の半額くらいで済みました。~~  


## Cloudflare  

あとはほぼCloudflareです。コードの管理をGitHubで行い、Cloudflare Pagesと連携しました。  
DNSについてよく分からず苦戦しましたが、PorkbunのDNS設定をまるごとコピーしたらできました。  
Cloudflare PagesのURLを送信先にしました。  
ここで書いてる以上に苦戦しましたが、苦痛というほどではありませんでした。


## Tailwind, Stylus  

以前はMaterialなんとかっていうCSSフレームワークを使っていましたが、AstroのIntegrationsの一番上に出てきたので使ってみました。  
コイツを使って開発していたわけですが、HTMLタグのclassが長すぎねえか？と最初に思いました。  
あとからスタイルシートを使って楽しようとしたわけですが、  

- [Reusing Styles](https://tailwindcss.com/docs/reusing-styles)    
- [Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)  

なるほど。~~もはやCSSではありません。~~ 欲しいスタイルをDocsで検索して、classを修正していく。。。  
さらに初心者の為(?)にmarginなどが0になっているみたいで、上書きもTailwind経由じゃないとできないっぽい?  
無論、私はTailwindを使わないことを決意しました。ただ、生のCSSも好きではないのでSCSSを使うことにしました。

[Stylus](https://stylus-lang.com/)  

詳しい説明は省きますが、入れ子やら変数やら使えるやつです。SASSよりもシンプルそうだったのでStylusにしました。  


## その他  

なぜHugoやGatsbyではだめなのか。ダメというわけではありませんがそれなりにフロントエンドをしたかったというのと、  
テンプレートで自分が気に入ったものが無かったからです。


## 最後に  

テンプレートを使わなかったのでそれなりに時間は要しましたが、それでもかなり楽をしたつもりです。  
フロントエンジニアになる気はありませんが、触ってみるのも悪くないです。  
