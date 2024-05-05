import { ColorSchemes } from './models.ts';
import { updateColorSchemeState, getNextColorScheme } from './state.ts';
import { saveColorScheme, loadColorScheme } from './storage.ts';
import { setColorScheme } from './dom-control.ts';

export function initColorScheme() {
  const scheme = loadColorScheme();

  updateColorSchemeState(scheme);
  saveColorScheme(scheme);
  setColorScheme(scheme);
}

export function changeColorScheme(colorScheme: ColorSchemes) {
  updateColorSchemeState(colorScheme);
  saveColorScheme(colorScheme);
  setColorScheme(colorScheme);
}

export function advanceColorScheme() {
  changeColorScheme(getNextColorScheme());
}
