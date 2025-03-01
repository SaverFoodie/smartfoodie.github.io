import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
      <h2 className="text-5xl font-bold text-orange-600 mb-10">The Distinctive Excellence of SmartFoodie</h2>
      <p className="text-gray-700 font-sans mb-12 mx-auto max-w-5xl text-xl">
      SmartFoodie GmbH provides innovative and sustainable catering solutions through fully automatic vending machines with steamers, delivering freshly steamed meals in just 2 minutes. We cater to companies, universities, and institutions without a canteen or looking to expand their food options. Our mission is to combine convenience, efficiency, and nutrition, ensuring high-quality, hot meals anytime for you and your employees.
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
            <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-6">Our Food</h3>
            <ul className="text-gray-700 text-xl space-y-2 text-center flex-grow min-h-[15vh] overflow-auto">
              <li>Fresh Ingredients, Various Dishes</li>
              <li>Customizable Menu Options, Including Vegan Options</li>
              <li>Natural Flavor and Firmer Texture</li>
            </ul>
          </Link>
        </div>
        
        <div className="bg-[#FF8C00] flex flex-col rounded-3xl transition-transform transform" style={{ height: '70vh' }}>
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
            <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-6">Our Solutions</h3>
            <ul className="text-gray-700 text-xl space-y-2 text-center flex-grow min-h-[15vh] overflow-auto">
              <li>Fully Automated Food Vending Machines, Non Special Catering Space Required</li>
              <li>24/7 Operation and Technical Support, Always Available For You</li>
              <li>Convenient and Efficient On-Site Catering Solutions</li>
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
            <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-6">Our Advantages</h3>
            <ul className="text-gray-700 text-xl space-y-2 text-center flex-grow min-h-[15vh] overflow-auto">
              <li>Low Costs for Balanced, High-quality Meals</li>
              <li>Suitable for a Wide Range of Locations</li>
              <li>Sustainable Practices, Reducing Waste</li>
            </ul>
          </Link>
        </div>
      </Slider>
      <div className="h-4"></div>
    </section>
  );
};

export default Highlights;
