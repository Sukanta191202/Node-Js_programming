import { Medicines } from "../model/medicine.model.js"

export const medicineCreate = async(req , res) =>{
    try{
        console.log(req.body , 'req.body')
        const{ record_id,patient_id,diagnosis,treatment,precribed_medications,record_data } = req.body

        if(!diagnosis || !precribed_medications){
            return res.status(400).json({
                message: 'All flieds are required !!',
                success : false
            })
        }

        const medicine = await Medicines.create({ record_id,patient_id,diagnosis,treatment,precribed_medications,record_data })
        const medicineList =  await Medicines.find({});
        
        return res.status(200).json({
            message: 'Medicine_Schema is created Successfully !',
            success : true,
            date: medicine,medicineList
        })
    }catch(error){

        console.error(error)
        return res.status(400).json({
            message:'Something error, please try again !!',
            success:false,
            error
        })
    }
}


export const getAllDoctorList = async(req , res) =>{
    try{
        const medicineList =  await Medicines.find({});
        
        return res.status(200).json({
            message: 'Medicine_Schema is created Successfully !',
            success : true,
            date: medicineList
        })
    }catch(error){

        console.error(error)
        return res.status(400).json({
            message:'Something error, please try again !!',
            success:false,
            error
        })
    }
}