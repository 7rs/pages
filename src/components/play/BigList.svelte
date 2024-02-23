<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';

  const items = writable(['Pages', 'Cbrnex', '74gg']);

  const desc = {
    'Pages': 'Fast and Simple website',
    'Cbrnex': 'Full stack engineer',
    '74gg': 'An organization for rotters without morals',
  };

  let first = '';
  const duration = 5000;

  function advanceList() {
    first = $items[0];
    $items = [...$items.slice(1), $items[0]];
  }

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
      style={item === first ? `opacity: 0` : undefined}
      animate:flip={{ duration: duration, easing: (t) => t }}
    >
    <p class="item-label">{item}</p>
    <p class="item-desc">{desc[item]}</p>
  </article>
  {/each}
</div>

<style lang="stylus">
  :root
    --list-width 100vw
    --list-height 3rem
    --list-gap 1rem
    --item-limit 5
    --item-width calc(var(--list-width) / var(--item-limit))

  p
    margin 0
    padding 0

  div.card-list
    position relative
    left calc(-150vw + 50%)
    width 300vw
    height var(--list-height)
    display flex
    // gap var(--list-gap)

    article.card-item
      min-width 100vw
      height var(--list-height)
      text-align center
      .item-label
        height 2rem
        line-height 2rem
      .item-desc
        height 1rem
        line-height 1rem
</style>
