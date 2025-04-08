import React from "react";
import { Link } from "react-router-dom";
import { MapIcon } from "@heroicons/react/solid";

import voitureImg from '../images/voiture.webp';

function Services() {
  const allServices = [
    {
      title: "Affordable Luxury",
      description:
        "Enjoy the perfect blend of comfort and affordability with our premium services, offering a luxurious travel experience within your budget.",
    },
    {
      title: "Exceptional Service",
      description:
        "Experience professionalism and dedication with our customer-centric approach, ensuring every journey exceeds your expectations.",
    },
    { 
      title: "Tailored Solutions",
      description:
        "We customize travel plans to suit your unique preferences and needs, ensuring a personalized and seamless experience.",
    },
    {
      title: "Expert Knowledge",
      description:
        "Explore Morocco's hidden gems and cultural treasures guided by our experienced team, ensuring authentic and enriching experiences.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero image section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${voitureImg})` }}
      >
<<<<<<< HEAD
        {allServices.length === 0 ? (
          <p className="text-red-500 text-xl">No services available</p>
        ) : (
          <div className="flex gap-3 justify-center w-full flex-wrap mt-[-50px]">
            {allServices.map((pkg, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg font-bold overflow-hidden w-80 p-2"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-900">{pkg.description}</p>
              </div>
                                    
            ))}
          </div>
        )}
=======
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold italic text-center drop-shadow-xl">
            Discover Morocco in Style
          </h1>
        </div>
>>>>>>> 2829c686e3743a4788b38583158d11cd59629550
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-10 italic text-center">
          Why Choose Our Services?
        </h2>

        <div className="flex gap-6 justify-center flex-wrap max-w-6xl">
          {allServices.map((pkg, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 w-80"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {pkg.title}
              </h3>
              <p className="text-gray-800">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="px-6 md:px-20 mb-10">
        <div className="flex items-center mb-6">
          <MapIcon className="h-8 w-8 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-700 italic">
            Popular Destinations
          </h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Morocco’s most popular tourist destinations offer a rich blend of culture, history, and natural beauty.{" "}
          <Link to="/destinations/Marrakech" className="text-blue-600 font-bold italic hover:underline">
            Marrakech Safi
          </Link>{" "}
          enchants visitors with its vibrant medina, souks, and landmarks like Jemaa el-Fnaa.{" "}
          <Link to="/destinations/Ouarzazate" className="text-gray-900 font-bold italic hover:underline">
            Ouarzazate
          </Link>{" "}
          is known for its ancient walled city and the world’s oldest university.{" "}
          <Link to="/destinations/Chefchaouen" className="text-blue-600 font-bold italic hover:underline">
            Chefchaouen
          </Link>{" "}
          captivates with its striking blue-painted streets.{" "}
          <Link to="/destinations/tanger" className="text-gray-900 font-bold italic hover:underline">
            Tanger
          </Link>{" "}
          offers unforgettable desert adventures, while{" "}
          <Link to="/destinations/Essaouira" className="text-blue-600 font-bold italic hover:underline">
            Essaouira
          </Link>{" "}
          and{" "}
          <Link to="/destinations/Agadir" className="text-blue-600 font-bold italic hover:underline">
            Agadir
          </Link>{" "}
          attract beach lovers. And finally,{" "}
          <Link to="/destinations/Rabat" className="text-gray-900 font-bold italic hover:underline">
            Rabat
          </Link>{" "}
          reflects Morocco's diverse charm as its capital.
        </p>
      </div>
    </div>
  );
}

export default Services;
