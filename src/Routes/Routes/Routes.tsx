import { createBrowserRouter } from "react-router-dom";
import Check from "../../Dashboard/Check/Check";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";

import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import BLogPost from "../../Pages/Blog/BLogPost";
import Home from "../../Pages/Home/Home";
import Pricing from "../../Pages/Home/Membership/Pricing";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/blogPost',
                element: <BLogPost></BLogPost>
            },
            {

                path: '/about',
                element: <About></About>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout/>, children: [
            {
                // path: '/dashboard', element: <Check/>
            }
        ]
    }
]);
