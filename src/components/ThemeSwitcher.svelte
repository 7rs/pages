<script lang="ts">
  import { blur } from 'svelte/transition';
  import { writable } from 'svelte/store';

  import Icon from '@iconify/svelte';

  import * as stack from '@lib/theme.ts';
  const { loadThemeIndex, saveThemeIndex, toThemeName, getNextThemeIndex, themes } = stack;

  // Load the saved theme index.
  const activeIndex = writable(loadThemeIndex());
  window.document.body.classList.add(toThemeName($activeIndex));

  function advanceActiveIndex() {
    window.document.body.classList.remove(toThemeName($activeIndex));
    $activeIndex = getNextThemeIndex($activeIndex);
    window.document.body.classList.add(toThemeName($activeIndex));
    saveThemeIndex($activeIndex)
  }
</script>

{#key $activeIndex}
  <button
    in:blur={{duration: 200}}
    on:click={advanceActiveIndex}
    {...$$restProps}
  >
    {#if themes[$activeIndex] === 'light-mode'}
      <Icon icon="material-symbols:light-mode-outline" {...$$restProps} />
    {:else if themes[$activeIndex] === 'dark-mode'}
      <Icon icon="material-symbols:dark-mode" {...$$restProps} />
    {:else}
      <Icon icon="material-symbols:computer-outline-sharp" {...$$restProps} />
    {/if}
  </button>
{/key}

<style lang="stylus">
  button
    background none
    border none
    width auto
    height 100%
</style>
