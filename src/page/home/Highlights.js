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
      className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-30 text-orange-500 rounded-full shadow-md hover:bg-gray-300 hover:bg-opacity-50 transition duration-300 ${
        direction === "left" ? "left-4" : "right-4"
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
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'linear',
    pauseOnHover: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
        }
      }
    ]
  };

  // Add custom styles for the slider
  const sliderStyles = `
    .slick-slide {
      transition: all 0.3s ease;
      transform: scale(0.5);
      opacity: 0.4;
    }
    .slick-center {
      transform: scale(1.3);
      opacity: 1;
      z-index: 1;
    }
    .slick-slide:hover {
      opacity: 0.6;
    }
    .slick-list {
      padding: 3rem 0;
      overflow: visible;
    }
    .slick-track {
      margin: 0 -1rem;
    }
  `;

  const slides = [
    {
      image: "./scenario1.png",
      title: language === "en" ? "Our Food" : "Unser Essen",
      description: language === "en" ? "Fresh and High Quality Ingredients" : "Frische und hochwertige Zutaten"
    },
    {
      image: "./scenario2.png",
      title: language === "en" ? "Our Solutions" : "Unsere Lösungen",
      description: language === "en" ? "Fully Automated Food Vending Machines" : "Vollautomatische Lebensmittelautomaten"
    },
    {
      image: "./scenario3.png",
      title: language === "en" ? "Our Advantages" : "Unsere Vorteile",
      description: language === "en" ? "Cost-effective, balanced meals" : "Kosteneffiziente, ausgewogene Mahlzeiten"
    },
    {
      image: "./scenario4.png",
      title: language === "en" ? "Quality Service" : "Qualitätsservice",
      description: language === "en" ? "24/7 Support" : "24/7 Unterstützung"
    },
    {
      image: "./scenario5.png",
      title: language === "en" ? "Innovation" : "Innovation",
      description: language === "en" ? "Modern Technology" : "Moderne Technologie"
    },
    {
      image: "./scenario6.png",
      title: language === "en" ? "Sustainability" : "Nachhaltigkeit",
      description: language === "en" ? "Eco-friendly Solutions" : "Umweltfreundliche Lösungen"
    },
    {
      image: "./scenario7.png",
      title: language === "en" ? "Customer Focus" : "Kundenorientierung",
      description: language === "en" ? "Satisfaction Guaranteed" : "Zufriedenheit garantiert"
    }
  ];

  const handleSliderBottomScroll = () => {
    const sliderElement = document.querySelector(".slick-slider");
    if (sliderElement) {
      const sliderBottom = sliderElement.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top: sliderBottom, behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 md:py-8 lg:py-10 text-center bg-white rounded-3xl shadow-2xl px-4 md:px-6 lg:px-8 mx-4 md:mx-6 lg:mx-8 my-8 md:my-12">
      <style>{sliderStyles}</style>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        {language === "en" ? "Where You Can Expect to Meet Us" : "Wo Sie uns treffen können"}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-sans mb-6 sm:mb-8 md:mb-10 lg:mb-12 mx-auto max-w-5xl px-2 sm:px-4">
        {language === "en" ? "Perfect for companies, universities, hospitals, gyms, and any place that needs 24/7 quick and delicious hot meals" : "Für Unternehmen, Universitäten, Krankenhäuser, Fitnessstudios und jeden Ort, der rund um die Uhr schnelle und leckere warme Mahlzeiten benötigt, perfekt geeignet"}
      </p>

      <div 
        className="relative w-full overflow-hidden px-2 md:px-4 lg:px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider {...settings} className="w-full">
          {slides.map((slide, index) => (
            <div key={index} className="px-1 md:px-2">
              <div className="relative group transition-all duration-500">
                <div className="relative overflow-visible h-96 w-full max-w-[1400px] mx-auto">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Highlights;
