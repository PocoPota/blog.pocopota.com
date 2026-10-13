import rss from "@astrojs/rss";

import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";
import { getSortedPosts } from "@/lib/posts";

import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getSortedPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site!,
		trailingSlash: true,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/${post.id}/`,
		})),
	});
}
