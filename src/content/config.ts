import { z, defineCollection } from "astro:content";

const schema = z.object({
    // A blog title
    title: z.string(),

    default_lang: z.string().default("ja"),

    lang: z.string().default("ja"),

    // The author names
    authors: z.array(z.string()).default(["Cbrnex"]),

    // The blog tags
    tags: z.array(z.string()).default([]),

    // Whether published (true: published, false: not published)
    published: z.boolean().default(false),

    // A published date
    published_at: z.string().transform((str) => new Date(str)).default(Date()),

    // A updated date
    updated_at: z.string().optional(),
});

const blogCollection = defineCollection({
    type: "content",
    schema: schema,
});

export const collections = {
    "blog": blogCollection,
};
