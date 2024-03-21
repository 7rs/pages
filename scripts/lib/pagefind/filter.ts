import { writable, get } from 'svelte/store';
import qs from 'qs';

import { query, displayDestroyButton, displayFilters, placeholderTextIndex } from './state.ts';

function getDefaultFilters(): { tag: string[] } {
  return { tag: [] };
}

export const filters = writable(getDefaultFilters());

export function applyFilters() {
  filters.set({
    ...getDefaultFilters(),
    ...qs.parse(window.location.search.slice(1)),
  });

  if (get(filters).tag.length > 0) {
    displayDestroyButton.set(true);
  }
}

export function initFilters() {
  filters.set(getDefaultFilters());
  history.replaceState('', '', window.location.pathname);
  displayFilters.set(false);
}

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

export function toggleTag(tag: string) {
  const f = get(filters);
  const index = f.tag.indexOf(tag);

  if (index === -1) {
    f.tag.push(tag);
  } else {
    f.tag = f.tag.filter((v) => v !== tag);
  }

  updateParams();
}
