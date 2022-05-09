import run from '@fundamend/plugin-jest-easy-snapshot';

run({
	url: 'http://localhost:3000/box.html',
	elements: [
		'box-padding-variable-fallback',
		'box-padding-variable-global',
		'box',
		'box-x',
		'box-y',
		'box-overflow-x',
		'box-overflow-xy',
		'box-fill',
		'box-fill-x',
		'box-fill-y'
	]
});
