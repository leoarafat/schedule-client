import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className="navbar bg-base-100 flex items-center mt-5 max-w-[1300px] mx-auto">
            <div className="navbar-start">
                <img src="https://i.ibb.co/MSsVHm1/logo.png" className='w-6/12' alt="" />
            </div>

            {/* Large Screen nav items */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ul-style text-primary">
                    <li><a className="no-hover t">Item 1</a></li>
                    <li><a className="no-hover t">Item 3</a></li>
                    <li><a className="no-hover t">Item 1</a></li>
                    <li><a className="no-hover t">Item 3</a></li>
                    <div className="animation start-home"></div>
                </ul>
            </div>
            {/* Large Screen nav items */}

            {/* Small Screen nav items */}
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content right-1 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                        <li><Link to={"/"} className="btn border-0 lg:flex rounded-full px-10">Sign In</Link></li>
                    </ul>
                </div>
                {/* Small Screen nav items */}

                <Link to={""} className="btn hidden border-0 lg:flex bg-primary rounded-full text-white px-10">Sign In</Link>
            </div>
        </nav>
    );
};

export default Nav;