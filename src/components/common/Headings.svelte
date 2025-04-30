<script lang="ts">
  import clsx from "clsx";
  import { onMount } from "svelte";

  import type { Heading } from "@scripts/components/common.ts";

  interface Props {
    headings?: Heading[];
  }

  let { headings = [] }: Props = $props();

  let activeIndex = $state(0);
  let position = $state(-1);
  let headingPositions: number[] = $state([]);

  onMount(() => {
    headingPositions = headings.map((heading) => {
      const element = window.document.getElementById(heading.slug);
      if (element == null) {
        return 0;
      }

      return element.offsetTop;
    });

    function setPosition(_event: Event) {
      if (window.scrollY === position) {
        return;
      }

      position = window.scrollY;
      for (let i = 0; i < headingPositions.length; i++) {
        if (position > headingPositions[i]) {
          continue;
        }

        activeIndex = i;
        break;
      }
    }

    addEventListener("scrollend", setPosition);
  });
</script>

<div class="heading-list">
  {#each headings as heading, i}
    {#if heading.depth >= 2}
      <a
        class={clsx([
          "heading-text",
          heading.depth <= 2 && "font-bold",
          heading.depth >= 3 && `ml-${(heading.depth - 2) * 3}`,
          activeIndex === i ? "text-active" : "text-main",
        ])}
        href={`#${heading.slug}`}
      >
        {heading.text}
      </a>
    {/if}
  {/each}
</div>
