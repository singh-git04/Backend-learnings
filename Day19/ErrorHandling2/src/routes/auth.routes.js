import { Router } from "express";
import { registerUser } from "../controller/auth.controller.js";


const authRoutes = Router()

authRoutes.post("/register",registerUser)


export default authRoutes
