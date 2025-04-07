import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import ActivitiesPage from "./components/ActivitiesPage";
import Activities from "./components/Activities";
import Vehicles from './components/Vehicles';
import BookingForm from './components/BookingForm';

import Destinations from './destinations/Destinations';
import Chefchaouen from './destinations/Chefchaouen';
import Marrakech from './destinations/Marrakech';
import Ouarzazate from './destinations/Ouarzazate';
import Rabat from './destinations/Rabat';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/chefchaouen" element={<Chefchaouen />} />
          <Route path="/destinations/marrakech" element={<Marrakech />} />
          <Route path="/destinations/ouarzazate" element={<Ouarzazate />} />
          <Route path="/destinations/rabat" element={<Rabat />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
