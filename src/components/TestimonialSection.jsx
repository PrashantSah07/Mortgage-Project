import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = {
  Arian: {
    name: 'Arian',
    image: 'https://better-take-home.vercel.app/_next/image?url=%2Fstill-quote-Arian.webp&w=750&q=75',
  },
  Amanda: {
    name: 'Amanda',
    image: 'https://better-take-home.vercel.app/_next/image?url=%2Fstill-quote-Amanda.webp&w=750&q=75',
  },
  Paul: {
    name: 'Paul',
    image: 'https://better-take-home.vercel.app/_next/image?url=%2Fstill-quote-Paul.webp&w=750&q=75',
  },
};

const TestimonialSection = () => {
  const [selected, setSelected] = useState('Arian');
  const { image, quote, caption } = testimonials[selected];

  return (
    <section className="bg-[#fffcf7] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="rounded-3xl overflow-hidden max-w-sm relative">
          <img src={image} alt={selected} className="w-full h-full object-cover" />
          <div className="p-6 bg-gradient-to-t from-black/80 to-transparent text-white -mt-32 relative z-10">
            <p className="text-sm leading-relaxed">"{quote}"</p>
            <p className="mt-4 text-xs font-semibold">{caption}</p>
          </div>

          <div className="flex justify-center mt-16 gap-4">
            {Object.keys(testimonials).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`px-6 py-2 rounded-full border transition font-medium ${selected === key
                    ? 'border-[#00754a] text-[#00754a] border-3'
                    : 'border-gray-300 text-black hover:border-[#00754a] hover:text-[#00754a]'
                  }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1e1e1e] mb-6">
            Find out why<br />we're better
          </h2>
          <button className="bg-[#004734] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#00664f] transition mb-4">
            See all our stories
          </button>

          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm">
            <FaStar className="text-green-700" />
            <span className="font-semibold">Trustpilot</span>
            <span>
              Excellent <strong>4.4</strong> out of 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
