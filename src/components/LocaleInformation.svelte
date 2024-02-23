<script lang="ts">
  import { writable } from 'svelte/store';
  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';

  // import { Titles } from "@scripts/lib/blog"
  // I have no idea why not, but the above code cannot be used.
  // Editor display fuckin' annoying errors, but works the all.
  import * as blog from '@lib/blog.ts';
  const { LocaleData, getLangaugeLabel } = blog;

  export let locales: Array<LocaleData>;

  const intervalTime = 7500;
  const hovering = writable(false);
  const index = writable(0);

  const enableHovering = (i) => {
    $hovering = true;
    $index = i;
  };

  if (locales.length > 1) {
    const interval = setInterval(() => {
      if ($hovering) {
        return;
      }

      $index = $index == 1 ? 0 : 1;
      // $index = $index == langs.length - 1 ? 0 : $index + 1;
    }, intervalTime);

    onDestroy(() => clearInterval(interval));
  }
</script>

{#key $index}
  <h1 in:fade={{ duration: 300 }} {...$$restProps}>{locales[$index].title}</h1>
{/key}

<div {...$$restProps}>
  {#each locales as locale, i}
    <a
      on:mouseenter={() => {
        enableHovering(i);
      }}
      on:mouseleave={() => ($hovering = false)}
      href={locales[i].slug}
      {...$$restProps}>{getLangaugeLabel(locales[i].lang)}</a
    >
  {/each}
</div>
