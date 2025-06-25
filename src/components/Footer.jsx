import React from 'react';
import { FaFacebookF, FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FFDE21] text-black py-10 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Cryda 🚐</h2>
          <p className="text-sm mt-1 text-gray-700">
            Decentralized Ride Pooling. Made for Africa. Powered by Blockchain.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#howItWorks" className="hover:underline">How It Works</a>
          <a href="#download" className="hover:underline">Download</a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/crydaapp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#019875]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/crydaapp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#019875]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me/cryda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#019875]"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-600 mt-6 border-t pt-4">
        &copy; {new Date().getFullYear()} Cryda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
