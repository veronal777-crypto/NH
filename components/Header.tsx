
import React from 'react';
import { NAV_ITEMS, SUB_NAV_ITEMS } from '../constants';

import logoImg from '../assets/images/nf_logo.png';

interface HeaderProps {
  isBigText: boolean;
  toggleBigText: () => void;
}

const Header: React.FC<HeaderProps> = ({ isBigText, toggleBigText }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-[40px]">
        <div className="flex items-center h-16 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group transition-transform hover:scale-105">
              <img
                src={logoImg}
                alt="NH NongHyup Logo"
                className="w-[176px] h-[28px] object-contain"
              />
            </a>
          </div>

          {/* Main Desktop Nav - Adjusted to left align */}
          <nav className="hidden md:flex space-x-12 ml-20">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${isBigText ? 'text-xl' : 'text-[17px]'} font-bold text-gray-700 hover:text-nh-green transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Utilities - Pushed to right with ml-auto */}
          <div className="flex items-center space-x-6 ml-auto">
            <div className="hidden lg:flex items-center space-x-6">
              {SUB_NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors">
                  {item.label}
                </a>
              ))}
            </div>



            <button className="bg-nh-green text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-blue-100">
              로그인
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;