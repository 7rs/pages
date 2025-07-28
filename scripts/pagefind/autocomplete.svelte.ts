import { formatForAutocompleteLogging as logf } from "@scripts/pagefind/utils.ts";

export type CursorEvent<E extends UIEvent> = E & {
  currentTarget: EventTarget & HTMLInputElement;
};

type ResultCountsTuple = [string, number];
type ResultCounts = { [key: string]: number };
type QueryData = [string, number];
type SearchData = [Set<string>, Record<string, string[]>];

export class AutoComplete {
  totalTime: number;
  group: ResultCounts;
  keys: Set<string>;
  filterNames: string[];
  targetQuery: string;
  targetPos: number;
  suggestedFilters: ResultCountsTuple[];
  query: string;

  /**
   * Only available in Svelte because used Rune.
   * Also, No argument required.
   *
   * ```ts
   * const ac = new AutoComplete();
   * ```
   */
  constructor() {
    const s = performance.now();

    this.suggestedFilters = $state([]);
    this.targetQuery = $state("");
    this.targetPos = $state(0);
    this.query = $state("");

    this.totalTime = (performance.now() - s) / 1000;
  }

  /**
   * Creates indexes of the filter.
   *
   * @param filters returned from `pagefind.filters()`
   */
  setFilters(filters: PagefindFilterCounts<PagesFilters>) {
    const s = performance.now();

    // ["authors", "category", "tags"]
    this.filterNames = Object.keys(filters);
    // {"authors:Cbrnex": 2, "category:tech": 2, "tags:github": 2}
    this.group = this.toResultCounts(filters);
    // Set ["authors:Cbrnex", "category:tech", "tags:github"]
    this.keys = new Set(Object.keys(this.group));

    console.debug(logf(`filters: ${this.filterNames.join(", ")}`));

    this.totalTime += (performance.now() - s) / 1000;
    console.debug(logf(`Loaded autocomplete: ${this.totalTime}s`));
  }

  /**
   * Creates an array of tuples that is
   *  a string combined the filter key and the filter value and a number of results have that filter.
   * Next, convert the array of tuples to an object named ResultCounts.
   *
   * `Array<[string, number] [["authors:Cbrnex", 2]...] -> ResultCounts {"authors:Cbrnex": 2...}`
   *
   * @param filters returned from `pagefind.filters()`
   * @returns `ResultCounts {"authors:Cbrnex": 2...}`
   */
  toResultCounts(filters: PagefindFilterCounts<PagesFilters>): ResultCounts {
    return Object.fromEntries(
      Object.keys(filters)
        .flatMap((filterName) =>
          Object.keys(filters[filterName]).map((key) => [`${filterName}:${key}`, filters[filterName][key]]),
        )
        .sort((groupPrev, groupNext) => groupNext[1] - groupPrev[1]),
    );
  }

  /**
   * Returns candidates of filter from the query.
   *
   * @param query A String entered by user
   * @returns candidates of filter
   */
  searchFilters(query: string): ResultCountsTuple[] {
    const result: ResultCountsTuple[] | boolean = Array.from(this.keys).map(
      (key) => (key.split(":", 2)[1].startsWith(query) || key.startsWith(query)) && [key, this.group[key]],
    );

    return result.filter((result) => typeof result !== "boolean");
  }

  /**
   * Returns the queries that aren't filters and the filters.
   *
   * @returns Queries that aren't filters and filters
   */
  getSearchData(): SearchData {
    const queries = new Set<string>();
    const filters = Object.fromEntries(this.filterNames.map((filterName) => [filterName, [] as string[]]));

    for (const splited of this.query.split(" ")) {
      // query is not filter
      if (!this.keys.has(splited)) {
        queries.add(splited);
        continue;
      }

      // query is filter
      const [filterName, filter] = splited.split(":", 2);
      if (!filters[filterName].includes(filter)) {
        filters[filterName].push(filter);
      }
    }

    const slimFilters = Object.fromEntries(
      Object.keys(filters)
        .map((filterName) => [filterName, filters[filterName]] as [string, string[]])
        .filter((filter) => filters[filter[0]].length > 0),
    );

    return [queries, slimFilters];
  }

  /**
   * Adds a selected filter key to the query.
   *
   * @param filterKey
   */
  sendFilterKey(filterKey: string) {
    this.suggestedFilters = [];
    this.query =
      this.query.slice(0, this.targetPos) + this.query.slice(this.targetPos).replace(this.targetQuery, filterKey);
  }

  /**
   * Returns the suggestions of filter.
   *
   * @returns Candidates of filter
   */
  getSuggestedFilters(): ResultCountsTuple[] {
    return this.hasSuggestedFilters() ? this.suggestedFilters : [];
  }

  /**
   * Checks if there are any filter suggestions.
   */
  hasSuggestedFilters(): boolean {
    if (this.suggestedFilters.length <= 0) {
      return false;
    }

    if (this.suggestedFilters.length === 1 && this.suggestedFilters[0][0] === this.targetQuery) {
      return false;
    }

    return true;
  }

  /**
   * Updates the suggestions of filter.
   *
   * @param event Cursor control event or keyboard control event
   */
  updateSuggestedFilters(event: CursorEvent<KeyboardEvent | MouseEvent>): void {
    if (this.query.length <= 0) {
      this.suggestedFilters = [];
      return;
    }

    const parsed = this.getTargetQueryData(this.query, (event.target as HTMLInputElement).selectionEnd);
    if (parsed[0].length <= 0) {
      this.suggestedFilters = [];
      return;
    }

    this.targetQuery = parsed[0];
    this.targetPos = parsed[1];
    this.suggestedFilters = this.searchFilters(this.targetQuery);
  }

  /**
   * Returns a query at the cursor position and a cursor position.
   *
   * @param query
   * @param cursorPos
   * @returns A tuple contain query and cursor position
   */
  getTargetQueryData(query: string, cursorPos: number): QueryData {
    let pos = 0;
    let targetQuery = "";
    let targetPos = 0;

    for (const splited of query.split(" ")) {
      const start = query.indexOf(splited, pos);
      targetQuery = splited;
      targetPos = start;

      pos = start + splited.length;
      if (pos >= cursorPos) {
        break;
      }
    }

    return [targetQuery, targetPos];
  }

  setQuery(paramArray: [string, string][]) {
    this.query = paramArray.map((param) => `${param[0]}:${param[1]}`).join(" ");
  }
}
