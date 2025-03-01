import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-4 bottom-4 bg-[#F16E21] text-white px-4 py-2 rounded-full 
      shadow-lg hover:bg-orange-600 transform hover:scale-105 active:scale-95
      transition-all duration-300 ease-in-out font-semibold tracking-wide
      flex items-center gap-1 group text-sm"
      style={{ zIndex: 1000 }}
    >
      <span>Contact ☎</span>
    </button>
  );
};

export default ScrollButton;