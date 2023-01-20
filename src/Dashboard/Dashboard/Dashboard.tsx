import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFillBarChartLineFill,
  BsFillAlarmFill,
  BsFillEmojiSmileFill,
  BsFillPeopleFill,
  BsTools,
  BsBadgeTm,
  BsEmojiSunglasses,
  BsBank2,
} from "react-icons/bs";

const Dashboard = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  return (
    <div className="bg-gray-100">
      <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]  dark:border-gray-700">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#/" title="home">
              <img
                src="https://i.ibb.co/c6sDXMG/scheduplanner.png"
                className="w-32"
                alt="tailus logo"
              />
            </a>
          </div>

          <div className="mt-8 text-center">
            <img
              src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
              alt=""
              className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            />
            <h5 className="mt-4 hidden text-xl font-semibold lg:block">
              Yeasin Arafat
            </h5>
            <div className="flex justify-center items-center">
              <span className="hidden text-gray-500 lg:block">Admin</span>
              <BsBadgeTm className="w-6 h-6 mr-1 text-[#0098da]" />
            </div>
          </div>

          <ul className="flex flex-col justify-center items-center mt-5">
            <li className="mt-2 p-1 hover:bg-gray-800 rounded-md flex justify-around items-center">
              <BsFillBarChartLineFill className="w-6 h-6 mr-1 text-[#0098da]" />
              <Link to="">Dashboard</Link>
            </li>
            <li className="mt-2 p-1 hover:bg-gray-800 rounded-md flex justify-around items-center">
              <BsFillAlarmFill className="w-6 h-6 mr-1 text-[#0098da]" />
              <Link to="">Dashboard</Link>
            </li>
            <li className="mt-2 p-1 hover:bg-gray-800 rounded-md flex justify-around items-center">
              <BsFillPeopleFill className="w-6 h-6 mr-1 text-[#0098da]" />
              <Link to="">Dashboard</Link>
            </li>
            <li className="mt-2 p-1 hover:bg-gray-800 rounded-md flex justify-around items-center">
              <BsEmojiSunglasses className="w-6 h-6 mr-1 text-[#0098da]" />
              <Link to="">Dashboard</Link>
            </li>
            <li className="mt-2 p-1 hover:bg-gray-800 rounded-md flex justify-around items-center">
              <BsFillEmojiSmileFill className="w-6 h-6 mr-1 text-[#0098da]" />
              <Link to="">Dashboard</Link>
            </li>
            <li className="mt-2 p-1 hover:bg-gray-800 rounded-md flex justify-around items-center">
              <BsTools className="w-6 h-6 mr-1 text-[#0098da]" />
              <Link to="">Dashboard</Link>
            </li>
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button className="group flex items-center space-x-4 rounded-md px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700 dark:group-hover:text-white ml-2">
              Logout
            </span>
          </button>
          <Link to="/">
            <button className="flex justify-between items-center">
              <BsBank2 className="w-6 h-6" />{" "}
              <span className="group-hover:text-gray-700 dark:group-hover:text-white ml-2">
                Home
              </span>{" "}
            </button>
          </Link>
        </div>
      </aside>

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky top-0 h-16 border-b bg-white  dark:border-gray-700 lg:py-2.5">
          <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
            <h5
              hidden
              className="text-2xl font-medium w-full text-gray-600 lg:block dark:text-white"
            >
              Dashboard
            </h5>
            <button
              onClick={() => setIsToggle(!isToggle)}
              className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:border-gray-700"
                  />
                </div>
              </div>

              <button
                aria-label="search"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="mx-auto w-4 fill-current"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="chat"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-5 w-5 text-[#0098da]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 text-[#0098da]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-5 w-5 text-[#0098da] "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {isToggle && (
            <>
              <ul className="bg-base-100 shadow-md w-[150px] p-2 absolute z-50 rounded-md">
                <li className=" hover:bg-[#0098da] p-1 rounded-md">
                  <Link to="/">Home</Link>
                </li>
                <li className="mt-1 hover:bg-[#0098da] p-1 rounded-md">
                  <Link to="">All User</Link>
                </li>
                <li className="mt-1 hover:bg-[#0098da] p-1 rounded-md">
                  <Link to="">My Schedule</Link>
                </li>
                <li className="mt-1 hover:bg-[#0098da] p-1 rounded-md">
                  <Link to="">Payment</Link>
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="px-6 pt-6 2xl:container relative">
          <div className="flex h-[80vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 ">
            <span className="dark:text-white">
              <img
                src="https://static.vecteezy.com/system/resources/previews/003/582/701/original/coming-soon-background-illustration-template-design-free-vector.jpg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
