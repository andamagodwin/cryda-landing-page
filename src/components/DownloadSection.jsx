import React from 'react';

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="bg-white text-black px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#019875]">
            Get Ready for the Future of Ride-Sharing
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Cryda is revolutionizing transportation with blockchain technology. Experience seamless ride-sharing, 
            earn crypto rewards, and be part of a decentralized mobility ecosystem that puts users first.
          </p>
          
          {/* Features List */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-[#019875] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Earn crypto tokens for every ride</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-[#019875] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Secure blockchain-powered transactions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-[#019875] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Community-driven platform</span>
            </div>
          </div>

          <button
            disabled
            className="bg-gray-400 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-not-allowed opacity-75 inline-block mb-4"
          >
            App Coming Soon
          </button>
          
          <p className="text-sm text-gray-500">
            Join our waitlist and be the first to experience the future of transportation
          </p>
        </div>

        {/* App Preview */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative">
            <img
              src="/cryda-home.png"
              alt="Cryda App Preview"
              className="w-full max-w-sm mx-auto drop-shadow-2xl rounded-xl"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFDE21] rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#019875] rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
