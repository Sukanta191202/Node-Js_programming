import server from "./app.js"
import 'dotenv/config'
import { dbConnection } from "./src/config/database.config.js"

const PORT  = process.env.PORT

dbConnection()

server.listen(PORT || 8081 ,()=>{
    console.log("Your server is running Sucessfully ", PORT);
    
})