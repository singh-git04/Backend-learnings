const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username already exits"],
        required: true
    },
    email:{
        type:String,
        unique:[true,"Email already exits"],
        required: true
    },
    password:{
        type:String,
        required: true,
        select:false
    },
    bio: String,
    profileImage :{
        type:String,
        default: "https://ik.imagekit.io/uvkmtmuur/profileImg.avif"
    },
    status:{
        type:String,
        default:"pending",
        enum:["pending","active","inactive"]
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel