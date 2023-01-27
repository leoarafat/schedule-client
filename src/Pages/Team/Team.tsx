import React from 'react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCopy, AiOutlineShareAlt } from 'react-icons/ai'

const Team = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-4xl py-10 font-semibold'>Syntax Terminators</h1>
            <div className='flex justify-center'>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-xl">
                        <div className="w-96 border-t-8 border-primary rounded-lg flex flex-col gap-6 p-4">
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-2xl'>Member 1</h1>
                                <div>
                                    <p className='text-xl'><span className='text-gray-500'>Name</span>: Asif Ullah</p>
                                    <p className='text-xl'><span className='text-gray-500'>Email</span>: asifullah@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex justify-end gap-4 border-t-2 border-gray-400 py-2">
                                <div></div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team