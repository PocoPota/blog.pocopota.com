import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const collections = {
	posts: defineCollection({
		loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
		schema: z.object({
			title: z.string(),
			date: z.coerce.date(),
			thumbnail: z.string().optional(),
			description: z.string().optional(),
		}),
	}),
};
