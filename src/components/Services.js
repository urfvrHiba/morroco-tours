import React , { useState } from 'react';
import { motion } from "framer-motion";

function Services(){
    const [bgImage, setBgImage] = useState('/casa.jpg');
    const allServices = [
    {
        title: "Affordable Luxury",
        description: (
        <>
          <p>Enjoy the perfect blend of comfort and affordability with our premium services, offering a luxurious travel experience within your budget.</p>
        </>
      )
    },
    {
        title: "Exceptional Service",
        description: (
        <>
          <p>Experience professionalism and dedication with our customer-centric approach, ensuring every journey exceeds your expectations.</p>
        </>
      )
    },
    {
      title: "Tailored Solutions",
      description: (
      <>
        <p>Experience professionalism and dedication with our customer-centric approach, ensuring every journey exceeds your expectations.</p>
      </>
    )
  },
  {
    title: "Expert Knowledge",
    description: (
    <>
      <p>Explore Morocco's hidden gems and cultural treasures guided by our experienced team, ensuring authentic and enriching experiences.</p>
    </>
  )
},  

    ];
     const [currentPage, setCurrentPage] = useState(0);
    const displayedServices = allServices.slice(currentPage, currentPage + 3);
    return(
        <div className="bg-white py-12 min-h-screen flex flex-col items-center px-6">
          <h2 className="text-4xl font-bold text-blue-600 mb-10 italic">Why Choose Our Services?</h2>
          <div
            id="home"
            className="bg-cover bg-center h-screen flex items-center justify-center text-center transition-all duration-1000 ease-in-out mt-28 pt-6 italic"
            style={{
             backgroundImage: `url(${bgImage})`,
             backgroundPosition: 'center top',  
         }}
         >
      <div className="flex gap-6 justify-center w-full">
      {displayedServices.map((pkg, index) => (
        <motion.div
          key={index}
          className="relative bg-white shadow-md rounded-lg overflow-hidden w-80 border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
    </motion.div>
      ))}
    </div>

          </div>

        </div>

    )
}
export default Services;
 