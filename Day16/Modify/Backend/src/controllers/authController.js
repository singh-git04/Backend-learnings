const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const blackListModel = require("../models/blackListModel")
const redis = require("../config/cache")


async function registerUser(req,res){
    const {username, email, password} = req.body

    const ifAlreadyUser = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
       
    if(ifAlreadyUser){
        return res.status(409).json({
            message:"User with same username and email exists"
        })
    }

    const hash = await bcrypt.hash(password,10)


    const user = await userModel.create({
        username,email,password:hash
    })

    const token = jwt.sign({
        id: user._id,
        email:user.email
    },process.env.JWT_SECRET,{
        expiresIn:'3d'
    })

    res.cookie("token",token)

    res.status(201).json({
        message: "User Registered Successfully",
        user:{
            id: user._id,
            username:user.username,
            email:user.email,
        },
        
         
    })

}

async function login(req,res) {
    const {username, email , password} = req.body

    const user =await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    }).select("+password")

    if(!user){
        return res.status(401).json({
            message: "Invalid credential"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid credential"
        })
    }

    const token = jwt.sign({
        id: user._id,
        user:user.username,
    },process.env.JWT_SECRET,{expiresIn:'3d'})

    res.cookie("token",token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            user: user.username,
            email:user.email
        }
    })

}

async function getMe(req,res) {
    const user = await userModel.findById(req.user.id)

         res.status(200).json({
        message: "User feteched Successfully",
        user
    })

}
async function logout(req,res) {
    const token = req.cookies.token

    res.clearCookie(token)

    await redis.set(token,Date.now().toString(),"EX", 60*60)

    res.status(200).json({
        message: "Logout Successfull"
    })
}

module.exports = {
    registerUser,
    login,
    getMe,
    logout
}