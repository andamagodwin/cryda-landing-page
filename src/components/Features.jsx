import React from 'react';
import { FaLock, FaCarSide, FaUsers, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaLock size={28} />,
    title: 'Secure & Transparent',
    description: 'Blockchain ensures every ride is logged, traceable, and tamper-proof. No more hidden fees or privacy risks.',
  },
  {
    icon: <FaCarSide size={28} />,
    title: 'Smarter Ride Pooling',
    description: 'Cryda matches you with nearby riders going your way, reducing costs and traffic while saving the planet.',
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Community-Driven',
    description: 'Earn tokens by riding, sharing, or driving. Everyone benefits — not just a corporation.',
  },
  {
    icon: <FaBolt size={28} />,
    title: 'AI-Powered Matching',
    description: 'Our intelligent engine connects drivers and riders instantly with optimized routes and timing.',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-white text-black px-6 py-20 md:px-12 lg:px-24 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Choose Cryda?</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-[#FFDE21] hover:shadow-lg transition-all"
          >
            <div className="text-[#019875] mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
