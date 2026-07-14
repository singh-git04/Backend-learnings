const postModel = require("../models/postModel")
const ImageKit  = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")




const imagekit = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATEKEY
})
async function Create_PostController(req,res) {
 
    // console.log(req.body,req.file)
    const token = req.cookies.token
     
    if(!token){
        return res.status(401).json({
            message: "Unauthorized request don't have token"
        })
    }

    let decoded = null
   try {
       decoded = jwt.verify(token,process.env.JWT_SECRET)
   } catch (error) {
        return res.status(401).json({
            message: "unauthorized access"
        })
   }
    // console.log(decoded);

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:"image_Url",
        folder: "Learning_backend"
    })

   const post = await  postModel.create({ user:decoded.id,
                       imageUrl:file.url,
                       caption: req.body.caption })
    
    
    res.status(201).json({
        message: "post created successfully",
        post
    })
}


module.exports = {
    Create_PostController
}