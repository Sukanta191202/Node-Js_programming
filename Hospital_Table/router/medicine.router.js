import express from 'express'

import { medicineCreate , getAllDoctorList } from '../controller/medicine.controller.js'

const router = express.Router();

router.post('/',medicineCreate);
router.get('/get-all',getAllDoctorList);

export const medicineRouter = router
