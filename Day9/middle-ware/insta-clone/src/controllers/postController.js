const postModel = require("../models/postModel")
const ImageKit  = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")



const imagekit = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATEKEY
})
// create post controller
async function Create_PostController(req,res) {
 
    // console.log(req.body,req.file)

    // console.log(decoded);

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:"image_Url",
        folder: "Learning_backend"
    })

   const post = await  postModel.create({ user:req.user.id,
                       imageUrl:file.url,
                       caption: req.body.caption })
    
    
    res.status(201).json({
        message: "post created successfully",
        post
    })
}
// get post controller
 
async function getPostController(req,res){
   

    const userId = req.user.id
    
     const post = await postModel.find({user:userId})

     res.status(200).json({
        message: "Post fetched Successfully",
        post
     })

}

async function getPostDetailController(req,res){
    

    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)
     
    
    
    if(!post){
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const isValidUser = post.user.toString()  == userId
    if(!isValidUser){
        return res.status(403).json({
            message: "Forbidden"
        })
    }

    res.status(200).json({
        message: "post fetched successfully",
        post
    })


}

module.exports = {
    Create_PostController,
    getPostController,
    getPostDetailController
}