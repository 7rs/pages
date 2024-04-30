<script lang="ts">
  import type { PagefindSearchFragment } from '@lib/pagefind';

  import { query, displayResults } from '@lib/pagefind';
  import SearchResult from './SearchResult.svelte';

  export let resultList: PagefindSearchFragment[];
</script>

{#if $displayResults}
  <div data-search-results>
    {#if resultList.length > 0}
      {#each resultList as data}
        <SearchResult  {data} />
      {/each}
    {:else if $displayResults}
      <p>{`${$query} を検索したけど結果は0件！おつかれ！`}</p>
    {/if}
  </div>
{/if}

<style lang="stylus">
  @import "../../styles/api.styl"

  div[data-search-results]
    @extend $widget
    box-sizing border-box
    flex(column, 3rem)
    border-radius 1rem
    padding 1rem
    @media screen and (min-width widths.medium)
      padding 1.5rem

    p
      sans(1.125rem)
      @media screen and (min-width widths.medium)
        sans(1.5rem)
</style>
