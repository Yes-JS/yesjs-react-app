const path = require('path')

const webpack = require('webpack')
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack')
const BundleAnalyzerPlugin =
		require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.mode': JSON.stringify('prod'),
		}),
		new Dotenv({
			path: path.resolve(__dirname, '..', './.env.production')
		}),
		new BundleAnalyzerPlugin(),
	],
}
