import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import SideNavbar from './SideNavbar';

const Navbar = ({ bgColor, txtColor }) => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <>
            <div className='sticky top-0 z-50'>
                <nav className='sticky top-0' style={{ backgroundColor: bgColor, color: txtColor }}>
                    <div className="mx-auto xl:px-20 px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center lg:gap-15 gap-12">
                            <Link to="/" className="text-[25px] font-bold">Better</Link>
                            <div className="lg:gap-5  font-medium hidden md:flex">
                                <Link to="/about" className="hover:bg-white px-6 py-3 rounded-3xl duration-200 hover:text-black">About Us</Link>
                                <Link to="/calculator" className="hover:bg-white px-6 py-3 rounded-3xl duration-200 hover:text-black">Mortgage Calculator</Link>
                                <Link to="/start" className="hover:bg-white px-6 py-3 rounded-3xl duration-200 hover:text-black">Start Page</Link>
                            </div>
                        </div>

                        <div className="flex items-center lg:gap-6 gap-3">
                            <button className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black duration-200">
                                <FaPhone />
                            </button>
                            <button className="hover:bg-white md:flex hidden px-6 py-3 rounded-3xl duration-200 hover:text-black">Sign in</button>
                            <button className="bg-green-400 text-{txtColor} md:px-8 px-5  md:py-4 py-2  rounded-full text-sm font-medium hover:bg-transparent hover:text-white duration-200">
                                Continue
                            </button>
                            <button className='flex md:hidden' onClick={function () {
                                setShowNavbar(true);
                            }}><IoMdMenu size={30} /></button>
                        </div>
                    </div>
                </nav>
            </div>


            <SideNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />

        </>
    )
}

export default Navbar
