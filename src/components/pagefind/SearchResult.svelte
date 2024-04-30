<script lang="ts">
  import type { PagefindSearchFragment } from '@lib/pagefind';

  export let data: PagefindSearchFragment;
  export let requireSubResults: boolean = false;
</script>

<section data-search-result {...$$restProps}>
  <a href={data.url}>
    <h2>{data.meta.title}</h2>
    <p>{@html data.excerpt}</p>
  </a>
  <!-- Sub Result -->
  {#if requireSubResults}
    <ul data-search-sub-result>
      {#each data.sub_results.slice(0, 3) as subResult}
        <li>
          <a href={subResult.url}
            ><h3>{subResult.title}</h3>
            <p>{@html subResult.excerpt}</p>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style lang="stylus">
  @import "../../styles/api.styl"

  $link
    display block
    width 100%

    color var(--content)
    &:hover
      color var(--link)
      text-decoration underline

  section[data-search-result]

    a, * > a
      text-decoration none

    h2
      @extend $link
      sans(1.25rem)
      @media screen and (min-width widths.medium)
        sans(2.5rem)

    p
      padding-left 1.25rem
      sans(1rem)
      @media screen and (min-width widths.medium)
        padding-left 1.5rem
        sans(1.25rem)

    ul[data-search-sub-result]
      list-style none
      padding-left 1.25rem
      @media screen and (min-width widths.medium)
        padding-left 1.5rem

      li
        padding-top 1.5rem

        h3
          @extend $link
          sans(1.125rem)
          @media screen and (min-width widths.medium)
            sans(1.5rem)

        p
          sans(1rem)
</style>
