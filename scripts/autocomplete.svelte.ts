import { formatForAutocompleteLogging as logf } from "@scripts/utils.ts";

interface FilterGroup {
  [key: string]: number;
}

export type CursorEvent<E extends UIEvent> = E & {
  currentTarget: EventTarget & HTMLInputElement;
};



export class AutoComplete {
  group: FilterGroup;
  keys: Set<string>;
  suggests: [string, number][];
  targetQuery: string;
  targetPos: number;
  filterNames: string[];
  query: string;

  totalTime: number;

  constructor() {
    const s = performance.now();

    this.suggests = $state([]);
    this.targetQuery = $state("");
    this.targetPos = $state(0);
    this.query = $state("");

    this.totalTime = (performance.now() - s) / 1000;
  }

  setFilters(filters: PagefindFilterCounts<PagesFilters>) {
    const s = performance.now();

    this.filterNames = Object.keys(filters);
    console.debug(logf(`filters: ${this.filterNames}`));

    this.group = this.toFilterGroup(filters);
    this.keys = new Set(Object.keys(this.group));

    this.totalTime += (performance.now() - s) / 1000;
    console.debug(logf(`Loaded autocomplete: ${this.totalTime}s`));
  }

  toFilterGroup(filters: PagefindFilterCounts<PagesFilters>): FilterGroup {
    return Object.fromEntries(
      Object.keys(filters)
        .flatMap((filterName) =>
          Object.keys(filters[filterName]).map((key) => [`${filterName}:${key}`, filters[filterName][key]]),
        )
        .sort((groupPrev, groupNext) => groupNext[1] - groupPrev[1]),
    );
  }

  searchFilters(query: string) {
    const result: [string, number][] = [];

    for (const key of this.keys) {
      if (key.split(":", 2)[1].startsWith(query) || key.startsWith(query)) {
        result.push([key, this.group[key]]);
      }
    }

    return result;
  }

  parse(query: string, cursorPos: number): [string, number] {
    const spliteds: string[] = query.split(" ");

    let pos = 0;
    let _targetQuery = "";
    let _targetPos = 0;

    for (const splited of spliteds) {
      const start = query.indexOf(splited, pos);
      pos = start + splited.length;

      _targetQuery = splited;
      _targetPos = start;

      if (pos >= cursorPos) {
        break;
      }
    }

    return [_targetQuery, _targetPos];
  }

  getQuerr(): [Set<string>, Record<string, string[]>] {
    const spliteds: string[] = this.query.split(" ");
    const filters = Object.fromEntries(this.filterNames.map((filterName) => [filterName, [] as string[]]));

    const rawQueries = new Set<string>();

    for (const splited of spliteds) {
      if (this.keys.has(splited)) {
        const [filterName, filter] = splited.split(":", 2);
        if (filters[filterName].includes(filter)) {
          continue;
        }

        filters[filterName].push(filter);
        continue;
      }

      rawQueries.add(splited);
    }

    const slimFilters = Object.fromEntries(
      Object.keys(filters)
        .map((filterName) => [filterName, filters[filterName]] as [string, string[]])
        .filter((filter) => filters[filter[0]].length > 0),
    );

    return [rawQueries, slimFilters];
  }

  updateSuggests(e: CursorEvent<KeyboardEvent | MouseEvent>) {
    if (this.query.length <= 0) {
      this.suggests = [];
      return;
    }

    const cursorPos = (e.target as HTMLInputElement).selectionEnd;
    if (cursorPos == null) {
    }

    const parsed = this.parse(this.query, cursorPos);
    if (parsed[0].length <= 0) {
      this.suggests = [];
      return;
    }

    this.targetQuery = parsed[0];
    this.targetPos = parsed[1];
    this.suggests = this.searchFilters(this.targetQuery);
  }

  addSuggest(suggest: string) {
    this.suggests = [];
    this.query =
      this.query.slice(0, this.targetPos) + this.query.slice(this.targetPos).replace(this.targetQuery, suggest);
  }

  getSuggests() {
    if (this.isEmptySuggests()) {
      return [];
    }

    return this.suggests;
  }

  isEmptySuggests(): boolean {
    if (this.suggests.length <= 0) {
      return true;
    }

    if (this.suggests.length === 1 && this.equalTargetQuery(this.suggests[0][0])) {
      return true;
    }

    return false;
  }

  equalTargetQuery(query: string) {
    return query === this.targetQuery;
  }
}
