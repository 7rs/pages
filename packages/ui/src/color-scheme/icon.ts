import { ColorSchemes } from './models.ts';

export function getColorSchemeIcon(colorScheme: ColorSchemes): string {
  switch (colorScheme) {
    case ColorSchemes.Light:
      return 'line-md:moon-alt-to-sunny-outline-loop-transition';
    case ColorSchemes.Dark:
      return 'line-md:moon-alt-loop';
    default:
      return 'line-md:light-dark-loop';
  }
}
