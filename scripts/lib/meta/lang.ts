/**
 * @see [List of languages by total number of speakers](https://w.wiki/Pss)
 */
export const Langs = {
  Unknown: 'Unknown',
  English: 'English',
  SimplifiedChinese: '简体中文',
  TraditionalChinese: '繁體中文',
  Hindi: 'हिन्दी',
  Spanish: 'Español',
  French: 'Français',
  Arabic: 'العربية',
  Portuguese: 'Português',
  BrazilianPortuguese: 'Português do Brasil',
  Russian: 'Русский язык',
  German: 'Deutsch',
  Japanese: '日本語',
  Korean: '한국어',
} as const;
export type Langs = (typeof Langs)[keyof typeof Langs];

/**
 * Returns "unknown" if lang is unregistered.
 * Returns "Japanese" If lang is less than or equal to 0 characters.
 *
 * @see  [List of ISO 639 language codes](https://w.wiki/9vda)
 */
export function getLangaugeLabel(lang?: string, defaultLang?: Langs): Langs {
  if (lang == null || lang.length <= 0) {
    return defaultLang || Langs.Japanese;
  }

  switch (lang.toLowerCase()) {
    case 'en':
    case 'english':
      return Langs.English;
    case 'cn':
    case 'zh-cn':
    case 'chinese':
      return Langs.SimplifiedChinese;
    case 'tw':
    case 'zh-tw':
    case 'taiwanese':
      return Langs.TraditionalChinese;
    case 'hi':
    case 'hindi':
      return Langs.Hindi;
    case 'es':
    case 'spanish':
    case 'espanol':
      return Langs.Spanish;
    case 'fr':
    case 'french':
    case 'francais':
      return Langs.French;
    case 'ar':
    case 'arabic':
      return Langs.Arabic;
    case 'pt':
    case 'portugues':
    case 'portuguese':
    case 'portuguesa':
      return Langs.Portuguese;
    case 'br':
    case 'pt-br':
    case 'brazilian':
    case 'brasileiro':
      return Langs.BrazilianPortuguese;
    case 'ru':
    case 'russian':
      return Langs.Russian;
    case 'de':
    case 'german':
    case 'deutsch':
      return Langs.German;
    case 'ko':
    case 'korean':
      return Langs.Korean;
    case 'ja':
    case 'japanese':
      return Langs.Japanese;
    default:
      return Langs.Unknown;
  }
}
