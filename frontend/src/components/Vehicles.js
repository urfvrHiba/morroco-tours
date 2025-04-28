import React from 'react';
import placeholder from '../images/placeholder.jpg'; // ✅ chemin correct

function Vehicles() {
  const cars = [
    { name: "Luxury Mercedes", image: placeholder },
    { name: "Comfort Van", image: placeholder },
    { name: "Economy Car", image: placeholder },
  ];

  return (
    <div className="py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 italic">Our Vehicles</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 w-80">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">{car.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
