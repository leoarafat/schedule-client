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
import Profile from "../../Pages/Profile/Profile";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
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

                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <SignIn />
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
        ]
    },
    // {
    //     path: '/dashboard', element: <DashboardLayout/>, children: [
    //         {
    //             // path: '/dashboard', element: <Check/>
    //             path: '/signup',
    //             element: <SignUp />
    //         }
    //     ]
    // }
]);
