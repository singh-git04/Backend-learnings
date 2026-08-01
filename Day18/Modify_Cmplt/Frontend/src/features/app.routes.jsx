import {createBrowserRouter } from "react-router"
import Login from "./auth/pages/Login"
import Register from "./auth/pages/Register"
import Protected from "./auth/components/Protected"
import Home from "./home/pages/Home"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Protected><Home/></Protected> 
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