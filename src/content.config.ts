import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const schema = z.object({
	title: z.string(),
	date: z.coerce.date(),
	thumbnail: z.string().optional(),
	description: z.string().optional(),
});

// posts は一覧と RSS に出す記事。legacy は URL を残すためだけに生成する旧記事。
export const collections = {
	posts: defineCollection({
		loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
		schema,
	}),
	legacy: defineCollection({
		loader: glob({ pattern: "*.md", base: "./src/content/legacy" }),
		schema,
	}),
};
