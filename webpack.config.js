const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
			}
		]
	},
	devServer: {
    open: true,
    hot: true,
  },
	plugins: [
    new VueLoaderPlugin(),
		new HTMLWebpackPlugin({template: './src/index.html'})
  ]
}