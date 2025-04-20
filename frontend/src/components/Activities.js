import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHiking,
  FaCity,
  FaLandmark,
  FaSpa,
  FaUmbrellaBeach,
  FaGift,
  FaCampground,
  FaUsers,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

// Import des images depuis src/img
import casablancaImg from "../images/test.jpg";
import marrakechImg from "../images/marakesh.jpg";
import rabatImg from "../images/rabatt.jpg";
import tangerImg from "../images/tangier.jpg";
import agadirImg from "../images/agadir.jpg";
import chaouenImg from "../images/chaouen.jpg";

function Activities() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  console.log("Activité sélectionnée :", type);

  return (
    <div>
      <div className="bg-white rounded-lg p-4 px-20 flex flex-col justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-700 italic mb-6 flex items-center">
          <span className="text-blue-600 mr-4">🧭</span> Browse Tours By Activity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <Link to="/activities?type=outdoor" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaHiking className="text-blue-500" /> Outdoor Activities
          </Link>
          <Link to="/activities?type=city-tours" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaCity className="text-blue-500" /> City Tours
          </Link>
          <Link to="/activities?type=cultural" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaLandmark className="text-blue-500" /> Cultural & Thematic Tours
          </Link>
          <Link to="/activities?type=luxury" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaSpa className="text-blue-500" /> Indulgence & Luxury Tours
          </Link>
          <Link to="/activities?type=family" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaUsers className="text-blue-500" /> Family Friendly Tours
          </Link>
          <Link to="/activities?type=relaxation" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaUmbrellaBeach className="text-blue-500" /> Relaxation Tours
          </Link>
          <Link to="/activities?type=holiday" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaGift className="text-blue-500" /> Holiday & Seasonal Tours
          </Link>
          <Link to="/activities?type=adventure" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaCampground className="text-blue-500" /> Wild & Adventure Tours
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 text-white p-8 flex gap-5">
        {/* First Column */}
        <div className="flex flex-col justify-between w-1/3">
          <h3 className="text-xl font-bold mb-6">Morocco Tours & Transfer</h3>
          <p className="text-sm mb-8">
            Explore seamless city-to-city transfers and captivating tours across Morocco with Morocco Tours & Transfers. From Casablanca to Marrakech, Rabat, Tangier, and beyond. We ensure your travels are safe, swift, and unforgettable.
            <Link to="/about-us" className="text-blue-400 hover:text-blue-600 transition duration-200 ml-2">
              Read More...
            </Link>
          </p>
          <Link to="/tours" className="text-blue-400 hover:text-blue-600 transition duration-200">
            Explore Tours
          </Link>
        </div>

        {/* Divider */}
        <div className="border-l-2 border-gray-500"></div>

        {/* Second Column */}
        <div className="flex flex-col justify-between w-1/3">
          <h3 className="text-xl font-bold mb-4">Top Destinations</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img src={casablancaImg} alt="Casablanca" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Casablanca</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={marrakechImg} alt="Marrakech" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Marrakech</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={rabatImg} alt="Rabat" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Rabat</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={tangerImg} alt="Tangier" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Tanger</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={agadirImg} alt="Agadir" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Agadir</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={chaouenImg} alt="Chefchaouen" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Chefchaouen</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-l-2 border-gray-500"></div>

        {/* Third Column */}
        <div className="flex flex-col justify-between w-1/3">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-sm">
            <strong>Address:</strong> 15 Rue Taoufik Al Hakim, Casablanca 20250, Morocco
          </p>
          <p className="text-sm">
            <strong>Whatsapp:</strong> +212 711 90 90 99
          </p>
          <p className="text-sm">
            <strong>Email:</strong> support@ma-tours.com
          </p>
          <div className="flex mt-3 gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="mt-4">
            <Link to="/terms" className="text-blue-400 hover:text-blue-600 transition duration-200 text-sm">
              Terms and Conditions
            </Link>
            <br />
            <Link to="/privacy" className="text-blue-400 hover:text-blue-600 transition duration-200 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center p-4">
        <p className="text-sm">
          &copy; 2025 Morocco Tours & Transfers, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Activities;
