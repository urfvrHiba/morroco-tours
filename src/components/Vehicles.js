import React from 'react';
import { useNavigate } from 'react-router-dom';

import merssidesImg from '../images/merssides.jpg';
import vehicle2Img from '../images/V2.jpg';
import vehicle3Img from '../images/v3.jpg';

function Vehicles() {
  const navigate = useNavigate();

  const whatsappNumber = "212688001703"; 
  const vehicles = [
    {
      image: merssidesImg,
      name: "Mercedes S Class",
      capacity: "3–4 Passengers",
      description:
        "La Mercedes S-Class est l'incarnation du luxe et de la sophistication. Parfaite pour les VIP.",
    },
    {
      image: vehicle2Img,
      name: "Mercedes Class V",
      capacity: "7 Passengers",
      description:
        "Idéale pour les familles ou les petits groupes. Intérieur spacieux et élégant ,confort et équipements modernes..",
    },
    {
      image: vehicle3Img,
      name: "Mercedes Sprinter",
      capacity: "16 Passengers",
      description:
        "Idéal pour les grands groupes, offrant espace, confort et équipements modernes.",
    },
  ];

  const handleBookNow = (vehicleName) => {
    navigate(`/booking?vehicle=${encodeURIComponent(vehicleName)}`);
  };

  const handleWhatsApp = (vehicleName) => {
    const message = `Hello, I'm interested in the ${vehicleName}. Can you provide more details?`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="my-20 px-5 md:px-20">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
        Our Fleet of Vehicles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                {vehicle.name}
              </h3>
              <p className="text-gray-600 mb-2">{vehicle.description}</p>
              <p className="text-blue-900 font-bold mb-4">
                Capacity: {vehicle.capacity}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleBookNow(vehicle.name)}
                  className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors w-full"
                >
                  Book Now
                </button>

                <button
                  onClick={() => handleWhatsApp(vehicle.name)}
                  className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition-colors w-full"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
