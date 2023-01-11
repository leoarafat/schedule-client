import React from 'react';
import Header from './Header/Header';
import Membership from './Membership/Membership';
import Sponsorship from './Sponsorship/Sponsorship';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Membership></Membership>
            <Sponsorship></Sponsorship>
        </div>
    );
};

export default Home;