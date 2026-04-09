import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

            <ToastContainer />
        </>
    );
};

export default RootLayout;