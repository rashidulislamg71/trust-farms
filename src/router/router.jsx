


import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../Pages/Home/Home';
import AboutUs from "../Pages/About  Us/AboutUs";
import ContactUs from './../Pages/Contact Us/ContactUs';
import Fruits from "../Pages/Fruits/Fruits";
import Vegetables from "../Pages/Vegetables/Vegetables";
import All_Products from "../Pages/All_Products/All_Products";
import NotFound from "../Pages/Not_Found/NotFound";
import CartList from "../Components/CartList/CartList";
import LoginPage from "../Pages/AuthPage/LogInPage/LoginPage";
import SignUp from "../Pages/AuthPage/SignUpPage/SignUp";

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
                path: "/login",
                element: <LoginPage/>,
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/cartList",
                element: <CartList />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routers;