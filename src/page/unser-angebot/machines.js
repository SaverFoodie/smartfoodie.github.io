import React from 'react';
import { useLanguage } from '../../language';

const FoodieMachine = () => {
  const { language } = useLanguage();
  return (
    <div className="relative bg-[length:100%_100%] bg-center h-[80vh]" style={{ backgroundImage: "url('./machine.png')" }}>
      <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-10">
        <div className="ml-[45%]">
          <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-lg ml-10">{language === "en" ? "Meal Vending Machines" : "Mahlzeitenautomaten"}</h1>
          <br />
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2">{language === "en" ? "Fully Automated - Built-in steamers prepare fresh and hot meals within just 2 minutes." : "Voll automatisiert - Eingebaute Dämpfer bereiten frische und heiße Mahlzeiten in nur 2 Minuten vor."}</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2">{language === "en" ? "24/7 Operation & Technical Support - Always available meals with dedicated maintenance and support." : "24/7 Betrieb & technische Unterstützung - Stets verfügbare Mahlzeiten mit dediziertem Service und Wartung."}</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2">{language === "en" ? "Optimized Supply Chains - Partnering with local suppliers." : "Optimierte Lieferketten - Zusammenarbeit mit lokalen Lieferanten."}</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2">{language === "en" ? "SmartFoodie App Integration - Users can order, browse menus, and schedule pickups." : "SmartFoodie App Integration - Benutzer können bestellen, Menüs durchsuchen und Abholungen planen."}</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2">{language === "en" ? "Multiple Payment Methods - PayPal, VISA, Mastercard, Girocard, Apple Pay, Google Pay, Alipay and WeChat." : "Mehrere Zahlungsmethoden - PayPal, VISA, Mastercard, Girocard, Apple Pay, Google Pay, Alipay und WeChat."}</p>
        </div>
      </div>
    </div>    
  );
};

export default FoodieMachine;
