import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Services from './components/Services';
import ActivitiesPage from "./components/ActivitiesPage";
import Activities from "./components/Activities";
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
        <Services />

        <Routes>
          {/* Routes spécifiques aux destinations */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/chefchaouen" element={<Chefchaouen />} />
          <Route path="/destinations/marrakech" element={<Marrakech />} />
          <Route path="/destinations/ouarzazate" element={<Ouarzazate />} />
          <Route path="/destinations/rabat" element={<Rabat />} />
          
          {/* Route pour les activités */}
          <Route path="/activities" element={<ActivitiesPage />} />
          
          {/* Route par défaut pour afficher les activités principales */}
          <Route path="/" element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
