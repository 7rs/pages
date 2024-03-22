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
      sans($standard-sizes.medium)
      @media screen and (min-width widths.medium)
        sans($standard-sizes.xxl)

    p
      padding-left $standard-spaces.medium
      sans($standard-sizes.smallest)
      @media screen and (min-width widths.medium)
        padding-left $standard-spaces.large
        sans($standard-sizes.medium)

    ul[data-search-sub-result]
      list-style none
      padding-left $standard-spaces.medium
      @media screen and (min-width widths.medium)
        padding-left $standard-spaces.large

      li
        padding-top $standard-spaces.large;

        h3
          @extend $link
          sans($standard-sizes.small)
          @media screen and (min-width widths.medium)
            sans($standard-sizes.large)

        p
          sans($standard-sizes.smallest)
</style>
