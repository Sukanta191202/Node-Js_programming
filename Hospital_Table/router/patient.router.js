import express from 'express'

import { patientCreate , getAllPatientList } from '../controller/patient.controller.js'

const router = express.Router();

router.post('/',patientCreate);
router.get('/get-all',getAllPatientList);

export const patientRouter = router
