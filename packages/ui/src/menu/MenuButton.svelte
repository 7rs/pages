<script lang="ts">
  import Icon from "@iconify/svelte";

  import {menuOpened} from "./state.ts"
</script>

<button
  on:click={() => {
    $menuOpened = $menuOpened ? false : true;
  }}
  data-menu-button
  {...$$restProps}
>
  {#if $menuOpened}
    <Icon icon="line-md:menu-to-close-transition" {...$$restProps} />
  {:else}
    <Icon icon="line-md:close-to-menu-transition" {...$$restProps} />
  {/if}
</button>

<style lang="stylus">
  [data-menu-button]
    border none
    background none
</style>
