const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    user:{
        type: String,
        required: [true, "user is required to like post"]

    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [true,"post is required to like post"]
    },
},{
    timestamps:true
})

const likeModel = mongoose.model("postLike",likeSchema)

likeSchema.index({user: 1, post: 1},{unique: true})
module.exports = likeModel