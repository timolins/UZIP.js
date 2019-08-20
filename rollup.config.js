import terserPlugin from "rollup-plugin-terser";

module.exports = [
	{
		input: "src/index.js",
		output: {
			name: "UZIP",
			file: "dist/uzip.js",
			format: "umd",
		},
	},
	{
		input: "src/index.js",
		output: {
			name: "UZIP",
			file: "dist/uzip.min.js",
			format: "umd",
		},
		plugins: [terserPlugin.terser()],
	},
];
