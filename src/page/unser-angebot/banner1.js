import React from 'react';
import { useLanguage } from '../../language';

const Introduct = () => {
  const { language } = useLanguage();
    return (
        <div className="relative bg-[length:100%_100%] bg-center h-[60vh] md:h-[80vh]" style={{ backgroundImage: "url('./title2.png')" }}>
          <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-10 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-500 drop-shadow-lg text-center">
              SmartFoodie
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-orange-400 mt-4 text-center max-w-2xl mx-auto">
              {language === "en" 
                ? <>
                    <span className="sm:hidden">Next-Gen Meal Vending<br />Serving Warm Food Anytime, Anywhere.</span>
                    <span className="hidden sm:inline">Next-Gen Meal Vending – Serving Warm Food Anytime, Anywhere.</span>
                  </>
                : <>
                    <span className="sm:hidden">Nächste Generation von Mahlzeitenautomaten<br />Warmes Essen irgendwann, irgendwo.</span>
                    <span className="hidden sm:inline">Nächste Generation von Mahlzeitenautomaten – Warmes Essen irgendwann, irgendwo.</span>
                  </>
              }
            </p>
          </div>
        </div>
      );
  };
  
  export default Introduct;
