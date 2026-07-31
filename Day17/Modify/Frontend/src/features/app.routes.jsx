import {createBrowserRouter } from "react-router"
import Login from "./auth/pages/Login"
import Register from "./auth/pages/Register"
import Protected from "./auth/components/Protected"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Protected><h1>Home</h1></Protected> 
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
])