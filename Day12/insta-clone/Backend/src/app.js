const express = require("express")
const cookieparser = require("cookie-parser")
const cors = require("cors")
 


const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    credentials:true,
    origin: "http://localhost:5173"
}))
 
/* 
    @route required
*/
const authRoute = require("./routes/authroute")
const postRoute = require("./routes/postroute")
const userRoute = require("./routes/userroute")

/* 
    using routes
*/
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)
app.use("/api/users",userRoute)

module.exports = app