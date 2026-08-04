import { Router } from 'express'
import authController from '../controller/authController.js'
import registerValidation from '../validation/auth.validator.js'

const authRoutes = Router()

authRoutes.post('/register', registerValidation, authController.register)

export default authRoutes
