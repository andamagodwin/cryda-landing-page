import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#FFDE21] text-black px-4 pt-24"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Smart Ride Pooling<br />Powered by Blockchain
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Welcome to <span className="font-semibold">Cryda</span> — the decentralized, AI-driven platform
        for affordable, safe, and smart transportation. Earn tokens. Share rides. Own the road.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://play.google.com/store/apps/details?id=com.cryda.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#019875] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#007B5F] transition-colors"
        >
          Download App
        </a>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="cursor-pointer px-6 py-3 text-[#019875] border border-[#019875] rounded-full text-lg font-semibold hover:bg-[#019875] hover:text-white transition-colors"
        >
          Explore Features
        </Link>
      </div>
    </section>
  );
};

export default Hero;
