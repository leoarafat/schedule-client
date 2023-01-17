import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import BLogPost from "../../Pages/Blog/BLogPost";
import Home from "../../Pages/Home/Home";
import Pricing from "../../Pages/Home/Membership/Pricing";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement:
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/pricing',
                element: <Pricing></Pricing>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/blogPost',
                element: <BLogPost></BLogPost>
            },
            {
                path:'/about',
                element: <About></About>
            },
            

        ]
    }
]);