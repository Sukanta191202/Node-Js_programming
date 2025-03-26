import express from "express"
import productController from "../controller/product.controller.js" ;
import { validate } from "../middlewares/validate.middleware.js"
import productValideation from "../validation/product.valideation.js";


const router = express.Router()

router
     .post('/', validate(productValideation.create),productController.createProduct)
     .get('/get', productController.getProductList)
     // .patch('/:productId', productController.updateProductData)
     // .delete('/:productId', productController.deleteProduct)


     export  const  productRouter = router ;