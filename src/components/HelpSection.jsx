import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const tabs = ['Our Products', 'Calculators', 'Guides & FAQs'];

const tabData = {
    'Our Products': [
        {
            title: 'Buying your first home with Better',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Ffirst-home.webp&w=128&q=75',
        },
        {
            title: 'One Day Mortgage',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Fone-day-mortgage.webp&w=128&q=75',
            description:
                'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.',
        },
        {
            title: 'Better HELOC',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Fbetter-heloc.webp&w=128&q=75',
            description:
                'Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit.',
        },
        {
            title: 'Insurance',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Finsurance.webp&w=128&q=75',
        },
    ],
    Calculators: [
        {
            title: 'Mortgage calculator',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Fmortgage-calculator.webp&w=128&q=75',
        },
        {
            title: 'Affordability calculator',
            description:
                'Got homeownership dreams? Let’s put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Faffordability-calculator.webp&w=128&q=75',
        },
        {
            title: 'HELOC calculator',
            description:
                'Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Fheloc-calculator.webp&w=128&q=75',
        },
        {
            title: 'Fixed-rate loan comparison calculator',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Ffixed-rate-calculator.webp&w=128&q=75',
        },
    ],
    'Guides & FAQs': [
        {
            title: 'What is a good debt-to-income ratio for a home loan?',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Fgood-dti.webp&w=128&q=75',
        },
        {
            title: 'Buying a house without realtor',
            description: 'Thinking about buying a house without a real estate agent? Read this first.',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Fbuy-house-without-realtor.webp&w=128&q=75',
        },
        {
            title: 'Timeline for homebuying process',
            description:
                'Does the process of buying a home seem daunting? Don’t stress, we broke it down into 8 easy steps.',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Floan-timeline.webp&w=128&q=75',
        },
        {
            title: 'Conventional loan requirements',
            image: 'https://better-take-home.vercel.app/_next/image?url=%2Fconventional-loan.webp&w=128&q=75',
        },
    ],

};

const HelpTabs = () => {
    const [activeTab, setActiveTab] = useState('Our Products');

    return (
        <section className="bg-white py-16 px-6 lg:px-20 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className='flex justify-between lg:items-center lg:flex-row flex-col gap-3'>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e1e1e]">
                        Got Questions?<br />We've got answers
                    </h2>

                    <div className="flex gap-4 mb-10 flex-wrap">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`border px-4 py-2 rounded-full font-medium ${activeTab === tab
                                    ? 'border-[#00754a] text-[#00754a]'
                                    : 'border-gray-300 text-[#1e1e1e] hover:border-[#00754a] hover:text-[#00754a]'
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {tabData[activeTab]?.map((card, i) => (
                        <div key={i} className="bg-[#f0f8f4] rounded-xl p-6 flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[#004734]">{card.title}</h3>
                                    <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                                        <FaArrowRight className="text-[#004734]" />
                                    </div>
                                </div>
                                {card.description && (
                                    <p className="mt-2 text-sm text-[#1e1e1e]">{card.description}</p>
                                )}
                            </div>
                            {card.image && (
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="rounded-lg w-32 h-28 object-cover self-center"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HelpTabs;
