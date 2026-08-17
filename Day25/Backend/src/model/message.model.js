import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    chat:{
        type:String,
        ref:"Chat",
        required:true
    },
    context:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['ai','user'],
        required:true
    }
})