import express from "express"
import bodyParser from "body-parser"

import corsConfig from "./src/config/cors.config.js"
import { productRouter} from "./src/routes/product.routes.js"


const server = express()

server.use(corsConfig)
server.use(bodyParser.json({limit:"50mb"}))
server.use(express.json({limit:"50mb"}))
server.use(bodyParser.urlencoded({limit:"50mb" , extended:true }))

server.use('/api/v1/product',productRouter);

server.get("/",(req,res)=>{
    res.send("Application is run ").json({
        message: "all ok"
    })
})


export default server