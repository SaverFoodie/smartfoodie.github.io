import React from 'react';
import { useLanguage } from '../../language';

const FoodiePlaces = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col">
      {/* Image section with title */}
      <div className="relative bg-[length:100%_100%] bg-center h-[35vh] md:h-[80vh]" style={{ backgroundImage: "url('./place1.jpg')" }}>
        <div className="flex flex-col items-center justify-start pt-[12vh] md:pt-[18vh] h-full bg-gray-300 bg-opacity-10 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg text-center">
            {language === "en" ? "On-site Catering Solutions" : "Standortbasierte Catering Lösungen"}
          </h1>
          
          {/* Bullet points - visible only on medium screens and up */}
          <div className="hidden md:block">
            <br />
            <div className="max-w-8xl w-full md:w-3/4 lg:w-full flex flex-col items-center mx-auto">
              <p className="text-lg sm:text-xl md:text-[1.3rem] text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">
                {language === "en" 
                  ? "Workplaces & Factories - Ideal for employees and shift workers needing quick, tasty and affordable meals."
                  : "Arbeitsplätze & Fabriken - Ideal für Mitarbeiter und Schichtarbeiter, die schnell, köstlich und preiswert Mahlzeiten benötigen."}
              </p>
              <p className="text-lg sm:text-xl md:text-[1.3rem] text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">
                {language === "en" 
                  ? "Universities & Schools - Ensuring students and faculty have easy access to good nourishment around the clock."
                  : "Universitäten & Schulen - Gewährleisten, dass Studierende und Lehrkräfte leicht Zugang zu guten Nahrungsmitteln haben, um die ganze Zeit."}
              </p>
              <p className="text-lg sm:text-xl md:text-[1.3rem] text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">
                {language === "en" 
                  ? "Public Facilities & Institutions - Suitable for hospitals, airports, government buildings and more."
                  : "Öffentliche Einrichtungen & Institutionen - Passend für Krankenhäuser, Flughäfen, Regierungsgebäude und mehr."}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bullet points section - visible only on small screens */}
      <div className="md:hidden bg-orange-100 py-6 px-4">
        <div className="max-w-8xl w-full flex flex-col items-start">
          <p className="text-lg text-gray-800 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">
            {language === "en" 
              ? "Workplaces & Factories - Ideal for employees and shift workers needing quick, tasty and affordable meals."
              : "Arbeitsplätze & Fabriken - Ideal für Mitarbeiter und Schichtarbeiter, die schnell, köstlich und preiswert Mahlzeiten benötigen."}
          </p>
          <p className="text-lg text-gray-800 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">
            {language === "en" 
              ? "Universities & Schools - Ensuring students and faculty have easy access to good nourishment around the clock."
              : "Universitäten & Schulen - Gewährleisten, dass Studierende und Lehrkräfte leicht Zugang zu guten Nahrungsmitteln haben, um die ganze Zeit."}
          </p>
          <p className="text-lg text-gray-800 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">
            {language === "en" 
              ? "Public Facilities & Institutions - Suitable for hospitals, airports, government buildings and more."
              : "Öffentliche Einrichtungen & Institutionen - Passend für Krankenhäuser, Flughäfen, Regierungsgebäude und mehr."}
          </p>
        </div>
      </div>
    </div>    
  );
};

export default FoodiePlaces;
