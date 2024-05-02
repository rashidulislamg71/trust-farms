import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import SearchAndCart from '../SearchAndCart/SearchAndCart';

const MainLayout = () => {
    return (
        <div>
            <SearchAndCart />
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;