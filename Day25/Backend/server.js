import "dotenv/config"
import app from "./src/app.js"
import { connectToDB } from "./src/config/database.js"


const PORT = process.env.PORT || 8000

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})

connectToDB().catch(err=>{
    console.error("Mongoose Connnection Failed",err)
    process.exist(1)
})