import { defineCollection, z } from "astro:content";

export const Blog = z.object({
  title: z.string(),
  description: z.ostring(),
  tags: z.optional(z.array(z.string())).default([]),
  authors: z.optional(z.array(z.string())).default([]),
  created: z.optional(z.coerce.date()),
});
export type Blog = z.infer<typeof Blog>;

const blogCollection = defineCollection({
  type: "content",
  schema: Blog,
});

export const collections = {
  blog: blogCollection,
};
