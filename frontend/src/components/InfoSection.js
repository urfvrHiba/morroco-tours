// src/components/InfoSection.js
import React from 'react';
import { motion } from 'framer-motion';

function InfoSection() {
  // Les données directement dans le fichier
  const infoData = [
    {
      title: "Our Mission",
      description: (
        <>
          <p>Our mission is to deliver a stress-free, affordable, and optimal travel and transportation experience for everyone, complemented by exceptional customer service.</p>
          <p>With years of experience working with tourists and travelers from around the globe, we’ve developed an extensive portfolio of tailored offers and a wealth of knowledge to meet the unique needs of groups from all continents and diverse cultural and religious backgrounds.</p>
        </>
      )
    },
    {
      title: "Discover Morocco with Tailored Experiences and Exceptional Service",
      description: (
        <>
          <p>At Morocco Tours & Transfers, we specialize in crafting personalized tours to meet the unique preferences, specific needs, and expectations of each traveler or group. Whether you’re exploring Morocco’s rich history, vibrant culture, breathtaking natural beauty, or all of the above, we meticulously plan every detail to ensure you can relax and fully enjoy one of the most favorable climates in the world.</p>
          <p>Our team of multilingual guides, professional staff, and patient drivers is dedicated to creating truly unforgettable journeys. Every tour is designed with care and attention to detail, offering deep insights into Morocco’s fascinating history, vibrant traditions, and enduring heritage.</p>
          <p>For centuries, Morocco has been a crossroads of trade and knowledge, where merchants, craftsmen, and scholars exchanged goods and ideas. This rich legacy is still visible today, reflected in the walls and bustling souks of Morocco’s ancient and vibrant cities.</p>
        </>
      )
    },
    {
      title: "Explore Morocco’s Imperial and Cultural Gems",
      description: (
        <>
          <p>Delve into the splendor of Morocco’s imperial cities—Fes, Meknes, Marrakech, and Rabat—each a former capital under different dynasties, leaving behind magnificent monuments and unparalleled historical significance.</p>
          <p>Beyond these capitals, destinations like Chefchaouen, Tangier, Essaouira, Agadir, and Tiznit preserve their ancient heritage while embracing modern influences.</p>
          <p>Our tours seamlessly connect you to these living legacies, blending the old with the new to ensure you experience the true essence of Morocco. Join us on a journey that reveals not only its stunning sights but also the captivating stories and soul of this enchanting land.</p>
        </>
      )
    },
    {
      title: "Tailored Itineraries and Expert Consultation",
      description: (
        <>
          <p>We adapt and personalize itineraries to fit your schedule and preferences, backed by a wealth of knowledge and expertise for personalized consultation. Whether you’re planning a private couple’s getaway, a family adventure, a group tour, or a corporate event, we handle every detail to ensure a smooth, stress-free, and top-tier experience.</p>
        </>
      )
    },
    {
      title: "Reliable and Luxurious Transportation Services",
      description: (
        <>
          <p>In addition to tours, we provide standalone transfer services designed to make your travel seamless, stress-free, and punctual. Our primary goal is to ensure smooth and reliable transportation, eliminating delays and uncertainties so you can focus on what truly matters.</p>
          <p>With a diverse fleet, from luxury sedans to buses accommodating large groups, we offer affordable luxury and unparalleled service for everyone.</p>
        </>
      )
    },
    {
      title: "Your Journey, Our Commitment",
      description: (
        <>
          <p>At Morocco Tours & Transfers, we are dedicated to providing exceptional service and memorable experiences that exceed your expectations. Whether you’re exploring the imperial cities or traversing the Sahara Desert, we’re here to ensure every journey is as enriching as it is enjoyable.</p>
        </>
      )
    }
  ];

  return (
    <div className="bg-white py-4">
      <div className="text-center mb-10 italic mt-10">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Morocco Tours & Transfers</h2>
        <p className="text-l text-gray-700">Your journey begins with us; where comfort meets convenience!</p>
      </div>
      
      {infoData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.3, duration: 1 }}
          className="bg-white rounded-lg p-4 px-20 flex flex-col justify-between mb-10"
        >
          <h3 className="text-xl md:text-4xl font-bold text-blue-600 italic mb-6">{item.title}</h3> {/* Espacement entre le titre et la description */}
          <div className="text-xl md:text-l text-gray-700 italic">{item.description}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default InfoSection;
