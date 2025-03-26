import { Doctors } from "../model/doctor.model.js"

export const doctorCreate = async(req , res) =>{
    try{
        console.log(req.body , 'req.body')
        const{ doctor_Id, first_name, last_name, specialization, email, ph_number, adress, experience_years } = req.body

        if(!first_name || !last_name ){
            return res.status(400).json({
                message: 'All fields are required ! ',
                success: false
            })
        }

        const doctor = await Doctors.create({ doctor_Id, first_name, last_name, specialization, email, ph_number, adress, experience_years })
        const doctorList = await Doctors.find({});

        return res.status(200).json({
            message: 'Doctor_Schema is created successfully !',
            success:true,
            data: doctor, doctorList
        })
    } catch(error){

        console.error(error)
        return res.status(400).json({
            message: 'Something error , please try again ',
            success:false,
            error
        })
    }
}

export const getAllDoctorList = async(req , res )=>{
    try{
        const doctorList = await Doctors.find({})

        return res.status(200).json({
            message:'Doctror_Schema is created sucessfully !',
            success:true,
            data: doctorList
        })
    }catch(error){
        console.error(error)
        return res.status(400).json({
            message:'Something error , please try again',
            success:false,
            error
        })
    }
}