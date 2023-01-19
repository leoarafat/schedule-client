import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-100 to-purple-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-pink-900 font-bold md:text-6xl">
              Pick the perfect plan for your team
            </h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12 gap-14">
            <div className="relative group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-sky-200 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-white font-semibold text-center bg-slate-900 w-full p-5">
                  Basic
                </h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">
                        00
                      </span>
                      <div className="pb-2">
                        <span className="block text-2xl text-gray-700 font-bold">
                          $
                        </span>
                        <span className="block text-xl text-purple-500 font-bold">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2 flex items-center">
                    <i className="fa-solid fa-check-double"></i>

                    <span>First premium advantage</span>
                  </li>
                  <li className="space-x-2 flex items-center">
                    <i className="fa-solid fa-check-double"></i>

                    <span>Second advantage weekly</span>
                  </li>
                  <li className="space-x-2 flex items-center">
                    <i className="fa-solid fa-check-double"></i>

                    <span>Third advantage donate to project</span>
                  </li>
                </ul>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                >
                  <span className="text-white font-semibold">Get started</span>
                </button>
              </div>
            </div>

            <div className="relative group md:w-6/12 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-emerald-100 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-10 space-y-6 lg:p-8">
                <h3 className="text-3xl text-white font-semibold text-center bg-amber-600 w-full p-5">
                  Premium
                </h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">
                        08
                      </span>
                      <div className="pb-2">
                        <span className="block text-2xl text-gray-700 font-bold">
                          $
                        </span>
                        <span className="block text-xl text-purple-500 font-bold">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2 flex items-center">
                    <i className="fa-solid fa-check-double"></i>

                    <span>First premium advantage</span>
                  </li>
                  <li className="space-x-2 flex items-center">
                    <i className="fa-solid fa-check-double"></i>

                    <span>Second advantage weekly</span>
                  </li>
                  <li className="space-x-2 flex items-center">
                    <i className="fa-solid fa-check-double"></i>

                    <span>Third advantage donate to project</span>
                  </li>
                </ul>

                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                >
                  <span className="text-white font-semibold">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
