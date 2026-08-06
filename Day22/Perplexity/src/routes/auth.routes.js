import { Router } from 'express'
import { register, verifyEmail, login, getMe  } from '../controller/authController.js'
import registerValidation from '../validation/auth.validator.js'
import {authUser} from '../middleware/auth.middleware.js'


const authRoutes = Router()


/* 
    * @route Post /api/auth/register
    * @desc  Register new user
    * @access Public
    * @body {username, email, password}
*/
authRoutes.post('/register', registerValidation, register)


/* 
    * @route Post /api/auth/login
    * desc Login user 
    * @access Public
    * @body {email , password}
*/
authRoutes.post('/login', login)


/* 
    * @route Get /api/auth/get-me
    * @desc Get user
    * @access Priviate
*/
authRoutes.get('/get-me', authUser , getMe)

/* 
    * @route Get /api/auth/verify-email
    * desc Verify user email 
    * @access Public
    * @query {token}
*/
authRoutes.get('/verify-email', verifyEmail)

export default authRoutes
