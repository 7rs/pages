import { get } from 'svelte/store';

import { query, displayFilters, displayResults, displayDestroyButton } from './state.ts';
import { filters } from './filter.ts';

export function hasFilters(): boolean {
  return get(filters).tag.length > 0;
}

export function hasQuery(): boolean {
  return get(query).replace(/\s/g, '').length > 0;
}

export function hideDestroyIfNeed(_hasQuery?: boolean) {
  !hasFilters() && displayDestroyButton.set(_hasQuery || hasQuery());
}

export function hideFilters(hideDestroy: boolean = false, _hasQuery?: boolean) {
  displayFilters.set(false);
  hideDestroy && hideDestroyIfNeed(_hasQuery);
}

export function hideResults(hideDestroy: boolean = false, _hasQuery?: boolean) {
  displayResults.set(false);
  hideDestroy && hideDestroyIfNeed(_hasQuery);
}

export function showFilters() {
  displayFilters.set(true);
  displayDestroyButton.set(true);
}

export function showFiltersIfNeed() {
  hasFilters() && showFilters();
}

export function showResults() {
  displayResults.set(true);
  displayDestroyButton.set(true);
}

export function hideAlls() {
  setQuery();
  hideFilters();
  hideResults();
  hideDestroyIfNeed();
}

export function setQuery(q: string = '') {
  query.set(q);
}
