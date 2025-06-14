import React from 'react';
import { useLanguage } from '../../language';
import IntroVideo from './intro_video';

const FoodieMachine = () => {
  const { language } = useLanguage();
  return (
    <>
      <div
        className="relative w-full h-screen min-h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('./machine.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          marginTop: '-64px',

        }}
      >
        {/* Overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-0" />
        
        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4]">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-normal mb-10 text-center drop-shadow-2xl whitespace-nowrap">
              {language === "en" ? "Meal Vending Machines" : "Mahlzeitenautomaten"}
            </h1>
            <div className="space-y-4 text-white text-xl md:text-2xl font-light text-center drop-shadow-lg">
              <p className="flex items-start justify-center before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0">
                {language === "en" ? "Fully Automated - Hot meals ready in 2 minutes" : "Voll automatisiert - Heiße Mahlzeiten in 2 Minuten"}
              </p>
              <p className="flex items-start justify-center before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0">
                {language === "en" ? "24/7 Operation - Always available with full support" : "24/7 Betrieb - Stets verfügbar mit vollem Support"}
              </p>
              <p className="flex items-start justify-center before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0">
                {language === "en" ? "Local Supply Chain - Partnering with nearby suppliers" : "Lokale Lieferkette - Zusammenarbeit mit regionalen Lieferanten"}
              </p>
              <p className="flex items-start justify-center before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0">
                {language === "en" ? "SmartFoodie App - Order, browse, and schedule" : "SmartFoodie App - Bestellen, durchsuchen und planen"}
              </p>
              <p className="flex items-start justify-center before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0">
                {language === "en" ? "Multiple Payments - All major payment methods accepted" : "Mehrere Zahlungen - Alle gängigen Zahlungsmethoden"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <IntroVideo />
    </>    
  );
};

export default FoodieMachine;
