<script lang="ts">
  import Icon from '@iconify/svelte';
  import qs from "qs"

  export let post: { [key: string]: any };

  function dateToString(dateObject: Date) {
    const year = String(dateObject.getFullYear()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const date = String(dateObject.getDate()).padStart(2, '0');
    return `${year}-${month}-${date}`;
  }
</script>

<article data-post>
  <!-- Title -->
  <a href={post.slug} title={post.data.title}>
    <h2>{post.data.title}</h2>
  </a>
  <!-- Tag List -->
  <section data-post-tags>
    <Icon icon="mdi:hashtag" />
    <div>
      {#each post.data.tags as tag}
        <a href={`/blog?${qs.stringify({tags: [tag]})}`} title={tag}>
          #{tag}
        </a>
      {/each}
    </div>
  </section>
  <!-- Author List -->
  <section data-post-authors>
    <Icon icon="mdi:pencil-outline" />
    <div>
      {#each post.data.authors as author}
        <a href={`/blog?author=${author}`} title={author}>
          @{author}
        </a>
      {/each}
    </div>
  </section>
  <!-- Edit Date -->
  <section data-post-modified>
    <Icon icon="mdi:clock-time-four-outline" />
    <div>
      {#if post.data.updated_at}
        <time datetime={post.data.published_at}>{dateToString(post.data.updated_at)} (Updated)</time>
      {/if}
      {#if post.data.published_at}
        <time datetime={post.data.published_at}>{dateToString(post.data.published_at)} (Published)</time>
      {/if}
      {#if !post.data.updated_at && !post.data.published_at}
        <p>Unknown</p>
      {/if}
    </div>
  </section>
</article>

<style lang="stylus">
  @import "../../styles/api.styl"

  article[data-post]
    @extend $widget

    a
      text-decoration none
      &:hover
        text-decoration underline

    a, time, p
      vertical-align middle
      sans(1rem)
      @media screen and (min-width widths.medium)
        sans(1.25rem)

    :global(svg)
      margin auto 0
      min-height 1rem
      min-width 1rem
      @media screen and (min-width widths.medium)
        min-height 1.25rem
        min-width 1.25rem

    h2
      margin 0.75rem 0
      sans(1.25rem)
      @media screen and (min-width widths.medium)
        sans(1.75rem)
      @media screen and (min-width widths.large)
        margin 1rem 0
        sans(2rem)

      &:hover
        text-decoration solid underline var(--border) 1px

    section
      flex(_gap: 1rem)

      div
        flex(_gap: 1rem)
        flex-wrap wrap

    section[data-post-tags] > div > a:hover
      color rgb(51, 122, 183)

    section[data-post-authors] > div > a:hover
      color rgb(160, 0, 0)

    section[data-post-modified] > div > time:hover
      color rgb(255, 136, 0)
</style>
