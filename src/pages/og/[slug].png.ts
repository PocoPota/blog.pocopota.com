import { readFile } from "node:fs/promises";

import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import { loadDefaultJapaneseParser } from "budoux";
import satori from "satori";

import { SITE_TITLE } from "@/consts";

import type { APIRoute, GetStaticPaths } from "astro";

export const getStaticPaths = (async () => {
	const posts = await getCollection("posts");
	return posts
		.filter((entry) => !entry.data.thumbnail)
		.map((entry) => ({
			params: { slug: entry.id },
			props: { title: entry.data.title },
		}));
}) satisfies GetStaticPaths;

const fontMedium = await readFile(
	"src/assets/fonts/ZenKakuGothicNew-Medium.ttf",
);
const fontBold = await readFile("src/assets/fonts/ZenKakuGothicNew-Bold.ttf");
const parser = loadDefaultJapaneseParser();
// satori が元の JPEG を読めないため、PNG に変換したものを使う
const icon = `data:image/png;base64,${(await readFile("src/assets/pocopota-icon.png")).toString("base64")}`;

export const GET: APIRoute = async ({ props }) => {
	const { title } = props as { title: string };

	const svg = await satori(
		{
			type: "div",
			props: {
				style: {
					display: "flex",
					width: "100%",
					height: "100%",
					backgroundColor: "#fbfbf8",
					color: "#2b2d2f",
					fontFamily: "Zen Kaku Gothic New",
				},
				children: {
					type: "div",
					props: {
						// 幅を 100% にした要素の padding は外側に足されるので、余白は内側の要素に付ける
						style: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							flexGrow: 1,
							padding: "88px 96px",
						},
						children: [
							{
								type: "div",
								props: {
									// 文節ごとに要素を分け、文節の途中では改行しないようにする
									style: {
										display: "flex",
										flexWrap: "wrap",
										fontSize: "56px",
										fontWeight: 700,
										lineHeight: 1.6,
										letterSpacing: "0.04em",
									},
									children: parser.parse(title).map((phrase) => ({
										type: "span",
										props: { children: phrase },
									})),
								},
							},
							{
								type: "div",
								props: {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "18px",
										fontSize: "26px",
										letterSpacing: "0.12em",
										color: "#6e7378",
									},
									children: [
										{
											type: "img",
											props: {
												src: icon,
												width: 48,
												height: 48,
												style: { borderRadius: "50%" },
											},
										},
										SITE_TITLE,
									],
								},
							},
						],
					},
				},
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: "Zen Kaku Gothic New", data: fontMedium, weight: 500 },
				{ name: "Zen Kaku Gothic New", data: fontBold, weight: 700 },
			],
		},
	);

	const png = new Resvg(svg, { font: { loadSystemFonts: false } })
		.render()
		.asPng();
	return new Response(new Uint8Array(png), {
		headers: { "Content-Type": "image/png" },
	});
};
