import {model,Schema} from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required : [ true , "Title must be required !"] ,
        trim : true ,
        minLength : [3 , "title must be 3 char or more "] , 
        maxLangth : [60 , "title must be under 60 char"]
    },
    description:{
        type:String ,
        trim : true ,
        maxLangth : [ 500 , "title must be under 500 char"],

    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        trim : true ,
    },
    stock:{
        type:Number,
        default:0
    },
    images:{
        type:String
    },
    rating:{
        type:Number,
        default:0
    },
    numReviews:{
        type:Number,
        default:0
    },
    discount:{
        type:Number,
        default:0
    },
    isFeatured:{
        type:Boolean,
        default:false
    },
    seller:{
        type:String,
        trim : true ,
        required:true
    }
},{ timestamps:true } )


export const Products = model( "product" , productSchema )