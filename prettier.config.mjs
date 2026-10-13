/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	arrowParens: "always",
	endOfLine: "lf",
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
