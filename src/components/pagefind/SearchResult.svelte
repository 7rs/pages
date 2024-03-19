<script lang="ts">
  import type { PagefindSearchFragment } from '@lib/pagefind.ts';

  export let data: PagefindSearchFragment;
</script>

<section data-search-result {...$$restProps}>
  <h2><a href={data.url}>{data.meta.title}</a></h2>
  <p>{@html data.excerpt}</p>
  <!-- Sub Result -->
  <ul data-search-sub-result>
    {#each data.sub_results.slice(0, 3) as subResult}
      <li>
        <h3><a href={subResult.url}>{subResult.title}</a></h3>
        <p>{@html subResult.excerpt}</p>
      </li>
    {/each}
  </ul>
</section>

<style lang="stylus">

  section[data-search-result]
    background-color var(--background)

    p
      padding-left 1rem

    ul[data-search-sub-result]
      padding-left 1rem
      list-style none
</style>
