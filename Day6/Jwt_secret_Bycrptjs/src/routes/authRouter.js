const express = require("express")
const userModel = require("../models/user.model")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
    
/* 
    /api/auth/register
*/

authRouter.post("/register",async (req, res)=>{
    const {name, email, password} = req.body

    const userAlreadyExists = await userModel.findOne({email})
    if(userAlreadyExists){

        return res.status(409).json({
            message: "User already exits with this email"
        })
    }
const hash = crypto.createHash("md5").update(password).digest('hex')
const user = await userModel.create({
    name, email, password:hash,
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


/* 
    /api/auth/protected    
*/
authRouter.post("/prei",async(req,res)=>{
    console.log(req.cookies);
    

    res.status(200).json({
        message:"This is protect route",
         
    })
})


/* 
    /api/auth/login

*/

/* 
    controller
*/
authRouter.post("/login",async (req,res)=>{

   const  {email ,password} = req.body

   const user = await userModel.findOne({email})
    
    
   if(!user){
    return res.status(404).json({
        message: "user doesn't exists"
    })
   }

   

   const isPasswordMatched =  user.password ===  /* password */ crypto.createHash("md5").update(password).digest("hex")

   if(!isPasswordMatched){
    return res.status(401).json({
        message: "invalid password"
    })
   }

   const token = jwt.sign({
    id: user._id
   }, process.env.JWT_SECRET)

   res.cookie("jwttoken",token)

   res.status(200).json({
    message: "user logged in"
   })
})

module.exports = authRouter 