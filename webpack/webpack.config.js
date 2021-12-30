const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

module.exports = (envVars) => {
	const { stand } = envVars
	const envConfig = require(`./webpack.${stand}.js`)
	const config = merge(envConfig, commonConfig(stand))
	return config
}
