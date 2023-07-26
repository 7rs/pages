# Cloudflare Pages with Astro  

### You can visit to [7rs.dev](https://7rs.dev).  
This website and source code are published under WTFPL.  
Images and other material not created by me are follow to the license of the copyrighted it.  


[astro]: https://docs.astro.build/  
[cloudflare]: https://dash.cloudflare.com/  
[fnm]: https://github.com/Schniz/fnm  
[pnpm]: https://pnpm.io/motivation  
[html]: https://developer.mozilla.org/docs/Web/HTML  
[css]: https://developer.mozilla.org/docs/Web/CSS  
[stylus]: https://stylus-lang.com/docs/  
[stackshare]: https://stackshare.io/7rs/my-site  
[node]: https://nodejs.org/en/download/releases  
[simpleicons]: https://simpleicons.org/  
[unsplash]: https://unsplash.com/  
[materialui]: https://materialui.co/colors/  

## Docs/Refs  

| Name                           | Type    | About                     |
| ------------------------------ | ------- | ------------------------- |
| [CloudFlare Pages][cloudflare] | docs    | Static Website Hosting    |
| [Node Versions][node]          | release | seeing node versions      |
| [fnm][fnm]                     | repo    | Node.js version manager   |
| [pnpm][pnpm]                   | docs    | Node.js package manager   |
| [Astro][astro]                 | docs    | All-in-one web framework  |
| [HTML][html]                   | docs    | HyperText Markup Language |
| [CSS][css]                     | docs    | Cascading Style Sheets    |
| [Stylus][stylus]               | docs    | CSS Extension Tool        |
| [stackshare][stackshare]       | tool    | Tech stack visualizer     |
| [Material Colors][materialui]  | tool    | Color Resources           |
| [Simple Icons][simpleicons]    | tool    | Free SVG List             |
| [Unsplash][unsplash]           | tool    | Image/Picture Resoureces  |


## Installation  

```bash
git clone git@github.com:7rs/my-site.git --depth 1
```  
When connecting to this repository, you must use the SSH.  
[Connecting to GitHub with SSH](https://docs.github.com/authentication/connecting-to-github-with-ssh)  

```bash
cd my-site
git branch develop
git switch develop
```  
When pushing to this repository, you must sign with GPG.  
[Generating a new GPG key](https://docs.github.com/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)  

```bash
node --version
v18.16.1
```   
Astro needs Node 16.12.0 or later.  

```bash
pnpm install astro
pnpm run dev
```
Astro supports npm, Yarn, and pnpm.  
In them, pnpm is the fastest, so you should use pnpm.  