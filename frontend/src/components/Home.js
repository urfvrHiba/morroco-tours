import React from 'react';
import Hero from './Hero';
import InfoSection from './InfoSection';
import Services from './Services';
import TourPackages from './TourPackages';

function Home() {
  return (
    <div>
      <Hero />
      <InfoSection />
      <div className="my-20"></div>
      <TourPackages />
      <Services />
    </div>
  );
}

export default Home;
