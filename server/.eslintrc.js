module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
	},
	extends: ['eslint:recommended', 'plugin:adonis/typescriptPackage'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
}
