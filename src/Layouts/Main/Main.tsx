import React from 'react';
import Nav from '../../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;