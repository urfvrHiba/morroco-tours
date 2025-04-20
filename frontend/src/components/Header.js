import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';

function Header() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 shadow-lg px-4 md:px-20 transition-all duration-500">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 text-gray-800 text-sm md:text-base font-light animate-fadeIn">
        <div className="flex space-x-4 text-blue-900 italic">
          <span>📞 +212 612-345678</span>
          <span>✉️ info@moroccotours.com</span>
        </div>

        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-700 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-600 transition-transform duration-300 hover:scale-110" />
          </a>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-lg text-blue-800" />
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-transparent text-blue-800 italic font-semibold focus:outline-none"
            >
              <option value="English">English</option>
              <option value="Français">Français</option>
              <option value="Español">Español</option>
            </select>
          </div>

          {/* Auth Buttons */}
          <button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform duration-300 shadow">
            Sign In
          </button>
          <button className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform duration-300 shadow">
            Sign Out
          </button>
        </div>
      </div>

      {/* Logo & Navigation */}
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 italic animate-fadeSlideIn">
          Morocco <span className="text-blue-700">Tours & Transfers</span>
        </h1>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6 md:space-x-12 text-gray-800 text-sm md:text-base font-medium uppercase">
            {['Home', 'Vehicles', 'About Us', 'Contact Us', 'Tours'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="relative group inline-block transition-all duration-300"
                >
                  <span className="group-hover:text-blue-700 transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}

            {/* Currency Selector */}
            <li>
              <select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className="bg-transparent text-gray-700 font-semibold italic focus:outline-none hover:text-blue-700 transition-all duration-300"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CNY">CNY</option>
                <option value="RUB">RUB</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
