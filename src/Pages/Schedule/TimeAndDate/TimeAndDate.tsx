import React, { useState } from 'react';
import date from 'date-and-time';
import { DayPicker } from 'react-day-picker';
import './TimeAndDate.css';
import 'react-day-picker/dist/style.css';


const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
   
    color:blue;
    
  }
  .my-selected:hover:not([disabled]) { 
    background-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;

const TimeAndDate = () => {
    const initialDays: Date[] = [];
    const [days, setDays] = React.useState<Date[] | undefined>(initialDays);
    const [value, onChange] = useState<any>(['10:00', '11:00']);

    const footer =
        days && days.length > 0 ? (
            <p>You selected {days.length} day(s).</p>
        ) : (
            <p>Please pick one or more days.</p>
        );

    const handleNow = () => {
        const now = new Date();
        date.format(now, 'YYYY/MM/DD HH:mm:ss');

    }
    return (
        <div className='font-semibold flex flex-col justify-center items-center'>
            <style>{css}</style>
            <DayPicker
                mode="multiple"
                min={1}
                selected={days}
                onSelect={setDays}
                modifiersClassNames={{
                    selected: 'my-selected',

                }}
                footer={footer}
            />

            <div>
                <label htmlFor="start">Start Time</label>
                <input placeholder='00:00' type="time" id="start" name="start"
                    min="09:00" max="18:00" required />
            </div>

            <div>
                <label htmlFor="end">End Time</label>
                <input type="time" id="end" name="end"
                    min="09:00" max="18:00" required />
            </div>

            <button className='btn btn-primary' onClick={handleNow}>ss</button>
        </div>
    );
};

export default TimeAndDate;