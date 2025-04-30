<script lang="ts">
  import { importPagefind } from "@scripts/components/pagefind.ts";

  interface Props {
    isDev: boolean;
  }

  let { isDev }: Props = $props();
</script>

{#await importPagefind(isDev && "dist/") then pagefind}
  {#await pagefind.filters() then filterObject}
    {filterObject}
  {/await}
{:catch err}
  <p>{err}</p>
{/await}
