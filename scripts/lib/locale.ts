export const Langs = {
    Unknown: "Unknown",
    Japanese: "日本語",
    English: "English",
} as const;
export type Langs = (typeof Langs)[keyof typeof Langs];

export const IntervalTime = 7500;

export function getLangaugeLabel(lang: string): Langs {
    switch (lang) {
        case "en":
        case "english":
            return Langs.English;
        default:
            return Langs.Japanese;
    }
}

export interface Locale {
    slug: string;
    title: string;
    lang: Langs;
}
