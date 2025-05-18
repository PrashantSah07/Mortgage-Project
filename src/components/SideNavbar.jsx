import React from 'react'
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropright } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const SideNavbar = ({ showNavbar, setShowNavbar }) => {
    return (
        <div className={`fixed top-0 z-100 bg-white w-full px-5 py-8 flex flex-col justify-between border h-[100vh] duration-300 ${showNavbar ? 'translate-x-[0%]' : '-translate-x-[100%]'}`}>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between items-center text-[30px] font-semibold'>
                    <Link to='/'><h1 className='flex justify-between items-center text-[30px] font-semibold'>Better</h1></Link>
                    <RxCross2 onClick={function () {
                        setShowNavbar(false);
                    }} />
                </div>
                <Link to='/about'><button className='w-full flex justify-between items-center'>About Us <IoMdArrowDropright size={25} /></button></Link>
                <Link to='/calculator'><button className='w-full flex justify-between items-center'>Mortgage Calculator <IoMdArrowDropright size={25} /></button></Link>
                <Link to='/start'><button className='w-full flex justify-between items-center'>Start Page <IoMdArrowDropright size={25} /></button></Link>
                <button className='flex flex-wrap justify-center items-center gap-2 bg-[#f0f7f1] w-[100%] mx-auto rounded-full py-3'><FaPhone />Call us anytime at (123)4567890</button>
            </div>
            <div className='flex flex-col gap-4'>
                <button className='bg-[#017848] text-white py-3 w-full rounded-full'>Continue</button>
                <button className='flex justify-center items-center bg-[#ffffff] py-3 w-full rounded-full border-[#e1dbdb] border'>Sign in<FaUser /></button>
            </div>
        </div>
    )
}

export default SideNavbar
