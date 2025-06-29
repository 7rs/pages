import type { AutoComplete } from "@scripts/autocomplete.svelte.ts";
import { formatForPagefindLogging as logf } from "@scripts/utils.ts";

export class PagesPagefind {
  pagefind: Promise<Pagefind>;
  resolved: Pagefind;

  searchQuery: string;
  searchFilter: Record<string, string[]>;

  constructor(pagefindPath: string) {
    this.pagefind = this.loadPagefind(pagefindPath);
    this.searchQuery = $state("");
    this.searchFilter = $state({});
  }

  async loadPagefind(pagefindPath: string): Promise<Pagefind> {
    if (typeof window === "undefined") {
      return;
    }

    const s = performance.now();
    console.debug(logf("Loading pagefind"));

    try {
      const _pagefind = (await import(/* @vite-ignore */ `${pagefindPath}.js`)) as Pagefind;
      await _pagefind.options({ baseUrl: "/", excerptLength: 50 });
      await _pagefind.init();

      console.debug(logf("Loaded pagefind", `${(performance.now() - s) / 1000}s`));

      return _pagefind;
    } catch (e) {
      console.error(logf("Failed loading pagefind", e));
    }
  }

  syncAutoComplete(ac: AutoComplete) {
    this.pagefind
      .then(async (_pagefind) => {
        if (_pagefind == null) {
          return;
        }

        ac.setFilters(await _pagefind.filters());
      })
      .catch((e) => console.error(e));
  }

  async search(pagefind: Pagefind) {
    const s = performance.now();

    const search = await pagefind.search(this.searchQuery, { filters: this.searchFilter });
    const result = await Promise.all(search.results.map((result) => result.data()));

    console.debug(logf("Searched", `${(performance.now() - s) / 1000}s`));

    return result;
  }

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
  }

  async preload(pagefind: Pagefind, querySet: Set<string>, filter: Record<string, string[]>) {
    const query = [...querySet].join(" ");

    await pagefind.preload(query, { filters: filter });
  }
}
