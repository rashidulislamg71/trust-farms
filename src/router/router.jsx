import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../Pages/Home/Home';
import Products from './../Pages/Products/Products';
import AboutUs from "../Pages/About  Us/AboutUs";
import ContactUs from './../Pages/Contact Us/ContactUs';
import SignIn from "../Pages/Sign In/SignIn";
import SignUp from "../Pages/Sign Up/SignUp";

const routers = createBrowserRouter([
    {
        element: <App />,

        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products",
                element: <Products />
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

    }
]);

export default routers;