import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: [
			...configDefaults.exclude,
			'./tests/__image_snapshots__',
			'./tests/__snapshots__'
		],
		globalSetup: [
			'./tests/globalSetup.js'
		]
	}
})
