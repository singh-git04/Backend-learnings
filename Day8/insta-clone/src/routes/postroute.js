const express = require("express")
const postController = require("../controllers/postController")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})

const postRoute = express.Router()




/**
 * POST /api/posts [protected]
 * - req.body = { caption,image-file }
 */
postRoute.post("/",upload.single("image_Url"),postController.Create_PostController)

module.exports = postRoute