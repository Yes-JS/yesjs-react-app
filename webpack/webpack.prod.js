const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '..', './.env.production'),
		}),
	],
};
