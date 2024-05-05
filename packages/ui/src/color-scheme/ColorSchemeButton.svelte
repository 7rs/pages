<script lang="ts">
  import { blur } from 'svelte/transition';
  import { onMount } from 'svelte';

  import Icon from '@iconify/svelte';

  import { activeColorScheme } from './state.ts';
  import { initColorScheme, advanceColorScheme } from './main.ts';
  import { getColorSchemeIcon } from "./icon.ts"

  export let duration = 200;

  onMount(initColorScheme);
</script>

<button on:click={advanceColorScheme} in:blur={{ duration: duration }} data-color-scheme-button {...$$restProps}>
  {#key $activeColorScheme}
    <Icon icon={getColorSchemeIcon($activeColorScheme)} {...$$restProps} />
  {/key}
</button>

<style lang="stylus">
  [data-color-scheme-button]
    border none
    background none
</style>
