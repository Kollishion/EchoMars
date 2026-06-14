import { z } from "zod";
export const orderModel = z.object({
    userId: z.string().describe("UUID of the user"),
    shippingAddress: z.object({
        address: z.string().min(10),
        city: z.string().min(3),
        state: z.string().min(3),
        zip: z.string().min(3),
        landmark: z.string().optional(),
    }),
    items: z.array(z.object({
        productId: z.number(),
        title: z.number(),
        price: z.number().positive(),
        image: z.string().url(),
        quantity: z.number().positive(),
    })),
    totalPrice: z.number().positive(),
    status: z.enum(["pending", "confirmed", "shipped", "delivered", "cancelled"]),
});
//# sourceMappingURL=order.schema.js.map