const express = require("express")
const authController = require("../controllers/authcontroller")
const identifyUser = require("../middlewares/auth.middleware")

const authRoute = express.Router()


/* 
    POST/api/auth/register
*/
authRoute.post("/register",authController.registerController)


/* 
    /POST/api/auth/login    
*/

authRoute.post("/login",authController.loginController)


/* 
    @route /GET /api/auth/get-me
    @description Get user details 
*/
authRoute.get("/get-me",identifyUser,authController.getmeDetailsController)
module.exports = authRoute