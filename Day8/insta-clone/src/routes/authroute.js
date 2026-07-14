const express = require("express")
const authController = require("../controllers/authcontroller")

const authRoute = express.Router()


/* 
    POST/api/auth/register
*/
authRoute.post("/register",authController.registerController)


/* 
    /POST/api/auth/login    
*/

authRoute.post("/login",authController.loginController)


module.exports = authRoute