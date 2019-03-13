module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: ['plugin:vue/essential', 'standard'],
	// required to lint *.vue files
	plugins: ['html', 'vue'],
	rules: {
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 0,
		indent: [
			2,
			2,
			{
				SwitchCase: 1
			}
		],
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}
