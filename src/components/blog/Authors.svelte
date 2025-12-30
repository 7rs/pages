<script lang="ts">
  import AnimatedAnchor from "@components/common/AnimatedAnchor.svelte";

  interface Props {
    authors?: string[];
    definePagefindMeta?: boolean;
  }
  const { authors = [], definePagefindMeta = false }: Props = $props();
</script>

<section class="flex flex-wrap gap-x-2 | border-color-[#A00] color-[#A00]">
  {#each authors as author}
    <AnimatedAnchor
      href={`/tags/${author}`}
      openAsNew={false}
      data-pagefind-filter={definePagefindMeta ? `authors:${author}` : undefined}
      className="flex flex-nowrap items-center gap-x-1 | no-underline hover:underline"
    >
      @<span data-pagefind-weight={definePagefindMeta ? 6.0 : undefined}>{author}</span>
    </AnimatedAnchor>
  {/each}
</section>
