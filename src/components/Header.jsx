import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Features', to: 'features' },
    { name: 'How it Works', to: 'howItWorks' },
    { name: 'Download', to: 'download' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#FFDE21] to-[#FFD700] text-black shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo-black.png" alt="Cryda Logo" className="h-14 w-14" />
          <span className="text-2xl font-bold tracking-tight">Cryda</span>
          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#019875] cursor-pointer transition-colors"
              activeClass="text-[#019875] font-semibold"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.cryda.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#019875] text-white px-4 py-2 rounded-full hover:bg-[#007B5F] transition-colors"
          >
            Download App
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#FFDE21] px-4 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#019875] cursor-pointer transition-colors"
              activeClass="text-[#019875] font-semibold"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.cryda.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#019875] text-white px-4 py-2 rounded-full hover:bg-[#007B5F] text-center"
          >
            Download App
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
