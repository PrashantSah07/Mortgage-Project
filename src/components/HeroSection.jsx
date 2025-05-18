import React from 'react';
import { FaClock, FaGoogle } from 'react-icons/fa';
import image from '../assets/hero-variant.webp'
import { FaStar } from "react-icons/fa6";
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="bg-[#004734] text-white py-16 relative overflow-hidden flex flex-col gap-16 xl:h-[110vh] lg:h-[100vh] h-[90vh] lg:pt-30 pt-20">
            <motion.h1 className='text-center 2xl:text-[115px] lg:text-[90px] md:text-[80px] sm:text-7xl text-6xl md:leading-28 font-bold text-[#1ee07f] relative z-10' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >  Mortgages<br />made simple</motion.h1>
            <div className='md:gap-0 gap-10 flex md:flex-row flex-col items-center justify-between 2xl:mx-80 lg:mx-40 mx-20'>
                <motion.div className="mt-8 flex flex-col items-center lg:items-start space-y-4 md:w-fit w-full" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <button className="w-full bg-[#2AF477] text-black px-6 py-3 rounded-full font-medium text-lg hover:bg-[#23da69] transition">
                        Start my approval
                    </button>
                    <div className="flex items-center text-sm">
                        <FaClock className="mr-2" />
                        <span>3 min | No credit impact</span>
                    </div>
                </motion.div>
                <motion.div className="flex flex-col gap-2 mt-5" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <div className='flex gap-2'>
                        <FaGoogle className="text-white text-xl" />
                        <div className="flex text-yellow-400 text-lg">
                            {[...Array(5)].map((_, i) => (
                                <FaStar size={22} key={i} />
                            ))}
                        </div>
                    </div>
                    <span className="text-sm text-white">4.6 stars | 3177 Google reviews</span>
                </motion.div>
            </div>

            <img className='md:flex hidden absolute bottom-0 2xl:left-125 lg:left-100 left-70 lg:max-w-[30%] max-w-[35%]' src={image} alt="" />
        </section>
    );
};

export default HeroSection;
