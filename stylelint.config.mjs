/** @type {import('stylelint').Config} */
export default {
	extends: [
		"stylelint-config-recommended-scss",
		"stylelint-config-recess-order",
		"stylelint-config-html/astro",
	],
	plugins: [
		"@double-great/stylelint-a11y",
		"stylelint-order",
		"stylelint-declaration-block-no-ignored-properties",
	],
	rules: {
		"a11y/font-size-is-readable": true,
		"a11y/media-prefers-reduced-motion": true,
		"a11y/no-outline-none": true,
		"a11y/selector-pseudo-class-focus": true,
		"plugin/declaration-block-no-ignored-properties": true,
		// RSCSS記法に適合しないためOFF
		"no-descending-specificity": null,
		// Astroの:globalを除外
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"],
			},
		],
	},
	ignoreFiles: ["./src/styles/reset.css"],
};
