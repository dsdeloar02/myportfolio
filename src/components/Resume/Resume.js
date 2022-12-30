import React from 'react';
import responsive from '../../assets/images/responsive.png';
import webdevelop from '../../assets/images/webdevelop.svg';
import applogo from '../../assets/images/applogo.svg';

const Resume = () => {
    return (
        <div className='shadow-md py-5 bg-pink-200 dark:bg-slate-800 dark:text-gray-100'>
            <div className='w-[90%] mx-auto rounded-xl bg-white dark:bg-gray-700'>
                <div className='p-8 md:p-20'>
                    <div className='my-4' >
                        <h1 className='text-4xl font-semibold mb-7' >What I do ..!</h1>
                    </div>
                    <div className='flex justify-between flex-wrap'>
                        <div className='my-2 w-full lg:w-[32%] p-5 rounded-md border border-gray-400 flex '>
                            <div>
                                <img className='w-[140px]' src={responsive} alt="" />
                            </div>
                            <div className='ml-3'>
                                <h1 className='text-xl font-bold'>Responsive</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit minima atque? </p>
                            </div>
                        </div>
                        <div className='my-2 w-full lg:w-[32%] p-5 rounded-md border border-gray-400 flex '>
                            <div>
                                <img className='w-[80px]' src={webdevelop} alt="" />
                            </div>
                            <div className='ml-3'>
                                <h1 className='text-xl font-bold'>Web Development</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit minima atque? </p>
                            </div>
                        </div>
                        <div className='my-2 w-full lg:w-[32%] p-5 rounded-md border border-gray-400 flex '>
                            <div>
                                <img className='w-[80px]' src={applogo} alt="" />
                            </div>
                            <div className='ml-3'>
                                <h1 className='text-xl font-bold'>App Development</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit minima atque? </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full mx-auto bg-white dark:bg-gray-800 p-8 md:p-20'>
                    <div className='my-4' >
                        <h1 className='text-3xl font-bold my-7 text-center' >My Skills</h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between my-5'>
                        <div className='w-full md:w-[48%]'>
                            <div className='w-full'>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>Html</p>
                                        <p className='font-semibold'>90%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-primary w-[90%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>CSS</p>
                                        <p className='font-semibold'>90%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-secondary w-[90%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>Javascript</p>
                                        <p className='font-semibold'>80%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-accent w-[80%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>React Js</p>
                                        <p className='font-semibold'>80%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-info w-[80%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>Tailwind Css</p>
                                        <p className='font-semibold'>90%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-error w-[90%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[48%]'>
                            <div className='w-full'>
                                
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>React Bootstrap</p>
                                        <p className='font-semibold'>90%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-secondary w-[90%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>Express Js</p>
                                        <p className='font-semibold'>70%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-accent w-[70%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>MongoDb</p>
                                        <p className='font-semibold'>80%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-info w-[80%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>Tailwind Css</p>
                                        <p className='font-semibold'>90%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-error w-[90%]" value="100" max="100"></progress>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="flex justify-between">
                                        <p className='font-semibold'>Node Js</p>
                                        <p className='font-semibold'>65%</p>
                                    </div>
                                    <div className='bg-gray-300 dark:bg-slate-500 h-2 relative rounded-2xl my-2'>
                                        <progress className="progress absolute progress-primary w-[65%]" value="100" max="100"></progress>
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

export default Resume;
