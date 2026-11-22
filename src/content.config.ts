import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

export const collections = {
	posts: defineCollection({
		loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
		schema: z.object({
			title: z.string(),
			date: z.coerce.date(),
			thumbnail: z.string().optional(),
			description: z.string().optional(),
			series: z
				.object({
					id: reference("series"),
					group: z.string(),
					order: z.number(),
				})
				.optional(),
		}),
	}),
	series: defineCollection({
		loader: glob({ pattern: "*.md", base: "./src/content/series" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			// シリーズのページに並べる話題の順番
			groups: z.array(z.string()),
		}),
	}),
};
