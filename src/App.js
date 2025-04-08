import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import ActivitiesPage from "./components/ActivitiesPage";
import Vehicles from './components/Vehicles';
import BookingForm from './components/BookingForm';
import ContactPage from './components/ContactPage';
import AboutUs from './components/AboutUs';

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
<<<<<<< HEAD

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/activities" element={<ActivitiesPage />} />
          
          {/* Destinations */}
=======
        <Hero />
        <InfoSection />
        <div className="my-20"></div>
        <TourPackages />
        <Services />
        <Activities/>

        <Routes>
          {/* Destinations Routes */}
>>>>>>> 2829c686e3743a4788b38583158d11cd59629550
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/chefchaouen" element={<Chefchaouen />} />
          <Route path="/destinations/marrakech" element={<Marrakech />} />
          <Route path="/destinations/ouarzazate" element={<Ouarzazate />} />
          <Route path="/destinations/rabat" element={<Rabat />} />

<<<<<<< HEAD
          {/* Redirect any unknown path to home */}
          <Route path="*" element={<Navigate to="/" />} />
=======
          {/* Activities Page Route */}
          <Route path="/Activities" element={<ActivitiesPage />} />
          
  
>>>>>>> 2829c686e3743a4788b38583158d11cd59629550
        </Routes>
      </div>
    </Router>
  );
}

export default App;
