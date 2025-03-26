import mongoose from "mongoose";

export const dbconnect = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.info('Database connected !')
    } catch (error) {
        console.error('Something is error , Please check your network !', error)
    }
}