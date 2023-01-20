import React from 'react';
import './About.css'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className='my-10 max-w-[1300px] mx-auto'>
            <section className='text-center mb-20'>
                <h1 className='text-5xl font-bold'>Who is OnceHub?</h1>
                <p className='text-2xl my-10 w-10/12 mx-auto leading-10'>In the hare and the tortoise fable we like to think of ourselves as the tortoise. Not in the sense of being slow, but in the sense of being consistent in the pursuit of our long-term goals.


                    Here are some of the key traits that make us a good tortoise…</p>
            </section>

            <section className=''>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:w-5/12 w-full'>
                            <img src="https://i.ibb.co/QDxTRcN/E-Wallet-bro.png" className="lg:max-w-sm rounded-lg lg:ml-10" />
                        </div>
                        <div className='lg:w-7/12 lg:text-left text-center mt-5'>
                            <h1 className="lg:text-5xl text-4xl font-bold mb-5">Fair pricing!</h1>
                            <p className="py-6 text-xl leading-relaxed">Since we are funded by our customers, a long term win-win relationship with them is critical. Those who cannot afford to pay for our services can use our very generous freemium plan. Customers who upgrade to a paid version only pay for the engagement options they use. Any billing changes can always be made via self-service including deletion of their OnceHub account.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-10 lg:hidden block'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='w-full'>
                            <img src="https://i.ibb.co/Cbqq05B/Work-time-pana.png" />
                        </div>
                        <div className='w-full text-center mt-5'>
                            <h1 className="text-4xl font-bold mb-5">Always available</h1>
                            <p className="py-6 text-xl leading-relaxed">Our strong connection with our customers is put to the test when they need us. Whether reaching out for support, onboarding help, or looking to schedule a discovery session, our team is always here to help. Our support team is available 24/7 with a quick turnaround. Our sales team is available to speak with prospects via live chat or a scheduled meeting.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-10 hidden lg:block'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='w-7/12 mt-5'>
                            <h1 className="text-5xl font-bold mb-5">Always available</h1>
                            <p className="py-6 text-xl leading-relaxed">Our strong connection with our customers is put to the test when they need us. Whether reaching out for support, onboarding help, or looking to schedule a discovery session, our team is always here to help. Our support team is available 24/7 with a quick turnaround. Our sales team is available to speak with prospects via live chat or a scheduled meeting.</p>
                        </div>
                        <div className='w-5/12'>
                            <img src="https://i.ibb.co/Cbqq05B/Work-time-pana.png" />
                        </div>
                    </div>
                </div>
            </section>


            <section className='pt-10'>
                <h1 className='lg:text-5xl text-4xl font-bold text-center'>Our founders</h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-28 w-full lg:mx-12 mx-7'>

                    <div className="cardbox">
                        <div className='imgbox'>
                            <img src="https://i.ibb.co/Wcy6mpV/me.png" className='rounded-2xl' alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2 className='text-2xl font-semibold '>Rabi Thagore</h2>
                                <h3 className='text-xl font-light'>Mern Stack Developer</h3>
                                <div className="flex my-5 justify-center">
                                    <button className='btn btn-primary mx-1 px-2'>Portfolio</button>
                                    <button className='btn btn-outline btn-primary mx-1 px-2'>Download Cv</button>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaLinkedinIn className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaFacebookF className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaGithub className='text-primary' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="cardbox">
                        <div className='imgbox'>
                            <img src="https://www.onthisday.com/images/people/rabindranath-tagore-medium.jpg" className='rounded-2xl' alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2 className='text-3xl font-semibold pt-5'>Rabi Thagore</h2>
                                <h3 className='text-2xl'>Mern Stack Developer</h3>
                                <div className="flex my-5">
                                    <button className='btn btn-primary mx-1'>Portfolio</button>
                                    <button className='btn btn-outline btn-primary mx-1'>Download Cv</button>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaLinkedinIn className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaFacebookF className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaGithub className='text-primary' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="cardbox">
                        <div className='imgbox'>
                            <img src="https://www.onthisday.com/images/people/rabindranath-tagore-medium.jpg" className='rounded-2xl' alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2 className='text-3xl font-semibold pt-5'>Rabi Thagore</h2>
                                <h3 className='text-2xl'>Mern Stack Developer</h3>
                                <div className="flex my-5">
                                    <button className='btn btn-primary mx-1'>Portfolio</button>
                                    <button className='btn btn-outline btn-primary mx-1'>Download Cv</button>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaLinkedinIn className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaFacebookF className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaGithub className='text-primary' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="cardbox">
                        <div className='imgbox'>
                            <img src="https://www.onthisday.com/images/people/rabindranath-tagore-medium.jpg" className='rounded-2xl' alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2 className='text-3xl font-semibold pt-5'>Rabi Thagore</h2>
                                <h3 className='text-2xl'>Mern Stack Developer</h3>
                                <div className="flex my-5">
                                    <button className='btn btn-primary mx-1'>Portfolio</button>
                                    <button className='btn btn-outline btn-primary mx-1'>Download Cv</button>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaLinkedinIn className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaFacebookF className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaGithub className='text-primary' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="cardbox">
                        <div className='imgbox'>
                            <img src="https://www.onthisday.com/images/people/rabindranath-tagore-medium.jpg" className='rounded-2xl' alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2 className='text-3xl font-semibold pt-5'>Rabi Thagore</h2>
                                <h3 className='text-2xl'>Mern Stack Developer</h3>
                                <div className="flex my-5">
                                    <button className='btn btn-primary mx-1'>Portfolio</button>
                                    <button className='btn btn-outline btn-primary mx-1'>Download Cv</button>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaLinkedinIn className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaFacebookF className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaGithub className='text-primary' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="cardbox">
                        <div className='imgbox'>
                            <img src="https://www.onthisday.com/images/people/rabindranath-tagore-medium.jpg" className='rounded-2xl' alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2 className='text-3xl font-semibold pt-5'>Rabi Thagore</h2>
                                <h3 className='text-2xl'>Mern Stack Developer</h3>
                                <div className="flex my-5">
                                    <button className='btn btn-primary mx-1'>Portfolio</button>
                                    <button className='btn btn-outline btn-primary mx-1'>Download Cv</button>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaLinkedinIn className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaFacebookF className='text-primary' /></span>
                                    <span className="drop w-12 h-12 rounded-full mx-2"><FaGithub className='text-primary' /></span>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    );
};

export default About;