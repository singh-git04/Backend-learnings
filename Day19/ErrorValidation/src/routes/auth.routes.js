import { Router } from "express";
import { registerUser } from "../controller/auth.controller.js";
import { registerValidation } from "../validation/auth.validator.js";



const authRoutes = Router()

authRoutes.post("/register",registerValidation,registerUser)


export default authRoutes
