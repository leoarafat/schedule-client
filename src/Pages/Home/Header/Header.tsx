import React from 'react';

const Header = () => {
    return (
        <div className="hero mt-5 max-w-[1300px] mx-auto">
            <div className="p-2 flex hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-5/12 ml-auto'>
                    <img src="https://i.ibb.co/T82zkZL/Timeline-bro.png" alt='' className="rounded-lg w-full pt-5" />
                </div>
                <div className='lg:w-6/12 text-center lg:text-left mr-auto'>
                    <h1 className=" text-5xl font-bold">Scheduling is <span className='text-primary'>Easy Now</span></h1>
                    <p className="py-6 text-accent">Schedu Plannr is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time and so much more.</p>
                    {/* <button className="btn btn-primary text-white ">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Header;