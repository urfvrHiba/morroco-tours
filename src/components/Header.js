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
    <header className="absolute top-0 left-0 right-0 z-10 bg-white shadow-md px-5">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2 text-gray-700 text-sm md:text-base px-10 md:px-20 italic">
        <div className="flex space-x-4 md:space-x-6">
          <span className="text-blue-600 text-sm md:text-base">📞 +212 612-345678</span>
          <span className="text-blue-600 text-sm md:text-base">✉️ info@moroccotours.com</span>
        </div>

        {/* Social Icons & Language Selector */}
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-lg hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-lg hover:text-pink-500" />
          </a>

          {/* Language Selector */}
          <div className="flex items-center space-x-3">
            <FaGlobe className="text-lg" />
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-transparent border-none text-blue-600 text-base focus:outline-none italic"
            >
              <option value="English">English</option>
              <option value="Français">Français</option>
              <option value="Español">Español</option>
            </select>
          </div>

          {/* Sign In / Sign Out Buttons */}
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm md:text-base hover:bg-blue-800 transition-all">
            Sign In
          </button>
          <button className="bg-gray-600 text-white px-4 py-1 rounded-md text-sm md:text-base hover:bg-gray-800 transition-all">
            Sign Out
          </button>
        </div>
      </div>

      {/* Logo & Menu */}
      <div className="flex justify-between items-center py-5 px-10 md:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 italic">
          Morocco <span className="text-blue-600">Tours & Transfers</span>
        </h1>

        <nav>
          <ul className="flex space-x-4 text-gray-700 md:space-x-14 text-sm md:text-base font-medium uppercase">
            <li><a href="#home" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-500 transition-all pb-2 md:pb-3 italic">Home</a></li>
            <li><a href="#vehicles" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-500 transition-all pb-2 md:pb-3 italic">Vehicles</a></li>
            <li><a href="#about" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-500 transition-all pb-2 md:pb-3 italic">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-500 transition-all pb-2 md:pb-3 italic">Contact Us</a></li>
            <li><a href="#tours" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-500 transition-all pb-2 md:pb-3 italic">Tours</a></li>

            {/* Currency Selection */}
            <li className="ml-4 md:ml-10">
              <select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className="bg-transparent border-none text-gray-700 text-sm md:text-base focus:outline-none italic"
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
