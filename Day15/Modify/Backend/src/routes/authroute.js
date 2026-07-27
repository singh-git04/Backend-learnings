const {Router} = require("express")

const routes = Router()
const authController = require("../controllers/authController")
const authMiddleWare = require("../middlewares/auth.middleware")


/* 
    Register /api/auth/register
*/
routes.post("/register",authController.registerUser)

/* 
    Register /api/auth/login
*/
routes.post("/login",authController.login)

/* 
    GetMe /api/auth/getMe
*/

routes.get("/getMe",authMiddleWare.authUser,authController.getMe)

module.exports = routes