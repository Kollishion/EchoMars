import { z } from "zod";
export declare const orderModel: z.ZodObject<{
    userId: z.ZodString;
    shippingAddress: z.ZodObject<{
        address: z.ZodString;
        city: z.ZodString;
        state: z.ZodString;
        zip: z.ZodString;
        landmark: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodNumber;
        title: z.ZodNumber;
        price: z.ZodNumber;
        image: z.ZodString;
        quantity: z.ZodNumber;
    }, z.core.$strip>>;
    totalPrice: z.ZodNumber;
    status: z.ZodEnum<{
        pending: "pending";
        confirmed: "confirmed";
        shipped: "shipped";
        delivered: "delivered";
        cancelled: "cancelled";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=order.schema.d.ts.map