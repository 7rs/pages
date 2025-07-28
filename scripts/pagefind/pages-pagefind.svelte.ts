import type { AutoComplete } from "@scripts/pagefind/autocomplete.svelte.ts";
import { formatForPagefindLogging as logf } from "@scripts/pagefind/utils.ts";
import { encodeURL, toParamSet } from "@scripts/pagefind/param-generator.ts";

type JSWindow = Window & typeof globalThis;

export class PagesPagefind {
  pagefind: Pagefind;
  unResolvedPagefind: Promise<Pagefind>;
  window: JSWindow = null;
  searchQuery: string;
  searchFilter: Record<string, string[]>;

  /**
   * Some methods aren't available until the pagefind script is loaded in the await block
   *  baceuse they depend on the pagefind script.
   *
   * @param pagefindPath Output path or actual web path
   */
  constructor(pagefindPath: string) {
    this.unResolvedPagefind = this.loadPagefind(pagefindPath);
    this.searchQuery = $state("");
    this.searchFilter = $state({} as Record<string, string[]>);
  }

  /**
   * This module will load in Svelte's await block.
   *
   * @param pagefindPath Output path or actual web path
   * @returns Pagefind module
   */
  async loadPagefind(pagefindPath: string): Promise<Pagefind> {
    if (typeof window === "undefined") {
      return;
    }

    const s = performance.now();
    console.debug(logf("Loading pagefind"));

    try {
      this.pagefind = (await import(/* @vite-ignore */ `${pagefindPath}.js`)) as Pagefind;
      await this.pagefind.options({ baseUrl: "/", excerptLength: 50 });
      await this.pagefind.init();

      console.debug(logf("Loaded pagefind", `${(performance.now() - s) / 1000}s`));

      return this.pagefind;
    } catch (e) {
      console.error(logf("Failed loading pagefind", e));
    }
  }

  /**
   * Sets the window object.
   *
   * ```svelte
   * onMount(() => {
   *  pp.setWindow(window);
   * }
   * ```
   */
  setWindow(window: JSWindow) {
    this.window = window;
  }

  /**
   * Calls `pagefind.filters()` and sets filters to AutoComplete class.
   *
   * @param ac AutoComplete
   */
  setFilters(ac: AutoComplete) {
    this.unResolvedPagefind
      .then(async (_pagefind) => {
        if (_pagefind == null) {
          return;
        }

        ac.setFilters(await _pagefind.filters());
      })
      .catch((e) => console.error(e));
  }

  /**
   * Updates the query and URL.
   *
   * @param querySet
   * @param filter
   */
  updateQuery(querySet: Set<string>, filter: Record<string, string[]>) {
    const query = [...querySet].join(" ");

    this.searchFilter = filter;
    if (query.trim().length <= 0) {
      this.searchQuery = Object.keys(filter)
        .flatMap((filterName) => filter[filterName])
        .join(" ");
    } else {
      this.searchQuery = query;
    }

    if (this.window != null) {
      const params = Object.keys(this.searchFilter).flatMap((key) => toParamSet(key, this.searchFilter[key]));
      this.window.history.replaceState(null, "", this.window.location.pathname + encodeURL(params));
    }
  }

  /**
   * Calls `pagefind.search()` and returns the result.
   *
   * @returns Returned from `pagefind.search()`
   */
  async search(): Promise<PagefindSearchFragment<PagesFilters, PagesMetadatas>[]> {
    const s = performance.now();

    const search = await this.pagefind.search(this.searchQuery || null, { filters: this.searchFilter });
    const result = await Promise.all(search.results.map((result) => result.data()));

    console.debug(logf("Searched", `${(performance.now() - s) / 1000}s`));

    return result;
  }

  /**
   * Calls `pagefind.preload()` to preload the search result.
   * 
   * @param querySet Set of query
   * @param filter Record of filters
   */
  async preload(querySet: Set<string>, filter: Record<string, string[]>): Promise<void> {
    await this.pagefind.preload([...querySet].join(" "), { filters: filter });
  }
}
