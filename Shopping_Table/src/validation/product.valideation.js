import { z } from "zod";

class ProductValidation {

    create = z.object({
        body: z.object({
            name: z.string().min(3, "Name is required."),
            description: z.string().optional(),
            seller: z.string().min(3, "Seller is required."),
            price: z.number().nonnegative().optional(),
            category: z.string().optional(),
            brand: z.string().optional(),
            stock: z.number().nonnegative().optional(),
            images: z.string().optional(),
            rating: z.number().min(0).max(5).optional(),
            numReviews: z.number().nonnegative().optional(),
            discount: z.number().min(0).max(100).optional(),
            isFeatured: z.boolean().optional()
        }).strict(),
    });

}

export default new ProductValidation();
