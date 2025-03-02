import React from 'react';
import { useLanguage } from '../../language';

const Introduct = () => {
  const { language } = useLanguage();
    return (
        <div className="relative bg-[length:100%_100%] bg-center h-[80vh] " style={{ backgroundImage: "url('./title2.png')" }}>
          <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-10">
            <h1 className="text-7xl font-extrabold text-orange-500 drop-shadow-lg">SmartFoodie</h1>
            <br />
            <p className="text-xl text-orange-400 mt-2">{language === "en" ? "Next-Gen Meal Vending – Serving Warm Food Anytime, Anywhere." : "Nächste Generation von Mahlzeitenautomaten – Warmes Essen irgendwann, irgendwo."}</p>
          </div>
        </div>
      );
  };
  
  export default Introduct;
