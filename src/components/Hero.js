import React, { useState } from 'react';
import ouarzazateImg from '../images/ouarzazate.jpg';  // Example image import
import testImg from '../images/test.jpg';
import rabatImg from '../images/rabat.jpg';
import tangerImg from '../images/tanger.jpg';

function Hero() {
  
  const [bgImage, setBgImage] = useState(testImg); // Default image as test.jpg
  const images = [ouarzazateImg, testImg, rabatImg, tangerImg];
  const cities = ['Ouarzazate', 'Casablanca', 'Rabat', 'Tanger'];
  const descriptions = [
    'Discover the charm of Ouarzazate, the gateway to the Sahara!',
    'Explore the lively city of Casablanca, a fusion of tradition and modernity.',
    'Visit Rabat, the beautiful capital of Morocco with a rich history.',
    'Tanger, where Europe meets Africa, offering a blend of cultures and landscapes.',
  ];

  const buttonTexts = [
    'Book your Sahara Adventure!',
    'Start your Casablanca Journey!',
    'Explore Rabat Now!',
    'Visit the Magic of Tanger!',
  ];

  const buttonColors = [
    'bg-[#6F4F37]',
    'bg-blue-500',
    'bg-sky-300',
    'bg-blue-700',
  ];

  // Function to handle background image change
  const changeImage = () => {
    const currentIndex = images.indexOf(bgImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setBgImage(images[nextIndex]);
  };

  return (
    <div
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center text-center transition-all duration-1000 ease-in-out mt-28 pt-6 italic"
      style={{ backgroundImage: `url(${bgImage})` }}  // Set dynamic background image
    >
      <div className="absolute top-2 left-2 bottom-0 p-12 flex flex-col justify-center items-center text-white w-1/3">
        <h1 className="text-6xl font-bold mb-6">{cities[images.indexOf(bgImage)]}</h1>
        <p className="text-xl mb-8">{descriptions[images.indexOf(bgImage)]}</p>
        <div className="mt-6">
          <button
            className={`${buttonColors[images.indexOf(bgImage)]} py-4 px-10 rounded-lg`}
            onClick={changeImage}
          >
            {buttonTexts[images.indexOf(bgImage)]}
          </button>
        </div>
      </div>

      {/* Right arrow to change the image */}
      <div
        onClick={changeImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-5xl"
      >
        &#8594;
      </div>
    </div>
  );
}

export default Hero;
