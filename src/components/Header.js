import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    <header className="bg-white shadow-md px-5 w-full mb-2">
      <div className="flex justify-between items-center py-2 text-gray-700 text-sm md:text-base px-10 md:px-20 italic">
        <div className="flex space-x-4 md:space-x-6">
          <span className="text-blue-600">📞 +212 612-345678</span>
          <span className="text-blue-600">✉️ info@moroccotours.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-lg hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-lg hover:text-pink-500" />
          </a>
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
        </div>
      </div>

      <div className="flex justify-between items-center py-5 px-10 md:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 italic">
          Morocco <span className="text-blue-600">Tours & Transfers</span>
        </h1>
        <nav>
          <ul className="flex space-x-4 text-gray-700 md:space-x-14 text-sm md:text-base font-medium uppercase">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/vehicles" className="hover:text-blue-600">Vehicles</Link></li>
            
            <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            <li><a href="#tours" className="hover:text-blue-600">Tours</a></li>
            <li><Link to="/aboutUs" className="hover:text-blue-600">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;