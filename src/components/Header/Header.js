import { Navbar } from "flowbite-react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import {BsFillBrightnessHighFill }  from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import React, { useEffect, useState } from "react";

const Header = () => {
    // const [background, setBackground] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])


    const handleBgChange = () => { 
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


  return (
    <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
            Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
            <Navbar.Link>
                <button className='flex absolute right-14 top-7' onClick={handleBgChange} >
                    change
                    {/* {
                        !background ? <CiDark className='text-black w-6 h-5' /> : <BsFillBrightnessHighFill className='text-white w-6 h-5' />
                    }  */}
                </button>
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
        </div>
    </div>
  );
};

export default Header;
