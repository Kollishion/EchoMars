import { router, publicProcedure } from '../trpc.js';
import { z } from 'zod';
import { getAllProductsModel } from '../schemas/product.schema.js';
import type { Product } from '../schemas/product.schema.js';
const products: Product[] = [{ id: 12459, rating: { rate: 4, count: 4 }, productId: 1, title: 'Iphone 16', price: 1000, description: 'The iPhone 16 redefines performance and design with the A18 Bionic chip, brighter Super Retina XDR display, and enhanced battery life. Featuring advanced AI-powered photography, Dynamic Island, and iOS 18’s customizable interface, it’s Apple’s most intelligent and refined iPhone yet.', category: 'Smartphone', image: 'www.iphone.com' }];
export const productRouter = router({
	getAllProducts: publicProcedure
		.input(z.undefined())
		.output(getAllProductsModel)
		.query(() => {
			return products;

		})
});


