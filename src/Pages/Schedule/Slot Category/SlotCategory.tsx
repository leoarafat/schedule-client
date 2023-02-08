import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SlotCategory = () => {
    return (
        <div className='flex justify-center py-10 px-2'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Link to='/schedule/fifteen'><button
                    className="rounded border border-primary px-20 py-3 font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary flex items-center gap-4 text-xl justify-center"
                >
                    <MdOutlineWatchLater size={'2rem'} />
                    15 Minute Schedule
                </button></Link>

                <Link to='/schedule/thirty'><button
                    className="rounded border border-primary px-20 py-3 font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary flex items-center gap-4 text-xl justify-center"
                >
                    <MdOutlineWatchLater size={'2rem'} />
                    30 Minute Schedule
                </button></Link>

                <Link to='/schedule/sixteen'><button
                    className="rounded border border-primary px-20 py-3 font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary flex items-center gap-4 text-xl justify-center"
                >
                    <MdOutlineWatchLater size={'2rem'} />
                    60 Minute Schedule
                </button></Link>
            </div>
        </div>
    )
}

export default SlotCategory