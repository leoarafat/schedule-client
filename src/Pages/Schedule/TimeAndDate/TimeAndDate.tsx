import 'react-day-picker/dist/style.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Outlet } from 'react-router-dom';
import ThirtyMins from '../ThirtyMins/ThirtyMins';

const TimeAndDate = ({ handleForm, setSlot, onChange, value }: any) => {

  // const [value, onChange] = useState(new Date());


  return (
    <>
      <form onSubmit={handleForm}>
        <div className='md:flex justify-center gap-4 w-11/12 mx-auto'>

          <div className='px-2'>
            <Calendar className='md:w-[40rem] w-full h-[25rem] bg-sky-300 font-bold text-lg' onChange={onChange} value={value} />
            <h1 className='text-2xl text-center -mt-14'>Please select a date </h1>
          </div>
          <Outlet></Outlet>

        </div>
      </form>
    </>
  );
};

export default TimeAndDate;