import { defineCollection } from 'astro:content';

import { Frontmatter } from '@lib/meta/index.ts';

const blogCollection = defineCollection({
  type: 'content',
  schema: Frontmatter,
});

export const collections = {
  blog: blogCollection,
};
