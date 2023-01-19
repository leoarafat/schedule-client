import React from "react";
import { Link } from "react-router-dom";

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
                <Link to={"/"}>
                  <button
                    type="submit"
                    title="Submit"
                    className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                  >
                    <span className="text-white font-semibold">
                      Get started
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-green-200 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
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
                <Link to={"/"}>
                  <button
                    type="submit"
                    title="Submit"
                    className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                  >
                    <span className="text-white font-semibold">Subscribe</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>




        <section>
          <div className="flex justify-center">
          <img src="https://www.pngmart.com/files/10/FAQ-PNG-Transparent.png" alt="" />
          </div>
        <div className="px-8 lg:px-40 py-10 lg:pb-20">
        <div className="space-y-4">
          <details
            className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                Which plan is best for me and my team?
              </h2>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Check out the plans to compare our different paid plans and select the one that best fits your needs.
            </p>
          </details>

          <details className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                What does the renewal process look like?
              </h2>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Paid subscription automatically renew for the same subscription period unless you downgrade your plan before your renewal date.
            </p>
          </details>

          <details className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                How do i upgrade or downgrade?
              </h2>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Visit your billing page. From there, you can change your plan, add or remove user seats, and update your payment information.
            </p>
          </details>

          <details className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                What payment methods do you accept?
              </h2>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              We accept Visa, Mastercard, American Express, Credit and Debit cards.
            </p>
          </details>
        </div>
        </div>
      </section>
      </div>

      
    </div>
  );
};

export default Pricing;
