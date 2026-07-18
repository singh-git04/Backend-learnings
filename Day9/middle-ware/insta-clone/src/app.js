const express = require("express")
const cookieparser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieparser())

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