import "dotenv/config"
import app from "./src/app.js"
import connectToDb from './src/config/database.js'

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})

connectToDb().catch(err=>{
    console.error(` MONGODB Connection Failed`,err)
    process.exit(1)
})