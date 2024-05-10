<script lang="ts">
  import { writable } from 'svelte/store';

  import Icon from '@iconify/svelte';

  import { activeColorScheme, colorSchemeList, changeColorScheme } from '@pagesjs/ui';

  import { menuOpened } from './state.ts';

  const languages = ['ja', 'en'];
  const activeLanguage = writable(languages[0]);

  const themes = ['pages', 'dracula', 'tokyonight', 'ayu'];
  const activeTheme = writable(themes[0]);

  export let requiredStyles: string;
</script>

{#if $menuOpened}
  <article data-menu={requiredStyles} {...$$restProps}>
    <p data-menu-title {...$$restProps}>Menu</p>
    <!-- Color scheme option -->
    <Icon icon="mdi:theme-light-dark" {...$$restProps} />
    <select bind:value={$activeColorScheme} on:change={() => changeColorScheme($activeColorScheme)}>
      {#each colorSchemeList as colorScheme}
        <option value={colorScheme}>{colorScheme}</option>
      {/each}
    </select>
    <!-- Language option -->
    <Icon icon="mdi:language" {...$$restProps} />
    <select bind:value={$activeLanguage}>
      {#each languages as language}
        <option value={language}>{language}</option>
      {/each}
    </select>
    <!-- Theme option -->
    <Icon icon="mdi:brush-variant" />
    <select bind:value={$activeTheme}>
      {#each themes as theme}
        <option value={theme}>{theme}</option>
      {/each}
    </select>
    <!-- Custom -->
    <slot />
  </article>
{/if}

<style lang="stylus">
  [data-menu]:not([data-menu="none"])
    position absolute
    top 100%

  [data-menu~="title"], [data-menu~="default"]
    &:not([data-menu~="-title"])
      [data-menu-title]
        text-align center
        font-size 1.25rem
        font-weight 700

  [data-menu~="grid"], [data-menu~="default"]
    &:not([data-menu~="-grid"])
      display grid
      grid-template-columns 1fr 3fr
      grid-auto-rows 3rem

      [data-menu-title]
        grid-column-start 1
        grid-column-end -1

  [data-menu~="icon"], [data-menu~="default"]
    &:not([data-menu~="-icon"])
      :global(svg)
        display block
        box-sizing border-box
        margin 0.5rem
        height 1.5rem
        width 1.5rem
        &:hover
          transition none
          transform none

  [data-menu~="select"], [data-menu~="default"]
    &:not([data-menu~="-select"])
      select
        margin 0.5rem
        height 1.5rem
        border none
        background none
        font-size 1rem
        color var(--content)
      option
        font-size 0.875rem

  [data-menu~="box"], [data-menu~="default"]
    &:not([data-menu~="-box"])
      background-color rgba(gray, .5)
      border-radius 8px
      backdrop-filter blur(8px)

  [data-menu~="size"], [data-menu~="default"]
    &:not([data-menu~="-size"])
      padding 0.5rem
</style>
