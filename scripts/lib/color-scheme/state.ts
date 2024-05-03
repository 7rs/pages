import { writable, get, Writable } from 'svelte/store';

import { ColorSchemes } from './models.ts';

export const activeColorScheme: Writable<ColorSchemes> = writable(ColorSchemes.System);

export function updateColorSchemeState(colorScheme: ColorSchemes): void {
  if (get(activeColorScheme) !== colorScheme) {
    activeColorScheme.set(colorScheme);
  }
}

export function getNextColorScheme(): ColorSchemes {
  switch (get(activeColorScheme)) {
    case ColorSchemes.System:
      return ColorSchemes.Light;
    case ColorSchemes.Light:
      return ColorSchemes.Dark;
    default:
      return ColorSchemes.System;
  }
}
