module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpg,html,js,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};