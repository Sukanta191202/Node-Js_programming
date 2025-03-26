import { model , Schema } from "mongoose";

const doctorSchema = new Schema({
    doctor_Id:{
        type:Number,
        // required:true,
        // unique:true,
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
    specialization:{
        type:String,
        maxLength:[60 , 'upto 300 char'],
        trim:true,
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
    adress:{
        type:String,
    },
    experience_years:{
        type:Number,
    },

}, {timestamps : true } )

export const Doctors = model('doctor', doctorSchema)