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
    flex(column, $standard-spaces.largest)
    border-radius 1rem
    padding $standard-spaces.medium
    @media screen and (min-width widths.medium)
      padding $standard-spaces.large

    p
      sans($standard-sizes.small)
      @media screen and (min-width widths.medium)
        sans($standard-sizes.large)
</style>
