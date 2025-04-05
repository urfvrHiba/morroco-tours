import React from "react";
import { Link } from "react-router-dom";

function Destinations() {
  return (
    <div className="bg-white py-12 min-h-screen flex flex-col items-center px-6">
      <h2 className="text-4xl font-bold text-blue-600 mb-10 italic text-center">
        All Destinations
      </h2>

      <div className="max-w-4xl w-full">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Discover the top destinations in Morocco and plan your next adventure:
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            to="/destinations/marrakech"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Marrakech Safi
          </Link>
          <Link
            to="/destinations/chefchaouen"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Chefchaouen & Tanger
          </Link>
          <Link
            to="/destinations/ouarzazate"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Ouarzazate
          </Link>
          <Link
            to="/destinations/essaouira"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Essaouira
          </Link>
          <Link
            to="/destinations/agadir"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Agadir
          </Link>
          <Link
            to="/destinations/rabat"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Rabat & Casablanca
          </Link>
          {/* Ajoute d'autres destinations ici si nécessaire */}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
