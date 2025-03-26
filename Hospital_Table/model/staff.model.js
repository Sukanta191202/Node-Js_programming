import { model , Schema } from "mongoose";

const staffSchema = new Schema({
    staff_Id:{
        type:Number,
    },
    first_name:{
        type:String,
        required: [true, 'It is required'],
        maxLength:[60 , 'upto 300 char'],
        trim:true,
    },
    last_name:{
        type:String,
        required: [true, 'It is required'],
        maxLength:[60 , 'upto 300 char'],
        trim:true, 
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Add options as needed
        trim: true,
        required: true // or false depending on your requirements
    },
    email:{
        type:String,
        maxLength:[150 , 'upto 300 char'],
        unique:true,
        trim:true,
    },
    ph_number:{
        type:String,
        maxLength:15,
    },
    role:{
        type:String,
    },
    salary:{
        type :Number,
    },

}, {timestamps : true } )

export const Staffs = model('staff', staffSchema)