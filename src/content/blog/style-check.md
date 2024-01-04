---
layout: "../../layouts/Layout.astro"
title: "This isn't article."
tags: []
slug: "_style-check"
---

# マークダウンの記法まとめ  

  この記事は知見の共有が目的ではありません。マークダウンのスタイル調整用です。  


## 文字のスタイル  

  文字について、*イタリック体*や**太字**、~~取り消し線~~、`コードブロック`などのスタイルを適用できます。HTMLの`<u>`タグを使えば<u>下線</u>を適用することができます。また、<u>***複数適用***</u>することもできます。複数行のコードブロックは後程説明します。    
  ヘッダーは6種類あり、`#`の数が少ないほど、大きくなります。また、1~2個は<u>下線</u>が付きます。  
  以下はこの記事では使用していないヘッダーです。  
  ### header 3  
  #### header 4  
  ##### header 5  
  ###### header 6 


[pages]: https://7rs.dev/
## リンク  

  リンクは、[通常のリンク](https://7rs.dev/)と[ツールチップ付き](https://7rs.dev/ "Pages - A website that is low cost and modern.")のリンクがあります。また、最初に`[pages]: https://7rs.dev/`と指定することで[変数][pages]として再利用ができます。    
  直接入力しても、リンクとして認識されます。  
  https://7rs.dev/  

  ![画像](../../assets/avatar.webp "avatar")  
  画像も利用可能です。  


## リスト/テーブル  

  * `*`  
  - `-`  
  + `+`  
    - ネスト  
      - 更にネスト  
        - もっと  
          - もっと！  
            - もっともっと！  
              - まだまだ！  

  というように、三つの記号を混合させても正しく機能します。インデントするとネストします。  

  1. 1  
  2. 2  
  3. 3  
     1. 3-1  
        1. 3-1-1  
           1. 3-1-1-1  

  番号付きリストです。  

  - [ ] Not done  
  - [x] Done  
    - [ ] Not not done?  
    - [x] Done done lol  
      - [ ] What the hell  
      - [x] What happend?   
        - [ ] Oh I'm tired
        - [x] Okay, I already did    

  チェックリストです。  

  | Left  | Center | Right  |
  | :---- | :----: | -----: |
  | Start | Middle | End    |
  | Two   | Second | Double |
  | Three | Third  | Triple |

  テーブルにも対応しており、位置を指定できます。  


## コードブロックとシンタックスハイライト  

  コードブロックには、`1行のコードブロック`  
  ```
  複数行のコードブロック
  ```  
  の二つがあります。  

    また、クオートなしで適用できますが、実質的に複数行のコードブロックと同じです。  

  ```py
  print("Hello, world!")
  ```  
  ```java
  public static Main() {
      public static final void main(String[] args) {
          System.out.println("Hello, world!");
      }
  }
  ```  
  ```go
  package main

  import "os"

  func main() {
      fmt.Println("Hello, world!");
  }
  ```  
  ```ts
  console.log("Hello, wolrd!")
  ```  

  複数行のコードブロックにはシシンタックスハイライトを適用できます（クオートが必要）。  

  ```diff
  - diffの指定もあります。diff_*のように言語の指定をして、両方適用できます。
  - JavaScript
  + TypeScript
  - Python2
  + Python3
  - CSS
  + SCSS, SASS, Stylus, PostCSS
  ```  


## その他  

  > ブロッククートも利用可能です。  
  > > ちなみに、ブロッククオートの本来の使い道は引用です。  
  > > > 複数行のブロッククオートはありません。  
  > > > 並べれば繋がります。  
  > > 逆ネスト？はできません。  

  ---  
  ***  
  水平線はハイフン`-`とアスタリスク`*`のどちらでも表示されます。  

  脚注は番号と [^1]  
  エイリアスのどちらでも可能です。 [^named-note]  
  番号自体に意味はなく、適当な番号を指定することができます。 [^4]  

  [^1]: 脚注はこのようにページの下部表示されます。  
  [^named-note]: また、エイリアスについても自動で連番となります。  
  [^4]: 内部では4を指定してるのですが、3に置き換わっています。  


## HTML  

  <p align="center">また、HTMLを直接入力することも可能なので、このように中央に配置できます。</p>  
