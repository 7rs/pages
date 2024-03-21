<script lang="ts">
  import type { PagefindSearchFragment } from '@lib/pagefind';

  import { onMount } from 'svelte';

  import {
    displayDestroyButton,
    displayFilters,
    displayResults,
    filters,
    initFilters,
    applyFilters,
    placeholderTextIndex,
    query,
  } from '@lib/pagefind';

  import Results from './Results.svelte';
  import Control from './Control.svelte';
  import Filters from './Filters.svelte';

  export let isDevelopment;

  onMount(() => {
    applyFilters();
    $displayFilters = $filters.tag.length > 0;
  });

  let pagefind = (async () => {
    const scriptDir = isDevelopment ? '/' : '/dist/';
    const _pagefind = await import(/* @vite-ignore */ `${scriptDir}pagefind/pagefind.js`);
    await _pagefind.init();

    return _pagefind;
  })();

  let resolvePagefind;
  pagefind.then((resolve) => (resolvePagefind = resolve)).catch((err) => console.log(err));

  async function destroy() {
    const _destroy = resolvePagefind.destroy();

    initFilters();
    $query = '';
    $displayDestroyButton = false;
    $displayResults = false;

    await _destroy;
  }

  async function search(q): Promise<PagefindSearchFragment[]> {
    if ($query.length <= 0) {
      $displayDestroyButton = $filters.tag.length > 0;
      $displayResults = false;
      return [];
    }

    $placeholderTextIndex = 0;
    $displayDestroyButton = true;
    $displayResults = true;

    const search = await resolvePagefind.search(q, { filters: $filters });
    return await Promise.all(search.results.map((r) => r.data()));
  }
</script>

<article data-pagefind>
  <Control destroyAction={destroy} />
  {#await pagefind then pagefind}
    {#await pagefind.filters() then filterObject}
      <Filters {filterObject} />
    {/await}
    {#await search($query) then results}
      <Results resultList={results} />
    {/await}
  {:catch error}
    <p>{error}</p>
  {/await}
</article>
