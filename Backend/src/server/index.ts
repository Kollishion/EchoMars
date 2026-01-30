import { router } from './trpc.js';

//Root Router
const appRouter = router({
	//...
});

export type AppRouter = typeof appRouter;
