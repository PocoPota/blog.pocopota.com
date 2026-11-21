import { readFile } from "node:fs/promises";

import { Resvg } from "@resvg/resvg-js";
import { loadDefaultJapaneseParser } from "budoux";
import satori from "satori";

import { SITE_TITLE } from "@/consts";

const fontMedium = await readFile(
	"src/assets/fonts/ZenKakuGothicNew-Medium.ttf",
);
const fontBold = await readFile("src/assets/fonts/ZenKakuGothicNew-Bold.ttf");
const parser = loadDefaultJapaneseParser();
// satori が元の JPEG を読めないため、PNG に変換したものを使う
const icon = `data:image/png;base64,${(await readFile("src/assets/pocopota-icon.png")).toString("base64")}`;

interface CoverSize {
	width: number;
	height: number;
	padding: string;
	titleSize: number;
	labelSize: number;
	footerSize: number;
	iconSize: number;
}

// SNS でシェアされたときの画像
const OG_SIZE: CoverSize = {
	width: 1200,
	height: 630,
	padding: "88px 96px",
	titleSize: 56,
	labelSize: 28,
	footerSize: 26,
	iconSize: 48,
};

// カードのサムネイル。縮めて表示するので、OG と同じレイアウトのまま文字とアイコンを相対的に大きくする
const THUMBNAIL_SIZE: CoverSize = {
	width: 800,
	height: 420,
	padding: "44px 56px",
	titleSize: 42,
	labelSize: 26,
	footerSize: 26,
	iconSize: 44,
};

export function renderOgImage(title: string, label?: string) {
	return renderCover(title, label, OG_SIZE);
}

export function renderThumbnail(title: string, label?: string) {
	return renderCover(title, label, THUMBNAIL_SIZE);
}

// タイトルの上に label を小さく添え、下にサイト名を置いた画像を返す
async function renderCover(
	title: string,
	label: string | undefined,
	size: CoverSize,
) {
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
							padding: size.padding,
						},
						children: [
							{
								type: "div",
								props: {
									style: {
										display: "flex",
										flexDirection: "column",
										gap: `${size.labelSize * 0.85}px`,
									},
									children: [
										label && {
											type: "div",
											props: {
												style: {
													fontSize: `${size.labelSize}px`,
													letterSpacing: "0.08em",
													color: "#3d6d8c",
												},
												children: label,
											},
										},
										{
											type: "div",
											props: {
												// 文節ごとに要素を分け、文節の途中では改行しないようにする
												style: {
													display: "flex",
													flexWrap: "wrap",
													fontSize: `${size.titleSize}px`,
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
									].filter(Boolean),
								},
							},
							{
								type: "div",
								props: {
									style: {
										display: "flex",
										alignItems: "center",
										gap: `${size.iconSize * 0.375}px`,
										fontSize: `${size.footerSize}px`,
										letterSpacing: "0.12em",
										color: "#6e7378",
									},
									children: [
										{
											type: "img",
											props: {
												src: icon,
												width: size.iconSize,
												height: size.iconSize,
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
			width: size.width,
			height: size.height,
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
}
