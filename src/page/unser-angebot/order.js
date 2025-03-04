import React from 'react';
import { useLanguage } from '../../language';

const FoodieSteps = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 px-4 sm:px-6 py-8 sm:py-10 bg-orange-100">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col w-full sm:w-4/5 lg:w-1/3 space-y-4 sm:space-y-6 text-center lg:text-left mx-auto lg:mx-0 lg:ml-8 xl:ml-24">
        <h2 className="text-sm font-semibold text-gray-800 uppercase tracking-widest">{language === "en" ? "How it works" : "Wie es funktioniert"}</h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          {language === "en" ? "A Journey of Flavor." : "Ein Reise durch Geschmack."}
        </h1>
        <p className="text-base sm:text-lg text-gray-700 italic">
        {language === "en" ? "Enjoy fast and effortless meals with SmartFoodie. Get our app now!" : "Genießen Sie schnelle und einfache Mahlzeiten mit SmartFoodie. Holen Sie sich unsere App jetzt!"}
        </p>
        <div className="flex justify-center lg:justify-start">
          <img src="./qr.jpg" alt="QR Code" className="w-[12vh] h-[15vh] sm:w-[15vh] sm:h-[18vh] mx-auto" />
        </div>
      </div>

      {/* Right Side: Steps */}
      <div className="flex flex-col w-full sm:w-4/5 lg:w-2/3 space-y-4 sm:space-y-6 mx-auto lg:mx-0 lg:ml-8 xl:ml-24 max-w-[900px]">
        {[{
          number: "01",
          image: "step1.png",
          description: language === "en" ? "Order or reserve a meal via the SmartFoodie app, or via the machine touchscreen" : "Bestellen oder reservieren Sie eine Mahlzeit über die SmartFoodie App oder über den Bildschirm des Automaten"
        },
        {
          number: "02",
          image: "step2.png",
          description: language === "en" ? "Wait till done and collect your chosen items from the machine" : "Warten Sie, bis fertig ist und nehmen Sie Ihre gewünschten Artikel vom Automaten ab"
        },
        {
          number: "03",
          image: "85.png",
          description: language === "en" ? "Enjoy your delicious meal" : "Genießen Sie Ihre köstliche Mahlzeit"
        }].map((step, index) => (
          <div key={index} className="flex items-start space-x-3 sm:space-x-4 transition-transform transform hover:scale-105">
            {/* Step Number */}
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#ff7043] text-white rounded-full font-semibold text-base sm:text-lg shadow-md">
              {step.number}
            </div>

            {/* Step Content */}
            <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg p-3 sm:p-4 space-y-2 sm:space-y-0 sm:space-x-4 w-full h-auto sm:h-40 hover:shadow-xl transition-shadow duration-300">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-sm mx-auto sm:mx-0"
              />
              <p className="text-gray-800 font-medium text-lg sm:text-xl lg:text-2xl text-center sm:text-left flex items-center justify-center h-full break-words leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodieSteps;
