<script lang="ts">
  import Icon from "@iconify/svelte";
  import { hasIcon } from "@scripts/icon.ts";
  import AnimatedAnchor from "@components/AnimatedAnchor.svelte";

  interface Props {
    tags?: string[];
    definePagefindMeta?: boolean;
  }
  const { tags = [], definePagefindMeta = false }: Props = $props();
</script>

<section class="flex flex-wrap gap-x-2 | border-color-[#337ab7] color-[#337ab7]">
  {#each tags as tag}
    {@const provider = hasIcon(tag)}
    <AnimatedAnchor
      href={`/tags/${tag}`}
      openAsNew={false}
      data-pagefind-filter={definePagefindMeta ? `tags:${tag}` : undefined}
      className="flex flex-nowrap items-center gap-x-1 | border-b-1 no-underline text-wrap"
    >
      {#if provider}
        <Icon icon={`${provider.provider}:${provider.name}`} class="inline no-underline" />
      {/if}
      
      <p>#<span data-pagefind-weight={definePagefindMeta ? 6.0 : undefined}>{tag}</span></p>
    </AnimatedAnchor>
  {/each}
</section>
