import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './server/context.js';
import { appRouter } from './server/index.js';
import { generateOpenApiDocument, createOpenApiExpressMiddleware } from 'trpc-to-openapi';
import * as fs from 'fs/promises';

const app = express();
const openApiDocument = generateOpenApiDocument(appRouter, {
	baseUrl: 'http://localhost:8000/api',
	title: 'AllProducts',
	version: '1.0.0',
});

app.use(express.json());
app.use('/api', createOpenApiExpressMiddleware({
	router: appRouter,
	createContext,
}));

await fs.writeFile('./openapi-specification.json', JSON.stringify(openApiDocument));
app.get('/', (req, res) => {
	return res.json({ status: 'Server is up and running' });
});

app.use(
	'/trpc',
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext,
	}),
);

app.get('/openApi.json', (req, res) => {
	res.json(openApiDocument);
});

app.listen(8000, () => console.log('Express is running on PORT 8000'));


