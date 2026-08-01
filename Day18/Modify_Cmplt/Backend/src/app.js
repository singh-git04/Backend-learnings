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
const songRoutes = require("./routes/song.routes")


app.use('/api/auth',appRoutes)
app.use("/api/songs",songRoutes)

 


module.exports = app
