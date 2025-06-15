import React from 'react';
import { useLanguage } from '../../language';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Arrow = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm text-orange-500 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 ${
        direction === "left" ? "-left-16" : "-right-16"
      }`}
    >
      {direction === "left" ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
    </button>
  );
};

const PlaceCard = ({ image, title, description, bgColor, language }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group overflow-hidden rounded-2xl bg-white shadow-xl mx-4 my-8 max-w-[1200px] mx-auto"
    >
      <div className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-14 text-white transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-300">
        <div className={`inline-block px-6 py-3 rounded-full ${bgColor} mb-6 text-base font-semibold shadow-xl`}>
          {language === "en" ? "SmartFoodie Location" : "SmartFoodie Standort"}
        </div>
        <h3 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-xl">
          {title}
        </h3>
        <p className="text-white text-xl sm:text-2xl leading-relaxed max-w-[95%] drop-shadow-lg">
          {description}
        </p>
        <div className="mt-10 flex items-center text-lg text-white drop-shadow-lg">
          <span className="flex items-center">
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {language === "en" ? "24/7 Available" : "24/7 Verfügbar"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const FoodieSteps = () => {
  const { language } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const places = [
    {
      image: "/gym.jpg",
      title: language === "en" ? "Fitness Centers" : "Fitnessstudios",
      description: language === "en" 
        ? "Elevate your fitness journey with nutritious, protein-rich meals available 24/7. Perfect for pre and post-workout nutrition."
        : "Steigern Sie Ihre Fitnessreise mit nahrhaften, proteinreichen Mahlzeiten rund um die Uhr. Ideal für die Ernährung vor und nach dem Training.",
      bgColor: "bg-blue-500"
    },
    {
      image: "/airport.jpg",
      title: language === "en" ? "Airports" : "Flughäfen",
      description: language === "en"
        ? "Fresh, healthy meals for travelers on the go. Skip the fast food and enjoy quality dining during your layovers."
        : "Frische, gesunde Mahlzeiten für Reisende unterwegs. Überspringen Sie das Fast Food und genießen Sie qualitativ hochwertiges Essen während Ihrer Zwischenstopps.",
      bgColor: "bg-indigo-500"
    },
    {
      image: "/mall.jpg",
      title: language === "en" ? "Shopping Malls" : "Einkaufszentren",
      description: language === "en"
        ? "Enjoy delicious, healthy meals while shopping. Smart vending solutions for convenient dining throughout your shopping experience."
        : "Genießen Sie köstliche, gesunde Mahlzeiten beim Einkaufen. Intelligente Verkaufsautomaten für bequemes Essen während Ihres Einkaufsbummels.",
      bgColor: "bg-green-500"
    },
    {
      image: "/university.jpg",
      title: language === "en" ? "Universities" : "Universitäten",
      description: language === "en"
        ? "Fuel your academic success with affordable, nutritious meals. Perfect for busy students with demanding schedules."
        : "Unterstützen Sie Ihren akademischen Erfolg mit erschwinglichen, nahrhaften Mahlzeiten. Ideal für beschäftigte Studenten mit anspruchsvollen Stundenplänen.",
      bgColor: "bg-purple-500"
    },
    {
      image: "/office.jpg",
      title: language === "en" ? "Office Buildings" : "Bürogebäude",
      description: language === "en"
        ? "Enhance workplace productivity with convenient, healthy meal options. No more long lunch breaks or unhealthy fast food."
        : "Steigern Sie die Produktivität am Arbeitsplatz mit bequemen, gesunden Essensoptionen. Keine langen Mittagspausen oder ungesundes Fast Food mehr.",
      bgColor: "bg-cyan-500"
    },
    {
      image: "/hospital.jpg",
      title: language === "en" ? "Hospitals" : "Krankenhäuser",
      description: language === "en"
        ? "Support healthcare professionals and visitors with 24/7 access to fresh, nutritious meals. Always available when needed most."
        : "Unterstützen Sie medizinisches Personal und Besucher mit rund um die Uhr Zugang zu frischen, nahrhaften Mahlzeiten. Immer verfügbar, wenn sie am meisten benötigt werden.",
      bgColor: "bg-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1000px] mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            {language === "en" ? "Where SmartFoodie Makes a Difference" : "Wo SmartFoodie einen Unterschied macht"}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "en" 
              ? "Experience the future of smart dining across various locations, bringing fresh, convenient meals exactly where you need them."
              : "Erleben Sie die Zukunft des intelligenten Essens an verschiedenen Standorten und genießen Sie frische, bequeme Mahlzeiten genau dort, wo Sie sie benötigen."}
          </p>
        </div>

        <div className="relative max-w-[1000px] mx-auto ">
          <Slider {...settings} className="places-slider">
            {places.map((place, index) => (
              <PlaceCard
                key={index}
                {...place}
                language={language}
              />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default FoodieSteps;
