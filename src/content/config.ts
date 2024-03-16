import { z, defineCollection } from "astro:content";
import { postDetail } from '@lib/meta';

const blogCollection = defineCollection({
  type: 'content',
  schema: postDetail,
});

export const collections = {
    "blog": blogCollection,
};
