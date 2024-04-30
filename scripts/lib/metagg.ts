import { Person, Page, Frontmatter } from '@lib/meta/index.ts';

export interface PageImage {
  src: string;
  alt: string;
}

export interface ThemeColor {
  light: string;
  dark?: string;
}

export interface Image {
  src: string;
  format?: string;
  media?: string;
}

export interface Resources {
  images?: Image[];
  fonts?: string[];
  useCloudflareFonts?: boolean;
}

export interface Backgrounds {
  light: ImageMetadata;
  dark?: ImageMetadata;
  options?: { [key: string]: any; format: string; quality: number };
  resolution?: number;
}

export interface Headings {
  [key: string]: any;
  depth: number;
  slug: string;
  text: string;
}

export function getFormat(src: string) {
  return src.slice(src.lastIndexOf('.') + 1);
}

export function getPerson(name: string, personSource: { [key: string]: any } = {}): Person {
  if (personSource.hasOwnProperty(name)) {
    const parse = Person.safeParse(personSource[name]);

    if (parse.success) {
      return parse.data;
    }
  }

  return { name: name };
}

export function getPersons(names: string[], personSource: { [key: string]: any } = {}): Person[] {
  return names.map((name) => getPerson(name, personSource));
}

export function toPage(frontmatter: Frontmatter, personSource: { [key: string]: any } = {}): Page {
  const authors = frontmatter.authors.map((name) => getPerson(name, personSource));

  return Page.parse({
    title: frontmatter.title,
    description: frontmatter.description,
    lang: frontmatter.lang,
    tags: frontmatter.tags,
    authors: authors,
    datePublished: frontmatter.published_at,
    dateModified: frontmatter.updated_at,
  });
}
