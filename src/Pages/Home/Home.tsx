import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import Header from './Header/Header';
import Membership from './Membership/Membership';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Membership></Membership>
            <SignUp/>
            <SignIn/>
        </div>
    );
};

export default Home;