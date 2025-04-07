import React from 'react';
import { useNavigate } from 'react-router-dom';

import merssidesImg from '../images/merssides.jpg'; 
import vehicle2Img from '../images/V2.jpg'; 
import vehicle3Img from '../images/v3.jpg';

function Vehicles() {
  const navigate = useNavigate();

  const vehicles = [
    {
      image: merssidesImg,
      title:(
        <h3 className="text-blue-600 font-semibold">
           Mercedes S Class
          </h3>
      ),
      description: (
        <div>
          <p>"La Mercedes S-Class est l'incarnation du luxe et de la sophistication. Parfaite pour les VIP."</p>
          <p className="text-blue-900 font-semibold">Capacity: 3–4 Passengers</p>
        </div>
      ),
    },
    {
      image: vehicle2Img,
      title: (
        <h3 className="text-blue-600 font-semibold">
          Mercedes Class V
        </h3>
      ),
      description: (
        <div>
          <p>Idéale pour les visites en famille ou en groupe avec un espace supplémentaire pour les bagages.</p>
          <p className="text-blue-900 font-semibold">Capacity: 7 Passengers</p>
        </div>
      ),
    },
    
    {
      image: vehicle3Img,
      title:(
        <h3 className="text-blue-600 font-semibold">
          Mercedes Sprinter
          </h3>
      ) ,
      description: (
        <div>
          <p>"Conçu pour les grands groupes, le Mercedes Sprinter offre une capacité et un confort inégalés"</p>
          <p className="text-blue-900 font-semibold">Capacity: 16 Passengers</p>
        </div>
      ),
    },
  ];

  const handleBookNow = (vehicleType) => {
    navigate(`/booking?vehicle=${encodeURIComponent(vehicleType)}`);
  };

  return (
    <div className="my-20 px-10 md:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Fleet of Vehicles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img 
              src={vehicle.image} 
              alt={vehicle.title} 
              className="w-full h-56 object-cover" 
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{vehicle.title}</h3>
              <p className="text-gray-600">{vehicle.description}</p>
              <button
                onClick={() => handleBookNow(vehicle.title)}
                className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 mt-4 rounded-full"
              >
                
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
