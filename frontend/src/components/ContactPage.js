import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../images/contact.jpg';


const ContactPage = () => {
  return (
    <>
      <div className="relative bg-gray-100">

        {/* Header Section with Background Image */}
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactImage})`,
            backgroundAttachment: 'fixed',
            height: '500px',
          }}
        >
          <div className="w-full h-full bg-black opacity-40"></div>

          {/* Header Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4 tracking-wide">Contact Us</h1>
            <p className="text-lg mb-8 font-medium text-gray-200">We'd love to hear from you!</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 text-gray-800">

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
            {/* WhatsApp */}
            <div className="space-y-2">
              <FaWhatsapp className="text-3xl text-green-500 mx-auto" />
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <p className="text-sm text-gray-600">The fastest way to contact Morocco Tours & Transfers is through WhatsApp. Click below to get in touch instantly!</p>
              <a
                href="https://wa.me/212688001703"
                className="text-blue-500 hover:text-blue-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </a>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <FaPhoneAlt className="text-3xl text-blue-500 mx-auto" />
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm text-gray-600">Call us anytime. We're happy to assist you!</p>
              <p className="text-lg font-semibold text-gray-800">+212 688 00 17 03</p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <FaEnvelope className="text-3xl text-red-500 mx-auto" />
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-600">Our support team is available 24/7 via email. Reach out to us for any inquiries or assistance.</p>
              <p className="text-lg font-semibold text-gray-800">moroccotours@ma-tours.com</p>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <FaMapMarkerAlt className="text-3xl text-gray-700 mx-auto" />
              <h3 className="text-lg font-semibold">Casablanca</h3>
              <p className="text-sm text-gray-600">N 21, Garden M Avenue, Imm Hivernage, Av. Moulay El Hassan, Casablanca</p>
              <a
                href="https://www.google.com/maps?q=N+21,+Garden+M+Avenue,+Imm+Hivernage,+Av.+Moulay+El+Hassan"
                className="text-blue-500 hover:text-blue-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View On Google Map
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">Leave Us Your Info</h2>
            <h4 className="text-sm font-medium mb-4 text-center text-gray-600">We will get back to you shortly.</h4>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name*</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition text-sm"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject*</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition text-sm"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition text-sm"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
