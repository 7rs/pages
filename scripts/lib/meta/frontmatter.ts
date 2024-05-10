import { Person, Frontmatter, Page } from './frontmatter-models.ts';

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
  return Page.parse({
    title: frontmatter.title,
    description: frontmatter.description,
    lang: frontmatter.lang,
    tags: frontmatter.tags,
    authors: frontmatter.authors.map((name) => getPerson(name, personSource)),
    datePublished: frontmatter.published_at,
    dateModified: frontmatter.updated_at,
  });
}
