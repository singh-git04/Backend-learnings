import { configureStore } from "@reduxjs/toolkit"
import { useAuth } from "../features/auth/hook/useAuth"
import authReducer  from "../features/auth/auth.slice"

export const store = configureStore({
    reducer:{
        auth: authReducer
    }
})