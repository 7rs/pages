<script lang="ts">
  import { AutoComplete, type CursorEvent } from "@scripts/autocomplete.svelte.ts";
  import { PagesPagefind } from "@scripts/pagefind.svelte.ts";

  interface Props {
    pagefindPath: string;
  }
  const { pagefindPath }: Props = $props();

  let pp = new PagesPagefind(pagefindPath);
  let ac: AutoComplete = new AutoComplete();

  pp.syncAutoComplete(ac);

  async function onKeyup(e: CursorEvent<KeyboardEvent>, pagefind: Pagefind) {
    if (e.key === "Enter") {
      return pp.updateQuery(...ac.getQuerr());
    }

    ac.updateSuggests(e);
    await pp.preload(pagefind, ...ac.getQuerr());
  }
</script>

<article class="flex flex-col gap-y-32">
  {#await pp.pagefind then pagefind}
    <!-- Input -->
    <section class="flex flex-col">
      <input
        bind:value={ac.query}
        type="text"
        class="input"
        onkeyup={async (e) => await onKeyup(e, pagefind)}
        onclick={(e) => ac.updateSuggests(e)}
      />
      <div class="flex flex-col items-start text-start">
        {#each ac.getSuggests() as suggest}
          <button onclick={() => ac.addSuggest(suggest[0])}>
            {suggest[0]}
            {suggest[1]}
          </button>
        {/each}
      </div>
    </section>

    <!-- Result -->
    <section class="flex flex-col gap-2">
      {#await pp.search(pagefind) then results}
        {#each results as data}
          <!-- Card -->

          <article class="border-base-300 bg-base-100">
            <hgroup class="flex flex-col">
              <h3 class="text-2xl">{data.meta.title}</h3>
              <p>{data.meta.description}</p>
            </hgroup>
            <section class="flex flex-col">
              <div class="flex flex-wrap gap-x-2 | border-color-[#337ab7] color-[#337ab7]">
                {#each data.filters.tags as tag}
                  <p class="inline no-underline border-b-1">#{tag}</p>
                {/each}
              </div>
              <div class="flex flex-wrap color-[#A00]">
                {#each data.filters.authors as authors}
                  <p>@{authors}</p>
                {/each}
              </div>
            </section>
            <a href={data.url} class="btn">Read</a>
          </article>

          <!-- Card -->
        {/each}
      {/await}
    </section>
  {:catch}
    <p>error</p>
  {/await}
</article>

<!--
- ### The pagefind component

  You must generate Pagefind script and specify Pagefind script path.

- ### Usage

  ```astro
  ---
  import Pagefind from "components/pagefind/Pagefind.svelte"
  const dir = import.meta.env.DEV ? "dist/" : "";
  const pagefindPath = `/${dir}pagefind/pagefind`;
  ---
  <Pagefind pagefindPath={pagefindPath} client:load />
  ```
-->
