import { writable } from 'svelte/store';

export const query = writable('');
export const displayDestroyButton = writable(false);
export const displayFilters = writable(false);
export const displayResults = writable(false);
export const placeholderTextIndex = writable(0);
