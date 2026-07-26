const {Router} = require("express")

const routes = Router()
const authController = require("../controllers/authController")


/* 
    Register /api/auth/register
*/
routes.post("/register",authController.registerUser)

/* 
    Register /api/auth/login
*/
routes.post("/login",authController.login)

module.exports = routes