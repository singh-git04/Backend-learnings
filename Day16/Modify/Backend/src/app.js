const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())
/* 
Routes
*/
const appRoutes = require("./routes/authroute")


app.use('/api/auth',appRoutes)

 


module.exports = app
