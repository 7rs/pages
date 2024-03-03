<script lang="ts">
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';

  // import { Titles } from "@scripts/lib/blog"
  // I have no idea why not, but the above code cannot be used.
  // Editor display fuckin' annoying errors, but works the all.
  import * as locale from '@lib/locale';
  const { Locale, getLangaugeLabel, IntervalTime } = locale;
  // import { Locale, getLangaugeLabel, IntervalTime } from '@lib/locales';

  export let locales: Array<typeof Locale>;

  const hovering = writable(false);
  const activeLocaleIndex = writable(0);

  const enableHovering = (i) => {
    $hovering = true;
    $activeLocaleIndex = i;
  };

  if (locales.length > 1) {
    const interval = setInterval(() => {
      if ($hovering) {
        return;
      }

      $activeLocaleIndex = $activeLocaleIndex == 1 ? 0 : 1;
      // $index = $index == langs.length - 1 ? 0 : $index + 1;
    }, IntervalTime);

    onDestroy(() => clearInterval(interval));
  }
</script>

{#key $activeLocaleIndex}
  <p in:fade={{ duration: 300 }} {...$$restProps}>{locales[$activeLocaleIndex].title}</p>
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
