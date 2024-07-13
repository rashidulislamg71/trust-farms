

import Navigation from '../Navigation/Navigation';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Our_Services from '../Our_Services/Our_Services';

const MainLayout = () => {
    return (
        <div>
            <Navigation />
            <ScrollRestoration />
            <Outlet />
            <Our_Services />
            <Footer />
        </div>
    );
};

export default MainLayout;