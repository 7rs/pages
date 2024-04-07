<script lang="ts">
  import { writable } from 'svelte/store';

  import Post from '@components/_unused/post/Post.svelte';

  export let posti18n: { [key: string]: { [key: string]: any }[] };

  const langs = Object.keys(posti18n);
  const activeIndex = writable(0);
</script>

<section data-post-list {...$$restProps}>
  <div data-tab-buttons>
    {#each langs as lang, i}
      <button
        on:click={() => {
          $activeIndex = i;
        }}>{lang}</button
      >
    {/each}
  </div>
  <div data-tab>
    {#each posti18n[langs[$activeIndex]] as post}
      <Post post={post} />
    {/each}
  </div>
</section>

<style lang="stylus">
  @import "../../styles/api.styl"

  section[data-post-list]
    sans()

    div[data-tab-buttons]
      flex(_gap: 1rem)
      button
        @extend $hoverable-widget
        width 100%
        padding 1rem
        sans(1.5rem)

    div[data-tab]
      margin-top 1rem
      flex(column, 1rem)
</style>
