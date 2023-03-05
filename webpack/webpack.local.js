const path = require('path');

const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		hot: true,
		open: true,
		port: 3300,
	},
	devtool: 'cheap-module-source-map',
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '..', './.env.development'),
		}),
	],
};
