const fundamend = require('@fundamend/config-eslint');

module.exports = {
	...fundamend,
	parser: '@babel/eslint-parser', // https://stackoverflow.com/questions/60698433/why-is-linting-failing-with-unexpected-token-on-import-meta-url
	parserOptions: {
		requireConfigFile: false // required to avoid no config found error
	}
};
