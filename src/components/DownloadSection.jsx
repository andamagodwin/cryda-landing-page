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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Cryda Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Take control of your commute. Ride with confidence, save money, and earn tokens while sharing rides.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.cryda.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#019875] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#007B5F] transition-colors inline-block"
          >
            Get it on Google Play
          </a>

          {/* Optional QR */}
          <div className="mt-6 hidden sm:flex items-center space-x-4">
            <img src="/qr-code.jpg" alt="Cryda QR Code" className="w-24 h-24 rounded-md shadow" />
            <p className="text-sm text-gray-600">Scan to install on your Android device</p>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="w-full md:w-1/2">
          <img
            src="/phone.png"
            alt="Cryda App Mockup"
            className="w-full max-w-xs mx-auto md:max-w-sm drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
