// @ts-check
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

/** @type {import("satteri").HastPluginDefinition} */
const externalLinksInNewTab = {
	name: "external-links-in-new-tab",
	element: {
		filter: ["a"],
		visit(node, ctx) {
			const href = node.properties?.href;
			if (typeof href !== "string" || !/^https?:\/\//.test(href)) return;
			ctx.setProperty(node, "target", "_blank");
			ctx.setProperty(node, "rel", ["noopener", "noreferrer"]);
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: "https://blog.pocopota.com",
	trailingSlash: "always",
	integrations: [sitemap()],
	markdown: {
		processor: satteri({ hastPlugins: [externalLinksInNewTab] }),
		shikiConfig: {
			theme: "github-light",
		},
	},
});
