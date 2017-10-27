const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/main",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[chunkhash].js"
	},
	plugins: [new HtmlWebpackPlugin({
		title: "uuid.click",
		inject: false,
		template: require('html-webpack-template'),
		appMountId: 'root'
	})],
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				options: {
					presets: ['env'],
					plugins: [
						['transform-react-jsx', {
							pragma: 'preact.h'
						}]
					]
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
