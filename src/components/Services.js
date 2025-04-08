import React from "react";
import { Link } from "react-router-dom";
import { MapIcon } from "@heroicons/react/solid";

function Services() {
  const bgImage = "/voiture.webp";

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
    <div className="bg-white py-12 min-h-screen flex flex-col items-center px-6">
      <h2 className="text-4xl font-bold text-gray-700 mb-10 italic text-center">
        Why Choose Our Services?
      </h2>

      <div
        id="home"
        className="bg-cover bg-center h-[70vh] flex flex-col items-center justify-center text-center transition-all duration-1000 ease-in-out mt-16 pt-6 italic"
        style={{
          backgroundImage: `url(${bgImage})`,  
          backgroundPosition: "center top",
        }}
      >
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
      </div>

      {/* Popular Destinations Section */}
      <div className="bg-white rounded-lg p-4 px-20 flex flex-col justify-between mb-10">
        <div className="flex items-center mb-6">
          {/* Icône de localisation */}
          <MapIcon className="h-8 w-8 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-700 italic">
            Popular Destinations
          </h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Morocco’s most popular tourist destinations offer a rich blend of
          culture, history, and natural beauty.
          <Link
            to="/destinations/Marrakech"
            className="font-semibold text-xl font-bold text-blue-600 hover:underline italic"
          >
            Marrakech Safi
          </Link>{" "}
          enchants visitors with its vibrant medina, souks, and landmarks like
          Jemaa el-Fnaa. 
          <Link
            to="/destinations/Ouarzazate"
            className="font-semibold text-xl font-bold text-gray-900 hover:underline italic"
          >
            Ouarzazate
          </Link>{" "}
          is known for its ancient walled city and the world’s oldest university. 
          <Link
            to="/destinations/Chefchaouen"
            className="font-semibold text-xl font-bold text-blue-600 hover:underline italic"
          >
            Chefchaouen
          </Link>{" "}
          , the “Blue City,” captivates with its striking blue-painted streets.
          <Link
            to="/destinations/tanger"
            className="font-semibold text-xl font-bold text-gray-900 hover:underline italic"
          >
           tanger
          </Link>{" "}
          offers unforgettable desert adventures, while{" "}
          <Link
            to="/destinations/Essaouira"
            className="font-semibold text-xl font-bold text-blue-600 hover:underline italic"
          >
            Essaouira
          </Link>{" "}
          and{" "}
          <Link
            to="/destinations/Agadir"
            className="font-semibold text-xl font-bold text-blue-600 hover:underline italic"
          >
            Agadir
          </Link>{" "}
          attract beach lovers. And finally,{" "}
          <Link
            to="/destinations/Rabat"
            className="font-semibold text-xl font-bold text-gray-900 hover:underline italic"
          >
            Rabat
          </Link>{" "}
          reflects Morocco’s diverse charm as its capital.
        </p>
      </div>
    </div>
  );
}

export default Services;
