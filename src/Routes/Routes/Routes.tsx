import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Membership from "../../Pages/Home/Membership/Membership";

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
            // {
            //     path:'/membership',
            //     element: <Membership></Membership>
            // }

        ]
    }
]);