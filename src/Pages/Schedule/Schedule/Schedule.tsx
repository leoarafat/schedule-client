import React, { useContext, useState } from 'react';
import ScheduleInfo from '../ScheduleInfo/ScheduleInfo';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import date from 'date-and-time';
import SlotCategory from '../Slot Category/SlotCategory';
import Nav from '../../../Shared/Nav/Nav';
import Footer from '../../Footer/Footer';
import { AuthContext } from '../../../components/Contexts/AuthProvider/AuthProvider';

const Schedule = () => {
    //date value
    const [value, onChange] = useState(new Date());
    //am & pm slots
    const { slot, slotPm }: any = useContext(AuthContext);
    //scheduleInfo form
    const [scheduleInfo, setScheduleInfo] = useState<any>('');

    // console.log(value, slot, slotPm, scheduleInfo);

    return (
        <div>
            {/* <Nav></Nav> */}
            <h1 className='text-center text-4xl pt-12 font-semibold'>Schedule <span className='text-primary'>Date & Time</span></h1>

            <SlotCategory />

            <TimeAndDate value={value} onChange={onChange}></TimeAndDate>

            <ScheduleInfo value={value} slot={slot} slotPm={slotPm} setScheduleInfo={setScheduleInfo}></ScheduleInfo>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Schedule;