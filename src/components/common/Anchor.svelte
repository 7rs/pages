<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  export interface Props extends HTMLAnchorAttributes {
    children?: any;
    openAsNew?: boolean;
  }
  const { children, openAsNew = true, ...props }: Props = $props();
</script>

<a target={openAsNew ? "_blank" : "_self"} rel="noopener noreferrer" referrerpolicy="no-referrer" {...props}>
  {@render children?.()}
</a>
