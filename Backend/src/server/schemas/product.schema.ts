import { z } from "zod";

export const productModel = z.object({
	id: z.number().describe("UUID of the product id"),
	rating: z.object({
		rate: z.number().min(0).max(5).describe("Actual:q rating"),
		count: z.number().describe("Stars count"),
	}),
	productId: z.number().describe("For cart"),
	title: z.string().min(3).describe("Title of the product: Eg.: Iphone"),
	price: z.number().nonnegative().describe("Price of the product in dollars"),
	description: z.string().min(3).describe("Description of the product"),
	category: z.string().min(3).describe("Particular Category of the product"),
	image: z.string().url("Must be a valid URL").describe("Image URL for the product"),
});

export type Product = z.infer<typeof productModel>;

export const getAllProductsModel = z.array(productModel);
