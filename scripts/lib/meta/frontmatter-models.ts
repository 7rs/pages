import { z } from 'astro:content';

export const Person = z.object({
  /** A name. use a handle name if wanna hide the name. */
  name: z.string(),
  /** A profile picture, etc. */
  image: z.ostring(),
  /** An alternative text when image cannot be displayed. */
  imageAlt: z.ostring(),
  /** A job title or job name. Or designation for person that has some skills. */
  jobTitle: z.ostring(),
});
export const Persons = z.array(Person);
export type Person = z.infer<typeof Person>;
export type Persons = Person | z.infer<typeof Persons>;

export const Website = z.object({
  /** A name of website or organization. */
  name: z.string(),
  /**
   * A name of the representative or the organization.
   * Or name of administrator.
   */
  host: z.optional(Persons),
  /** Website image, symbol, logo, etc. */
  image: z.ostring(),
  /** A favicon. */
  favicon: z.ostring(),
  /** an ID on Twitter (X). */
  twitterId: z.ostring(),
});
export type Website = z.infer<typeof Website>;

export const Page = z.object({
  /** The page title, the article title, etc. */
  title: z.string(),
  /** The page description, the article summary, etc. */
  description: z.string(),
  /** Language of the page. */
  lang: z.string(),
  /** Tags and keywords of the page. */
  tags: z.optional(z.array(z.string())).default([]),
  /** The page image. */
  image: z.ostring(),
  /** An alternative text when image cannot be displayed. */
  imageAlt: z.ostring(),
  /** */
  authors: Persons,
  /** the published date or the created date. */
  datePublished: z.optional(z.coerce.date()),
  /** the edited date or the update date. */
  dateModified: z.optional(z.coerce.date()),
  /** URL of the page. */
  url: z.ostring(),
});
export type Page = z.infer<typeof Page>;

export const Frontmatter = z.object({
  title: z.string(),
  description: z.ostring().default('No description.'),
  lang: z.ostring().default('ja'),
  authors: z.optional(z.array(z.string())).default([]),
  tags: z.optional(z.array(z.string())).default([]),
  published: z.optional(z.boolean()).default(false),
  published_at: z.optional(z.coerce.date()),
  updated_at: z.optional(z.coerce.date()),
  file: z.ostring(),
  url: z.ostring(),
});
export type Frontmatter = z.infer<typeof Frontmatter>;
