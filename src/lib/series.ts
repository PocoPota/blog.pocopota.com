import { getCollection, getEntry } from "astro:content";

import type { CollectionEntry } from "astro:content";

export interface SeriesGroup {
	name: string;
	posts: CollectionEntry<"posts">[];
}

export async function getSeriesGroups(
	series: CollectionEntry<"series">,
): Promise<SeriesGroup[]> {
	const posts = (await getCollection("posts")).filter(
		(post) => post.data.series?.id.id === series.id,
	);
	return series.data.groups.map((name) => ({
		name,
		posts: posts
			.filter((post) => post.data.series?.group === name)
			.sort(
				(a, b) => (a.data.series?.order ?? 0) - (b.data.series?.order ?? 0),
			),
	}));
}

// 記事が属するシリーズと、話題の中で何本目か
export async function getSeriesInfo(post: CollectionEntry<"posts">) {
	const ref = post.data.series;
	if (!ref) return undefined;
	const series = await getEntry(ref.id);
	if (!series) return undefined;
	const group = (await getSeriesGroups(series)).find(
		(g) => g.name === ref.group,
	);
	if (!group) return undefined;
	return {
		series,
		group,
		position: group.posts.findIndex((p) => p.id === post.id) + 1,
		total: group.posts.length,
	};
}

// OG 画像とサムネイルでタイトルの上に添える「シリーズ › 話題 n/m」
export async function getSeriesLabel(post: CollectionEntry<"posts">) {
	const info = await getSeriesInfo(post);
	return (
		info &&
		`${info.series.data.title} › ${info.group.name} ${info.position}/${info.total}`
	);
}
