import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../language';

const ScrollButton = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-2 bottom-2 md:right-4 md:bottom-4 bg-[#F16E21] text-white 
      px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm
      shadow-lg hover:bg-orange-600 transform hover:scale-105 active:scale-95
      transition-all duration-300 ease-in-out font-semibold tracking-wide
      flex items-center gap-1 group"
      style={{ zIndex: 1000 }}
    >
      <span>{language === "en" ? "Contact ☎" : "Kontakt ☎"}</span>
    </button>
  );
};

export default ScrollButton;