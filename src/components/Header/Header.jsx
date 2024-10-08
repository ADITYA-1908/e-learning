import { Menu } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        const footer = document.querySelector('footer');
        if (!footer || !footer.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="bg-[#081b29] shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xlg:px-0">
        <div className="flex justify-between items-center h-16"> 
          <span className="text-xl font-bold text-[#ededed]">EduVerse</span>

          <div className="hidden md:flex nav-links gap-4 lg:gap-16 items-center justify-center flex-1">
            <NavLink to="/" className="px-3 py-2 rounded-md text-sm lg:text-xl font-medium text-[#ededed] hover:text-[#00abf0] ">Home</NavLink>
            <NavLink to="/roadmap" className="px-3 py-2 rounded-md text-sm lg:text-xl font-medium text-[#ededed] hover:text-[#00abf0] ">Roadmap</NavLink>
            <NavLink to="/about" className="px-3 py-2 rounded-md text-sm lg:text-xl font-medium text-[#ededed] hover:text-[#00abf0] ">About</NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ededed] hover:bg-[#00abf0]  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#081b29] shadow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink onClick={closeMenu} to="/" className="block px-3 py-2 rounded-md text-base font-medium text-[#ededed] hover:text-[#00abf0]">Home</NavLink>
            <NavLink onClick={closeMenu} to="/roadmap" className="block px-3 py-2 rounded-md text-base font-medium text-[#ededed] hover:text-[#00abf0]">Roadmap</NavLink>
            <NavLink onClick={closeMenu} to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-[#ededed] hover:text-[#00abf0]">About</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;