<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicIn } from 'svelte/easing';

  import { displayFilters, filters, toggleTag } from '@lib/pagefind';

  export let filterObject: { [key: string]: any };

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
    margin-bottom 1rem
    flex()
    flex-wrap wrap
    border none
    border-radius 1rem

    div[data-filter-button]
      padding 0 0.5rem
      flex(_gap: 0.5rem)
      @media screen and (min-width widths.medium)
        padding 0 1rem
        flex(_gap: 1rem)

      input[type="checkbox"]
        margin auto
        transform scale(1.5)
        @media screen and (min-width widths.medium)
          transform scale(1.75)

      label
        sans(1.125rem)
        @media screen and (min-width widths.medium)
          sans(1.25rem)

        &:hover
          color var(--link)
</style>
