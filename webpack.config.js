module.exports = {
	mode: "production",
	entry: {
		"nmd-flash": __dirname + "/js/webpack-entry.js",
		"nmd-flash-fontawesome-icons": [
			__dirname + "/js/webpack-entry.js",
			__dirname + "/scss/icons-fontawesome.scss"
		],
		"nmd-flash-unicode-icons": [
			__dirname + "/js/webpack-entry.js",
			__dirname + "/scss/icons-unicode.scss"
		]
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/dist"
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					}, {
						loader: "sass-loader",
					}
				]
			}, {
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					}
				]
			}
		]
	}
};