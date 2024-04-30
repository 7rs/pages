<script lang="ts">
  import { blur } from 'svelte/transition';
  import { writable } from 'svelte/store';

  import Icon from '@iconify/svelte';

  import { loadThemeIndex, saveThemeIndex, toThemeName, getNextThemeIndex, themes } from '@lib/theme.ts';

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
      <Icon icon="line-md:moon-alt-to-sunny-outline-loop-transition" {...$$restProps} />
    {:else if themes[$activeIndex] === 'dark-mode'}
      <Icon icon="line-md:moon-alt-loop" {...$$restProps}  />
    {:else}
      <Icon icon="line-md:light-dark-loop" {...$$restProps} />
    {/if}
  </button>
{/key}

<style lang="stylus">
  @import "../../styles/api.styl"

  button
    @extend $icon-button
</style>
