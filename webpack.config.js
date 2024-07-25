module.exports = {
	mode: "production",
	entry: {
		"nmd-flash": __dirname + "/js/main.js",
		"nmd-flash-style": __dirname + "/js/main-style.js",
		"nmd-flash-style-fontawesome-icons": [
			__dirname + "/js/main-style.js",
			__dirname + "/css/icons-fontawesome.css"
		],
		"nmd-flash-style-unicode-icons": [
			__dirname + "/js/main-style.js",
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