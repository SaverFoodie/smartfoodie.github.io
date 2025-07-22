import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../language';
import { IoChatbubbleEllipses } from 'react-icons/io5';

const ScrollButton = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleClick = () => {
    navigate('/kontakt');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div style={{ 
      position: 'fixed', 
      right: '16px', 
      top: '65%',
      zIndex: 1000
    }}>
      <div className="relative group">
        <button
          onClick={handleClick}
          className="bg-[#F16E21] text-white py-2 px-2 rounded-full shadow-lg hover:scale-110 transition mb-2"
          style={{ zIndex: 1000 }}
        >
          <IoChatbubbleEllipses className="w-7 h-7 sm:w-7 sm:h-7 w-5 h-5" />
        </button>
        <div className="absolute hidden group-hover:block right-full mr-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-1 py-0.3 rounded-md text-sm whitespace-nowrap">
          {language === "en" ? "Contact Us" : "Kontakt"}
        </div>
      </div>
    </div>
  );
};

export default ScrollButton;