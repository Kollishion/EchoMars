import { router, publicProcedure } from '../trpc.js';
import { z } from 'zod';
import { getAllUserModel } from '../schemas/user.schema.js';
const users = [{ id: 1245, firstName: "John", lastName: "Doe", email: "JohnDoe@gmail.com", address: "90, park street, Sam Avenue", city: "Asansol", state: "West Bengal", zip: "700129", landmark: "Shanghai Flavours" }];
export const userRouter = router({
    getAllUsers: publicProcedure
        .meta({
        openapi: {
            method: 'GET',
            path: '/users',
            summary: 'Get all users',
        }
    })
        .input(z.undefined())
        .output(getAllUserModel)
        .query(() => {
        return users;
    })
});
//# sourceMappingURL=user.routes.js.map