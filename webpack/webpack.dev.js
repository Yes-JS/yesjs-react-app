const path = require('path');

const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '..', './.env.development'),
		}),
	],
};
