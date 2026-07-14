const userModel = require("../models/userModel")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


async function registerController (req,res){
    const { username , email, password, bio, profileImage } = req.body

    const ifUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(ifUserAlreadyExists){
        return res.status(409).json({
            message: "User already exists " + (ifUserAlreadyExists.email == email ? "with this Email" : "with this username")
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profileImage
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn : '1d'})

    res.cookie("token",token)

    res.status(201).json({
        message: "User Registerd succesfully",
        username,
        email
         
    })
}

async function loginController (req, res){
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(401).json({
            message: "Inavaild email or password"
        })
    }
 

    
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Credential"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn: '1d'})

    res.cookie("token",token)



    res.status(200).json({
        message: "Login Successfully",
        user:{
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage:user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}