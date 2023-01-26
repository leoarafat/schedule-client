import React from 'react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCopy, AiOutlineShareAlt } from 'react-icons/ai'
import { FiCopy } from 'react-icons/fi'
const MySchedule = () => {
    return (
        <div>
            <div className="flex justify-center items-center mb-20">
                <div className="bg-white rounded-lg shadow-xl">
                    <div className="w-96 border-t-8 border-primary rounded-lg flex flex-col gap-6 p-4">

                        <div className="flex justify-center gap-4">
                            <div className="form-control w-52">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" title='ON | OFF' className="toggle toggle-primary" />
                                </label>
                            </div>
                            <button
                                className="text-gray-500 hover:text-black" title='Edit'>
                                <AiOutlineEdit size={'2rem'} />
                            </button>
                            <button
                                className="text-gray-500 hover:text-black" title='Delete'>
                                <AiOutlineDelete size={'2rem'} />
                            </button>
                            <button
                                className="text-gray-500 hover:text-black" title='Share'>
                                <AiOutlineShareAlt size={'2rem'} />
                            </button>
                            <button
                                className="text-gray-500 hover:text-black" title='Copy'>
                                <AiOutlineCopy size={'2rem'} />
                            </button>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-2xl'>Schedule for interview</h1>
                            <div>
                                <p className='text-gray-600'>Meeting start on: 10:15 AM</p>
                                <p className='text-gray-600'>Meeting end on: 10:45 AM</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <a className='text-primary underline' href="#">/Google Meet Link</a>
                            <div className='flex gap-2 items-center p-2 border rounded-lg border-primary hover:bg-primary hover:text-white cursor-pointer text-sm'>
                                <FiCopy size={'1rem'} />
                                <span>Copy Link</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MySchedule