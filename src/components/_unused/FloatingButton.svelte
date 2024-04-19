<script lang="ts">
  import Icon from '@iconify/svelte';

  export let modalId = 'modal';
  export let activeClass = 'show';

  const modal = window.document.getElementById(modalId);
  if (modal == null) {
    throw new Error(`Not found modal element: ${modalId}`);
  }
</script>

<button
  on:click={(event) => {
    modal.classList.toggle(activeClass);
    event.currentTarget.style.bottom = modal.classList.contains(activeClass) ? '6rem' : '1rem'
  }}><Icon icon="mdi:format-header-pound" /></button
>

<style lang="stylus">
  @import "../../../styles/api.styl"

  button
    @media screen and (min-width widths.large)
      display none

    z-index 9999
    position fixed
    bottom 1rem
    right 1rem
    box-sizing border-box
    padding 0.25rem
    background none
    border-radius 100%
    backdrop-filter blur(8px)
    border 1px solid var(--widget-border)

    :global(svg)
      height 2rem
      width auto
</style>
