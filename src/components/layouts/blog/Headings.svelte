<script lang="ts">
  import { writable } from 'svelte/store';

  export let headings: Array<{ slug: string; depth: number; text: string }> = [];
  export let indentWidth: string
  export let colors = {
    red: 64,
    green: 0,
    blue: 255,
    alpha: 0.2,
  };

  const backgroundColor = `rgba(${colors.red}, ${colors.green}, ${colors.blue}, ${colors.alpha})`;
  const activeHeadingIndex = writable(0);
</script>

{#each headings as heading, i}
  <a
    href={`#${heading.slug}`}
    style:padding-left={`calc(${indentWidth} * ${heading.depth})`}
    style:font-weight={heading.depth > 2 ? 400 : 700}
    style:background-color={$activeHeadingIndex === i ? backgroundColor : undefined}
    on:click={() => {
      $activeHeadingIndex = i;
    }}
    {...$$restProps}
  >
    {heading.text}
  </a>
{/each}
