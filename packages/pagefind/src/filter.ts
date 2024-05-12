import { writable, get } from 'svelte/store';
import qs from 'qs';

import { query, displayDestroyButton, displayFilters, placeholderTextIndex } from './state.ts';

/**
 * @typedef FilterObject
 * @property {string[]} tag
 */
export type FilterObject = {
  tag: string[];
};

/** Returns `FilterObject`.
 *
 * This is probably the easiest method of deep copy.
 *
 * @return {FilterObject} Initialized `FilterObject`.
 */
function getDefaultFilters(): FilterObject {
  return { tag: [] };
}

export const filters = writable(getDefaultFilters());

/** Initializes filters and params. */
export function initFilters() {
  filters.set(getDefaultFilters());
  history.replaceState('', '', window.location.pathname);
}

/** Sets filters from current params. */
export function applyFilters() {
  filters.set({
    ...getDefaultFilters(),
    ...qs.parse(window.location.search.slice(1)),
  });
}

/** Sets params from current filters. */
function updateParams() {
  const f = get(filters);

  placeholderTextIndex.set(0);

  if (f.tag.length > 0) {
    history.replaceState('', '', `${window.location.pathname}?${qs.stringify(f)}`);
    displayFilters.set(true);
    displayDestroyButton.set(true);
    return;
  }

  if (get(query).length <= 0) {
    displayDestroyButton.set(false);
  }

  history.replaceState('', '', window.location.pathname);
}

/** Adds or Removes a tag.
 *
 * Adds the tag if filters doesn't have the tag.
 * Removes the tag if filters already have the tag.
 *
 * Also, this function calls `updateParams()`.
 *
 * @param tag
 */
export function toggleTag(tag: string) {
  const f = get(filters);
  const index = f.tag.indexOf(tag);

  if (index === -1) {
    // Add
    f.tag.push(tag);
  } else {
    // Remove
    f.tag = f.tag.filter((v) => v !== tag);
  }

  updateParams();
}
