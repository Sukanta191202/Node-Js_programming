import express from 'express'

import { doctorCreate , getAllDoctorList } from '../controller/doctor.controller.js'

const router = express.Router();


router.post('/', doctorCreate);
router.get('/get-all', getAllDoctorList)

export const doctorRouter = router