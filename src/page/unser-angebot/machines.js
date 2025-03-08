import React from 'react';
import { useLanguage } from '../../language';

const FoodieMachine = () => {
  const { language } = useLanguage();
  return (
    <div className="md:relative md:h-[80vh] pt-0">
      {/* Background image - full width on small screens, stretched background on large screens */}
      <div 
        className="h-[30vh] md:absolute md:inset-0 md:h-full bg-[length:100%_100%] bg-center md:z-0" 
        style={{ backgroundImage: "url('./machine.png')" }}
      ></div>
      
      {/* Content container */}
      <div className="flex flex-col items-center md:items-start md:justify-center md:h-full bg-orange-100 md:bg-gray-300 md:bg-opacity-10 md:relative md:z-10">
        {/* Text content - centered on small screens, positioned on the right on large screens */}
        <div className="w-full px-6 py-8 md:py-0 md:ml-[45%] md:max-w-[55%] md:pr-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg text-center md:text-left md:ml-6">
            {language === "en" ? "Meal Vending Machines" : "Mahlzeitenautomaten"}
          </h1>
          <br />
          <p className="text-lg md:text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 mt-2">
            {language === "en" ? "Fully Automated - Built-in steamers prepare fresh and hot meals within just 2 minutes." : "Voll automatisiert - Eingebaute Dämpfer bereiten frische und heiße Mahlzeiten in nur 2 Minuten vor."}
          </p>
          <p className="text-lg md:text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 mt-2">
            {language === "en" ? "24/7 Operation & Technical Support - Always available meals with dedicated maintenance and support." : "24/7 Betrieb & technische Unterstützung - Stets verfügbare Mahlzeiten mit dediziertem Service und Wartung."}
          </p>
          <p className="text-lg md:text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 mt-2">
            {language === "en" ? "Optimized Supply Chains - Partnering with local suppliers." : "Optimierte Lieferketten - Zusammenarbeit mit lokalen Lieferanten."}
          </p>
          <p className="text-lg md:text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 mt-2">
            {language === "en" ? "SmartFoodie App Integration - Users can order, browse menus, and schedule pickups." : "SmartFoodie App Integration - Benutzer können bestellen, Menüs durchsuchen und Abholungen planen."}
          </p>
          <p className="text-lg md:text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 mt-2">
            {language === "en" ? "Multiple Payment Methods - PayPal, VISA, Mastercard, Girocard, Apple Pay, Google Pay, Alipay and WeChat." : "Mehrere Zahlungsmethoden - PayPal, VISA, Mastercard, Girocard, Apple Pay, Google Pay, Alipay und WeChat."}
          </p>
        </div>
      </div>
    </div>    
  );
};

export default FoodieMachine;
