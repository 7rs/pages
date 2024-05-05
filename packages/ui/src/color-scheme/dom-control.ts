import { ColorSchemes } from './models.ts';

const colorSchemeAttributeName = 'data-color-scheme';

export function setColorScheme(colorScheme: ColorSchemes, attrName = colorSchemeAttributeName) {
  const current = window.document.body?.getAttribute(attrName);
  if (current !== colorScheme) {
    window.document.body?.setAttribute(attrName, colorScheme);
  }
}
