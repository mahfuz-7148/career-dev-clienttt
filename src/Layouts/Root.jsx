import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import {Outlet} from 'react-router';
import Footer from '../Components/Footer.jsx';


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;