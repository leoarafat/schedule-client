import { DayPicker } from 'react-day-picker';
import './TimeAndDate.css';
import 'react-day-picker/dist/style.css';

const TimeAndDate = ({ handleForm, days, setDays }: any) => {

  return (
    <>
      <h1 className='text-center text-4xl mt-5 mb-10 font-semibold'>Schedule <span className='text-primary'>Date & Time</span></h1>
      <form onSubmit={handleForm}>
        <div className='font-semibold flex flex-row justify-center items-center'>
          <div>

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

          <div className='flex flex-col gap-4 h-[20rem] overflow-y-auto p-2'>

            <button
              className="inline-block rounded border border-primary px-24 py-3 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
              10:15
            </button>
            <button
              className="inline-block rounded border border-primary px-24 py-3 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
              10:15
            </button>
            <button
              className="inline-block rounded border border-primary px-24 py-3 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
              10:15
            </button>
            <button
              className="inline-block rounded border border-primary px-24 py-3 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
              10:15
            </button>
            <button
              className="inline-block rounded border border-primary px-24 py-3 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
              10:15
            </button>
            <button
              className="inline-block rounded border border-primary px-24 py-3 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
              10:15
            </button>
            <button
              className="inline-block rounded border border-primary px-24 py-3 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
              10:15
            </button>

          </div>

        </div>
      </form>
    </>
  );
};

export default TimeAndDate;