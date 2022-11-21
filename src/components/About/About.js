import React from 'react';
import image from '../../assets/images/banner.jpg';
import { BsTelephoneOutbound, BsFillCalendarMonthFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
const About = () => {
    return (
        <div className='shadow-md py-5 bg-pink-200 dark:bg-slate-800 dark:text-gray-100'>
            <div className='w-[90%] mx-auto rounded-xl bg-white dark:bg-gray-700 p-8 md:p-20' >
                <div>
                    <h1 className='text-4xl font-bold mb-7' >About Me ..</h1>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    <div className="rounded-lg">
                        <img className="rounded-xl h-full object-cover" src={image} alt="" />
                    </div>
                    <div class="col-span-2 px-3">
                        <div className='mb-5'>
                            <h1 className='text-3xl font-semibold mb-4' >Who am i?</h1>
                            <p>Hi, I'm Deluar Hossain.I am a MERN-stack developer with 2+ years of experience with modern technologies like React, Next js, Tailwind CSS, Node js, Express js, Firebase, Mysql, MongoDB, and so on. I build responsive websites with my passion and full effort to improve user experience and your business.</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold mb-4' >Personal Info</h1>
                            <div className='flex justify-around flex-wrap gap-3' >
                                <div className='w-full md:w-[48%] shadow-xl p-2 rounded-md my-3'>
                                    <div className='flex items-center'>
                                        <div className='px-4 shadow-md  py-4 rounded-md bg-slate-100 dark:bg-slate-600'>
                                            <BsTelephoneOutbound></BsTelephoneOutbound>
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-small'>Phone</p>
                                            <p className='font-bold'>01701342049</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[48%] shadow-xl p-2 rounded-md my-3'>
                                    <div className='flex items-center'>
                                        <div className='px-4 shadow-md rounded-md bg-slate-100 dark:bg-slate-600 py-4'>
                                            <BiMessageAltDetail></BiMessageAltDetail>
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-small'>Email</p>
                                            <p className='font-bold'>dsdeloar02@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[48%] shadow-xl p-2 rounded-md my-3'>
                                    <div className='flex items-center'>
                                        <div className='px-4 shadow-md rounded-md bg-slate-100 dark:bg-slate-600 py-4'>
                                            <FaLocationArrow></FaLocationArrow>
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-small'>Location</p>
                                            <p className='font-bold'>Nakla, Sherpur </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[48%] shadow-xl p-2 rounded-md my-3'>
                                    <div className='flex items-center'>
                                        <div className='px-4 shadow-md rounded-md bg-slate-100 dark:bg-slate-600 py-4'>
                                            <BsFillCalendarMonthFill></BsFillCalendarMonthFill>
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-small'>BirthDay</p>
                                            <p className='font-bold'>Nov 28, 1998</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;
