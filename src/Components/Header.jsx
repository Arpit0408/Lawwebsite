// src/components/Header.jsx

import React, { useState, useEffect } from 'react'; // Ensure React is imported
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  // Scroll to top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="fixed top-0 w-full bg-[rgb(39,44,63)] text-white body-font z-50">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">ADV. G. V. DESHMUKH</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 border border-gray-300 rounded text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          {isMenuOpen ? <IoMdClose className="w-6 h-6" /> : <GiHamburgerMenu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex md:items-center md:space-x-5 flex-col md:flex-row md:ml-auto mt-3 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
  <div className={`flex-col ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:space-x-5 justify-start items-start`}>
    <Link
      to="/"
      className="py-2 px-3 text-base hover:text-gray-400"
      onClick={handleLinkClick}
    >
      Home
    </Link>
    <Link
      to="/about"
      className="py-2 px-3 text-base hover:text-gray-400"
      onClick={handleLinkClick}
    >
      About Us
    </Link>
    <Link
      to="/services"
      className="py-2 px-3 text-base hover:text-gray-400"
      onClick={handleLinkClick}
    >
      Our Expertise
    </Link>
    <Link
      to="/blog"
      className="py-2 px-3 text-base hover:text-gray-400"
      onClick={handleLinkClick}
    >
      Legal Blog
    </Link>
    <Link
      to="/gallerys"
      className="py-2 px-3 text-base hover:text-gray-400"
      onClick={handleLinkClick}
    >
      Gallery
    </Link>
    <Link
      to="/contact"
      className="py-2 px-3 text-base hover:text-gray-400"
      onClick={handleLinkClick}
    >
      Contact Us
    </Link>
  </div>
</nav>


      </div>
    </header>
  );
}

export default Header;
