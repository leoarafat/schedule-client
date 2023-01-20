import React from 'react'
import { useForm } from 'react-hook-form';

type UserSubmitForm = {
    name: string;
    email: string;
    phone: number;
    organization: string;
    title: string;
    location: string;
    link: string;
    description: string;
};

interface timeDateType {
    timeDate: object;
}

const ScheduleInfo = ({ timeDate }: timeDateType) => {

    console.log(timeDate);

    const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>();

    const handleInfo = (data: UserSubmitForm) => {
        console.log(data)
    }

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Schedule Information</h2>
                    </div>

                    <form onSubmit={handleSubmit(handleInfo)} className="max-w-screen-md grid sm:grid-cols-2 gap-8 mx-auto">
                        <div>
                            <label htmlFor="name" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Name</label>
                            <input
                                {...register("name", {
                                    required: "Name is Required"
                                })}
                                id='name' name="name" className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2" />
                            {errors.name && <p className="text-sm text-red-600 mt-2">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
                            <input
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid Email Address"
                                    }
                                })}
                                id='email' name="email" className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2" />
                            {errors.email && <p className="text-sm text-red-600 mt-2">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Phone Number</label>
                            <input
                                {...register("phone", {
                                    required: "Phone Number is Required"
                                })}
                                id='phone' name="phone" type='number' className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2" />
                            {errors.phone && <p className="text-sm text-red-600 mt-2">{errors.phone.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="organization" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Organization Name</label>
                            <input
                                {...register("organization", {
                                    required: "Organization Name is Required"
                                })}
                                id='organization' name="organization" className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2" />
                            {errors.organization && <p className="text-sm text-red-600 mt-2">{errors.organization.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Schedule Title</label>
                            <input
                                {...register("title", {
                                    required: "Please Give A Schedule Title"
                                })}
                                id='title' name="title" className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2" />
                            {errors.title && <p className="text-sm text-red-600 mt-2">{errors.title.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="location" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Schedule Location</label>
                            <div className='flex gap-4 flex-wrap py-2'>
                                <img className='w-20' src="https://img.icons8.com/clouds/2x/google-meet.png" alt="" />
                                <img className='w-20' src="https://img.icons8.com/bubbles/2x/skype.png" alt="" />
                                <img className='w-20' src="https://img.icons8.com/clouds/2x/zoom.png" alt="" />
                                <img className='w-20' src="https://img.icons8.com/clouds/2x/microsoft-teams-2019.png" alt="" />
                                <img className='w-20' src="https://img.icons8.com/bubbles/512/hangout.png" alt="" />
                                <img className='w-20' src="https://img.icons8.com/clouds/2x/whatsapp.png" alt="" />
                                <img className='w-20' src="https://img.icons8.com/clouds/2x/youtube-play.png" alt="" />
                                <img className='w-20' src="https://img.icons8.com/clouds/2x/facebook-new.png" alt="" />
                            </div>
                            <select
                                {...register("location", {
                                    required: "Please Select A Location"
                                })}
                                id='location' className="select w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2">
                                <option className='text-xl' disabled>Select Your Location</option>
                                <option className='text-xl'>Google Meet</option>
                                <option className='text-xl'>Skype</option>
                                <option className='text-xl'>Zoom</option>
                                <option className='text-xl'>Microsoft Team</option>
                                <option className='text-xl'>Google Hangouts</option>
                                <option className='text-xl'>WhatsApp</option>
                                <option className='text-xl'>Youtube</option>
                                <option className='text-xl'>Facebook</option>
                            </select>
                            {errors.location && <p className="text-sm text-red-600 mt-2">{errors.location.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="link" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Schedule Link</label>
                            <input
                                {...register("link", {
                                    required: "Please Give A Schedule Link"
                                })}
                                id='link' name="link" className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2" />
                            {errors.link && <p className="text-sm text-red-600 mt-2">{errors.link.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Description</label>
                            <textarea
                                {...register("description")}
                                id='description' name="description" className="w-full h-40 bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
                        </div>
                        <div></div>
                        <div className='flex justify-end'>
                            <button type='submit' className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus-visible:ring ring-sky-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ScheduleInfo