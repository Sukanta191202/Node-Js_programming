import { Products } from "../model/product.model.js";

import { RESPONSE_MESSAGE } from "../constants/responseMessage.constants.js";
import { HTTP_STATUS } from "../constants/statusCode.constants.js";

import { sendResponse } from "../utils/response.handler.js";

import ProductService from "../services/product.service.js"

class ProductControler{

    async createProduct(req , res){
        try{
            const data = await ProductService.createProduct(req.body)
            console.info("Product Created")
            return sendResponse(res , {
                 status:HTTP_STATUS.CREATED, 
                 message : RESPONSE_MESSAGE.PRODUCT_CREATED , 
                 success : true ,
                  data : data })

        }catch(error){
            return sendResponse (res , { 
                status : HTTP_STATUS.INTERNAL_SERVER_ERROR, 
                message : RESPONSE_MESSAGE.INTERNAL_ERROR , 
                sucess : false , 
                error : error })
        }
    }

// async getProductList(req, res) {
    //     try {
    //         const products = await Products.find();
    //         return res.status(200).json({
    //             success: true,
    //             message: products.length ? "Fetched all products" : "No todos available",
    //             data: products
    //         });
    //     } catch (error) {
    //         console.error("Error =>", error);
    //         return res.status(500).json({
    //             success: false,
    //             message: "Internal Server Error"
    //         });
    //     }
    // }

    async getProductList(req ,res) {
        try{
            const product =await Products.find();
            return sendResponse(res , {
                status : HTTP_STATUS.OK, 
                sucress : true ,
                message : product.length ? RESPONSE_MESSAGE.FETCH_ALL_PRODUCT : RESPONSE_MESSAGE.NO_PRODUCTS, 
                data : product
            })

        }catch(error){
            console.error("Error => ",error);
            return sendResponse( res , {
                status : HTTP_STATUS.INTERNAL_SERVER_ERROR ,
                message : RESPONSE_MESSAGE.INTERNAL_ERROR , 
                 sucess: false
                 });
        }
    }



    async deleteProduct(req,res){
        try{
            const { productId } = req.params;
            const product = await Products.findById(productId);

            if(!product){
                return sendResponse(res , { 
                    status : HTTP_STATUS.BAD_REQUEST,
                     message: RESPONSE_MESSAGE.PRODUCT_NOT_FOUND , 
                     sucess : false, 
                    })
            }

            await Products.findByIdAndDelete(productId);
            return sendResponse(res, { 
                status : HTTP_STATUS.OK,
                message : RESPONSE_MESSAGE.PRODUCT_DELETED,
                sucess : true,
                data : product

            });


        }catch(error){
            console.error("error =>", error);
            return sendResponse(res,{
                status: HTTP_STATUS.NOT_FOUND ,
                message : RESPONSE_MESSAGE.PRODUCT_NOT_FOUND,
                sucess : false,

            });

        }
    }

    
}

export default new ProductControler();