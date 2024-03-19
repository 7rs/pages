/**
 * @see https://github.com/CloudCannon/pagefind/blob/main/pagefind_web_js/types/index.d.ts#L162
 */
type PagefindWordLocation = {
  [key: string]: any;
  /** The weight that this word was originally tagged as */
  weight: number;
  /**
   * An internal score that Pagefind calculated for this word.
   *
   * The absolute value is somewhat meaningless, but the value can be used
   * in comparison to other values in this set of search results to perform custom ranking.
   */
  balanced_score: number;
};

/**
 * @see https://github.com/CloudCannon/pagefind/blob/main/pagefind_web_js/types/index.d.ts#L182
 */
type PagefindSearchAnchor = {
  [key: string]: any;
  element: string;
  id: string;
  text?: string;
};

/**
 * @see https://github.com/CloudCannon/pagefind/blob/main/pagefind_web_js/types/index.d.ts#L128
 */
type PagefindSubResult = {
  [key: string]: any;
  title: string;
  url: string;
  locations: number[];
  weighted_locations: PagefindWordLocation[];
  excerpt: string;
  anchor?: PagefindSearchAnchor;
};

/**
 * @see https://github.com/CloudCannon/pagefind/blob/main/pagefind_web_js/types/index.d.ts#L88
 */
export type PagefindSearchFragment = {
  [key: string]: any;
  /** Pagefind's processed URL for this page. Will include the baseUrl if configured */
  url: string;
  /** The full processed content text of this page */
  content: string;
  /** The processed excerpt for this result, with matching terms wrapping in `<mark>` elements */
  excerpt: string;
  /**
   * What regions of the page matched this search query?
   *
   * Precalculates based on h1->6 tags with IDs, using the text between each.
   */
  sub_results: PagefindSubResult[];
  /** How many total words are there on this page? */
  word_count: number;
  /** The filter keys and values this page was tagged with */
  filters: Record<string, string[]>;
  /** The metadata keys and values this page was tagged with */
  meta: Record<string, string>;
};
