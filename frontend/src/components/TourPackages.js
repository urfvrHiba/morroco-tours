import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import casablancaImg from '../images/casablanca.jpg';
import essaouiraImg from '../images/Essaouira.jpg';
import ouarzazateImg from '../images/ouarzazatee.jpg';
import chaouenImg from '../images/chaouen.jpg';
import agadirImg from '../images/agadir.jpg';
import marrakeshImg from '../images/marakesh.jpg';
import tangierImg from '../images/tangier.jpg';
import rabatImg from '../images/rabat.jpg';


function TourPackages() {
  // Define tour packages data
  const allPackages = [
    { title: "4-Day Epic Adventure: Casablanca, Marrakech, Agafay, Rabat & More", imageUrl: casablancaImg, duration: "4 Days", oldPrice: "$399", newPrice: "$299", discount: "25%" },
    { title: "Experience Essaouira in a Day: Private Tour of History & Culture", imageUrl: essaouiraImg, duration: "3 Days", oldPrice: "$320", newPrice: "$280", discount: "12%" },
    { title: "ONE Day Tour in Ouarzazate Traditional Lunch included", imageUrl: ouarzazateImg, duration: "1 Day", oldPrice: "$150", newPrice: "$120", discount: "20%" },
    { title: "Chefchaouen: The Blue Pearl", imageUrl: chaouenImg, duration: "2 Days", oldPrice: "$220", newPrice: "$185", discount: "15%" },
    { title: "2-Day Agadir Tour: Explore Agadir", imageUrl: agadirImg, duration: "2 Days", oldPrice: "$600", newPrice: "$450", discount: "10%" },
    { title: "Experience Marrakech in a Day: Explore Palaces, Souks & Gardens", imageUrl: marrakeshImg, duration: "3 Days", oldPrice: "$300", newPrice: "$260", discount: "13%" },
    { title: "Explore Tangier: A One-Day Private Tour of Culture & Scenery", imageUrl: tangierImg, duration: "1 Day", oldPrice: "$199", newPrice: "$177", discount: "" },
    { title: "Discover Rabat: One-Day Private Tour of History, Culture & Landmarks", imageUrl: rabatImg, duration: "1 Day", oldPrice: "$199", newPrice: "$177", discount: "" },
  ];

  const reviews = [
    { name: "SHAMEEMA ADAMS (SOUTH AFRICA)", review: "They provided excellent transfer and tours. If you are looking for a reliable, efficient company then look no further. We were a family of 8 and they arranged everything from airport pickup and did our full transfer for 13 days throughout Morocco. Fantastic! More than what was expected.", rating: 5 },
    { name: "AMANDA NAAMI (IRELAND)", review: "We had to travel recently for a family bereavement and Rashid could not have been more accommodating. He did everything he could to help us. Highly recommended!", rating: 5 },
    { name: "NADIA L. (UK)", review: "Great service! Very professional and on time. Will book again for sure!", rating: 5 },
    { name: "MARTIN S. (GERMANY)", review: "The tour guide was exceptional, and the experience was very well planned. Morocco has never been more beautiful than through their eyes!", rating: 5 },
    { name: "JULIE B. (USA)", review: "Fantastic trip! Everything was well organized, and the local guides were extremely knowledgeable and friendly. Highly recommend Morocco Tours!", rating: 5 },
    { name: "ROBERTO M. (SPAIN)", review: "An amazing adventure! The culture and history of Morocco are truly impressive. The company took great care of us, providing excellent tours and service.", rating: 5 },
  ];


  // Set the state for the current page of packages being displayed
  const [currentPage, setCurrentPage] = useState(0);

  // Handle next page navigation
  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % Math.max(1, allPackages.length - 3));
  };

  // Handle previous page navigation
  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + Math.max(1, allPackages.length - 3)) % Math.max(1, allPackages.length - 3));
  };

  // Displayed packages based on current page
  const displayedPackages = allPackages.slice(currentPage, currentPage + 3);

  return (
    <div className="bg-[#E6F0FA] py-12 min-h-screen flex flex-col items-center px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 italic">Popular Tour Packages</h2>

      <div className="relative flex items-center w-full max-w-6xl">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-[-50px] bg-gray-600 p-3 rounded-full text-white shadow-md hover:bg-blue-600 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Packages */}
        <div className="flex gap-6 justify-center w-full">
          {displayedPackages.map((pkg, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden w-80 border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Discount Badge */}
              {pkg.discount && (
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {pkg.discount} Off
                </div>
              )}

              {/* Image */}
              <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-40 object-cover" />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold uppercase text-gray-900">{pkg.title}</h3>

                {/* Duration */}
                <p className="text-gray-600 text-sm mt-2 flex items-center italic">
                  ⏳ {pkg.duration}
                </p>

                {/* Price */}
                <div className="mt-2">
                  <span className="text-gray-400 line-through mr-2 text-sm">{pkg.oldPrice}</span>
                  <span className="text-blue-600 font-bold text-lg">{pkg.newPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-[-50px] bg-gray-600 p-3 rounded-full text-white shadow-md hover:bg-blue-600 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* "All Tours" Button */}
      <div className="w-full max-w-6xl flex justify-end">
        <button className="mt-10 text-xl px-10 py-2 bg-[#E6F0FA] text-blue-600 font-semibold italic">
          ALL TOURS
        </button>
      </div>

      {/* Google Reviews Section */}
      <h2 className="text-4xl font-bold text-gray-800 mt-16 mb-8 italic">Google Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Display Reviews */}
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-sm">{review.review}</p>
            <div className="mt-2">
              <p className="font-semibold">{review.name}</p>
              <div className="flex items-center mt-1">
                {[...Array(review.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TourPackages;
