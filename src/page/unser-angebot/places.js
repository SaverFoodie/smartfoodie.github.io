import React from 'react';
import { useLanguage } from '../../language';

const FoodiePlaces = () => {
  const { language } = useLanguage();
  return (
    <div className="relative bg-[length:100%_100%] bg-center h-[80vh]" style={{ backgroundImage: "url('./place1.jpg')" }}>
      <div className="flex flex-col items-center justify-start pt-[18vh] h-full bg-gray-300 bg-opacity-10">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-lg">{language === "en" ? "On-site Catering Solutions" : "Standortbasierte Catering Lösungen"}</h1>
        <br />
        <div className="max-w-8xl">
          <p className="text-xl lg:text-[1.3rem] text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">{language === "en" ? "Workplaces & Factories - Ideal for employees and shift workers needing quick, tasty and affordable meals." : "Arbeitsplätze & Fabriken - Ideal für Mitarbeiter und Schichtarbeiter, die schnell, köstlich und preiswert Mahlzeiten benötigen."}</p>
          <p className="text-xl lg:text-[1.3rem] text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">{language === "en" ? "Universities & Schools – Ensuring students and faculty have easy access to good nourishment around the clock." : "Universitäten & Schulen – Gewährleisten, dass Studierende und Lehrkräfte leicht Zugang zu guten Nahrungsmitteln haben, um die ganze Zeit."}</p>
          <p className="text-xl lg:text-[1.3rem] text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2">{language === "en" ? "Public Facilities & Institutions – Suitable for hospitals, airports, government buildings and more." : "Öffentliche Einrichtungen & Institutionen – Passend für Krankenhäuser, Flughäfen, Regierungsgebäude und mehr."}</p>
        </div>
      </div>
    </div>    
  );
};

export default FoodiePlaces;
