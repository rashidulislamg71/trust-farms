import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../Pages/Home/Home';
import AboutUs from "../Pages/About  Us/AboutUs";
import ContactUs from './../Pages/Contact Us/ContactUs';
import SignIn from "../Pages/Sign In/SignIn";
import SignUp from "../Pages/Sign Up/SignUp";
import Fruits from "../Pages/Fruits/Fruits";
import Vegetables from "../Pages/Vegetables/Vegetables";
import All_Products from "../Pages/All_Products/All_Products";
import NotFound from "../Pages/Not_Found/NotFound";

const routers = createBrowserRouter([
    {
        element: <App />,

        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/all_products",
                element: <All_Products />
            },
            {
                path: "/vegetables",
                element: <Vegetables />
            },
            {
                path: "/fruits",
                element: <Fruits />
            },
           
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <SignUp />
            },
        ]

       

    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routers;