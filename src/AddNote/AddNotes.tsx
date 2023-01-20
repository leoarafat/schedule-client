import React from 'react';


const AddNotes = () => {
    return (
        <div className='bg-blue-100 p-10 my-16'>
            <div className='border-2 bg-blue-50 border-dashed border-gray-500 py-10 lg:px-16 px-5 text-2xl text-primary font-bold'>
                <h2 className='mb-5 font-semibold lg:text-3xl text-2xl'>Take your note</h2>
                <form action="">
                    <input type="text" placeholder='Add Title' className='border border-gray-500 input input-bordered w-full mb-3' />
                    <textarea className="textarea textarea-bordered border-gray-500 w-full h-32" placeholder="What's on your mind?"></textarea>
                    <button className="btn btn-primary text-white px-7 mt-3">Save Note</button>
                </form>
                {/* DB_USER=ScheduPlannr
                DB_PASSWORD=ZNM75viTRDfRaFCe */}
            </div>
        </div>
    );
};

export default AddNotes;