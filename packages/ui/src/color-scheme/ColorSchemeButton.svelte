<script lang="ts">
  import { blur } from 'svelte/transition';
  import { onMount } from 'svelte';

  import Icon from '@iconify/svelte';

  import { ColorSchemes } from './models.ts';
  import { activeColorScheme } from './state.ts';
  import { initColorScheme, advanceColorScheme } from './main.ts';

  export let duration = 200;

  function getColorSchemeIcon(colorScheme: ColorSchemes): string {
    switch (colorScheme) {
      case ColorSchemes.Light:
        return 'line-md:moon-alt-to-sunny-outline-loop-transition';
      case ColorSchemes.Dark:
        return 'line-md:moon-alt-loop';
      default:
        return 'line-md:light-dark-loop';
    }
  }

  onMount(initColorScheme);
</script>

<button on:click={advanceColorScheme} in:blur={{ duration: duration }} data-color-scheme-button>
  {#key $activeColorScheme}
    <Icon icon={getColorSchemeIcon($activeColorScheme)} {...$$restProps} />
  {/key}
</button>

<style lang="stylus">
  [data-color-scheme-button]
    background none
    border none
</style>
