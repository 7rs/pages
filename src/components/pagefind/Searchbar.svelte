<script lang="ts">
  import { onMount } from 'svelte';

  import type { PagefindSearchFragment } from '@pagesjs/pagefind';
  import {
    filters,
    initFilters,
    applyFilters,
    query,
    hideAlls,
    showResults,
    hasQuery,
    hideResults,
    showFiltersIfNeed,
    getErrorMessage,
    PagefindErrors,
  } from '@pagesjs/pagefind';

  import ResultList from './ResultList.svelte';
  import Control from './Control.svelte' 
  import Filters from './Filters.svelte';

  export let pagefindPath: string

  onMount(() => {
    applyFilters();
    showFiltersIfNeed();
  });

  let pagefind = (async () => {
    const _pagefind = await import(/* @vite-ignore */ pagefindPath);
    await _pagefind.init();

    return _pagefind;
  })();
  let errorMessage: string;

  let resolvePagefind;
  pagefind
    .then((resolve) => (resolvePagefind = resolve))
    .catch((err) => (errorMessage = getErrorMessage(PagefindErrors.FailedImport, err)));

  async function destroy() {
    const _destroy = resolvePagefind.destroy();

    initFilters();
    hideAlls();

    await _destroy;
  }

  async function search(_query: string): Promise<PagefindSearchFragment[]> {
    if (!hasQuery()) {
      hideResults(true, false);
      return [];
    }

    const search = await resolvePagefind.search(_query, { filters: $filters });
    const results = Promise.all(search.results.map((r) => r.data()));

    showResults();

    return await results;
  }
</script>

<article data-pagefind>
  <Control destroyAction={destroy} />
  <section data-additional-box>
    {#await pagefind then pagefind}
      <!-- Filter List -->
      {#await pagefind.filters() then filterObject}
        <Filters {filterObject} />
      {/await}
      <!-- Result List -->
      {#await search($query) then results}
        <ResultList resultList={results} />
      {:catch err}
        <p data-error-message>{getErrorMessage(PagefindErrors.FailedSearch, err)}</p>
      {/await}
    {:catch}
      <p data-error-message>{errorMessage}</p>
    {/await}
  </section>
</article>

<style lang="stylus">
  @import "../../styles/api.styl"

  [data-error-message]
    @extend $widget-glassmorphism
    sans(1.125rem)
    @media screen and (min-width widths.medium)
      sans(1.25rem)

  [data-additional-box]
    box-sizing border-box
    margin-top 1rem
    width 100%
    flex(column, 1rem)
</style>
