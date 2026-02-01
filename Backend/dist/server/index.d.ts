export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {};
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    product: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {};
        meta: import("trpc-to-openapi").OpenApiMeta;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: false;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        getAllProducts: import("@trpc/server").TRPCQueryProcedure<{
            input: undefined;
            output: {
                id: number;
                rating: {
                    rate: number;
                    count: number;
                };
                productId: number;
                title: string;
                price: number;
                description: string;
                category: string;
                image: string;
            }[];
            meta: import("trpc-to-openapi").OpenApiMeta;
        }>;
    }>>;
}>>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=index.d.ts.map