/** @enum {number} */
export const FontWeights = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
} as const;
export type FontWeights = (typeof FontWeights)[keyof typeof FontWeights];

/** @enum {number} */
export const FontTypefaces = {
  Normal: 0,
  Italic: 1,
} as const;
export type FontTypefaces = (typeof FontTypefaces)[keyof typeof FontTypefaces];

/** @enum {string} */
export const FontStyleOptions = {
  Weight: 'wght',
  Typeface: 'ital',
  Width: 'wdth',
} as const;
export type FontStyleOptions = (typeof FontStyleOptions)[keyof typeof FontStyleOptions];

export type Width = [number, number] | number;
export const DefaultWidth = 100;

export interface FontStyle {
  weight?: FontWeights | number;
  typefaces?: FontTypefaces;
  width?: [number, number] | number;
}

export interface VariableFontStyle {
  weight: [number, number];
  typefaces?: FontTypefaces;
  width?: [number, number] | number;
}
