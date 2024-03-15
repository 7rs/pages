---
layout: "@layouts/Blog.astro"
title: "Markdown preview"
tags: ["preview"]
lang: "en"
---

## Headers

### Defining header  

  `#` × number of header depth  

# Header 1  

## Header 2  

### Header 3  

#### Header 4  

##### Header 5  

###### Header 6  

  ```md
  # Header 1  

  ## Header 2  

  ### Header 3  

  #### Header 4  

  ##### Header 5  

  ###### Header 6  
  ```  

## Plain Text  

  Plain text has 4 style.
  As you know, can apply multiple styles.  

### **Bold**  

#### Bold with asterisk  

  ```md
  **Bold**
  ```  

#### Bold with underline  

  ```md
  __Bold__
  ```  

#### Bold with `<b>` tag (not recommended)  

  ```md
  <b>Bold</b>
  ```  

### *Italic*  

#### Italic with asterisk  

  ```md
  *Italic*
  ```  

#### Italic with underline  

  ```md
  __Italic__
  ```  

#### Italic with `<i>` tag (not recommended)  

  ```md
  <i>Bold</i>
  ```  

### ~~Strike~~  

#### Strike with tilde  

  ```md
  ~~Strike~~
  ```  

#### Strike with `<s>` tag (not recommended)  

  ```md
  <s>Stroke</s>
  ```  

### <u>Underline</u> (`<u>` tag only)  

  ```md
  <u>Underline</u>  
  ```  

## List  

- depth 1
  - depth 2
    - depth 3
      - depth 4
  - depth 2
- depth 1

### List with dash (`-`)  

  ```md
  - depth 1
    - depth 2
      - depth 3
  ```  

### List with plus (`+`)  

  ```md
  + depth 1
    + depth 2
      + depth 3
  ```  

### List with asterisk (`*`)  

  ```md
  * depth 1
    * depth 2
      * depth 3
  ```  

## Numbered List  

  1. item 1
  2. item 2
  3. item 3

  ```md
  1. item 1
  2. item 2
  3. item 3
  ```  

## Task List  

- [ ] Progress
  - [ ] Progress
- [x] Done
  - [x] Done

  ```md
  - [ ] Progress
  - [x] Done
  ```  

[7rs-dev]: https://7rs.dev/

## Links  

### Normal links  

  [7rs.dev](https://7rs.dev/)  

  ```md
  [7rs.dev](https://7rs.dev/)  
  ```  

### Defining links  

  [7rs.dev][7rs-dev]  

  ```md
  [7rs-dev]: https://7rs.dev/
  [7rs.dev][7rs-dev]  
  ```  

## Code blocks  

### One-line code block  

  `One-line code block`  

### Multi-line code block  

  ```md
  Multi-line code block
  ```  

### Blockquote  

  > Blockquote  

  ```md
  > Blockquote
  ```  

  > Markdownis a lightweight markup language for creating formatted text using a plain-text editor.
  > [Wikipedia - Markdown](https://en.wikipedia.org/wiki/Markdown)

### Table  

  | Start | Center | End |
  | :---- | :----: | --: |
  | A     | B      | C   |
  | E     | D      | F   |

  ```md
  | Start | Center | End |
  | :---- | :----: | --: |
  | A     | B      | C   |
  | E     | D      | F   |
  ```  

  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
  | - | - | - | - | - | - | - | - | - | -- |
  | A | B | C | D | F | E | F | F | G | H  |
  | A | B | C | D | F | E | F | F | G | H  |
  | A | B | C | D | F | E | F | F | G | H  |
  | A | B | C | D | F | E | F | F | G | H  |
  | A | B | C | D | F | E | F | F | G | H  |
