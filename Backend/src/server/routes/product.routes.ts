import { router, publicProcedure } from '../trpc.js';

export const productRouter = router({
	getAllProducts: publicProcedure
		.input()
		.output()
		.query(() => {

		})
});


