import userModel from "../model/user.model.js"
import jwt from "jsonwebtoken"

/* Register */
export async function register(req,res) {
    const {username, email, password} = req.body

    const isExistsAlready = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isExistsAlready){
        return res.status(409).json({
            message: "User already exits with this username or email",
            success: false,
            err: "User already exits"
        })
    }

    const user = await userModel.create({
        username, email, password
    })

   return res.status(201).json({
        message : "User registered successfully",
        success:true,
        user: {
            id:user._id,
            username: user.username,
            email: user.email
        }
   })

}

export async function login(req,res) {
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message: "Invalid credentials",
            success:false,
            err: "User not found"
        })
    }

    const isPasswordValid  = await user.comparePassword(password)
    if(!isPasswordValid){
        return res.status(404).json({
           message: "Invalid credentials",
            success:false,
            err: "Invalid password"
        })
    }

    if(!user.verified){
        return res.status(401).json({
            message: "Please Verify email before login",
            err: "Invalid Token"
        })
    }

    const token  = jwt.sign({id: user._id
        ,email: user.email
    },process.env.JWT_SECRET,{expiresIn:'7d'})

    res.cookie("token",token)

    return res.status(200).json({
        message : "User LoggedIn Successfully"
    })
}