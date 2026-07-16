const express = require("express")
const authRoute = require("./routes/authroute")
const postRoute = require("./routes/postroute")
const cookieparser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieparser())


app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)

module.exports = app