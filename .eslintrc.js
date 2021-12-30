const path = require('path');

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			alias: {
				map: [
					['~/*', path.resolve(__dirname, 'src/')],
					['~app', path.resolve(__dirname, 'src/app')],
					['~app/*', path.resolve(__dirname, 'src/app/*')],
					['~view', path.resolve(__dirname, 'src/view')],
					['~view/*', path.resolve(__dirname, 'src/view/*')],
					['~atoms', path.resolve(__dirname, 'src/view/components/atoms')],
					['~atoms/*', path.resolve(__dirname, 'src/view/components/atoms/*')],
					['~molecules', path.resolve(__dirname, 'src/view/components/molecules')],
					['~molecules/*', path.resolve(__dirname, 'src/view/components/molecules/*')],
					['~organisms', path.resolve(__dirname, 'src/view/components/organisms')],
					['~organisms/*', path.resolve(__dirname, 'src/view/components/organisms/*')],
					['~wrappers', path.resolve(__dirname, 'src/view/components/wrappers')],
					['~wrappers/*', path.resolve(__dirname, 'src/view/components/wrappers/*')],
					['~hooks', path.resolve(__dirname, 'src/view/hooks')],
					['~hooks/*', path.resolve(__dirname, 'src/view/hooks/*')],
					['~icons', path.resolve(__dirname, 'src/view/icons')],
					['~icons/*', path.resolve(__dirname, 'src/view/icons/*')],
					['~mainLayout', path.resolve(__dirname, 'src/view/mainLayout')],
					['~mainLayout/*', path.resolve(__dirname, 'src/view/mainLayout/*')],
					['~modals', path.resolve(__dirname, 'src/view/modals')],
					['~modals/*', path.resolve(__dirname, 'src/view/modals/*')],
					['~pages', path.resolve(__dirname, 'src/view/pages')],
					['~pages/*', path.resolve(__dirname, 'src/view/pages/*')],
					['~routes', path.resolve(__dirname, 'src/view/routes')],
					['~routes/*', path.resolve(__dirname, 'src/view/routes/*')],
					['~theme', path.resolve(__dirname, 'src/view/theme')],
					['~theme/*', path.resolve(__dirname, 'src/view/theme/*')],
					['~store', path.resolve(__dirname, 'src/store')],
					['~store/*', path.resolve(__dirname, 'src/store/*')],
					['~utils', path.resolve(__dirname, 'src/utils')],
					['~utils/*', path.resolve(__dirname, 'src/utils/*')],
					['~schemas', path.resolve(__dirname, 'src/schemas')],
					['~schemas/*', path.resolve(__dirname, 'src/schemas/*')],
					['~slices', path.resolve(__dirname, 'src/store/slices')],
					['~slices/*', path.resolve(__dirname, 'src/store/slices/*')],
				],
				extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
			},
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'prettier',
	],
	rules: {
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				ignoreDeclarationSort: true,
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', 'internal', 'index', 'object', 'parent', 'sibling'],
				pathGroups: [
					{
						"pattern": "~*/**",
						"group": "internal"
					},

					{
						"pattern": "~*",
						"group": "internal"
					}
				],
			},
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		"jsx-a11y/click-events-have-key-events": "off",
	},
}
