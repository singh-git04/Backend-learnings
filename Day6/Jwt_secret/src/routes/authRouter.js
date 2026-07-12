const express = require("express")
const userModel = require("../models/user.model")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

/* 
    /api/auth/register
*/

authRouter.post("/register",async (req, res)=>{
    const {name, email, password} = req.body

    const userAlreadyExists = await userModel.findOne({email})
    if(userAlreadyExists){

        return res.status(400).json({
            message: "User already exits with this email"
        })
    }
const user = await userModel.create({
    name, email, password,
})

const token = jwt.sign({
    id: user._id,
    email:user.email
},process.env.JWT_SECRET)

res.cookie("jwt_token",token)
    res.status(201).json({
        message: "register data",
        user,
        token
    })
})

authRouter.post("/prei",async(req,res)=>{
    console.log(req.cookies);
    

    res.status(200).json({
        message:"This is protect route",
         
    })
})

module.exports = authRouter 