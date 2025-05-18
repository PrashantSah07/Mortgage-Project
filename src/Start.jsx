import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import Better from './components/Better'
import Footer from './components/Footer'
import { AiOutlineHome } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { MdPhoneAndroid } from "react-icons/md";
import SideNavbar from './components/SideNavbar';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

const Start = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <div className='flex justify-between items-center 2xl:mx-30 lg:mx-20 mx-5 md:py-6 py-4 border-b-4 border-[#f0f7f1] relative'>
                <Link to='/'><div className='flex flex-col leading-6'>
                    <p className='text-[18px] font-semibold text-green-800'>Better</p>
                    <p className='text-[18px]'>Mortgage</p>
                </div></Link>
                <div className='flex justify-center items-center gap-2 hover:bg-[#f5f4f4] rounded-full px-5 py-3 duration-100 cursor-pointer'>
                    <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#cce9d3] hover:text-black duration-200 text-green-800">
                        <FaPhone />
                    </button>
                    <p className='hidden md:flex'>Need help? Call (415) 523-8837</p>
                    <button className='flex md:hidden' onClick={function () {
                        setShowNavbar(true);
                    }}><IoMdMenu size={30} /></button>
                </div>
                <div className='rounded-full w-[50px] absolute -bottom-6 left-[50%]'>
                    <img className='w-full rounded-full' src="https://better-take-home.vercel.app/_next/image?url=%2Fbetty1.jpg&w=128&q=75" alt="" />
                </div>
            </div>

            <div className=' flex flex-col justify-center items-center my-20 gap-7'>
                <div className='flex flex-col md:gap-2 justify-center items-center'>
                    <h1 className='md:text-5xl sm:text-3xl text-[22px] font-semibold text-center'>Hi, I'm Betsy!</h1>
                    <h1 className='md:text-5xl sm:text-3xl text-[22px] font-semibold text-center'>What can I help you with?</h1>
                </div>
                <div className='flex flex-col gap-5 w-full md:w-fit'>
                    <Link to='/'><div className='flex items-center gap-4  border md:w-[650px] w-[90%] mx-auto py-5 rounded-lg px-10 text-green-700 border-[#8d8a8a] hover:outline-2 duration-50 hover:border-green-600'>
                        <AiOutlineHome size={30} />
                        <span className='text-black text-[18px] font-medium'>Buying a home</span>
                    </div></Link>
                    <Link to='/'><div className='flex items-center gap-4  border md:w-[650px] w-[90%] mx-auto py-5 rounded-lg px-10 text-green-700 border-[#8d8a8a] hover:outline-2 duration-50 hover:border-green-600'>
                        <p className='text-[30px]'>
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H10V15H7C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9H17C18.6569 9 20 10.3431 20 12C20 13.6569 18.6569 15 17 15H14V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 8.13401 3.13401 5 7 5H17C20.866 5 24 8.13401 24 12C24 15.866 20.866 19 17 19H7C3.13401 19 0 15.866 0 12ZM7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7Z" fill="currentColor"></path></svg>
                        </p>
                        <span className='text-black text-[18px] font-medium'>Refinance my mortgage</span>
                    </div></Link>
                    <Link to='/'><div className='flex items-center gap-4  border md:w-[650px] w-[90%] mx-auto py-5 rounded-lg px-10 text-green-700 border-[#8d8a8a] hover:outline-2 duration-50 hover:border-green-600'>
                        <p className='text-[30px]'><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#78909C" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"></path><rect x="14" y="1" fill="#AED581" width="20" height="31"></rect><g fill="#558B2F"><path d="M13,0v33h22V0H13z M33,31H15V2h18V31z"></path><path d="M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z"></path><path d="M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z"></path><circle cx="24" cy="8" r="2"></circle><circle cx="24" cy="20" r="6"></circle></g><path fill="#CFD8DC" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"></path></svg></p>
                        <span className='text-black text-[18px] font-medium'>Get cash from my home</span>
                    </div></Link>
                </div>
                <div className='flex md:flex-row flex-col justify-between items-center md:gap-20 gap-10 text-[15px] max-w-full mt-10'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <span className='text-3xl font-semibold'>$100B</span>
                        <span className='text-center'>home loans funded entirely online</span>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <span className='text-3xl font-semibold'>400K</span>
                        <span className='text-center'>Customers who chose a Better Mortgage</span>
                    </div>
                </div>
                <div className='bg-[#f0f7f1] flex flex-col gap-5 justify-center items-center md:w-[600px] w-[90%] rounded-lg py-10 mt-10'>
                    <p className='text-center'>After a few questions, you'll unlock:</p>
                    <div className='flex flex-col gap-5'>
                        <p className='flex items-center gap-3'><CiDiscount1 className='text-green-500' size={20} /> Custom mortgage rates</p>
                        <p className='flex items-center gap-3'><AiOutlineDollar className='text-green-500' size={20} /> Exclusive offers</p>
                        <p className='flex items-center gap-3'><MdPhoneAndroid className='text-green-500' size={20} />A personalized dashboard</p>
                    </div>
                </div>
            </div>
            <SideNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
            <Better />
            <Footer />
        </>
    )
}

export default Start
