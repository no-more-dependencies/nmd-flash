module.exports = {
	mode: "production",
	entry: {
		"nmd-flash": __dirname + "/js/webpack-entry.js",
		"nmd-flash-fontawesome-icons": [
			__dirname + "/js/webpack-entry.js",
			__dirname + "/css/icons-fontawesome.css"
		],
		"nmd-flash-unicode-icons": [
			__dirname + "/js/webpack-entry.js",
			__dirname + "/css/icons-unicode.css"
		]
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/dist"
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			}
		]
	}
};