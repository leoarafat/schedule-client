import 'react-day-picker/dist/style.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Outlet } from 'react-router-dom';
import ThirtyMins from '../ThirtyMins/ThirtyMins';

const TimeAndDate = ({ handleForm, setSlot, onChange, value }: any) => {

  // const [value, onChange] = useState(new Date());
  console.log(value)
  return (
    <>
      <form onSubmit={handleForm}>
        <div className='flex justify-center gap-4 w-11/12 mx-auto'>
          <div className='lg:flex justify-center gap-8'>
            <div className='px-2'>
              <Calendar className='md:w-[40rem] w-full h-[25rem] bg-sky-300 font-bold text-lg' onChange={onChange} value={value} />
              <h1 className='text-2xl text-center -mt-14'>You select this date </h1>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </form>
    </>
  );
};

export default TimeAndDate;