import React from 'react';
import Header from './Header/Header';
import Membership from './Membership/Membership';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Membership></Membership>
        </div>
    );
};

export default Home;