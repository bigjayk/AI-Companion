import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    rating: z.number().min(0).max(5),
    price: z.string(),
    affiliateUrl: z.string(),
    logo: z.string().optional(),
    features: z.array(z.string()),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    verdict: z.string(),
    rank: z.number(),
    publishDate: z.date(),
  }),
});

export const collections = { reviews };
