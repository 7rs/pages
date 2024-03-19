---
layout: "@layouts/Blog.astro"
title: "SSGとISRとSSRとCSR"
tags: ["SSG", "ISR", "SSR", "ISR", "Frontend"]
---

## 結論  

### SSG  

  ビルド時に生成するからHTMLとCSSだけ！めっちゃ速い！  

### ISR  

  定期的に再生成するから速いし内容をビルド後も変えられる！SSGとSSRの良いとこ取り！  

### SSR  

  認証とか人によって変わるページとか、頻繁に変わるページに向いてる！  

### CSR  

  クライアントでレンダリングする！デバイスに依存しちゃうから、最小限にしときたいかも！  

[nextjs]: https://nextjs.org/
[javascript]: https://developer.mozilla.org/ja/docs/Web/JavaScript

## SSG (Static Site Generation)  

  ある弁当屋があったとします。メニューは事前から決まっています。  
  このとき、既に作っておいた弁当があればすぐに提供できます。  
  これが **SSG (Static Site Generation)** です。  

  ウェブサイトにおいては、ランディングページやブログ・ドキュメントなど
  見る人によって内容が同じページにおいて最高のパフォーマンスを発揮します。  
  [JavaScript][javascript]、API、マークアップ（HTML/CSS）を用いて、
  高速かつ軽量なWebアプリケーションを構築するための手法として、
  これらをJamstackと呼ぶこともあります。  

<!--  -->
- [Gatsby](https://www.gatsbyjs.com/)
- [Jekyll](https://jekyllrb.com/)
- [11ty](https://www.11ty.dev/)
- [Hugo](https://gohugo.io/)
- [GitBook](https://www.gitbook.com/)
<!--  -->

  [Jamstack - Static Site Generators](https://jamstack.org/generators/)  

<!--  -->
- [Cloudflare - JAMstackとは？](https://www.cloudflare.com/ja-jp/learning/performance/what-is-jamstack/)
- [Qiita (@ozaki25) - Jamstackって何なの？何がいいの？](https://qiita.com/ozaki25/items/4075d03278d1fb51cc37)
- [株式会社gini (JamJam) - Jamstackとは？基礎知識から構築方法までどこよりもわかりやすく解説！](https://gini.co.jp/blog/what-is-jamstack)
<!--  -->

## ISR (Incremental Static Regeneration)  

  しかし、作っておいたとしても冷めるのは明白です。
  カチカチの弁当を提供すれば当然客は怒り狂い、クレームを入れてくるでしょう。
  その為には定期的に作り置きをしなければなりません。  
  これが **ISR (Incremental Static Regeneration)** です。  

  ウェブサイトにおいては頻繁に変わるわけでないものの、ビルド後に内容を変更したい場合に用いられます。ただし、この機能を持っているのは[Next.js][nextjs]などの一部のフレームワークに限られるようです。  

<!--  -->
- [Qiita (@thesugar) - Next.jsにおけるSSG（静的サイト生成）とISRについて（自分の）限界まで丁寧に説明する](https://qiita.com/thesugar/items/47ec3d243d00ddd0b4ed)
- [Qiita (@yoshii0110) - ISR(Incremental Static Regeneration)とは？](https://qiita.com/yoshii0110/items/db707ed61030c01c2353)
<!--  -->

## SSR (Server Side Rendering)  

  メニューには大盛のオプションがあるかもしれません。
  漬物が入っていると発作が起きるので取り除いてくれと言う客もいるかもしれません。
  さらに、作り置きではなく出来立ての弁当のみを提供したい場合はその都度作る必要があります。
  これが **SSR (Server Side Rendering)** です。  

  ウェブサイトにおいては認証の機能を持っていて、ログイン時にしか利用できないページやログイン時にしか利用できない機能を実装したい場合に用いられます。  

## CSR (Client Side Rendering)  

  塩コショウやレモンなど、トッピングや調味料が必要な場合もありますが、必要かどうかや分量は個人の好みに寄ります。
  なので、それらをとりあえず付けておきます。
  これが **CSR (Client Side Rendering)** です。  

  ウェブサイトにおいてはHTMLとCSSのみでは表現が難しい場合に用いられます。つまり、JavaScriptを用いて描画を行う場合などです。  
  しかし、これはクライアント側で実行されるので、当然ながら閲覧者が使っているデバイスに依存します。
  全員がハイスペックなPCやスマホを持っていれば良いですが、なかなかそうはいきません。
  そのため、CSRの部分は最小限にしなければ大きくパフォーマンスに影響してしまうのは事実なのです。  
