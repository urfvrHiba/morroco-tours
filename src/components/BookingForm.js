import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BookingForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedVehicle = queryParams.get('vehicle') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicleType: selectedVehicle,
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      vehicleType: selectedVehicle,
    }));
  }, [selectedVehicle]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert("Booking submitted!");
  };

  return (
    <div className="max-w-xl mx-auto mt-28 p-8 bg-white shadow-lg rounded-lg">
      {/* Increased margin-top to 28 (from 20) to provide more space */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Book a Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-4 py-2"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-4 py-2"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Vehicle Type</label>
      <select
          name="vehicleType"
          className="w-full border rounded px-4 py-2"
          value={formData.vehicleType}
          onChange={handleChange}
          required
        >
          <option value="Mercedes">
            Mercedes S Class – Capacity: 3 – 4 Passengers
          </option>
          <option value="Mercedes Class V">
            Mercedes Class V – Capacity: 7 Passengers
          </option>
          <option value="Luxury Sedan">
            Mercedes Sprinter – Capacity: 16 Passengers
          </option>
      </select>

        </div>
        <div className="flex space-x-4">
          <div className="w-full">
            <label className="block font-semibold mb-1">From :</label>
            <input
              type="date"
              name="startDate"
              className="w-full border rounded px-4 py-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block font-semibold mb-1">To :</label>
            <input
              type="date"
              name="endDate"
              className="w-full border rounded px-4 py-2"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
