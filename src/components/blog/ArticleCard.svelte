<script lang="ts">
  import type { Blog } from "@content/config.ts";
  import clsx from "clsx";
  import "@components/blog/ArticleImage.svelte";
  import ArticleImage from "@components/blog/ArticleImage.svelte";
  import Tags from "@components/blog/Tags.svelte";
  import Authors from "@components/blog/Authors.svelte";

  interface Props {
    slug: string;
    frontmatter: Blog;
    length: number;
    baseUrl?: string;
  }
  const { slug, frontmatter, length = 0, baseUrl = "" }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<article
  tabindex="0"
  class={clsx([
    "collapse [&:is(.collapse-close)>.collapse-content]:p-4!",
    "h-fit b-1 hover:border-primary",
    "border-base-300 bg-base-100 transition-all",
  ])}
>
  <input type="checkbox" class="peer block" />
  <section class="collapse-title p-4! | grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 | text-wrap">
    <ArticleImage
      image={frontmatter.image ? frontmatter.image : ":question:"}
      className="grid-area-[image] hidden 2xs:block p-2 size-12 justify-self-center self-center"
    />
    <h3 class="grid-area-[title] text-base font-bold">{frontmatter.title}</h3>
    <p class="grid-area-[desc] color-[var(--color-base-content)]/75 text-sm">
      {frontmatter.description?.length <= 0 ? "説明なし" : frontmatter.description}
    </p>
  </section>
  <section class="collapse-content flex flex-col gap-y-4">
    <div class="flex flex-col text-base">
      <Authors authors={frontmatter.authors} />
      <Tags tags={frontmatter.tags} />
    </div>
    <a href={`${baseUrl}${slug}`} class="btn btn-soft">Read</a>
  </section>
</article>

<style lang="scss">
  section.collapse-title {
    grid-template-areas:
      "image title"
      "image desc";
  }
</style>
