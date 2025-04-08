import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BookingForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedVehicle = queryParams.get('vehicle') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: selectedVehicle,
    startDate: '',
    endDate: '',
    itinerary: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      vehicleType: selectedVehicle,
    }));
  }, [selectedVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('✅ Booking submitted successfully!');
    // Reset if needed:
    // setFormData({ name: '', email: '', phone: '', vehicleType: '', startDate: '', endDate: '', itinerary: '' });
  };

  return (
    <div className="max-w-2xl mx-auto mt-28 p-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">Book a Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-4 py-2"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email *</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-4 py-2"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone *</label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded px-4 py-2"
            onChange={handleChange}
            value={formData.phone}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Vehicle Type *</label>
          <select
            name="vehicleType"
            className="w-full border rounded px-4 py-2"
            value={formData.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="">— Please choose an option —</option>
            <option value="Mercedes S Class">Mercedes S Class – Capacity: 3–4 Passengers</option>
            <option value="Mercedes Class V">Mercedes Class V – Capacity: 7 Passengers</option>
            <option value="Mercedes Sprinter">Mercedes Sprinter – Capacity: 16 Passengers</option>
            <option value="Evico Minibus">Evico – Capacity: 30 Passengers</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <div className="w-full">
            <label className="block font-semibold mb-1">From Date *</label>
            <input
              type="date"
              name="startDate"
              className="w-full border rounded px-4 py-2"
              onChange={handleChange}
              value={formData.startDate}
              required
            />
          </div>
          <div className="w-full">
            <label className="block font-semibold mb-1">To Date *</label>
            <input
              type="date"
              name="endDate"
              className="w-full border rounded px-4 py-2"
              onChange={handleChange}
              value={formData.endDate}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Location & Itinerary Details *</label>
          <textarea
            name="itinerary"
            className="w-full border rounded px-4 py-2"
            rows={4}
            placeholder="Include pick-up location, drop-off, cities, or tour itinerary..."
            onChange={handleChange}
            value={formData.itinerary}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
