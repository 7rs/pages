import { z, defineCollection } from "astro:content";

const schema = z.object({
    title: z.string(),
    tags: z.array(z.string()),
});

const blogCollection = defineCollection({
    type: "content",
    schema: schema,
});

export const collections = {
    "blog": blogCollection,
};