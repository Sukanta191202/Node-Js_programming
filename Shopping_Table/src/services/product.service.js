import { Products } from "../model/product.model.js";

class ProductService {
    async createProduct(body){
        console.log("body",body);

        const product = await Products.create(body)
        return product
        
    }
}


export default new ProductService();