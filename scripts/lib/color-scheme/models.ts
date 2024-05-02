export const ColorSchemes = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;
export type ColorSchemes = (typeof ColorSchemes)[keyof typeof ColorSchemes];

export const colorSchemeList = [ColorSchemes.System, ColorSchemes.Light, ColorSchemes.Dark];
