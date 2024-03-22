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
    padding 0 $standard-spaces.medium
    border-radius 1rem
    flex($standard-spaces.smallest)
    @media screen and (min-width widths.medium)
      flex($standard-spaces.small)

    input
      width 100% 
      background none
      border none
      outline none
      sans($standard-sizes.small)
      padding $standard-spaces.medium $standard-spaces.small
      @media screen and (min-width widths.medium)
        sans($standard-sizes.large)
        padding $standard-spaces.medium

    button
      background none
      border none
      height 100%
      margin auto

      :global(svg)
        color var(--content)

        width auto
        height $standard-sizes.large
        @media screen and (min-width widths.medium)
          height $standard-sizes.xl

        &:hover
          transition all 100ms ease-out
          transform scale(125%)

        &:active
          transition all 100ms ease-out
          transform rotate(1.5turn)
</style>
