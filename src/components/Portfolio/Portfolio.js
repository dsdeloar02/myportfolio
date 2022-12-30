import React from 'react';
import { Link } from 'react-router-dom';
// import mypoftfolio from '../../assets/images/mypoftfolio.png';
import wedding from '../../assets/images/wedding.png';
import programming from '../../assets/images/programming.png';
import resalemarket from '../../assets/images/resalemarket.png';



const Portfolio = () => {
    return (
        <div className='shadow-md py-5 bg-pink-200 dark:bg-slate-800 dark:text-gray-100'>
            <div className='w-[90%] mx-auto rounded-xl bg-white dark:bg-gray-700'>
                <div className='p-8 md:p-10'>
                    <div className='my-4' >
                        <h1 className='text-4xl font-semibold mb-7' >What I do ..!</h1>
                    </div>

                    <div class="p-5 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
                        <div class="group relative block rounded overflow-hidden shadow-lg transition-all duration-500">
                            <img class="w-full" src={resalemarket} alt="Mountain"/>
                            <div class="px-6 py-3">
                                <div class="font-bold text-xl mb-2">Mobile Resale Market</div>
                            </div>
                            <div class="px-6 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>React Js</small></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>Tailwind Css</small></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>DaisyUi</small></span>
                            </div>
                            <div class="absolute flex justify-center w-full h-[50%] -bottom-52 group-hover:bottom-0 right-0 left-0 transition-all duration-500  bg-slate-300 dark:bg-slate-900 text-white p-4 rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md">
                                <a href='https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-dsdeloar02' className="h-[30px] px-3 mr-2 bg-secondary"><small>GitHub Client</small></a>
                                <a href='https://github.com/programming-hero-web-course-4/b612-used-products-resale-server-side-dsdeloar02' className="h-[30px] px-3 bg-secondary"><small>GitHub Server</small> </a>
                            </div>
                            <div class="absolute w-full flex flex-col justify-end items-center  h-[50%] -top-52 group-hover:top-0 right-0 left-0 transition-all duration-500 bg-slate-300 dark:bg-slate-900  text-white p-4 rounded rounded-tl-sm rounded-tr-sm rounded-bl-none rounded-br-none">
                                <a href='https://mobile-market-86e5f.web.app/' className="h-[30px]  px-3 bg-secondary"><small>Live Link</small></a>                                
                            </div>
                        </div>
                        <div class="group relative block rounded overflow-hidden shadow-lg transition-all duration-500">
                            <img class="w-full" src={programming} alt="Mountain"/>
                            <div class="px-6 py-3">
                                <div class="font-bold text-xl mb-2">Programming Tech</div>
                            </div>
                            <div class="px-6 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>React Js</small></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>firebase</small></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>MongoDb</small></span>
                            </div>
                            <div class="absolute flex justify-center w-full h-[50%] -bottom-52 group-hover:bottom-0 right-0 left-0 transition-all duration-500  bg-slate-300 dark:bg-slate-900 text-white p-4 rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md">
                                <a href='https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-dsdeloar02' className="h-[30px] px-3 mr-2 bg-secondary"><small>GitHub Client</small></a>
                                {/* <a href='https://programming-tech-76567.web.app/ ' className="h-[30px] px-3 bg-secondary"><small>GitHub Server</small> </a> */}
                            </div>
                            <div class="absolute w-full flex flex-col justify-end items-center   h-[50%] -top-52 group-hover:top-0 right-0 left-0 transition-all duration-500 bg-slate-300 dark:bg-slate-900  text-white p-4 rounded rounded-tl-sm rounded-tr-sm rounded-bl-none rounded-br-none">
                                <a href='https://programming-tech-76567.web.app/ ' className="h-[30px]  px-3 bg-secondary"><small>Live Link</small></a>
                            </div>
                        </div>
                        <div class="group relative block rounded overflow-hidden shadow-lg transition-all duration-500">
                            <img class="w-full" src={wedding} alt="Mountain"/>
                            <div class="px-6 py-3">
                                <div class="font-bold text-xl mb-2">Wedding Photography</div>
                            </div>
                            <div class="px-6 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>React Js</small></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>firebase</small></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><small>MongoDb</small></span>
                            </div>
                            <div class="absolute flex justify-center w-full h-[50%] -bottom-52 group-hover:bottom-0 right-0 left-0 transition-all duration-500  bg-slate-300 dark:bg-slate-900 text-white p-4 rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md">
                                <a href='https://github.com/dsdeloar02/wedding-photography-client' className="h-[30px] px-3 mr-2 bg-secondary"><small>GitHub Client</small></a>
                                <a href='https://github.com/dsdeloar02/wedding-photography-server' className="h-[30px] px-3 bg-secondary"><small>GitHub Server</small> </a>
                            </div>
                            <div class="absolute w-full flex flex-col justify-end items-center  h-[50%] -top-52 group-hover:top-0 right-0 left-0 transition-all duration-500 bg-slate-300 dark:bg-slate-900  text-white p-4 rounded rounded-tl-sm rounded-tr-sm rounded-bl-none rounded-br-none">
                                <a href='https://wedding-photography-a6cb8.web.app/' className="h-[30px]  px-3 bg-secondary"><small>Live Link</small></a>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Portfolio;
