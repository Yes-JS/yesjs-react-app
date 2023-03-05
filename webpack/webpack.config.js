const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
	const { stand } = envVars;
	const envConfig = require(`./webpack.${stand}.js`);
	return merge(envConfig, commonConfig(stand));
};
