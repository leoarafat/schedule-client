import React from 'react';
import SignUp from '../SignIn/SignIn';
import Header from './Header/Header';
import Membership from './Membership/Membership';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Membership></Membership>
            <SignUp/>
        </div>
    );
};

export default Home;