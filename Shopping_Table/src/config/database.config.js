import mongoose from "mongoose";

export const dbConnection = async()=>{
    try{
        const uri = process.env.DB_URI
        await mongoose.connect(uri)

        console.info("Database Connect ")
    }catch (error){
        console.error("error =>",error)
    }
    
}