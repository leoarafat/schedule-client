import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center space-y-5'>
            <h1 className='text-9xl text-primary font-bold'>404</h1>
            <h3 className='text-5xl'>Page not Found</h3>
            <p>This page is not exist please try again later!</p>
            <div className='flex space-x-2'>
                <Link className="btn btn-primary text-white rounded-full font-bold" to="/">Back To Home</Link>
                <Link className="btn btn-outline text-orange-600 font-bold rounded-full border-none" to="/login">Back TO Sign In</Link>
            </div>
        </div>
    );
};

export default ErrorPage;