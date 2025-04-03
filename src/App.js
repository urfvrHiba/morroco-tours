import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Services from './components/Services';
import TourPackages from './components/TourPackages';

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <InfoSection/>
      <div className="my-20"></div> {/* Espacement entre les deux sections */}
      <TourPackages />
      <Services/>
    </div>
  );
}

export default App;