import { Categories } from "@scripts/blog-category.ts";
import { defineCollection, z } from "astro:content";

const optionalStringArray = z.optional(z.array(z.string())).default([]);

export const Blog = z.object({
  /** A title of the article. */
  title: z.ostring().default(""),

  /** A description about the article */
  description: z.ostring().default(""),

  /** The authors of the article */
  authors: optionalStringArray,

  /** A date the article is created */
  created: z.optional(z.coerce.date()),

  /** A category of the article */
  category: z.ostring().default(Categories.Uncategorized),

  /** The tags related to the article  */
  tags: optionalStringArray,

  /** A image related to the article */
  image: z.ostring(),

  _excludeHeadings: optionalStringArray,
});
export type Blog = z.infer<typeof Blog>;

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: Blog,
  }),
};
