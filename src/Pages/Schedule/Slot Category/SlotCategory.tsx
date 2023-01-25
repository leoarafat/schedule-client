import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'

const SlotCategory = () => {
    return (
        <div className='lg:flex justify-center py-10 px-2'>
            <div className='grid md:grid-cols-3 gap-4'>
                <button
                    className="rounded border border-primary px-20 py-3 font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary flex items-center gap-4 text-xl justify-center"
                >
                    <MdOutlineWatchLater size={'2rem'} />
                    15 Minute Schedule
                </button>
                <button
                    className="rounded border border-primary px-20 py-3 font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary flex items-center gap-4 text-xl justify-center"
                >
                    <MdOutlineWatchLater size={'2rem'} />
                    30 Minute Schedule
                </button>
                <button
                    className="rounded border border-primary px-20 py-3 font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary flex items-center gap-4 text-xl justify-center"
                >
                    <MdOutlineWatchLater size={'2rem'} />
                    60 Minute Schedule
                </button>
            </div>
        </div>
    )
}

export default SlotCategory