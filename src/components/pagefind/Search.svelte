<script lang="ts">
  import { writable } from 'svelte/store';
  import { blur, slide } from 'svelte/transition';
  import { linear, cubicIn, cubicOut } from 'svelte/easing';
  import qs from 'qs';
  import type { PagefindSearchFragment } from '@lib/pagefind.ts';

  import Icon from '@iconify/svelte';

  import SearchResult from './SearchResult.svelte';
  import { onDestroy, onMount } from 'svelte';

  const intervalTime = 10000;

  export let isDevelopment;
  export let placeholders = [
    'Search by Keyword.',
    'Powered by Pagefind.',
    'Subscribe to @QRZE on YouTube!',
    'Do you know this website is open source?',
    "Do you wanna know why default UI isn't use?",
    'I gotta set shitty numbers to set styles of default UI.',
    "I've get stuck on other scenes.",
    'But they excite and entertain me.',
    'Okay, here are some of my favorite songs!',
    't+pazolite - HYPER4ID #TPZREMAKE',
    'ikaruga_nex - ReviXy',
    'Aoi - !nterroban(?,',
    '3R2 - Blow My Mind (tpz Overheat Remix)',
    'GHOSTEMANE x PARV0 - I duckinf hatw you',
    'Lil Darkie - COMPOSITION III IN RED, WHITE, AND BLACK',
    'back number - then',
    'Would you listen to more from me please?',
    'Click on discord icon in footer.',
  ];
  export let notFoundSrc = '../../assets/You-are-an-idiot.gif';

  const placeholderTextIndex = writable(0);

  const query = writable('');
  const filters = writable(qs.parse(window.location.search.slice(1)));
  const displayDestroyButton = writable(false);
  const displayFilters = writable($filters.tag?.length > 0);
  const displayResults = writable(false);

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

  onMount(() => {
    const interval = setInterval(() => {
      if ($displayDestroyButton) {
        return;
      }

      if ($placeholderTextIndex === placeholders.length - 1) {
        $placeholderTextIndex = 0;
      } else {
        $placeholderTextIndex++;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  });

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

    if ($filters.tag?.length > 0) {
      $displayFilters = true;
      $displayDestroyButton = true;
      $placeholderTextIndex = 0;
      history.replaceState('', '', `${window.location.pathname}?${qs.stringify($filters)}`);
      return;
    }

    $displayDestroyButton = false;
    history.replaceState('', '', window.location.pathname);
  }

  async function destroy() {
    const _destroy = resolvePagefind.destroy();
    $query = '';
    $filters = {};
    $displayFilters = false;
    $displayDestroyButton = false;
    $displayResults = false;
    history.replaceState('', '', window.location.pathname);
    await _destroy;
  }

  async function search(q): Promise<PagefindSearchFragment[]> {
    if ($query.length <= 0) {
      $displayDestroyButton = false;
      $displayResults = false;
      return [];
    }

    await fixFilter();
    $placeholderTextIndex = 0;
    $displayDestroyButton = true;
    $displayResults = true;

    const search = await resolvePagefind.search(q, { filters: $filters });
    return await Promise.all(search.results.map(async (r) => await r.data()));
  }
</script>

<article data-pagefind>
  <div data-pagefind-control>
    <button
      data-filter-button
      on:click={() => {
        $displayFilters = $displayFilters ? false : true;
        $placeholderTextIndex = 0;
      }}><Icon icon="mdi:hashtag" /></button
    >
    <input bind:value={$query} placeholder={placeholders[$placeholderTextIndex]} />
    {#if $displayDestroyButton}
      <button
        in:slide={{ duration: 100, easing: linear, axis: 'x' }}
        out:slide={{ duration: 100, easing: linear, axis: 'x' }}
        data-destroy-button
        on:click={destroy}><Icon icon="material-symbols:close" /></button
      >
    {/if}
  </div>
  {#await pagefind then pagefind}
    <!-- Filters -->
    {#await pagefind.filters() then filterObject}
      {#if $displayFilters}
        <fieldset
          in:slide={{ duration: 200, easing: cubicIn, axis: 'y' }}
          out:slide={{ duration: 100, easing: cubicOut, axis: 'y' }}
          data-filter
        >
          <legend>Tag</legend>
          {#each Object.keys(filterObject.tag || []) as item}
            <div data-filter-button>
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
      {/if}
    {/await}
    <!-- Search Results -->
    {#await search($query) then results}
      <div style:display={$displayResults ? undefined : 'none'} data-search-results>
        {#if results.length > 0}
          {#each results as data}
            <SearchResult {data} />
          {/each}
        {:else if $displayResults}
          <p>{`${$query} を検索したけど結果は0件！おつかれ！`}</p>
          <img src={notFoundSrc} alt="wtf?" />
        {/if}
      </div>
    {/await}

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

    fieldset[data-filter]
      background-color var(--background)

      legend
        sans(1.5rem)
        padding 0 1rem
        background-color var(--content-reversed)
        border solid 1px var(--border)
        border-radius 0.5rem

      div[data-filter-button]
          flex(_gap: 1rem)
          padding 0 1rem

          input[type="checkbox"]
            transform scale(1.5)

          label
            sans(1.25rem)
            width 100%

    div[data-search-results]
      box-sizing border-box
      padding 1rem
      flex(column, 3rem)
      background-color var(--content-reversed)

      p
        sans(2rem)
</style>
