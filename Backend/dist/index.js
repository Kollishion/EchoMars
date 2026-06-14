import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './server/context.js';
import { appRouter } from './server/index.js';
import { generateOpenApiDocument, createOpenApiExpressMiddleware } from 'trpc-to-openapi';
import * as fs from 'fs/promises';
import connectCloudinary from "./config/cloudinary.js";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/errorHandler.js";
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 200
});
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    message: {
        error: "Too many login attempts"
    }
});
const uploadLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 20
});
const app = express();
app.use(helmet());
if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
const openApiDocument = generateOpenApiDocument(appRouter, {
    baseUrl: 'http://localhost:8000/api',
    title: 'AllProducts',
    version: '1.0.0',
});
app.use(express.json({
    limit: "1mb"
}));
app.use("/api", apiLimiter);
app.use("/auth", authLimiter);
app.use("/upload", uploadLimiter);
app.use("/trpc", apiLimiter);
app.use('/api', createOpenApiExpressMiddleware({
    router: appRouter,
    createContext,
}));
if (process.env.NODE_ENV !== "production") {
    await fs.writeFile('./openapi-specification.json', JSON.stringify(openApiDocument));
}
app.get('/', (req, res) => {
    return res.json({ status: 'Server is up and running' });
});
app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
}));
if (process.env.NODE_ENV !== "production") {
    app.get('/openApi.json', (req, res) => {
        res.json(openApiDocument);
    });
}
app.use(errorHandler);
connectCloudinary();
app.listen(8000, () => console.log('Express is running on PORT 8000'));
//# sourceMappingURL=index.js.map