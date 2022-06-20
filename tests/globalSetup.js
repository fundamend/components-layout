import { createServer } from 'vite';

let server;

export async function setup() {
	server = await createServer({
		configFile: false,
		root: __dirname + '/fixtures',
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
