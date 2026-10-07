import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './data/categories';

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string().max(90),
    description: z.string().min(80),
    category: z.enum(CATEGORY_SLUGS),
    tags: z.array(z.string()).default([]),
    url: z.string().url(),
    // Paste your affiliate/partner link here; the CTA switches to it and is marked rel="sponsored".
    affiliateUrl: z.string().url().optional(),
    pricing: z.enum(['Free', 'Freemium', 'Paid', 'Open source']),
    startingPrice: z.string().optional(),
    bestFor: z.string(),
    features: z.array(z.string()).min(3),
    pros: z.array(z.string()).min(2),
    cons: z.array(z.string()).min(2),
    featured: z.boolean().default(false),
    updated: z.coerce.date(),
    faq,
  }),
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comparisons' }),
  schema: z.object({
    a: z.string(),
    b: z.string(),
    title: z.string(),
    description: z.string(),
    verdict: z.string(),
    updated: z.coerce.date(),
    faq,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { tools, comparisons, blog };
