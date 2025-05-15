import React from 'react';
import { useLanguage } from '../../language';

const IntroVideo = () => {
  const { language } = useLanguage();
  
  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-orange-100 -mt-24">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-8 mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "How SmartFoodie Makes a Difference" : "Wie SmartFoodie einen Unterschied macht"}
          </h2>
          <p className="text-lg text-gray-600">
            {language === "en" 
              ? "Experience our innovative solution that transforms food service"
              : "Erleben Sie unsere innovative Lösung, die die Essensversorgung revolutioniert"}
          </p>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden bg-white shadow-lg">
          <video
            className="w-full h-full"
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
  );
};

export default IntroVideo;
