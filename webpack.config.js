const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?name=app/assets/[name].[ext]' }
		]
	},
	devServer: {
		historyApiFallback: true
	},
	mode: 'development',
	plugins: [
		new htmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
};
