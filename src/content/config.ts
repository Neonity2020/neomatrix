import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Neomatrix 团队'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
