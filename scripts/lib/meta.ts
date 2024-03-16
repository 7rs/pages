// import querystring from 'querystring';
import qs from 'qs';
import { z } from 'astro:content';

export function getLocale(lang: string): string {
  switch (lang) {
    case 'ja':
    case 'jp':
    case 'japanese':
    case 'japan':
      return 'ja-JP';
    default:
      return 'en';
  }
}

export const Langs = {
  Unknown: 'Unknown',
  Japanese: '日本語',
  English: 'English',
} as const;
export type Langs = (typeof Langs)[keyof typeof Langs];

export function getLangaugeLabel(lang: string): Langs {
  switch (lang) {
    case 'en':
    case 'english':
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

export const website = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  author: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  keywords: z.array(z.string()).optional(),
  twitterId: z.string().optional(),
});
export type Website = z.infer<typeof website>;

export function dateToString(dateObject: Date) {
  const year = String(dateObject.getFullYear()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const date = String(dateObject.getDate()).padStart(2, '0');
  return `${year}-${month}-${date}`;
}

export const postDetail = z.object({
  title: z.string(),
  lang: z.ostring().default('ja'),
  authors: z.optional(z.array(z.string())).default(['Cbrnex']),
  tags: z.optional(z.array(z.string())).default(['no_tags']),
  published: z.optional(z.boolean()).default(false),
  published_at: z.optional(z.coerce.date()),
  updated_at: z.optional(z.coerce.date()),
  file: z.ostring(),
  url: z.ostring(),
});
export type PostDetail = z.infer<typeof postDetail>;
