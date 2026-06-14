import { z } from "zod";
export const userModel = z.object({
    id: z.number().describe("UUID of user"),
    firstName: z.string().min(3, "Minimum length for firstname should be 3").describe("First name of user"),
    lastName: z.string().min(3, "Minimum length for lastname should be 3").describe("Last name of user"),
    email: z.string().email().min(3, "Minimum length for email should be 3").describe("Email of user"),
    address: z.string().min(10, "Minimum length for address should be 10").describe("Address of the user"),
    city: z.string().min(10, "Minimum length for city should be 3").describe("City of the user"),
    state: z.string().min(3, "Minimum length for state should be 3").describe("State of the user"),
    zip: z.string().min(3, "Minimum length for zip should be 3").describe(""),
    landmark: z.string().min(3, "Minimum length for state should be 3").describe("Landmark of the user"),
});
export const getAllUserModel = z.array(userModel);
//# sourceMappingURL=user.schema.js.map