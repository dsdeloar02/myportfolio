import React from 'react';
import { Link } from 'react-router-dom';
import mypoftfolio from '../../assets/images/mypoftfolio.png';



const Portfolio = () => {
    const facebookurl = 'https://www.facebook.com/';
    return (
        <div className='shadow-md py-5 bg-pink-200 dark:bg-slate-800 dark:text-gray-100'>
            <div className='w-[90%] mx-auto rounded-xl bg-white dark:bg-gray-700'>
                <div className='p-8 md:p-10'>
                    <div className='my-4' >
                        <h1 className='text-4xl font-semibold mb-7' >What I do ..!</h1>
                    </div>

                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
                        <div class="group relative block rounded overflow-hidden shadow-lg transition-all duration-500">
                            <img class="w-full" src={mypoftfolio} alt="Mountain"/>
                            <div class="px-6 py-3">
                                <div class="font-bold text-xl mb-2">Mountain</div>
                            </div>
                            <div class="px-6 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                            <div class="absolute flex justify-center w-full h-[50%] -bottom-52 group-hover:bottom-0 right-0 left-0 transition-all duration-500  bg-slate-300 dark:bg-slate-900 text-white p-4 rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md">
                                <button className="h-[35px] px-4 mr-2 bg-secondary">GitHub Client</button>
                                <button className="h-[35px] px-4 bg-secondary">GitHub Server </button>
                            </div>
                            <div class="absolute w-full  h-[50%] -top-52 group-hover:top-0 right-0 left-0 transition-all duration-500 bg-slate-300 dark:bg-slate-900  text-white p-4 rounded rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none">
                                <button className="h-[35px]  px-4 bg-secondary">Live Link</button>
                            </div>
                        </div>
                        <div class="group relative block rounded overflow-hidden shadow-lg transition-all duration-500">
                            <img class="w-full" src={mypoftfolio} alt="Mountain"/>
                            <div class="px-6 py-3">
                                <div class="font-bold text-xl mb-2">Mountain</div>
                            </div>
                            <div class="px-6 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                            <div class="absolute flex justify-center w-full h-[50%] -bottom-52 group-hover:bottom-0 right-0 left-0 transition-all duration-500  bg-slate-300 dark:bg-slate-900 text-white p-4 rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md">
                                <button className="h-[35px] px-4 mr-2 bg-secondary">GitHub Client</button>
                                <button className="h-[35px] px-4 bg-secondary">GitHub Server </button>
                            </div>
                            <div class="absolute w-full  h-[50%] -top-52 group-hover:top-0 right-0 left-0 transition-all duration-500 bg-slate-300 dark:bg-slate-900  text-white p-4 rounded rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none">
                                <button className="h-[35px]  px-4 bg-secondary">Live Link</button>
                            </div>
                        </div>
                        <div class="group relative block rounded overflow-hidden shadow-lg transition-all duration-500">
                            <img class="w-full" src={mypoftfolio} alt="Mountain"/>
                            <div class="px-6 py-3">
                                <div class="font-bold text-xl mb-2">Mountain</div>
                            </div>
                            <div class="px-6 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                            <div class="absolute flex justify-center w-full h-[50%] -bottom-52 group-hover:bottom-0 right-0 left-0 transition-all duration-500  bg-slate-300 dark:bg-slate-900 text-white p-4 rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md">
                                <button className="h-[35px] px-4 mr-2 bg-secondary">GitHub Client</button>
                                <button className="h-[35px] px-4 bg-secondary">GitHub Server </button>
                            </div>
                            <div class="absolute w-full  h-[50%] -top-52 group-hover:top-0 right-0 left-0 transition-all duration-500 bg-slate-300 dark:bg-slate-900  text-white p-4 rounded rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none">
                                <button className="h-[35px]  px-4 bg-secondary">Live Link</button>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Portfolio;
