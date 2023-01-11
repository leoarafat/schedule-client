import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
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
            }

        ]
    }
]);