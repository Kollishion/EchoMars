import { z } from "zod";

export const productModel = z.object({
	id: z.number().describe("UUID of the product id"),
	rating: z.object({
		rate: z.number().min(0).max(5).describe("Actual rating"),
		count: z.number().describe("Stars count"),
	}),
	productId: z.number().describe("Connects "),
	title: z.string().min(3),
	price: z.number().nonnegative(),
	description: z.string().min(3),
	category: z.string().min(3),
	image: z.string().url("Must be a valid URL"),
});
