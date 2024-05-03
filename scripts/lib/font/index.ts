import { GoogleFontURLGenerator } from './generator.ts';
import { FontStyle, VariableFontStyle } from './config.ts';

/**
 * This function generates URLs for [Google Fonts](https://fonts.google.com/).
 * It loads a minimal font by default.
 * So, you must specify if multiple style required.
 *
 * Example:
 *   ## Importing library
 *   ```ts
 *   import { getFont } from '@lib/font'
 *   ```
 *
 *   ## Fira Sans / Onl}?y Regular (400)
 *   ```ts
 *   getFont('Fira Sans')
 *   ```
 *   https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap
 *
 *   ## Fira Sans / Regular (400) and Bold (700).
 *   ```ts
 *   getFont('Fira Sans', [{weight: 400}, {weight: 700}])
 *   ```
 *   https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap
 *
 *   ## Open Sans / Regular (400) - Bold (700).
 *   ```ts
 *   getFont('Open Sans', {weight: [400, 700]})
 *   ```
 *   https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..700;1,400..700&display=swap
 *
 * @param {string} name
 * @param {FontStyle[] | VariableFontStyle | undefined} fontStyles
 * @returns {string} URL
 */
export function getFont(name: string, fontStyles?: FontStyle[] | VariableFontStyle) {
  name = name.replace(/\s/g, '+');

  if (fontStyles == null) {
    return name;
  }

  return new GoogleFontURLGenerator(name, fontStyles).getFont();
}

export function createGoogleFontURL(fonts: Array<string>): string {
  return 'https://fonts.googleapis.com/css2' + `?family=${fonts.join('&family=')}&display=swap`;
}
