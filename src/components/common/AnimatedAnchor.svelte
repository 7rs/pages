<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import clsx from "clsx";
  import Anchor, {type Props as AnchorProps} from "@components/common/Anchor.svelte";

  interface Props extends HTMLAnchorAttributes, AnchorProps {
    children?: any;
    className?: string;
  }
  const { children, className = "", ...props }: Props = $props();
</script>

<Anchor class={clsx(["relative link [&>span]:hover:w-full", className])} {...props}>
  {@render children?.()}
  <span class="absolute top-0 left-0 | h-full w-0 | opacity-25 bg-secondary transition-all transition-duration-200">
  </span>
</Anchor>
