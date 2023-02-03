import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai'

type UserSubmitForm = {
    sunStart: string;
    sunEnd: string;
    monStart: string;
    monEnd: string;
    tueStart: string;
    tueEnd: string;
    wedStart: string;
    wedEnd: string;
    thuStart: string;
    thuEnd: string;
    friStart: string;
    friEnd: string;
    satStart: string;
    satEnd: string;
    unavailable: string;
};

const Availability = () => {

    const [sun, setSun] = useState(true);
    const [mon, setMon] = useState(true);
    const [tue, setTue] = useState(true);
    const [wed, setWed] = useState(true);
    const [thu, setThu] = useState(true);
    const [fri, setFri] = useState(true);
    const [sat, setSat] = useState(true);

    const {
        register,
        handleSubmit
    } = useForm<UserSubmitForm>();

    const handleInfo = (data: UserSubmitForm) => {
        const sunStart = data.sunStart;
        const sunEnd = data.sunEnd;
        const un = data.unavailable;

        // console.log(sunStart)
        // console.log(sunEnd)
        console.log(data);

        console.log(un);
    };

    return (
        <div className='py-8'>
            <h1 className="text-center text-4xl pb-8 font-semibold">
                Set Your <span className="text-primary">Weekly</span> Hours
            </h1>

            <form onSubmit={handleSubmit(handleInfo)}>

                {/* sunday */}
                <div className='flex align-center gap-8 py-4'>
                    <div className='w-28 flex gap-4 items-center'>
                        <input
                            onClick={() => setSun(!sun)}
                            // onClick={handleSun}
                            type="checkbox"
                            defaultChecked={true}
                            className="checkbox checkbox-primary" />
                        <span className='text-3xl'>Sun</span>
                    </div>

                    {
                        sun ?
                            <form className='flex items-center gap-4 w-[26rem]'>
                                <div className='tooltip' data-tip="Start Time">
                                    <input
                                        {...register("sunStart")}
                                        defaultValue="00:00"
                                        type="time"
                                        className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>

                                <div className='border w-8 border-primary'></div>

                                <div className='tooltip' data-tip="End Time">
                                    <input
                                        {...register("sunEnd")}
                                        type="time" defaultValue="00:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>
                            </form>
                            :
                            <div className='w-[26rem] flex justify-center items-center py-2'>
                                <p className='text-2xl'>Unavailable</p>
                                <input {...register("unavailable")} type="hidden" value={"unavailable"} />
                            </div>
                    }

                    {
                        sun &&
                        <div className='flex gap-6 items-center justify-end w-40'>
                            <button
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Save"
                            >
                                <AiOutlineSave size={"2rem"} />
                            </button>

                            <button
                                onClick={() => setSun(!sun)}
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Delete"
                            >
                                <AiOutlineDelete size={"2rem"} />
                            </button>
                        </div>
                    }
                </div>

                {/* monday */}
                <div className='flex align-center gap-8 py-4'>
                    <div className='w-28 flex gap-4 items-center'>
                        <input
                            onClick={() => setMon(!mon)}
                            type="checkbox"
                            defaultChecked={true}
                            className="checkbox checkbox-primary" />
                        <span className='text-3xl'>Mon</span>
                    </div>

                    {
                        mon ?
                            <div className='flex items-center gap-4 w-[26rem]'>
                                <div className='tooltip' data-tip="Start Time">
                                    <input type="time"
                                        {...register("monStart")} defaultValue="10:15" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>

                                <div className='border w-8 border-primary'></div>

                                <div className='tooltip' data-tip="End Time">
                                    <input type="time"
                                        {...register("monEnd")} defaultValue="20:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>
                            </div>
                            :
                            <div className='w-[26rem] flex justify-center items-center py-2'>
                                <p className='text-2xl'>Unavailable</p>
                            </div>
                    }

                    {
                        mon &&
                        <div className='flex gap-6 items-center justify-end w-40'>
                            <button
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Save"
                            >
                                <AiOutlineSave size={"2rem"} />
                            </button>

                            <button
                                onClick={() => setMon(!mon)}
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Delete"
                            >
                                <AiOutlineDelete size={"2rem"} />
                            </button>
                        </div>
                    }
                </div>

                {/* tuesday */}
                <div className='flex align-center gap-8 py-4'>
                    <div className='w-28 flex gap-4 items-center'>
                        <input
                            onClick={() => setTue(!tue)}
                            type="checkbox"
                            defaultChecked={true}
                            className="checkbox checkbox-primary" />
                        <span className='text-3xl'>Tue</span>
                    </div>

                    {
                        tue ?
                            <div className='flex items-center gap-4 w-[26rem]'>
                                <div className='tooltip' data-tip="Start Time">
                                    <input type="time"
                                        {...register("tueStart")} defaultValue="10:15" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>

                                <div className='border w-8 border-primary'></div>

                                <div className='tooltip' data-tip="End Time">
                                    <input type="time"
                                        {...register("tueEnd")} defaultValue="20:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>
                            </div>
                            :
                            <div className='w-[26rem] flex justify-center items-center py-2'>
                                <p className='text-2xl'>Unavailable</p>
                            </div>
                    }

                    {
                        tue &&
                        <div className='flex gap-6 items-center justify-end w-40'>
                            <button
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Save"
                            >
                                <AiOutlineSave size={"2rem"} />
                            </button>

                            <button
                                onClick={() => setTue(!tue)}
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Delete"
                            >
                                <AiOutlineDelete size={"2rem"} />
                            </button>
                        </div>
                    }
                </div>

                {/* wednesday */}
                <div className='flex align-center gap-8 py-4'>
                    <div className='w-28 flex gap-4 items-center'>
                        <input
                            onClick={() => setWed(!wed)}
                            type="checkbox"
                            defaultChecked={true}
                            className="checkbox checkbox-primary" />
                        <span className='text-3xl'>Wed</span>
                    </div>

                    {
                        wed ?
                            <div className='flex items-center gap-4 w-[26rem]'>
                                <div className='tooltip' data-tip="Start Time">
                                    <input type="time"
                                        {...register("wedStart")} defaultValue="10:15" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>

                                <div className='border w-8 border-primary'></div>

                                <div className='tooltip' data-tip="End Time">
                                    <input type="time"
                                        {...register("wedEnd")} defaultValue="20:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>
                            </div>
                            :
                            <div className='w-[26rem] flex justify-center items-center py-2'>
                                <p className='text-2xl'>Unavailable</p>
                            </div>
                    }

                    {
                        wed &&
                        <div className='flex gap-6 items-center justify-end w-40'>
                            <button
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Save"
                            >
                                <AiOutlineSave size={"2rem"} />
                            </button>

                            <button
                                onClick={() => setTue(!tue)}
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Delete"
                            >
                                <AiOutlineDelete size={"2rem"} />
                            </button>
                        </div>
                    }
                </div>

                {/* thursday */}
                <div className='flex align-center gap-8 py-4'>
                    <div className='w-28 flex gap-4 items-center'>
                        <input
                            onClick={() => setThu(!thu)}
                            type="checkbox"
                            defaultChecked={true}
                            className="checkbox checkbox-primary" />
                        <span className='text-3xl'>Thu</span>
                    </div>

                    {
                        thu ?
                            <div className='flex items-center gap-4 w-[26rem]'>
                                <div className='tooltip' data-tip="Start Time">
                                    <input type="time"
                                        {...register("thuStart")} defaultValue="10:15" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>

                                <div className='border w-8 border-primary'></div>

                                <div className='tooltip' data-tip="End Time">
                                    <input type="time"
                                        {...register("thuEnd")} defaultValue="20:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>
                            </div>
                            :
                            <div className='w-[26rem] flex justify-center items-center py-2'>
                                <p className='text-2xl'>Unavailable</p>
                            </div>
                    }

                    {
                        thu &&
                        <div className='flex gap-6 items-center justify-end w-40'>
                            <button
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Save"
                            >
                                <AiOutlineSave size={"2rem"} />
                            </button>

                            <button
                                onClick={() => setThu(!thu)}
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Delete"
                            >
                                <AiOutlineDelete size={"2rem"} />
                            </button>
                        </div>
                    }
                </div>

                {/* friday */}
                <div className='flex align-center gap-8 py-4'>
                    <div className='w-28 flex gap-4 items-center'>
                        <input
                            onClick={() => setFri(!fri)}
                            type="checkbox"
                            defaultChecked={true}
                            className="checkbox checkbox-primary" />
                        <span className='text-3xl'>Fri</span>
                    </div>

                    {
                        fri ?
                            <div className='flex items-center gap-4 w-[26rem]'>
                                <div className='tooltip' data-tip="Start Time">
                                    <input type="time"
                                        {...register("friStart")}
                                        defaultValue="10:15" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>

                                <div className='border w-8 border-primary'></div>

                                <div className='tooltip' data-tip="End Time">
                                    <input type="time"
                                        {...register("friEnd")} defaultValue="20:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>
                            </div>
                            :
                            <div className='w-[26rem] flex justify-center items-center py-2'>
                                <p className='text-2xl'>Unavailable</p>
                            </div>
                    }

                    {
                        fri &&
                        <div className='flex gap-6 items-center justify-end w-40'>
                            <button
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Save"
                            >
                                <AiOutlineSave size={"2rem"} />
                            </button>

                            <button
                                onClick={() => setFri(!fri)}
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Delete"
                            >
                                <AiOutlineDelete size={"2rem"} />
                            </button>
                        </div>
                    }
                </div>

                {/* Saturday */}
                <div className='flex align-center gap-8 py-4'>
                    <div className='w-28 flex gap-4 items-center'>
                        <input
                            onClick={() => setSat(!sat)}
                            type="checkbox"
                            defaultChecked={true}
                            className="checkbox checkbox-primary" />
                        <span className='text-3xl'>Sat</span>
                    </div>

                    {
                        sat ?
                            <div className='flex items-center gap-4 w-[26rem]'>
                                <div className='tooltip' data-tip="Start Time">
                                    <input type="time"
                                        {...register("satStart")} defaultValue="10:15" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>

                                <div className='border w-8 border-primary'></div>

                                <div className='tooltip' data-tip="End Time">
                                    <input type="time"
                                        {...register("satEnd")} defaultValue="20:00" className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                </div>
                            </div>
                            :
                            <div className='w-[26rem] flex justify-center items-center py-2'>
                                <p className='text-2xl'>Unavailable</p>
                            </div>
                    }

                    {
                        sat &&
                        <div className='flex gap-6 items-center justify-end w-40'>
                            <button
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Save"
                            >
                                <AiOutlineSave size={"2rem"} />
                            </button>

                            <button
                                onClick={() => setSat(!sat)}
                                className="text-gray-500 hover:text-black tooltip"
                                data-tip="Delete"
                            >
                                <AiOutlineDelete size={"2rem"} />
                            </button>
                        </div>
                    }
                </div>
                <div className="flex justify-center py-4">
                    <button type='submit' className="btn text-white">Submit Save</button>
                </div>
            </form>
        </div>
    )
}

export default Availability