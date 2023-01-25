import React, { useState } from 'react';
import ScheduleInfo from '../ScheduleInfo/ScheduleInfo';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import date from 'date-and-time';
import SlotCategory from '../Slot Category/SlotCategory';

const Schedule = () => {
    const initialDays: Date[] = [];
    const [days, setDays] = React.useState<Date[] | undefined>(initialDays);
    const [timeDate, setTimeDate] = useState<any>(null);

    const handleForm = (e: any) => {
        e.preventDefault();
        const now = new Date();
        date.format(now, 'YYYY/MM/DD HH:mm:ss')
        const time = e.target.value;

        const getTimeDate = {
            time: time,
            days
        }

        setTimeDate(getTimeDate);
    }

    return (
        <div>
            <h1 className='text-center text-4xl pt-12 font-semibold'>Schedule <span className='text-primary'>Date & Time</span></h1>

            <SlotCategory />

            <TimeAndDate handleForm={handleForm} days={days} setDays={setDays}></TimeAndDate>

            <ScheduleInfo timeDate={timeDate}></ScheduleInfo>
        </div>
    );
};

export default Schedule;