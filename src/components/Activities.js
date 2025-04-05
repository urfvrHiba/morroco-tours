import React from "react";
import { Link } from "react-router-dom";
import { FaHiking, FaCity, FaLandmark, FaSpa, FaUmbrellaBeach, FaGift, FaCampground, FaUsers, FaFacebookF, FaInstagram } from "react-icons/fa";

function Activities() {
  return (
    <div>
      <div className="bg-white rounded-lg p-4 px-20 flex flex-col justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-700 italic mb-6 flex items-center">
          <span className="text-blue-600 mr-4">🧭</span> Browse Tours By Activity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          {/* Outdoor Activities */}
          <Link to="/activities?type=outdoor" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaHiking className="text-blue-500" /> Outdoor Activities
          </Link>

          {/* City Tours */}
          <Link to="/activities?type=city-tours" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaCity className="text-blue-500" /> City Tours
          </Link>

          {/* Cultural & Thematic Tours */}
          <Link to="/activities?type=cultural" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaLandmark className="text-blue-500" /> Cultural & Thematic Tours
          </Link>

          {/* Indulgence & Luxury Tours */}
          <Link to="/activities?type=luxury" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaSpa className="text-blue-500" /> Indulgence & Luxury Tours
          </Link>

          {/* Family Friendly Tours */}
          <Link to="/activities?type=family" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaUsers className="text-blue-500" /> Family Friendly Tours
          </Link>

          {/* Relaxation Tours */}
          <Link to="/activities?type=relaxation" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaUmbrellaBeach className="text-blue-500" /> Relaxation Tours
          </Link>

          {/* Holiday & Seasonal Tours */}
          <Link to="/activities?type=holiday" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaGift className="text-blue-500" /> Holiday & Seasonal Tours
          </Link>

          {/* Wild & Adventure Tours */}
          <Link to="/activities?type=adventure" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaCampground className="text-blue-500" /> Wild & Adventure Tours
          </Link>
        </div>
      </div>

      {/* Bottom Section with 3 Columns */}
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

        {/* Second Column - Top Destinations */}
        <div className="flex flex-col justify-between w-1/3">
          <h3 className="text-xl font-bold mb-4">Top Destinations</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Example city images */}
            <div className="flex flex-col items-center">
              <img src="casa.jpg" alt="Casablanca" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Casablanca</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="marrakesh.jpg" alt="Marrakech" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Marrakech</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="rabatt.jpg" alt="Rabat" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Rabat</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="tanger.jpg" alt="Tangier" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Tangier</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="agadir.jpg" alt="Agadir" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Agadir</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="chefchaouen.jpg" alt="Chefchaouen" className="w-20 h-20 object-cover rounded-full mb-2" />
              <p className="text-sm">Chefchaouen</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-l-2 border-gray-500"></div>

        {/* Third Column - Contact Us */}
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
           {/* Social Media Icons */}
           <div className="flex mt-3 gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:text-blue-700">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:text-blue-700">
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

      {/* Footer Section with Copyright */}
      <div className="bg-gray-800 text-white text-center p-4">
        <p className="text-sm">
          &copy; 2025 Morocco Tours & Transfers, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Activities;
