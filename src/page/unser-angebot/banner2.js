import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from '../../language';

const Arrow = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      className={`hidden sm:block absolute md:top-[85%] lg:top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-30 text-orange-500 rounded-full shadow-md hover:bg-gray-300 hover:bg-opacity-50 transition duration-300 ${
        direction === "left" ? "left-1 md:left-2 lg:left-4" : "right-1 md:right-2 lg:right-4"
      }`}
    >
      {direction === "left" ? <FaChevronLeft size={30} /> : <FaChevronRight size={30} />}
    </button>
  );
};

// Reusable TouchableLink component to avoid code duplication
const TouchableLink = ({ to, onClick, children }) => {
  const navigate = useNavigate();
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      return;
    }
    
    if (to) {
      navigate(to);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      className="outline-none focus:outline-none h-full flex flex-col"
      onMouseDown={(e) => {
        e.preventDefault();
        setStartPos({ x: e.clientX, y: e.clientY });
        setIsDragging(false);
      }}
      onTouchStart={(e) => {
        setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setIsDragging(false);
      }}
      onMouseMove={(e) => {
        const deltaX = Math.abs(e.clientX - startPos.x);
        const deltaY = Math.abs(e.clientY - startPos.y);
        if (deltaX > 30 || deltaY > 30) {
          setIsDragging(true); 
        }
      }}
      onTouchMove={(e) => {
        const deltaX = Math.abs(e.touches[0].clientX - startPos.x);
        const deltaY = Math.abs(e.touches[0].clientY - startPos.y);
        if (deltaX > 30 || deltaY > 30) {
          setIsDragging(true);
        }
      }}
      onMouseUp={(e) => {
        if (isDragging) {
          e.preventDefault();
          return;
        }
      }}
      onTouchEnd={(e) => {
        if (isDragging) {
          e.preventDefault();
          return;
        }
      }}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

const Highlights = () => {
  const { language } = useLanguage();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  };

  const handleSliderBottomScroll = () => {
    const sliderElement = document.querySelector(".slick-slider");
    if (sliderElement) {
      const sliderBottom = sliderElement.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top: sliderBottom, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 text-center bg-white px-4 md:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-4 sm:mb-6 md:mb-8 lg:mb-10">{language === "en" ? "The Distinctive Excellence of SmartFoodie" : "Die Ausgezeichnete Qualität von SmartFoodie"}</h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-sans mb-6 sm:mb-8 md:mb-10 lg:mb-12 mx-auto max-w-5xl px-2 sm:px-4">
      {language === "en" ? "SmartFoodie GmbH provides innovative and sustainable catering solutions through fully automatic vending machines with steamers, delivering freshly steamed meals in just 2 minutes. We cater to companies, universities, and institutions without a canteen or looking to expand their food options. Our mission is to combine convenience, efficiency, and nutrition, ensuring high-quality, hot meals anytime for you and your employees." : "Die SmartFoodie GmbH bietet innovative und nachhaltige Catering-Lösungen durch den Einsatz vollautomatischer Lebensmittelautomaten, die frisch gedämpfte Mahlzeiten in nur 2 Minuten bereitstellen. Wir beliefern Unternehmen, Universitäten, Supermärkte, Fitnessstudios und weitere Einrichtungen, die kein warmes Essen anbieten oder ihr Angebot erweitern möchten. Unsere Mission ist es, Effizienz, Geschmack und erschwingliche, vollwertige Mahlzeiten zu kombinieren, um sicherzustellen, dass eine gute Ernährung für Sie und Ihre Mitarbeiter zum Alltag wird."}
      </p>

      <Slider {...settings} className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto h-auto">
        <div className="bg-[#F7E14D] flex flex-col rounded-3xl transition-transform transform h-full min-h-[320px] sm:min-h-[320px] md:min-h-[530px] lg:min-h-[650px]">
          <TouchableLink to="/our-food">
            <img
              src="./food.png"
              alt="Our Food"
              className="rounded-t-3xl w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-cover mb-2 md:mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-4 lg:mb-6 mt-1 sm:mt-2 md:mt-4 lg:mt-6">{language === "en" ? "Our Food" : "Unser Essen"}</h3>
            <ul className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-xl space-y-1 md:space-y-2 text-center flex-grow px-2 md:px-4 pb-3 sm:pb-4 md:pb-6">
              <li>{language === "en" ? "Fresh and High Quality Ingredients, " : "Frische und hochwertige Zutaten"}</li>
              <li>{language === "en" ? "Extensive selection: from appetizers and main courses to desserts" : "Umfangreiches Angebot: Von Vorspeisen über vollständige Mittag- und Abendessen bis hin zu Desserts"}</li>
              <li>{language === "en" ? "Rice-Bowls, Gyozas, Noodle-Bowls, Ramen, Curry, Salads etc. " : "Wok-Gerichte, Gyozas, Gulasch, Suppen, Ramen, Salate usw."}</li>
            </ul>
          </TouchableLink>
        </div>
        
        <div className="bg-[#ffb700] flex flex-col rounded-3xl transition-transform transform h-full min-h-[320px] sm:min-h-[320px] md:min-h-[530px] lg:min-h-[650px]">
          <TouchableLink to="/products-and-solutions">
            <img
              src="./highlight3.jpg"
              alt="Our Service"
              className="rounded-t-3xl w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-fill mb-2 md:mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-4 lg:mb-6 mt-1 sm:mt-2 md:mt-4 lg:mt-6">{language === "en" ? "Our Solutions" : "Unsere Lösungen"}</h3>
            <ul className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-xl space-y-1 md:space-y-2 text-center flex-grow px-2 md:px-4 pb-3 sm:pb-4 md:pb-6">
              <li>{language === "en" ? "Fully Automated Food Vending Machines, Non Special Catering Space Required" : "Vollautomatische Lebensmittelautomaten, kein Personal erforderlich"}</li>
              <li>{language === "en" ? "Full-Service: Refilling, Maintenance, Cleaning, and Support" : "Full-Service: Befüllung, Wartung, Reinigung und Support"}</li>
              <li>{language === "en" ? "Convenient and affordable On-Site Catering Solution" : "Bequeme und kostengünstige On-Site Catering-Lösungen"}</li>
            </ul>
          </TouchableLink>
        </div>

        <div className="bg-[#99F0E8] flex flex-col rounded-3xl transition-transform transform h-full min-h-[320px] sm:min-h-[320px] md:min-h-[530px] lg:min-h-[650px]">
          <TouchableLink onClick={handleSliderBottomScroll}>
            <img
              src="./office.png"
              alt="Our Innovation"
              className="rounded-t-3xl w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-cover mb-2 md:mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-4 lg:mb-6 mt-1 sm:mt-2 md:mt-4 lg:mt-6">{language === "en" ? "Our Advantages" : "Unsere Vorteile"}</h3>
            <ul className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-xl space-y-1 md:space-y-2 text-center flex-grow px-2 md:px-4 pb-3 sm:pb-4 md:pb-6">
              <li>{language === "en" ? "Cost-effective, balanced, and high-quality meals" : "Kosteneffiziente, ausgewogene und hochwertige Mahlzeiten: "}</li>
              <li>{language === "en" ? "24/7 Catering On-Site" : "24/7 Verpflegung vor Ort"}</li>
              <li>{language === "en" ? "Delicious - try it yourself!" : "Köstlich - probieren Sie selbst!"}</li>
            </ul>
          </TouchableLink>
        </div>
      </Slider>
    </section>
  );
};

export default Highlights;
