import { defineCollection, z } from 'astro:content';

const realisations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    location: z.string(),
    category: z.enum(['Couverture', 'Charpente', 'Rénovation', 'Réparation']),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

export const collections = { realisations };
