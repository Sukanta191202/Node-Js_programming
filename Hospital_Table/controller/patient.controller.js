import { Patients} from "../model/patient.model.js"

export const patientCreate = async(req , res) =>{
    try{
        console.log(req.body , 'req.body')
        const{ patient_Id, first_name, last_name, gender, DOB, email, ph_number, adress, medical_history } = req.body

        if(!first_name || !last_name || !gender){
            return res.status(400).json({
                message: 'All fields are required ! ',
                success: false
            })
        }

        const patient = await Patients.create({ patient_Id, first_name, last_name, gender, DOB, email, ph_number, adress, medical_history})
        const patientList = await Patients.find({});

        return res.status(200).json({
            message: 'Patient_Schema is created successfully !',
            success:true,
            data: patient, patientList
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

export const getAllPatientList = async(req , res )=>{
    try{
        const patientList = await Patients.find({})

        return res.status(200).json({
            message:'Patient_Schema is created sucessfully !',
            success:true,
            data: patientList
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