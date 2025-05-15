import React from 'react';
import { useLanguage } from '../../language';

const FoodieMachine = () => {
  const { language } = useLanguage();
  return (
    <div className="md:relative md:h-[80vh] pt-0">
      {/* Background image with blur effect */}
      <div 
        className="absolute inset-0 h-full bg-[length:100%_100%] bg-center z-0 filter blur-sm" 
        style={{ backgroundImage: "url('./machine.png')" }}
      ></div>
      
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      
      {/* Content container - flex layout for text and video */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full min-h-[600px]">
        {/* Text content - left side with enhanced visibility */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 py-6 md:py-0 md:pl-8 lg:pl-12 md:pr-4 lg:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-center md:text-left">
            {language === "en" ? "Meal Vending Machines" : "Mahlzeitenautomaten"}
          </h1>
          <br />
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-white flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {language === "en" ? "Fully Automated - Built-in steamers prepare fresh and hot meals within just 2 minutes." : "Voll automatisiert - Eingebaute Dämpfer bereiten frische und heiße Mahlzeiten in nur 2 Minuten vor."}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {language === "en" ? "24/7 Operation & Technical Support - Always available meals with dedicated maintenance and support." : "24/7 Betrieb & technische Unterstützung - Stets verfügbare Mahlzeiten mit dediziertem Service und Wartung."}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {language === "en" ? "Optimized Supply Chains - Partnering with local suppliers." : "Optimierte Lieferketten - Zusammenarbeit mit lokalen Lieferanten."}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {language === "en" ? "SmartFoodie App Integration - Users can order, browse menus, and schedule pickups." : "SmartFoodie App Integration - Benutzer können bestellen, Menüs durchsuchen und Abholungen planen."}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 before:flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {language === "en" ? "Multiple Payment Methods - PayPal, VISA, Mastercard, Girocard, Apple Pay, Google Pay, Alipay and WeChat." : "Mehrere Zahlungsmethoden - PayPal, VISA, Mastercard, Girocard, Apple Pay, Google Pay, Alipay und WeChat."}
            </p>
          </div>
        </div>

        {/* Video - right side */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 py-6 md:py-0 md:pr-8 lg:pr-12 md:pl-4 lg:pl-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
            >
              <source src="./videos/SF_intro_subtitle.mp4" type="video/mp4" />
              {language === "en" 
                ? "Your browser does not support the video tag."
                : "Ihr Browser unterstützt das Video-Tag nicht."}
            </video>
          </div>
        </div>
      </div>
    </div>    
  );
};

export default FoodieMachine;
