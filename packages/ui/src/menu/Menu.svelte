<script lang="ts">
  import MenuButton from './MenuButton.svelte';
  import MenuBox from './MenuBox.svelte';

  /**
   * Scoped css is great but, doesn't receive outside styles if implemented with classes (Svelte implemented as such).
   * However, you can choose styles to be applied.
   *
   * none: disable all default styles (Disables position, top, etc.)
   * title: Applies to title (data-menu-title)
   * grid: Applies grid layout
   * icon: Applies to icon (@iconify/svelte)
   * select: Applies to `<select>`
   * box: color, filter, etc.
   * size: width, padding, etc.
  */
  export let requiredStyles = "default"
</script>

<MenuButton {...$$restProps} />
<MenuBox {requiredStyles} {...$$restProps}><slot /></MenuBox>
