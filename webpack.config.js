const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
			    test: /\.scss$/,
			    loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			// {
   //              test:/\.css$/,
   //              use:['style-loader', 'css-loader']
   //          },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}