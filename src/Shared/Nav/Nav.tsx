import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className="navbar bg-base-100 flex items-center mt-5 max-w-[1300px] mx-auto">
            <div className="navbar-start">
                <img src="https://i.ibb.co/MSsVHm1/logo.png" className='lg:w-6/12' alt="" />
            </div>

            {/* Large Screen nav items */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ul-style text-primary">
                    <li><Link to={"/"} className="noo-hover link-style">Home</Link></li>
                    <li><Link to={"/about"} className="noo-hover link-style">About</Link></li>
                    <li><Link to={"/"} className="noo-hover link-style">Schedule</Link></li>
                    <li><Link to={"/blogPost"} className="noo-hover link-style">Blog</Link></li>
                    <div className="animation start-home"></div>
                </ul>
            </div>
            {/* Large Screen nav items */}

            {/* Small Screen nav items */}
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content right-1 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"} className=" hover:bg-secondary pr-32">Home</Link></li>
                        <li><Link to={"/about"} className=" hover:bg-secondary pr-32">About</Link></li>
                        <li><Link to={"/"} className=" hover:bg-secondary pr-28">Schedule</Link></li>
                        <li><Link to={"/blogPost"} className=" hover:bg-secondary pr-36">Blog</Link></li>
                        <li><Link to={"/signin"} className="btn border-0 lg:flex rounded-full px-10 text-white">Sign In</Link></li>
                    </ul>
                </div>
                {/* Small Screen nav items */}

                <Link to={"/signin"} className="btn hidden border-0 lg:flex bg-primary rounded-full text-white px-10">Sign In</Link>
            </div>
        </nav>
    );
};

export default Nav;