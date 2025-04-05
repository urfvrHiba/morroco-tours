import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Services from './components/Services';
import TourPackages from './components/TourPackages';
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
        <Hero />
        <InfoSection />
        <div className="my-20"></div>
        <TourPackages />
        <Services/>
        <Routes>
          <Route path="/destinations/Destinations" element={<Destinations />} />
          <Route path="/destinations/Chefchaouen" element={<Chefchaouen />} />
          <Route path="/destinations/Marrakech" element={<Marrakech />} />
          <Route path="/destinations/Ouarzazate" element={<Ouarzazate />} />
          <Route path="/destinations/Rabat" element={<Rabat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
