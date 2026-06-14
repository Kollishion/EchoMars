export declare const userRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {};
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    getAllUsers: import("@trpc/server").TRPCQueryProcedure<{
        input: undefined;
        output: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            address: string;
            city: string;
            state: string;
            zip: string;
            landmark: string;
        }[];
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
}>>;
//# sourceMappingURL=user.routes.d.ts.map