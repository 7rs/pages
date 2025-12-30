<script lang="ts">
  import Icon from "@iconify/svelte";
  import { getTwemojiSVG } from "@scripts/emoji.ts";

  interface Props {
    image?: string;
    className?: string;
  }
  const { image, className, ...props }: Props = $props();
</script>

{#if image.startsWith(":") && image.endsWith(":")}
  {#await getTwemojiSVG(image, "grid-area-[image] hidden 2xs:block p-2 size-12 justify-self-center self-center", props) then twemoji}
    {@html twemoji}
  {/await}
{:else if image.indexOf(".") === -1}
  <Icon icon={image} data-pagefind-meta="image_alt[name]" class={className} {...props} />
{:else}
  <img src={image} alt="article image" data-pagefind-meta="image[src], image_alt[alt]" class={className} {...props} />
{/if}
