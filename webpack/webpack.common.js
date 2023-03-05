const path = require('path');

const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (stand) => {
	const isDevMode = stand === 'local' || stand === 'dev';
	const isLocalStand = stand === 'local';

	return {
		entry: path.resolve(__dirname, '..', './src/index.tsx'),
		resolve: {
			extensions: ['.jsx', '.tsx', '.ts', '.js'],
			modules: [path.resolve('/'), 'node_modules'],
			plugins: [
				new TsconfigPathsPlugin({
					extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
				}),
			],
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor',
						chunks: 'all',
						reuseExistingChunk: true,
					},
					styles: {
						name: 'styles',
						type: 'css/mini-extract',
						chunks: 'all',
						enforce: true,
					},
				},
			},
		},
		module: {
			rules: [
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						},
					],
				},
				{
					test: /\.module\.s(a|c)ss$/,
					use: [
						isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: isDevMode
										? '[path]-[name]--[local]'
										: '[hash:base64:5]',
									localIdentContext: path.resolve(
										__dirname,
										'..',
										'./src/view'
									),
								},
								sourceMap: isDevMode,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDevMode,
							},
						},
					],
				},
				{
					test: /\.s(a|c)ss$/,
					exclude: /\.module.(s(a|c)ss)$/,
					use: [
						isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: isDevMode,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDevMode,
							},
						},
					],
				},
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images',
							},
						},
					],
				},
				{
					test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
					type: 'asset/inline',
				},
			],
		},
		output: {
			path: path.resolve(__dirname, '..', 'build/'),
			filename: 'static/[name].js',
			chunkFilename: 'static/[name].[hash:8].chunk.js',
			publicPath: '/',
			clean: true,
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.APP_VERSION': JSON.stringify(
					require('../package.json').version
				),
				'process.env.APP_NAME': JSON.stringify(require('../package.json').name),
				'process.env.APP_AUTHOR': JSON.stringify(
					require('../package.json').author
				),
				'process.env.APP_STAND': JSON.stringify(stand),
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[hash:5].css',
				chunkFilename: '[id].[hash].css',
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, '..', './public/index.html'),
			}),
			new CopyPlugin({
				patterns: [
					{
						from: 'public',
						globOptions: {
							ignore: ['**/index.html'],
						},
					},
				],
			}),
			new Dotenv({
				path: path.resolve(__dirname, '..', './.env'),
			}),
			...(!isLocalStand
				? [
						new InjectManifest({
							swSrc: path.resolve(
								__dirname,
								'../src',
								'serviceWorkerManifest.js'
							),
							swDest: path.resolve(__dirname, '../build', 'sw.js'),
							maximumFileSizeToCacheInBytes: 8000000,
						}),
				  ]
				: []),
		],
	};
};
