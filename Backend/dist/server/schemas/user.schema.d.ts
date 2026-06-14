import { z } from "zod";
export declare const userModel: z.ZodObject<{
    id: z.ZodNumber;
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    address: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    zip: z.ZodString;
    landmark: z.ZodString;
}, z.core.$strip>;
export type User = z.infer<typeof userModel>;
export declare const getAllUserModel: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    address: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    zip: z.ZodString;
    landmark: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=user.schema.d.ts.map