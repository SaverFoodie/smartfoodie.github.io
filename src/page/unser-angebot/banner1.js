import React from 'react';
import { useLanguage } from '../../language';

const Introduct = () => {
  const { language } = useLanguage();
    return (
        <div className="relative bg-[length:100%_100%] bg-center h-[40vh] md:h-[80vh]" style={{ backgroundImage: "url('./title2.png')" }}>
          <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-10 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-orange-500 drop-shadow-lg text-center">
              SmartFoodie
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-400 sm:mt-4 md:mt-5 lg:mt-6 text-center max-w-4xl mx-auto">
              {language === "en" 
                ? <>
                    <span className="lg:hidden">Next-Gen Meal Vending</span>
                    <span className="hidden sm:hidden md:hidden lg:inline">Next-Gen Meal Vending – Serving Warm Food Anytime, Anywhere.</span>
                  </>
                : <>
                    <span className="md:hidden">Nächste Generation Mahlzeitenautomaten</span>
                    <span className="hidden sm:hidden md:hidden lg:inline">Next-Gen Lebensmittelautomaten – Warme Speisen jederzeit und überall.</span>
                  </>
              }
            </p>
          </div>
        </div>
      );
  };
  
  export default Introduct;
