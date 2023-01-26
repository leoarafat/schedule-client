import { createBrowserRouter } from "react-router-dom";
import AllUser from "../../Dashboard/AllUser/AllUser";
import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import MyMeeting from "../../Dashboard/Meeting/MyMeeting/MyMeeting";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import BLogPost from "../../Pages/Blog/BLogPost";
import Home from "../../Pages/Home/Home";
import Plans from "../../Pages/Home/Membership/Plan";
import Profile from "../../Pages/Profile/Profile";
import Schedule from "../../Pages/Schedule/Schedule/Schedule";
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
                path: '/plan',
                element: <Plans></Plans>
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
                path: '/login',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/schedule',
                element: <Schedule />
            }
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout />, children: [
            {
                path: '/dashboard/allUser', element: <AllUser />
            },
            {
                path: '/dashboard/myMeeting', element: <MyMeeting/>
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
        ]
    }

]);
