const express = require("express")
const postController = require("../controllers/postController")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")


const postRoute = express.Router()




/**
 * POST /api/posts [protected]
 * - req.body = { caption,image-file }
 */
postRoute.post("/",upload.single("image_Url"),identifyUser,postController.Create_PostController)

/* 
    GET /api/posts [protected]
*/

postRoute.get("/",identifyUser,postController.getPostController)

/* 
    get post detail /details/:id
*/

postRoute.get("/details/:postId",identifyUser,postController.getPostDetailController)

module.exports = postRoute