<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { MouseEventHandler } from "svelte/elements";

  export interface Navigation {
    page: number;
    href?: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
  }

  interface Props {
    first: Navigation;
    prev: Navigation;
    current: Navigation;
    next: Navigation;
    last: Navigation;
    goto?: string | ((inputtedText: string) => unknown);
    pageSize?: number;
  }

  // first = 1, current, last, total, size = 4

  const {
    first = { page: 1, href: "1" },
    prev,
    current,
    next,
    last,
    goto = "",
    pageSize = 4,
    ...props
  }: Props = $props();

  const hasFirst = first.page && first.page === 1 && first.page < current.page && first.page !== prev.page;
  const hasPrev = prev.page && prev.page >= 1 && prev.page === current.page - 1;
  const hasNext = next.page && next.page >= 1 && next.page === current.page + 1 && next.page <= last.page;
  const hasLast = last.page && last.page >= 1 && last.page > current.page && last.page !== next.page;

  let gotoPage = $state("");
</script>

{#snippet button(isRender: boolean, nav: string | MouseEventHandler<HTMLButtonElement>, icon: string)}
  {#if isRender}
    {#if typeof nav === "string"}
      <a href={nav} class="size-8 flex justify-center items-center rounded-md hover:bg-base-300 hover:color-primary">
        <Icon class="size-4" {icon} {...props} />
      </a>
    {:else}
      <button
        onclick={nav}
        class="size-8 flex justify-center items-center rounded-md hover:bg-base-300 hover:color-primary"
      >
        <Icon class="size-4" {icon} />
      </button>
    {/if}
  {:else}
    <div class="size-8 block content-['']"></div>
  {/if}
{/snippet}

<div class="w-full | flex justify-center items-center">
  {@render button(hasFirst, first.onclick || first.href || String(first.page), "line-md:chevron-small-double-left")}
  {@render button(hasPrev, prev.onclick || prev.href || String(prev.page), "line-md:chevron-small-left")}
  <input
    type="number"
    placeholder={`${current.page} / ${last.page}`}
    class="input input-ghost | w-16 text-center focus:outline-none | pagenation-input"
    bind:value={gotoPage}
    onkeyup={(e) => {
      if (e.key !== "Enter") {
        return;
      }

      if (typeof goto !== "string") {
        return goto(gotoPage);
      }

      const page = Number.parseInt(gotoPage);
      if (Number.isNaN(page) || page < 1 || last.page < page) {
        gotoPage = "0";
        return alert("Invalid page");
      }

      window.document.location.href = `${goto}${gotoPage}`;
    }}
  />
  {@render button(hasNext, next.onclick || next.href || String(next.page), "line-md:chevron-small-right")}
  {@render button(hasLast, last.onclick || last.href || String(last.page), "line-md:chevron-small-double-right")}
</div>
