import run from '@fundamend/plugin-vitest-easy-snapshot';

run({
	url: 'http://localhost:3000/box.html',
	elements: [
		'box-variables-fallback',
		'box-variables-global',
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
		'cluster-variables-fallback',
		'cluster-variables-global',
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

run({
	url: 'http://localhost:3000/stack.html',
	elements: [
		'stack-variables-fallback',
		'stack-variables-global',
		'stack',
		'stack-y',
		'stack-x',
		'stack-z'
	]
});

run({
	url: 'http://localhost:3000/switcher.html',
	elements: [
		'switcher-variables-fallback-wide',
		'switcher-variables-fallback',
		'switcher-variables-global-wide',
		'switcher-variables-global',
		'switcher-wide',
		'switcher'
	]
});
