import { router } from './trpc.js';
import { productRouter } from './routes/product.routes.js';
//Root Router
export const appRouter = router({
    product: productRouter
});
//# sourceMappingURL=index.js.map