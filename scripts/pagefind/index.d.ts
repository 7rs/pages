declare interface PagefindIndexOptions {
  basePath?: string;
  baseUrl?: string;
  excerptLength?: number;
  indexWeight?: number;
  mergeFilter?: MergeFilter;
  highlightParam?: string;
  language?: string;
  primary?: boolean;
  ranking?: PagefindRankingWeights;
}

declare interface PagefindRankingWeights {
  termSimilarity?: number;
  pageLength?: number;
  termSaturation?: number;
  termFrequency?: number;
}

declare interface PagefindSearchOptions {
  preload?: boolean;
  verbose?: boolean;
  filters?: object;
  sort?: object;
}

declare type PagefindFilterCounts<F extends string> = { [key in F]: Record<string, number> };

declare interface PagefindSearchResults<F extends string, M extends string> {
  results: PagefindSearchResult<F, M>[];
  unfilteredResultCount: number;
  filters: PagefindFilterCounts;
  totalFilters: PagefindFilterCounts;
  timings: Timings[];
  search_keywords?: string[];
}
declare interface PagefindIndexesSearchResults extends PagefindSearchResults {}

declare class PagefindSearchResult<F extends string, M extends string> {
  id: string;
  score: number;
  words: number[];
  params?: PagefindTermParams;
  scores?: PagefindTermScore[];
  declare data: () => Promise<PagefindSearchFragment<F, M>>;
}

declare interface PagefindTermParams {
  document_length: number;
  average_page_length: number;
  total_pages: number;
}

declare interface PagefindTermScore {
  search_term: string;
  idf: number;
  saturating_tf: number;
  raw_tf: number;
  pagefind_tf: number;
  score: number;
  params: PagefindTermScoreParams;
}

declare interface PagefindTermScoreParams {
  weighted_term_frequency: number;
  pages_containing_term: number;
  length_bonus: number;
}

declare interface PagefindSearchFragment<F extends string, M extends string> {
  url: string;
  raw_url?: string;
  content: string;
  raw_content?: string;
  excerpt: string;
  sub_results: PagefindSubResult[];
  word_count: number;
  locations: number[];
  weighted_locations: PagefindWordLocation[];
  filters: Filters<F>;
  meta: Metadata<M>;
  anchors: PagefindSearchAnchor[];
}

declare interface PagefindSubResult {
  title: string;
  url: string;
  locations: number[];
  weighted_locations: PagefindWordLocation[];
  excerpt: string;
  anchor?: PagefindSearchAnchor;
}

declare interface PagefindWordLocation {
  weight: number;
  balanced_score: number;
  location: number;
  verbose?: PagefindVerboseWordLocation;
}

declare interface PagefindVerboseWordLocation {
  word_string: string;
  length_bonus: number;
}

declare interface PagefindSearchAnchor {
  element: string;
  id: string;
  location: number;
  text: string;
}

/**
 *
 * @see https://github.com/Pagefind/pagefind/blob/main/pagefind_web_js/lib/public_search_api.ts
 * @see https://github.com/Pagefind/pagefind/blob/main/pagefind_web_js/lib/coupled_search.ts
 */
declare class Pagefind {
  /** @see https://pagefind.app/docs/api/#initializing-pagefind */
  declare init: () => Promise<void>;

  /** @see https://pagefind.app/docs/api/#configuring-the-search-api */
  declare options: (new_options: PagefindIndexOptions) => Promise<void>;

  /** @see https://pagefind.app/docs/api/#searching */
  declare search: (term: string, options2?: PagefindSearchOptions) => Promise<PagefindSearchResults<PagesFilters, PagesMetadatas>>;

  /** @see https://pagefind.app/docs/api/#debounced-search */
  declare debouncedSearch: (
    term: string,
    options2?: PagefindSearchOptions,
    debounceTimeoutMs: number,
  ) => Promise<PagefindSearchResults>;

  /** @see https://pagefind.app/docs/api/#preloading-search-terms */
  declare preload: (term: string, options2?: PagefindSearchOptions) => Promise<void>;

  /** @see https://pagefind.app/docs/api/#filtering */
  declare filters: () => Promise<PagefindFilterCounts<PagesFilters>>;

  /** @see https://pagefind.app/docs/api/#re-initializing-the-search-api */
  declare destroy: () => Promise<void>;

  /** @see https://pagefind.app/docs/multisite/#searching-additional-sites-from-the-pagefind-js-api */
  declare mergeIndex: (indexPath: string, options2: PagefindIndexOptions) => Promise<void>;
}

declare interface Timings {
  preload: number;
  search: number;
  total: number;
}

declare type Filters<F extends string> = { [key in F]: string[] };

declare interface MergeFilter {
  [key: string]: unknown;
  resource: string;
}

declare type Metadata<M extends string> = { [key in M]: string };

declare const PagesMetadatas = {
  Title: "title",
  Image: "image",
  ImageAlt: "image_alt",
  Description: "description",
};
// declare type PagesMetadatas = (typeof PagesMetadatas)[keyof typeof PagesMetadatas];
declare type PagesMetadatas = "title" | "image" | "image_alt" | "description";

declare const PagesFilters = {
  Tag: "tags",
  Author: "authors",
  Genre: "category",
} as const;
declare type PagesFilters = (typeof PagesFilters)[keyof typeof PagesFilters];
