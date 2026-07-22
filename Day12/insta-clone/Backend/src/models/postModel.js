const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users" ,
        required: [true,"User is required for creating post"]
    }, 
     imageUrl:{
        type:String,
        required: [true,"Image is required for creating post"]
    }, 
    caption:{
        type: String,
        default: " "
    }, 
     
})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel