

import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import SearchAndCart from '../SearchAndCart/SearchAndCart';
import Our_Services from '../Our_Services/Our_Services';

const MainLayout = () => {
    return (
        <div>
            <SearchAndCart />
            <Navigation />
            <Outlet />
            <Our_Services />
            <Footer />
        </div>
    );
};

export default MainLayout;