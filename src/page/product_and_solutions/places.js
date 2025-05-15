import React from 'react';
import { useLanguage } from '../../language';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const FoodiePlaces = () => {
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

  return (
    <div className="flex flex-col">
      {/* Integrated Slider section with title */}
      <section className="py-8 md:py-12 lg:py-16 text-center bg-white px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 md:mb-12">
          {language === "en" ? "Where SmartFoodie Makes a Difference" : "Wo SmartFoodie einen Unterschied macht"}
        </h1>
        <Slider {...settings} className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto h-auto">
          {/* Gym Card */}
          <div className="bg-[#4A90E2] flex flex-col rounded-3xl transition-transform transform h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <img
              src="/gym.jpg"
              alt="Gym"
              className="rounded-t-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {language === "en" ? "Fitness Centers" : "Fitnessstudios"}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {language === "en" ? "Healthy meals for athletes, available 24/7" : "Gesunde Mahlzeiten für Sportler, rund um die Uhr verfügbar"}
              </p>
            </div>
          </div>

          {/* Airport Card */}
          <div className="bg-[#5D9CEC] flex flex-col rounded-3xl transition-transform transform h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <img
              src="/airport.jpg"
              alt="Airport"
              className="rounded-t-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {language === "en" ? "Airports" : "Flughäfen"}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {language === "en" ? "Quick meals for travelers, perfect for layovers" : "Schnelle Mahlzeiten für Reisende, ideal für Zwischenstopps"}
              </p>
            </div>
          </div>

          {/* Mall Card */}
          <div className="bg-[#48CFAD] flex flex-col rounded-3xl transition-transform transform h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <img
              src="/mall.jpg"
              alt="Shopping Mall"
              className="rounded-t-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {language === "en" ? "Shopping Malls" : "Einkaufszentren"}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {language === "en" ? "Convenient dining for shoppers, healthy alternatives" : "Bequemes Essen für Einkäufer, gesunde Alternativen"}
              </p>
            </div>
          </div>

          {/* University Card */}
          <div className="bg-[#37BC9B] flex flex-col rounded-3xl transition-transform transform h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <img
              src="/university.jpg"
              alt="University"
              className="rounded-t-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {language === "en" ? "Universities" : "Universitäten"}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {language === "en" ? "Affordable meals for students, perfect for busy schedules" : "Erschwingliche Mahlzeiten für Studenten, ideal für volle Stundenpläne"}
              </p>
            </div>
          </div>

          {/* Office Card */}
          <div className="bg-[#3BAFDA] flex flex-col rounded-3xl transition-transform transform h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <img
              src="/office.jpg"
              alt="Office"
              className="rounded-t-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {language === "en" ? "Office Buildings" : "Bürogebäude"}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {language === "en" ? "Quick lunch for employees, no cafeteria needed" : "Schnelles Mittagessen für Mitarbeiter, keine Kantine erforderlich"}
              </p>
            </div>
          </div>

          {/* Hospital Card */}
          <div className="bg-[#ffb700] flex flex-col rounded-3xl transition-transform transform h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <img
              src="/hospital.jpg"
              alt="Hospital"
              className="rounded-t-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {language === "en" ? "Hospitals" : "Krankenhäuser"}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {language === "en" ? "24/7 food service for staff and visitors" : "24/7 Essensservice für Personal und Besucher"}
              </p>
            </div>
          </div>
        </Slider>
      </section>
    </div>    
  );
};

export default FoodiePlaces;
