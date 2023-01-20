import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const url = 'http://localhost:5000/notes';

const Notes = () => {

    return (
        <div>
            <div className=''>
                <h1 className='text-4xl text-center mb-5 text-primary font-semibold'>Your Notes</h1>

                <div className='border border-gray-500 bg-blue-100 py-5 px-10 rounded-lg m-3'>
                    <p className='text-2xl flex items-center justify-between'>Title goes here <span className='flex items-center text-lg'>11/12/2023 <RiDeleteBin6Line className='text-3xl ml-5 hover:text-red-700' /></span></p>
                </div>

                <div className='border border-gray-500 bg-blue-100 py-5 px-10 rounded-lg m-3'>
                    <p className='text-2xl flex items-center justify-between'>Title goes here <span className='flex items-center text-lg'>11/12/2023 <RiDeleteBin6Line className='text-3xl ml-5 hover:text-red-700' /></span></p>
                </div>

                <div className='border border-gray-500 bg-blue-100 py-5 px-10 rounded-lg m-3'>
                    <p className='text-2xl flex items-center justify-between'>Title goes here <span className='flex items-center text-lg'>11/12/2023 <RiDeleteBin6Line className='text-3xl ml-5 hover:text-red-700' /></span></p>
                </div>

                <div className='border border-gray-500 bg-blue-100 py-5 px-10 rounded-lg m-3'>
                    <p className='text-2xl flex items-center justify-between'>Title goes here <span className='flex items-center text-lg'>11/12/2023 <RiDeleteBin6Line className='text-3xl ml-5 hover:text-red-700' /></span></p>
                </div>



            </div>
        </div>
    );
};

export default Notes;