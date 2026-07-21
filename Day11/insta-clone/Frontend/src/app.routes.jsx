import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"

export const routes = createBrowserRouter([
     {
        path: '/',
        element: <h1>Welcome to the app of 4feature Architecture</h1>
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