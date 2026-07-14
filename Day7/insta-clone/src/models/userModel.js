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
        required: true
    },
    bio: String,
    profileImage :{

        type:String,
        default: "https://imgs.search.brave.com/pnuCjus6wNu_B0lj4soEUb4KKx9_pn-HorGYVHwBMwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTIyMjUvMTIy/MjU4ODEucG5n"}
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel