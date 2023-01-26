import React from "react";
import { Link, Outlet } from "react-router-dom";

const MeetNav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/dashboard/meeting/allday"}>All Time</Link>
              </li>
              <li>
                <Link to={""}>Day</Link>
              </li>
              <li>
                <Link to={""}>Week</Link>
              </li>
              <li>
                <Link to={""}>Month</Link>
              </li>
              <li>
                <Link to={""}>Year</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Set Date Filters</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/dashboard/meeting/allday"}>All Time</Link>
            </li>
            <li>
              <Link to={""}>Day</Link>
            </li>
            <li>
              <Link to={""}>Week</Link>
            </li>
            <li>
              <Link to={""}>Month</Link>
            </li>
            <li>
              <Link to={""}>Year</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
      {/* <div>
        <Outlet />
      </div> */}
    </div>
  );
};

export default MeetNav;
