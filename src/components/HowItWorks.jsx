import React from 'react';
import { FaDownload, FaRoute, FaCoins } from 'react-icons/fa';

const steps = [
  {
    icon: <FaDownload size={28} />,
    title: '1. Download the App',
    description: 'Get Cryda from the Play Store, sign up, and set your ride preferences.',
  },
  {
    icon: <FaRoute size={28} />,
    title: '2. Pool Your Ride',
    description: 'Join or offer a ride. Our AI pairs you with nearby travelers heading your way.',
  },
  {
    icon: <FaCoins size={28} />,
    title: '3. Earn & Save',
    description: 'Save money by splitting costs or earn tokens for offering rides. It’s a win-win.',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="bg-[#FFFAE6] text-black px-6 py-20 md:px-12 lg:px-24 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-[#FFDE21] bg-white shadow hover:shadow-lg transition-all"
          >
            <div className="text-[#019875] mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
