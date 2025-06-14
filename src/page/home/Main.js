import React from 'react';
import { useLanguage } from '../../language';

const Main = () => {
  const { language } = useLanguage();

  const getTagline = () => {
    if (language === 'de') {
      return (
        <>
          <span className="font-['Cormorant_Garamond']">Essen der </span>
          <span className="font-['Playfair_Display'] font-bold text-[#ffb700] relative inline-block transform hover:scale-105 transition-transform duration-300">nächsten Generation.</span>
          <br />
          <span className="font-['Cormorant_Garamond']">Kocht für dich. 24/7</span>
        </>
      );
    }
    return (
      <>
        <span className="font-['Cormorant_Garamond']">Get your </span>
        <span className="font-['Playfair_Display'] font-bold text-[#ffb700] relative inline-block transform hover:scale-105 transition-transform duration-300">hot meal</span>
        <span className="font-['Cormorant_Garamond']"> right away.</span>
        <br />
        <span className="font-['Cormorant_Garamond']">Available 24/7.</span>
      </>
    );
  };

  return (
    <div
      className="relative w-full h-screen min-h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('./main.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
        marginTop: '-64px', // Offset for the header height

      }}
    >
      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-0" />
      
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <h1 className="font-['Playfair_Display'] text-white text-5xl md:text-7xl lg:text-8xl font-semibold mb-10 text-center drop-shadow-2xl tracking-tight leading-tight">
            SmartFoodie
          </h1>
          <p className="text-white text-2xl md:text-4xl font-light mb-16 text-center drop-shadow-lg relative">
            <span className="tracking-wide">
              {getTagline()}
            </span>
            <style jsx>{`
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
              @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
            `}</style>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
