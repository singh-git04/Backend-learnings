const blackListModel = require("../models/blackListModel")
const jwt = require("jsonwebtoken")

async function authUser(req,res,next) {
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "Token not found"
        })
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

    // ye hai nahi bnya hai [req.user]
    req.user  = decoded

    next()
    } catch (error) {
       return res.status(401).json({
        message: "Invalid token"
       })
    }
    
}

module.exports =  {authUser}