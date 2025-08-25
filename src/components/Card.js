// components/HowItWorksSection.jsx

import { useState } from 'react';

const steps = [
  {
    title: 'Train Rural Entrepreneurs',
   
  },
  {
    title: 'Register Farmers',
    
  },
  {
    title: 'Monitor With Tech',
   
  },
  {
    title: 'Trained Personal Generate Credits',
    
  },
];

export default function HowItWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-[#F5F5F5] py-20 px-6 font-merriweather">
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">How it works</h2>
    <p className="text-lg md:text-xl text-[#808080] mb-12">
      From collecting waste to generating income — see how climate action happens on the ground.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-full max-w-[256px] aspect-square flex flex-col justify-end transition-all duration-300 p-6 rounded-xl shadow-md cursor-pointer ${
            hoveredIndex === index
              ? 'bg-[#1E4F24] text-white shadow-xl opacity-100 scale-105'
              : 'bg-white text-black opacity-90'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 className="text-lg font-semibold">{step.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}


