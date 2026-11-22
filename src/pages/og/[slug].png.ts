import { getCollection } from "astro:content";

import { renderOgImage } from "@/lib/og";
import { getSeriesLabel } from "@/lib/series";

import type { APIRoute, GetStaticPaths } from "astro";

export const getStaticPaths = (async () => {
	const posts = await getCollection("posts");
	return Promise.all(
		posts
			.filter((entry) => !entry.data.thumbnail)
			.map(async (entry) => {
				return {
					params: { slug: entry.id },
					props: {
						title: entry.data.title,
						seriesLabel: await getSeriesLabel(entry),
					},
				};
			}),
	);
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
	const { title, seriesLabel } = props as {
		title: string;
		seriesLabel?: string;
	};
	return renderOgImage(title, seriesLabel);
};
