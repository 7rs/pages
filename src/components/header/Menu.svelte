<script lang="ts">
  import Icon from '@iconify/svelte';
  import { writable } from 'svelte/store';

  const opened = writable(false);

  export let languages = ['ja', 'en'];
  export let themes = ['system', 'dark', 'light'];
  const activeLanguage = writable(languages[0]);
  const activeTheme = writable(themes[0])
</script>

<button
  data-menu-button
  on:click={() => {
    $opened = $opened ? false : true;
  }}
  {...$$restProps}
>
  {#if $opened}
    <Icon icon="line-md:menu-to-close-transition" {...$$restProps} />
  {:else}
    <Icon icon="line-md:close-to-menu-transition" {...$$restProps} />
  {/if}
</button>

{#if $opened}
  <article data-menu>
    <p>Menu</p>
    <Icon icon="mdi:theme-light-dark" />
    <select bind:value={$activeTheme}>
      {#each themes as theme}
        <option value={theme}>{theme}</option>
      {/each}
    </select>
    <Icon icon="mdi:language" />
    <select bind:value={$activeLanguage}>
      {#each languages as language}
        <option value={language}>{language}</option>
      {/each}
    </select>
  </article>
{/if}

<style lang="stylus">
  @import "../../styles/api.styl"

  [data-menu-button]
    @extend $icon-button
    position relative

  [data-menu]
    position absolute
    top 100%
    width 10rem
    background-color rgba(gray, .5)
    border-radius 8px
    padding 0.5rem
    backdrop-filter blur(8px)
    display grid
    grid-template-columns 1fr 3fr
    grid-auto-rows 3rem

    p
      grid-column-start 1
      grid-column-end -1
      text-align center
      sans(1.5rem)

    :global(svg)
      box-sizing border-box
      margin auto
      display block
      height 1.5rem
      width 1.5rem
      margin 0.5rem

    select
      margin 0.5rem
      height 1.5rem
</style>
