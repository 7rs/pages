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

なるほど。要約すると __簡単に高速なWebサイトが作れる__ みたいです。  
__Nuxt/Next等はSPA__ と呼ばれ、基本的には __クライアント側でレンダリング__ が行われるらしい。  
__WordPress, Laravel, Rails等はMPA__ と呼ばれ、基本的には __サーバー側でレンダリングされ送られるのはHTMLとCSSのみ__ らしい。  

既にリポジトリを削除してしまっているので正確には分かりませんが、以前Nuxt.jsを使った経験がありました。  
地道にHTMLとCSS, JSをクソみたいなエディタで書く時代が終わったのは知っていましたが、更に一歩進んだようですね。  
もう一度フロンドエンドに挑戦してみようかなというところで、Next.jsについて調べていました。  
すると、Astroという謎のフレームワークがあることを知って、というのが経緯です。  


## Porkbun  

Google Domainsで良いドメインを探していたのですが、どうやらサ終するようで。 そこでCloudflareがドメインを原価で売ってるぞという情報を入手。  
サイト自体はCloudflare Pagesで作ることを予定していました。(勝手にGitHub Pagesはもう一番手でもないだろうと思っていただけですが)  
なら全部Cloudflareで管理しちゃえばめっちゃ楽じゃん！と思ってましたが、どうやらCloudflareは.devには対応していないらしい。。。  
- [Request Cloudflair Registrar To Support .Dev Domain](https://community.cloudflare.com/t/request-cloudflair-registrar-to-support-dev-domain/330897/6)  
- [.dev support](https://www.reddit.com/r/CloudFlare/comments/sznkea/dev_support/)  

海外のお兄さんたちが会話していますが、CloudflareのTLDポリシーのページ、何か変です。  
よく分かりませんがあったり消えたりよく分からない状況となっています。希望は薄いかな。。。  

- [TLD Policies](https://www.cloudflare.com/en-gb/tld-policies/)  
- [TLDポリシー](https://www.cloudflare.com/ja-jp/tld-policies/)  

Google Domainsは終わるしCloudflareも対応してない。お〇前.comは好きではない。
そこで挙がったのが、
- [Gandi](https://www.gandi.net/ja)  
- [porkbun](https://porkbun.com/)  

の二つです。どちらでも良かったんですが、Gandiは検索結果を並べ替えできなかったのでPorkbunにしました。  
$1が￥140くらいだったんですが、それでもお〇前の半額くらいで済みました。  


## Cloudflare  

あとはだいたいCloudflareです。コードの管理をGitHubで行い、それとCloudflare Pagesを接続しました。  
DNSについてよく分からく苦戦しましたが、Porkbunの設定していたDNS設定をまるごと持ってきたらできました。  
Cloudflare Pagesに紐づけたかったので送信先をそれにしました。  
文章で表現しているよりは苦戦しましたが、苦痛というほどではありませんでした。


## Tailwind, Stylus  

以前はMaterialなんとかっていうCSSフレームワークを使っていましたが、Astroのintegrationsの一番上に出てきたので使ってみました。  
こいつを使って開発していたわけですが、タグのclass長すぎねえか？と思ったのが最初です。  
後から普通にスタイルシートを使って楽しようとしたわけですが、  

- [Reusing Styles](https://tailwindcss.com/docs/reusing-styles)    
- [Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)  

なるほど。もはやCSSではありません。欲しいスタイルをDocsで検索して、classを修正していく。。。  
さらに言えば初心者の為(?)にmargin等が0になっているみたいで上書きもTailwind経由じゃないとできないっぽい?  
無論、私はTailwindを使わないことを決意しました。ただ、生のCSSも好きではないのでSCSSを使うことにしました。

[Stylus](https://stylus-lang.com/)  

詳しい説明は省きますが、入れ子やら変数やら使えるやつです。SASSよりもシンプルそうだったのでStylusにしました。  


## 最後に  

テンプレートを使わなかったのでそれなりに時間は要しましたが、それでもかなり楽をしたつもりです。  
フロントエンジニアになる気はありませんが、触ってみるのも悪くないです。  
