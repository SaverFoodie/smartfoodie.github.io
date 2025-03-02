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
      className={`hidden sm:block absolute md:top-[85%] transform -translate-y-1/2 z-10 p-2 bg-transparent text-orange-500 rounded-full shadow-md hover:bg-gray-300 transition duration-300 ${
        direction === "left" ? "left-1" : "right-1"
      }`}
    >
      {direction === "left" ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
    </button>
  );
};

const Highlights = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-orange-600 mb-10">{language === "en" ? "The Distinctive Excellence of SmartFoodie" : "Die Ausgezeichnete Qualität von SmartFoodie"}</h2>
      <p className="text-gray-700 font-sans mb-12 mx-auto max-w-5xl text-xl">
      {language === "en" ? "SmartFoodie GmbH provides innovative and sustainable catering solutions through fully automatic vending machines with steamers, delivering freshly steamed meals in just 2 minutes. We cater to companies, universities, and institutions without a canteen or looking to expand their food options. Our mission is to combine convenience, efficiency, and nutrition, ensuring high-quality, hot meals anytime for you and your employees." : "SmartFoodie GmbH stellt innovative und nachhaltige Catering-Lösungen bereit, indem sie vollautomatische Vending-Maschinen mit Dampfern verwenden, die frisch gedämpften Mahlzeiten in nur 2 Minuten liefern. Wir kümmern uns um Unternehmen, Universitäten und Institutionen, die keinen Essensraum oder eine Erweiterung ihrer Essensoptionen suchen. Unsere Mission ist es, Bequemlichkeit, Effizienz und Nährstoffe zu vereinen, um sicherzustellen, dass hochwertige, heiße Mahlzeiten jederzeit für Sie und Ihre Mitarbeiter verfügbar sind."}
      </p>

      <Slider {...settings} className="w-[60%] mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[84vh]">
        <div className="bg-[#F7E14D] flex flex-col rounded-3xl transition-transform transform" style={{ height: '70vh' }}>
        <Link
          className="outline-none focus:outline-none"
          onMouseDown={(e) => {
            e.preventDefault();
            setStartPos({ x: e.clientX, y: e.clientY });
            setIsDragging(false);
          }}
          onMouseMove={(e) => {
            const deltaX = Math.abs(e.clientX - startPos.x);
            const deltaY = Math.abs(e.clientY - startPos.y);
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
          onClick={(e) => {
            if (isDragging) {
              e.preventDefault(); 
              return;
            } else {
              navigate("/our-food");
              window.scrollTo({ top: 0, behavior: "instant" });
            }
          }}
        >
            <img
              src="./food.png"
              alt="Our Food"
              className="rounded-t-3xl w-full h-[21vh] sm:h-[31vh] md:h-[42vh] lg:h-[64vh] object-fill mb-4"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-6">{language === "en" ? "Our Food" : "Unser Essen"}</h3>
            <ul className="text-gray-700 text-xl space-y-2 text-center flex-grow min-h-[15vh] overflow-auto">
              <li>{language === "en" ? "Fresh Ingredients, Various Dishes" : "Frische Zutaten, verschiedene Mahlzeiten"}</li>
              <li>{language === "en" ? "Customizable Menu Options, Including Vegan Options" : "Anpassbare Menüoptionen, einschließlich Vegan-Optionen"}</li>
              <li>{language === "en" ? "Natural Flavor and Firmer Texture" : "Natürlicher Geschmack und festerer Textur"}</li>
            </ul>
          </Link>
        </div>
        
        <div className="bg-[#ffb700] flex flex-col rounded-3xl transition-transform transform" style={{ height: '70vh' }}>
          <Link
            className="outline-none focus:outline-none"
            onMouseDown={(e) => {
              e.preventDefault();
              setStartPos({ x: e.clientX, y: e.clientY });
              setIsDragging(false);
            }}
            onMouseMove={(e) => {
              const deltaX = Math.abs(e.clientX - startPos.x);
              const deltaY = Math.abs(e.clientY - startPos.y);
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
            onClick={(e) => {
              if (isDragging) {
                e.preventDefault(); 
                return;
              } else {
                navigate("/products&solutions");
                window.scrollTo({ top: 0, behavior: "instant" });
              }
            }}
          >
            <img
              src="./highlight2.jpg"
              alt="Our Service"
              className="rounded-t-3xl w-full h-[21vh] sm:h-[31vh] md:h-[42vh] lg:h-[64vh] object-fill mb-4"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-6">{language === "en" ? "Our Solutions" : "Unsere Lösungen"}</h3>
            <ul className="text-gray-700 text-xl space-y-2 text-center flex-grow min-h-[15vh] overflow-auto">
              <li>{language === "en" ? "Fully Automated Food Vending Machines, Non Special Catering Space Required" : "Voll automatische Mahlzeitenautomaten, kein spezialisiertes Catering-Raum erforderlich"}</li>
              <li>{language === "en" ? "24/7 Operation and Technical Support, Always Available For You" : "24/7 Betrieb und technische Unterstützung, immer für Sie verfügbar"}</li>
              <li>{language === "en" ? "Convenient and Efficient On-Site Catering Solutions" : "Bequem und effiziente On-Site Catering-Lösungen"}</li>
            </ul>
          </Link>
        </div>

        <div className="bg-[#81D8D0] flex flex-col rounded-3xl transition-transform transform" style={{ height: '70vh' }}>
          <Link
            className="outline-none focus:outline-none"
            onMouseDown={(e) => {
              e.preventDefault();
              setStartPos({ x: e.clientX, y: e.clientY });
              setIsDragging(false);
            }}
            onMouseMove={(e) => {
              const deltaX = Math.abs(e.clientX - startPos.x);
              const deltaY = Math.abs(e.clientY - startPos.y);
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
            onClick={(e) => {
              if (isDragging) {
                e.preventDefault(); 
                return;
              } else {
                const sliderElement = document.querySelector(".slick-slider");
                if (sliderElement) {
                  const sliderBottom = sliderElement.getBoundingClientRect().bottom + window.scrollY;
                  window.scrollTo({ top: sliderBottom, behavior: "smooth" });
                }
              }
            }}
          >
            <img
              src="./office.png"
              alt="Our Innovation"
              className="rounded-t-3xl w-full h-[21vh] sm:h-[31vh] md:h-[42vh] lg:h-[64vh] object-fill mb-4"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-6">{language === "en" ? "Our Advantages" : "Unsere Vorteile"}</h3>
            <ul className="text-gray-700 text-xl space-y-2 text-center flex-grow min-h-[15vh] overflow-auto">
              <li>{language === "en" ? "Low Costs for Balanced, High-quality Meals" : "Niedrige Kosten für ausgewogene, hochwertige Mahlzeiten"}</li>
              <li>{language === "en" ? "Suitable for a Wide Range of Locations" : "Suitable for a Wide Range of Locations"}</li>
              <li>{language === "en" ? "Sustainable Practices, Reducing Waste" : "Nachhaltige Praktiken, Müllreduktion"}</li>
            </ul>
          </Link>
        </div>
      </Slider>
    </section>
  );
};

export default Highlights;
