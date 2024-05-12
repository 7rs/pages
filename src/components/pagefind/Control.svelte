<script lang="ts">
  import { onMount } from 'svelte';
  import { linear } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  import Icon from '@iconify/svelte';

  import { query, displayFilters, displayDestroyButton, placeholderTextIndex } from '@pagesjs/pagefind';

  export let destroyAction;
  export let placeholders = ['Search by Keyword', 'Powered by Pagefind', 'Written in Svelte'];
  export let intervalTime = 10000;

  onMount(() => {
    const interval = setInterval(() => {
      if ($displayDestroyButton) {
        return;
      }

      if ($placeholderTextIndex === placeholders.length - 1) {
        $placeholderTextIndex = 0;
      } else {
        $placeholderTextIndex++;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  });
</script>

<div data-pagefind-control>
  <button
    data-pagefind-control-button
    on:click={() => {
      $displayFilters = $displayFilters ? false : true;
    }}><Icon icon="mdi:hashtag" /></button
  >
  <input data-pagefind-input bind:value={$query} placeholder={placeholders[$placeholderTextIndex]} />
  {#if $displayDestroyButton}
    <button
      data-pagefind-control-button
      in:slide={{ duration: 100, easing: linear, axis: 'x' }}
      out:slide={{ duration: 100, easing: linear, axis: 'x' }}
      on:click={destroyAction}><Icon icon="material-symbols:close" /></button
    >
  {/if}
</div>

<style lang="stylus">
  @import "../../styles/api.styl"

  [data-pagefind-control]
    @extend $widget-glassmorphism

    padding 0.75rem
    flex(_gap: 0.5rem)
    @media screen and (min-width widths.medium)
      padding 1rem
      flex(_gap: 1rem)

  [data-pagefind-input], [data-pagefind-control-button]
    background none
    border none

  [data-pagefind-input]
    width 100% 
    outline none
    set-font("sans", "input")

  [data-pagefind-control-button]
    zoom()

    :global(svg)
      color var(--content)
      set-font(size: "input", inline: false)

      &:active
        transition all 100ms ease-out
        transform rotate(1.5turn)
</style>
