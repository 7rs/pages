<script lang="ts">
  import type { PagefindSearchFragment } from '@pagesjs/pagefind';
  import { query, displayResults } from '@pagesjs/pagefind';

  import ResultItem from './ResultItem.svelte';

  export let resultList: PagefindSearchFragment[];
</script>

{#if $displayResults}
  <div data-search-results>
    {#if resultList.length > 0}
      {#each resultList as data}
        <ResultItem {data} />
      {/each}
    {:else if $displayResults}
      <p>{`No article found: ${$query}`}</p>
    {/if}
  </div>
{/if}

<style lang="stylus">
  @import "../../styles/api.styl"

  div[data-search-results]
    @extend $widget-glassmorphism
    box-sizing border-box
    flex(column, 3rem)
    border-radius 1rem
    padding 1rem
    @media screen and (min-width widths.medium)
      padding 1.5rem

    p
      set-font("sans", "input", "auto")
</style>
