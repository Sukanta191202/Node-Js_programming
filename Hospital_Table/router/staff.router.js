import express from 'express'

import { staffCreate, getAllStaffList } from '../controller/staff.controller.js'

const router = express.Router();

router.post('/',staffCreate);
router.get('/get-all',getAllStaffList);

export const staffRouter = router
