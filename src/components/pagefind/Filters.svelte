<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicIn } from 'svelte/easing';

  import type { FilterObject } from '@lib/pagefind';
  import { displayFilters, filters, toggleTag } from '@lib/pagefind';

  export let filterObject: FilterObject;

  const animation: { [key: string]: any } = { duration: 150, easing: cubicIn, axis: 'y' };
</script>

{#if $displayFilters}
  <fieldset in:slide={animation} out:slide={animation} data-filter>
    {#each Object.keys(filterObject.tag || []) as item}
      <!-- Tag Item -->
      <div data-filter-button>
        <input
          type="checkbox"
          id={item}
          name="tag"
          checked={$filters.tag.includes(item)}
          on:click={() => toggleTag(item)}
        />
        <label for={item}>{filterObject.tag[item]} {item}</label>
      </div>
      <!-- Tag Item -->
    {/each}
  </fieldset>
{/if}

<style lang="stylus">
  @import "../../styles/api.styl"

  fieldset[data-filter]
    @extend $widget
    flex()
    flex-wrap wrap
    border none
    border-radius 1rem

    div[data-filter-button]
      padding 0 $standard-spaces.small
      flex(_gap: $standard-spaces.small)
      @media screen and (min-width widths.medium)
        padding 0 $standard-spaces.medium
        flex(_gap: $standard-spaces.medium)

      input[type="checkbox"]
        margin auto
        transform scale(1.5)
        @media screen and (min-width widths.medium)
          transform scale(1.75)

      label
        sans($standard-sizes.small)
        @media screen and (min-width widths.medium)
          sans($standard-sizes.medium)

        &:hover
          color var(--link)
</style>
