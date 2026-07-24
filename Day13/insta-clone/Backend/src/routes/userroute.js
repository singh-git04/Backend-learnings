const express = require("express")
const userController = require("../controllers/userController")
const identifyUser = require("../middlewares/auth.middleware")

const userRoute = express.Router()

/*   
    follow user : username
*/
userRoute.post("/follow/:username",identifyUser,userController.followUserController)

/* 
    unfollow user: username
*/
userRoute.post("/unfollow/:username",identifyUser,userController.UnfollowUserController)
module.exports = userRoute