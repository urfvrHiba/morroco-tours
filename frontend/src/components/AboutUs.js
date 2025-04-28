import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../images/about.jpg';

const AboutUs = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl text-white font-bold z-10 text-center px-4"
        >
          About Morocco Tours & Transfers
        </motion.h1>
      </div>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Morocco Tours & Transfers is a locally based travel agency that specializes in offering tailor-made tours and reliable transportation services throughout Morocco. Our team is passionate about showcasing the beauty, culture, and hospitality of Morocco.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
            <p>
              To create unforgettable travel experiences for our guests by providing authentic, safe, and personalized tours across Morocco.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
            <p>
              To become Morocco’s most trusted name in travel, where every journey brings deeper cultural connection and adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-600">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Experienced Guides", desc: "Our guides are locals with deep knowledge and hospitality." },
              { title: "Custom Tours", desc: "Tailor-made itineraries for solo, family, or group travel." },
              { title: "24/7 Support", desc: "Always available to assist before, during, and after your trip." },
              { title: "Safe & Reliable", desc: "Modern vehicles and professional drivers ensure comfort." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-blue-500 mb-2">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
