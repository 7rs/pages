import { ColorSchemes } from './models.ts';

export const colorSchemeStorageKey = 'schemeStatus';

export function saveColorScheme(scheme: ColorSchemes, key: string = colorSchemeStorageKey): void {
  window.localStorage.setItem(key, scheme);
}

export function isColorScheme(scheme: string): scheme is ColorSchemes {
  switch (scheme) {
    case ColorSchemes.System:
    case ColorSchemes.Light:
    case ColorSchemes.Dark:
      return true;
    default:
      return false;
  }
}

export function loadColorScheme(key: string = colorSchemeStorageKey): ColorSchemes {
  const status = window.localStorage.getItem(key);

  return status && isColorScheme(status) ? status : ColorSchemes.System;
}

export function clearColorScheme(key: string = colorSchemeStorageKey): void {
  window.localStorage.removeItem(key);
}
