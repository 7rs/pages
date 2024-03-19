<script lang="ts">
  import { writable } from 'svelte/store';
  import { blur } from 'svelte/transition';
  import qs from 'qs';
  import type { PagefindSearchFragment } from '@lib/pagefind.ts';

  import Icon from '@iconify/svelte';

  import SearchResult from './SearchResult.svelte';

  export let isDevelopment;
  export let placeholder = '検索したいワードを入力してね';
  export let notFoundSrc = '../../assets/You-are-an-idiot.gif'

  const query = writable('');
  const filters = writable(qs.parse(window.location.search.slice(1)));
  const displayFilter = writable(false);

  let pagefind = (async () => {
    const scriptDir = isDevelopment ? '/' : '/dist/';
    const _pagefind = await import(/* @vite-ignore */ `${scriptDir}pagefind/pagefind.js`);
    await _pagefind.init();

    return _pagefind;
  })();

  let resolvePagefind;
  pagefind.then((resolve) => (resolvePagefind = resolve)).catch((err) => console.log(err));

  /*
    pagefind:
      async function debouncedSearch(e, t, n)​
      async function destroy()​
      async function filters()​
      async function init()​
      async function mergeIndex(e, t)​
      async function options(e)​
      async function preload(e, t)​
      async function search(e, t)
  */

  async function fixFilter() {
    $filters = qs.parse(window.location.search.slice(1));
    const allFilters = await resolvePagefind.filters();

    Object.keys($filters).forEach((k) => {
      if (allFilters.hasOwnProperty(k)) {
        return;
      }
      delete $filters[k];
    });
  }

  function toggleFilter(item: string) {
    if ($filters.tag != null) {
      $filters.tag.includes(item) ? $filters.tag.pop(item) : $filters.tag.push(item);
    } else {
      $filters.tag = [item];
    }

    history.replaceState('', '', `${window.location.pathname}?${qs.stringify($filters)}`);
  }

  async function destroy() {
    const _destroy = resolvePagefind.destroy();
    $query = '';
    $filters = {};
    history.replaceState('', '', window.location.pathname);
    await _destroy;
  }

  async function search(q): Promise<PagefindSearchFragment[]> {
    await fixFilter();

    await resolvePagefind.options({
      baseUrl: '/blog',
    });
    const search = await resolvePagefind.search(q, { filters: $filters });
    return await Promise.all(search.results.map(async (r) => await r.data()));
  }
</script>

<article data-pagefind>
  <div data-pagefind-control>
    <button
      data-filter-button
      on:click={() => {
        $displayFilter = $displayFilter ? false : true;
      }}><Icon icon="mdi:hashtag" /></button
    >
    <input bind:value={$query} {placeholder} />
    <button
      data-destroy-button
      style:display={Object.keys($filters).length <= 0 && $query.length <= 0 ? 'none' : 'block'}
      on:click={destroy}><Icon icon="material-symbols:close" /></button
    >
  </div>
  {#await pagefind then pagefind}
    <!-- Filters -->
    {#await pagefind.filters() then filterObject}
      <fieldset style:display={$displayFilter ? 'block' : 'none'}>
        <legend>Tag</legend>
        {#each Object.keys(filterObject.tag || []) as item}
          <div>
            <input
              type="checkbox"
              id={item}
              name="tag"
              checked={$filters.tag?.includes(item)}
              on:click={() => toggleFilter(item)}
            />
            <label for={item}>{filterObject.tag[item]} {item}</label>
          </div>
        {/each}
      </fieldset>
    {/await}
    <!-- Search Results -->
    {#if $query.length > 0}
      <div data-search-results>
        {#await search($query) then results}
          {#if results.length > 0}
            {#each results as data}
              <SearchResult {data} />
            {/each}
          {:else}
            <p>{`${$query} を検索したけど結果は0件！おつかれ！`}</p>
            <img src={notFoundSrc} alt="wtf?" />
            <!-- <div data-annoying-spinners>
              <Icon icon="svg-spinners:3-dots-rotate" />
              <Icon icon="svg-spinners:6-dots-scale-middle" />
              <Icon icon="svg-spinners:blocks-wave" />
              <Icon icon="svg-spinners:gooey-balls-1" />
              <Icon icon="svg-spinners:ring-resize" />
            </div> -->
          {/if}
        {/await}
      </div>
    {/if}
    <!-- Search Results -->
  {:catch error}
    <p>{error}</p>
  {/await}
</article>

<style lang="stylus">
  @import "../../styles/api.styl"

  article[data-pagefind]

    div[data-pagefind-control]
      flex()
      margin-bottom 1rem

      input
        width 100% 
        sans(1.5rem)
        border none
        outline none
        padding 1rem

      button
        background none
        border none
        height 100%
        margin auto

        &[data-destroy-button]
          margin-left 0.5rem
        &[data-filter-button]
          margin-right 0.5rem

        :global(svg)
          height 2.5rem
          width auto

    div[data-search-results]
      box-sizing border-box
      padding 1rem
      flex(column, 1rem)
      background-color var(--content-reversed)

      
      p
        sans(2rem)
      div[data-annoying-spinners] > :global(svg)
        height 5rem
        width auto
</style>
