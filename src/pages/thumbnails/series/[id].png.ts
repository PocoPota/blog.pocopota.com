import { getCollection } from "astro:content";

import { renderThumbnail } from "@/lib/og";

import type { APIRoute, GetStaticPaths } from "astro";

export const getStaticPaths = (async () => {
	const series = await getCollection("series");
	return series.map((entry) => ({
		params: { id: entry.id },
		props: { title: entry.data.title },
	}));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
	const { title } = props as { title: string };
	return renderThumbnail(title, "シリーズ");
};
