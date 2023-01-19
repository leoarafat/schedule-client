import React from 'react'

const LogIn = () => {
    return (
        <>

            <div className="">
                <div className="">
                    <div className="">
                        <div className="space-y-4">
                            <a href="">
                                <img src="images/tailus.svg" className="w-40 dark:hidden" alt="tailus logo" />
                                <img src="images/logo.svg" className="w-40 hidden dark:block" alt="tailus logo" />
                            </a>
                        </div>
                        <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">Login to your account</h3>

                            <form className="mt-10 space-y-8 dark:text-white">
                                <div>
                                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                        <input id="" type="email" placeholder="Your email or user name" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                        <input id="" type="Your password" placeholder="Your answer" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                    </div>
                                    <button type="reset" className="-mr-3 w-max p-3">
                                        <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password ?</span>
                                    </button>
                                </div>

                                <div>
                                    <button
                                        className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                                    >
                                        <span className="text-base font-semibold text-white dark:text-gray-900">Login</span>
                                    </button>
                                    <button type="reset" className="-ml-3 w-max p-3">
                                        <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Create new account</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LogIn