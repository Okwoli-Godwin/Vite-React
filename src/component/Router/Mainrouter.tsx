import { createBrowserRouter } from "react-router-dom"
import Layout from "../Static/Layout"
import { Children } from "react"
import Register from "../Pages/Auth/Register"
import Signin from "../Pages/Auth/Signin"
import ResetPassword from "../Pages/Auth/Resetpassword"

export const mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
            path: "register",
            index: true,
            element: <Register />
            },

            {
            path: "Signin",
            index: true,
            element: <Signin />
            },

            {
            path: "request",
            index: true,
            element: <ResetPassword />
            },
        ]
    }
])