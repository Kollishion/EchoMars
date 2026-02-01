import { z } from "zod";
export declare const productModel: z.ZodObject<{
    id: z.ZodNumber;
    rating: z.ZodObject<{
        rate: z.ZodNumber;
        count: z.ZodNumber;
    }, z.core.$strip>;
    productId: z.ZodNumber;
    title: z.ZodString;
    price: z.ZodNumber;
    description: z.ZodString;
    category: z.ZodString;
    image: z.ZodString;
}, z.core.$strip>;
export type Product = z.infer<typeof productModel>;
export declare const getAllProductsModel: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    rating: z.ZodObject<{
        rate: z.ZodNumber;
        count: z.ZodNumber;
    }, z.core.$strip>;
    productId: z.ZodNumber;
    title: z.ZodString;
    price: z.ZodNumber;
    description: z.ZodString;
    category: z.ZodString;
    image: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=product.schema.d.ts.map