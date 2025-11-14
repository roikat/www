import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/notes' }),
  schema: z.object({
    title: z.string().max(30),
    description: z.string().max(200),
    pubDate: z.date(),
    image: z.string().optional()
  })
})

export const collections = { notes }
