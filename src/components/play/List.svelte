<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';

  type Repository = {
    name: string;
    description: string;
    url: string;
  };

  function newRepository(name: string, description: string, url: string) {
    return { name: name, description: description, url: url } as Repository;
  }

  const items = writable([
    newRepository('pages', 'Fast and simple website', 'https://github.com/7rs/pages'),
    newRepository('parfait', 'Fork of SM64Lua Redux', 'https://github.com/7rs/parfait'),
    newRepository('line4py', 'Unofficially package for Python', 'https://github.com/7rs/line4py'),
    newRepository('legible-fonts', 'Japanese font for coding', 'https://github.com/7rs/legible-fonts'),
    newRepository('sm64tas', 'Archive for TASing', 'https://github.com/7rs/sm64tas'),
    newRepository('zenn', 'Articles on Zenn', 'https://github.com/7rs/zenn'),
    newRepository('7rs.github.io', 'Laboratory website for engineering', 'https://github.com/7rs/7rs.github.io'),
    newRepository('asura', 'Discord bot with Rust', 'https://github.com/7rs/asura'),
    newRepository('74gg.github.io', '74gg officiala website', 'https://github.com/74gg/74gg.github.io'),
  ]);

  let first = '';
  const duration = 3000;

  function advanceList() {
    first = $items[0].name;
    $items = [...$items.slice(1), $items[0]];
  }

  // Loop
  onMount(() => {
    const interval = setInterval(() => {
      advanceList();
    }, duration);

    return () => clearInterval(interval);
  });
</script>

<div class="card-list">
  {#each $items as item (item)}
    <article
      class="card-item"
      style={item.name === first ? `opacity: 0` : undefined}
      animate:flip={{ duration: 500, easing: (t) => t }}
    >
      <a href={item.url}>
        <p class="item-label">{item.name}</p>
        <p class="item-desc">{item.description}</p>
      </a>
    </article>
  {/each}
</div>

<style lang="stylus">
  :root
    --list-width 100vw
    --list-height 4rem
    --list-gap 1rem
    --item-limit 5
    --item-width calc(var(--list-width) / var(--item-limit))

  div.card-list
    position relative
    left calc(-50vw + 50% - var(--item-width) + (var(--list-gap) / 2))
    width calc(var(--list-width) + var(--item-width) * 2 + var(--list-gap) * (var(--item-limit) + 1))
    height var(--list-height)
    display flex
    gap var(--list-gap)

    article.card-item
      min-width calc(var(--item-width) - var(--list-gap))
      height var(--list-height)
      background rgb(255, 255, 255)
      text-align center

      &:hover
        background rgba(255, 255, 255, 0.5)

      a
        width 100%
        height 100%
        text-decoration none

      p
        color black
        margin 0
        padding 0
        overflow clip
        white-space nowrap

      p.item-label
        width 100%
        line-height 2rem
        font-size 2rem

      p.item-desc
        width 100%
        line-height 2rem
        font-size 1rem
</style>
