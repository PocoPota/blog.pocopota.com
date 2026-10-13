import { getCollection } from "astro:content";

export async function getSortedPosts() {
	const posts = await getCollection("posts");
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
