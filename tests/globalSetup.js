import { createServer } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
let server;

export async function setup() {
	server = await createServer({
		configFile: false,
		root: path.resolve(path.dirname(__filename), 'fixtures'),
		server: {
			port: 3000
		}
	});
	await server.listen();
	server.printUrls();
}

export async function teardown() {
	await server.close();
}
