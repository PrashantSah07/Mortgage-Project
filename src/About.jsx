import React from 'react'
import Navbar from './components/Navbar'
import { FaPlay } from "react-icons/fa";
import posterImage from './assets/vishal-mission.webp'
import Better from './components/Better'
import Footer from './components/Footer'
import CompanyTimeline from './components/companyTimeline';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <>
            <Navbar bgColor={'white'} txtColor={'black'} />
            <div className='2xl:px-30 lg:px-20 px-5'>
                <motion.div className='flex justify-center items-center flex-col h-[90vh] gap-10 2xl:px-15' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <h1 className='text-[#109670] text-3xl font-semibold'>Our mission</h1>
                    <h1 className='lg:text-5xl text-3xl text-center font-medium'>We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h1>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-12 items-center pb-30">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                            The status quo is broken
                        </h2>
                        <p className="text-gray-700 mb-8">
                            The traditional processes around homeownership are opaque and stressful.
                            Fees aren't transparent and some are simply outrageous in size.
                            Traditional mortgage lending is rife with unnecessary fees and slow, painful processes.
                            It's a system set up to benefit insiders — not you.
                            Better.com CEO, Vishal Garg, set out to change that.
                        </p>
                        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-semibold transition">
                            Read Vishal's story
                        </button>
                    </div>

                    <a href="https://youtu.be/1KjYlLBM9j4">
                        <div className="relative w-full h-full">
                            <img
                                src={posterImage}
                                alt="Vishal Garg"
                                className="w-full h-auto rounded"
                            />
                            <button className="absolute top-[40%] left-[45%] w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                                <FaPlay size={20} />
                            </button>
                        </div>
                    </a>

                </div>
            </div>
            <div className='flex flex-col gap-14 bg-[#017848] text-white w-full py-20 2xl:px-30 lg:px-20 px-5'>
                <h1 className='text-5xl font-medium'>How we're changing things</h1>
                <div className='flex flex-col gap-7 text-[13.5px]'>
                    <p>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers'.</p>
                    <p>That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>
            </div>
            <CompanyTimeline />
            <Better />
            <Footer />
        </>
    )
}

export default About
