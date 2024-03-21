<script lang="ts">
  import type { PagefindSearchFragment } from '@lib/pagefind';

  export let data: PagefindSearchFragment;
</script>

<section data-search-result {...$$restProps}>
  <a href={data.url}>
    <h2>{data.meta.title}</h2>
    <p>{@html data.excerpt}</p>
  </a>
  <!-- Sub Result -->
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
      sans(2rem)

    p
      sans(1.125rem)
      padding-left 2rem

    ul[data-search-sub-result]
      padding-left 1rem
      list-style none

      li
        margin-top 1rem
        h3
          @extend $link
          sans(1.5rem)

        p
          sans(1rem)
</style>
