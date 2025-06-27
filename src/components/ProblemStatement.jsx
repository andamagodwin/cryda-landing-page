import React from 'react';

const ProblemStatement = () => {
  return (
    <section id="problem" className="bg-white text-black px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center h-96">
            <div className="relative">
              <img
                src="/dizzy-face-pana.svg"
                alt="Transportation challenges illustration"
                className="w-full max-w-md h-auto drop-shadow-2xl opacity-80"
                loading="lazy"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FFDE21] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#019875] rounded-full opacity-20 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -right-4 w-6 h-6 bg-[#019875] rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#FFDE21] text-[#019875] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  The Problem
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Transportation is
                <br />
                <span className="text-[#019875]">Broken</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Traditional ride-sharing platforms take massive cuts, drivers struggle to earn fair wages, 
                and passengers face unpredictable pricing with zero transparency.
              </p>
            </div>

            {/* Problem Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High Commission Fees</h3>
                  <p className="text-gray-600">Platforms take 20-30% commissions, leaving drivers with unfair earnings while passengers pay premium prices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lack of Transparency</h3>
                  <p className="text-gray-600">Opaque pricing algorithms and hidden fees create distrust between all parties in the ecosystem.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Community Ownership</h3>
                  <p className="text-gray-600">Users have no stake in the platform's success, creating a disconnect between value creation and reward distribution.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <div className="bg-[#FFDE21] p-6 rounded-2xl">
                <p className="text-lg font-semibold text-[#019875] mb-2">
                  It's time for a change.
                </p>
                <p className="text-gray-800">
                  Cryda reimagines transportation with blockchain technology, putting power back in the hands of the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
