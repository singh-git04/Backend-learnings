import "dotenv/config"
import app from './src/app.js'
import connectToDb from './src/config/database.js'


const Port = process.env.Port || 8000


app.listen(process.env.Port,()=>{
    console.log(`Server is running on Port : ${Port}`)
})

connectToDb().catch((err)=>{
    console.error("Mongoose Connection Failed",err)
    process.exit(1)
})
