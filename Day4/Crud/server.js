// server start krney ke liye

require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")
app.listen(3000,()=>{
    console.log("Server started on port 3000");
    
})

connectToDB()