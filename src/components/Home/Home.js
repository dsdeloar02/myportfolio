import React, { useEffect, useState } from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsDownload } from "react-icons/bs";

import profile from '../../assets/images/profile.png';

const Home = () => {

    const [details, setDetails] = useState('');

    useEffect(()=> {
        fetch('profile.json')
        .then(res => res.json())
        .then(data => setDetails(data[0]))
    }, [])


    return (
        <div className=' bg-pink-200 dark:bg-slate-800'>
            <div className='flex flex-col justify-center items-center py-[5%]' >
                <img className='h-[250px] w-[250px] rounded-full shadow-lg' src={profile} alt="" />
                <h1 className='text-2xl font-bold text-center py-2 dark:text-gray-100'>{details.name}</h1>
                <p className='text-xl text-center py-2 dark:text-gray-100' >{details.profession}</p>
                <ul className='flex mt-2'>
                    <li className='mx-2 py-2 px-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700 text-white'><BsFacebook  ></BsFacebook></li>
                    <li className='mx-2 py-2 px-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700 text-white'><BsTwitter ></BsTwitter></li>
                    <li className='mx-2 py-2 px-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700 text-white'><BsLinkedin ></BsLinkedin></li>
                </ul>
                <button className='flex justify-center items-center my-5 mx-2 py-2 px-4 rounded-md bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-400 to-pink-700 text-white'> <BsDownload className='mr-2 flex' ></BsDownload> Download Cv</button>
            </div>
        </div>
    );
}

export default Home;
