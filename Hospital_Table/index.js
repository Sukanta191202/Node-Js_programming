import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import 'dotenv/config'
import { dbconnect } from './db/databaseConnection.js'
import { doctorRouter } from './router/doctor.router.js'
import { medicineRouter } from './router/medicine.router.js'
import { patientRouter } from './router/patient.router.js'
import { staffRouter } from './router/staff.router.js'

const server = express()


server.use(bodyParser.json({ limit: '50mb'}))

server.use(bodyParser.urlencoded({limit: '50mb ', extended:true}))

server.use(express.json({ limit: '50mb'}))
server.use(fileUpload({
      limits:{
        fileSize : 100 * 1024 * 1024
      }
}))


server.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials : true,
        exposedHeaders:['X-Total-Count']
    })
)

dbconnect()
server.use('/api/v1/doctor', doctorRouter)
server.use('/api/v1/medicine', medicineRouter)
server.use('/api/v1/patient', patientRouter)
server.use('/api/v1/staff', staffRouter)

server.use('/', (req, res )=>{

    res.send('server is running mode...')

})

server.listen(process.env.PORT || 8081 , ()=>{
    console.log('server is running ')
    console.log(`url -> http://localhost:${process.env.PORT}`);
})