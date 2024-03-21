<script lang="ts">
  import { onMount } from 'svelte';
  import { linear } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  import Icon from '@iconify/svelte';

  import { query, displayFilters, displayDestroyButton, placeholderTextIndex } from '@lib/pagefind';

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
    data-filter-button
    on:click={() => {
      $displayFilters = $displayFilters ? false : true;
    }}><Icon icon="mdi:hashtag" /></button
  >
  <input bind:value={$query} placeholder={placeholders[$placeholderTextIndex]} />
  {#if $displayDestroyButton}
    <button
      data-destroy-button
      in:slide={{ duration: 100, easing: linear, axis: 'x' }}
      out:slide={{ duration: 100, easing: linear, axis: 'x' }}
      on:click={destroyAction}><Icon icon="material-symbols:close" /></button
    >
  {/if}
</div>

<style lang="stylus">
  @import "../../styles/api.styl"

  div[data-pagefind-control]
    @extend $widget
    flex()
    margin-bottom 1rem
    padding 0 1rem
    border-radius 1rem

    input
      overflow-x clip
      width 100% 
      background none
      border none
      outline none
      sans(1.125rem)
      padding 1rem 0.5rem
      @media screen and (min-width widths.medium)
        sans(1.5rem)
        padding 1rem

    button
      background none
      border none
      height 100%
      margin auto

      &[data-destroy-button]
        margin-left 0.25rem
      &[data-filter-button]
        margin-right 0.25rem
      @media screen and (min-width widths.medium)
        &[data-destroy-button]
          margin-left 0.5rem
        &[data-filter-button]
          margin-right 0.5rem

      :global(svg)
        color var(--content)

        width auto
        height 1.75rem
        @media screen and (min-width widths.medium)
          height 2.5rem

        &:hover
          transition all 100ms ease-out
          transform scale(125%)

        &:active
          transition all 100ms ease-out
          transform rotate(1.5turn)
</style>
