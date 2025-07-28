<script lang="ts">
  import { onMount } from "svelte";
  import { getRawTextContent } from "@scripts/blogUtil.ts";
  import { PagesPagefind } from "@scripts/pagefind/pages-pagefind.svelte.ts";
  import { AutoComplete, type CursorEvent } from "@scripts/pagefind/autocomplete.svelte.ts";
  import { ParamParser } from "@scripts/pagefind/param-manager.ts";
  import ArticleCard from "@components/ArticleCard.svelte";

  interface Props {
    pagefindPath: string;
    children?: any;
  }
  const { pagefindPath, children }: Props = $props();

  const pp = new PagesPagefind(pagefindPath);
  const ac = new AutoComplete();

  async function onKeyup(e: CursorEvent<KeyboardEvent>) {
    if (e.key === "Enter") {
      pp.updateQuery(...ac.getSearchData());
      return;
    }

    ac.updateSuggestedFilters(e);
    await pp.preload(...ac.getSearchData());
  }

  pp.setFilters(ac);

  onMount(() => {
    pp.setWindow(window);

    const parser = new ParamParser();
    ac.setQuery(parser.toParamArray(parser.parseParams(new URLSearchParams(window.document.location.search))));
  });
</script>

<article class="flex flex-col gap-y-32">
  {#await pp.unResolvedPagefind then _}
    <!-- Input -->
    <section class="max-w-128 w-full flex flex-col">
      <input
        bind:value={ac.query}
        type="text"
        onkeyup={onKeyup}
        onclick={(e) => ac.updateSuggestedFilters(e)}
        class="input w-full"
      />
      <div class="flex flex-col items-start text-start">
        {#each ac.getSuggestedFilters() as suggest}
          <button onclick={() => ac.sendFilterKey(suggest[0])} class="w-full text-start hover:bg-base-300">
            {suggest[0]}
            {suggest[1]}
          </button>
        {/each}
      </div>
    </section>

    <!-- Result -->
    <section class="flex flex-col gap-2 items-center">
      {#await pp.search() then results}
        {#each results as data}
          <div class="article-grid">
            <ArticleCard
              slug={data.url}
              frontmatter={{
                title: data.meta.title,
                description: data.meta.description,
                image: data.meta.image,
                tags: data.filters.tags,
                authors: data.filters.authors,
                category: data.filters.category[0],
              }}
              length={getRawTextContent(data.content).length}
            />
          </div>
        {:else}
          {@render children?.()}
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
