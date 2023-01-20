import { DayPicker } from 'react-day-picker';
import './TimeAndDate.css';
import 'react-day-picker/dist/style.css';


const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
   
    color:#0098da;
    
  }
.rdp-caption{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
  .rdp-caption, .rdp-head_row{
    color: #fff;
    background-color: #0098da;
    padding: 20px;
  }
  .rdp-tbody, .rdp-month{
    
  }
   .rdp-month{
    border: 1px solid #0098da;
    border-radius: 20px;
    
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

const TimeAndDate = ({ handleForm, days, setDays }: any) => {


  return (
    <div className="">
      <h1 className='text-center text-4xl mt-5 mb-10 font-semibold'>Schedule <span className='text-primary'>Date & Time</span></h1>
      <form onSubmit={handleForm}>
        <div className='font-semibold flex flex-row justify-center   items-center'>
          <style>{css}</style>
          <div className='mx-10'>
            <DayPicker
              mode="multiple"
              min={1}
              selected={days}
              onSelect={setDays}
              modifiersClassNames={{
                selected: 'my-selected',

              }}
            />

          </div>


          <div className=''>
            <h2 className='text-3xl font-semibold mb-5'>Set your time</h2>
            <div className='flex items-center'>


              <input type="time" id="start" className='border-black border rounded-lg p-1 pl-3 pb-0 text-2xl mr-4' name="start"
                min="00:00 AM" max="24:00 PM" required />
              <span className="text-xl font-normal">To</span>
              <input type="time" id="end" className='border-black border rounded-lg p-1 pl-3 pb-0 text-2xl ml-4' name="end"
                min="00:00 AM" max="24:00 PM" required />
            </div>

            <div>

            </div>
            <div className='w-5/12 mt-10'>
              <button className='btn btn-primary'>Set Schedule</button>
            </div>
          </div>


          {/* <button className='btn btn-primary' onClick={handleNow}>ss</button> */}
        </div>
      </form>
    </div>
  );
};

export default TimeAndDate;