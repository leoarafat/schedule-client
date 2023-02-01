import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

const Availability = () => {

    const [checked, setChecked] = useState(Number)
    const [index, setIndex] = useState(Number)

    const handleChecked = (e: any) => {
        setIndex(e.target.value)
        console.log(e.target.checked)
    }

    console.log(index);

    console.log(checked);

    const week = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sta"
    ]

    return (
        <div className='py-8'>
            <h1 className="text-center text-4xl pb-8 font-semibold">
                Set Your <span className="text-primary">Weekly</span> Hours
            </h1>
            {
                week.map((day, i) => {
                    return (
                        <div key={i} className='flex gap-8 py-4'>
                            <div className='w-28 flex gap-4 items-center'>
                                <input
                                    // onClick={() => setChecked(!checked)}
                                    onClick={(e) => {
                                        handleChecked(e);
                                        setChecked(i)
                                    }
                                    }
                                    defaultChecked={true}
                                    type="checkbox" value={day}
                                    className="checkbox checkbox-primary" />
                                <span className='text-3xl'>{day}</span>
                            </div>

                            {
                                checked === index ?
                                    <div className='flex items-center gap-4 w-[26rem]'>
                                        <div className='tooltip' data-tip="Start Time">
                                            <input type="time" defaultValue="10:15" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                        </div>

                                        <div className='border w-8 border-primary'></div>

                                        <div className='tooltip' data-tip="End Time">
                                            <input type="time" defaultValue="20:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                        </div>
                                    </div>
                                    :
                                    <div className='w-[26rem]'>
                                        <h3 className='text-2xl py-2 text-center text-gray-500'>Unavailable</h3>
                                    </div>
                            }

                            <div className='flex gap-6 items-center justify-end w-40'>
                                <button
                                    className="text-gray-500 hover:text-black tooltip"
                                    data-tip="Edit"
                                >
                                    <AiOutlineEdit size={"2rem"} />
                                </button>

                                <button
                                    className="text-gray-500 hover:text-black tooltip"
                                    data-tip="Delete"
                                >
                                    <AiOutlineDelete size={"2rem"} />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Availability