<script lang="ts">
  import clsx from "clsx";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {
    children?: any;
    openAsNew?: boolean;
    className?: string;
  }
  const { children, openAsNew = true, className = "", ...props }: Props = $props();
</script>

<a class={clsx(["relative link [&>span]:hover:w-full", className])} {...props}>
  {@render children?.()}
  <span class="absolute top-0 left-0 | h-full w-0 | opacity-25 bg-secondary transition-all transition-duration-200">
  </span>
</a>
