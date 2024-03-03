<script lang="ts">
  import { writable } from 'svelte/store';
  import { slide, blur } from 'svelte/transition';

  import Icon from '@iconify/svelte';

  import * as stack from '@lib/stack.ts';
  const { StackList } = stack;

  export let tabs: Array<typeof StackList>;

  const activeTabIndex = writable(0);
</script>

<section>
  <!-- Tabs bar -->
  <div>
    {#each tabs as stackLists, i}
      <!-- Tab button -->
      <button
        type="button"
        title={stackLists.label}
        disabled={i === $activeTabIndex}
        style={i === $activeTabIndex ? "background-color: white" : undefined}
        on:click={() => {
          $activeTabIndex = i;
        }}>
        {stackLists.label}
      </button>
      <!--  -->
    {/each}
  </div>
  <!-- Stack icons -->
  {#key $activeTabIndex}
    <article in:slide={{ duration: 100 }}>
      {#each tabs[$activeTabIndex].stacks as stack}
        <!-- Icon -->
        <a href={stack.url} title={stack.name} target="_blank" referrerpolicy="no-referrer" rel="noopener noreferrer">
          {#if stack.icon.startsWith('src:')}
            <img in:blur={{ duration: 200 }} src={`src/icons/${stack.icon.slice(4)}.svg`} alt={stack.name} />
          {:else}
            <Icon icon={stack.icon} title={stack.name} />
          {/if}
        </a>
        <!--  -->
      {/each}
    </article>
  {/key}
</section>

<style lang="stylus">
  @import "../../../styles/api.styl"

  section
    background rgba(white, .8)
    backdrop-filter blur(8px) grayscale(100%)
    border-radius 0 0 1rem 1rem

  div
    display flex
    overflow-x scroll
    scrollbar(5px, "y")

    button
      padding 0.25rem 1rem
      white-space nowrap
      border none
      color black
      // Responsive
      sans(1rem, 1.5rem)
      @media screen and (min-width widths.medium)
        sans(1.25rem, 1.75rem)

      &:nth-child(7n + 1)
        background-color rgb(255, 224, 224)
      &:nth-child(7n + 2)
        background-color rgb(255, 240, 224)
      &:nth-child(7n + 3)
        background-color rgb(255, 255, 224)
      &:nth-child(7n + 4)
        background-color rgb(224, 255, 224)
      &:nth-child(7n + 5)
        background-color rgb(224, 224, 255)
      &:nth-child(7n + 6)
        background-color rgb(224, 240, 255)
      &:nth-child(7n + 7)
        background-color rgb(255, 224, 255)

      &:hover
        filter saturate(500%)

  article
    width 100%
    display flex
    justify-content space-around
    flex-wrap wrap
    box-sizing border-box

    padding 2rem
    gap 3rem
    @media screen and (min-width widths.medium)
      gap 4rem
      padding 3rem

    :global(svg), img
      width auto
      max-width 100%
      height 2.5rem
      @media screen and (min-width widths.medium)
        height 5rem
      color black
</style>
