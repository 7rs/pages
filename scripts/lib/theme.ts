export const themes = ['system', 'light-mode', 'dark-mode'];
const themeIndexName = 'themeIndex';

export function getNextThemeIndex(themeIndex: number): number {
  if (themeIndex === themes.length - 1) {
    return 0;
  } else {
    return themeIndex + 1;
  }
}

export function loadThemeIndex(): number {
  const savedIndex = window.localStorage.getItem(themeIndexName);
  if (savedIndex != null) {
    const parsedIndex = parseInt(savedIndex);
    if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= themes.length) {
      window.localStorage.removeItem(themeIndexName);
      return 0;
    }

    return parsedIndex;
  }

  return 0;
}

export function toThemeName(themeIndex: number): string {
  return themes[themeIndex];
}

export function loadTheme(): string {
  return toThemeName(loadThemeIndex());
}

export function saveThemeIndex(themeIndex: number) {
  window.localStorage.setItem(
    themeIndexName,
    themeIndex < 0 || themeIndex >= themes.length ? '0' : themeIndex.toString(),
  );
}
