const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
/* 
Routes
*/
const appRoutes = require("./routes/authroute")


app.use('/api/auth',appRoutes)

 


module.exports = app
