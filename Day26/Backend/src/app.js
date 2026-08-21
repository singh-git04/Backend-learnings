import express from "express"
import authRoutes from "../src/routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors(
    {
        origin : "http://localhost:5173",
        credentials: true,
        methods: ["Get", "Post", "Delete", "Patch"]
    }
))

/* Routes */
app.use('/api/auth',authRoutes)



export default app 