export const Langs: {
    readonly Unknown: "Unknown",
    readonly Japanese: "日本語",
    readonly English: "English",
};
export type Langs = (typeof Langs)[keyof typeof Langs];

export declare function getLangaugeLabel(lang: string): Langs

export interface Locale {
    slug: string;
    title: string;
    lang: Langs;
}
