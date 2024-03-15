import { z, defineCollection } from "astro:content";

const schema = z.object({
  // A blog title
  title: z.string(),

  default_lang: z.ostring().default('ja'),

  lang: z.ostring().default('ja'),

  // The author names
  authors: z.optional(z.array(z.string())).default(['Cbrnex']),

  // The blog tags
  tags: z.optional(z.array(z.string())).default(['no_tags']),

  // Whether published (true: published, false: not published)
  published: z.optional(z.boolean()).default(false),

  // A published date
  published_at: z.optional(z.coerce.date()),

  // A updated date
  updated_at: z.optional(z.coerce.date()),
});

const blogCollection = defineCollection({
    type: "content",
    schema: schema,
});

export const collections = {
    "blog": blogCollection,
};
