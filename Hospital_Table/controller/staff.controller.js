import { Staffs } from "../model/staff.model.js"

export const staffCreate = async(req , res) =>{
    try{
        console.log(req.body , 'req.body')
        const{ staff_Id, first_name, last_name, gender, email, ph_number, role, salary } = req.body

        if(!first_name || !last_name || !gender){
            return res.status(400).json({
                message: 'All fields are required ! ',
                success: false
            })
        }

        const staff = await Staffs.create({  staff_Id, first_name, last_name, gender, email, ph_number, role, salary })
        const staffList = await Staffs.find({});

        return res.status(200).json({
            message: 'Staff_Schema is created successfully !',
            success:true,
            data: staff, staffList
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

export const getAllStaffList = async(req , res )=>{
    try{
        const staffList = await Staffs.find({})

        return res.status(200).json({
            message:'Staff_Schema is created sucessfully !',
            success:true,
            data: staffList
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