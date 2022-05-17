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

run({
	url: 'http://localhost:3000/center.html',
	elements: ['center', 'center-x', 'center-y']
});

run({
	url: 'http://localhost:3000/cluster.html',
	elements: [
		'cluster-margin-variable-fallback',
		'cluster-margin-variable-global',
		'cluster',
		'cluster-overflow-x',
		'cluster-x-start',
		'cluster-x-center',
		'cluster-x-end',
		'cluster-y-start',
		'cluster-y-center',
		'cluster-y-end'
	]
});
