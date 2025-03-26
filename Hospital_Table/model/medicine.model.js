import { model , Schema} from "mongoose";

const medicineSchema = new Schema({
    record_id:{
        type:Number,
        // required:true,
        // unique:true,
    },
    patient_id:{
        type:Number,
        //trim:true,
    },
    diagnosis:{
        type:String,
        required: [true, 'It is required'],
        maxLength:[60 , 'upto 300 char'],
        trim:true, 
    },
    treatment:{
        type:String,
        maxLength:[60 , 'upto 300 char'],
        trim:true,
    },
    precribed_medications:{
        type:String,
        maxLength:[150 , 'upto 300 char'],
        trim:true,
    },
    record_date:{
        type:Date,
    },
}, {timestamps : true } )

export const Medicines = model('medicine', medicineSchema)