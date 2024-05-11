<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicIn } from 'svelte/easing';

  import type { FilterObject } from '@pagesjs/pagefind';
  import { displayFilters, filters, toggleTag } from '@pagesjs/pagefind';

  export let filterObject: FilterObject;

  const animation: { [key: string]: any } = { duration: 150, easing: cubicIn, axis: 'y' };
</script>

{#if $displayFilters}
  <fieldset in:slide={animation} out:slide={animation} data-filter-list>
    {#each Object.keys(filterObject.tag || []) as item}
      <!-- Tag Item -->
      <div data-filter-item>
        <input
          type="checkbox"
          id={item}
          name="tag"
          checked={$filters.tag.includes(item)}
          on:click={() => toggleTag(item)}
        />
        <label for={item}>{item} <span data-tag-count>{filterObject.tag[item]}</span></label>
      </div>
      <!-- Tag Item -->
    {/each}
  </fieldset>
{/if}

<style lang="stylus">
  @import "../../styles/api.styl"

  [data-filter-list]
    @extend $widget-glassmorphism
    flex(_gap: 1rem)
    flex-wrap wrap

    padding 0.75rem
    @media screen and (min-width widths.medium)
      padding 1rem

  [data-filter-item]
    flex(_gap: 0.5rem)
    @media screen and (min-width widths.medium)
      flex(_gap: 1rem)

    input
      display none

    input:checked + label
      color #337ab7

    label
      set-font("sans", "input", "auto")

      &:hover
        color var(--link)

  [data-tag-count]
    color gray
</style>
