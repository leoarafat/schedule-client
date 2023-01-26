import React from 'react';
import { Outlet } from 'react-router-dom';
import MeetNav from '../../Dashboard/Meeting/MeetNav/MeetNav';

const MeetingLayout = () => {
    return (
        <div>
            <MeetNav/>
            <Outlet/>
        </div>
    );
};

export default MeetingLayout;