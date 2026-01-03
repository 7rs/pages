import { defineCollection, z } from "astro:content";


const optionalStringArray = z.optional(z.array(z.string())).default([]);

export const Blog = z.object({
  title: z.ostring().default(""),
  description: z.ostring().default(""),
  authors: optionalStringArray,
  created: z.optional(z.coerce.date()),
  tags: optionalStringArray,
  image: z.ostring(),
});
export type Blog = z.infer<typeof Blog>;

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: Blog,
  }),
};
