import React from 'react';
import { useLanguage } from '../../language';

const Introduct = () => {
  const { language } = useLanguage();
    return (
        <div className="relative bg-cover bg-center h-[60vh] md:h-[80vh]" style={{ backgroundImage: "url('./title.jpg')" }}>
          <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-10 px-4">
            <div className="absolute left-[5%] right-[5%] md:left-[10%] md:right-[25%] md:left-[10%] md:right-[35%] lg:left-[10%] lg:right-[45%] bg-black bg-opacity-50 p-8 sm:p-8 md:p-10 lg:p-10 rounded-t-3xl top-[10%] lg:top-[15%] bottom-0"> 
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold text-white drop-shadow-lg text-center">
                Innovative meal vending solutions
              </h1>
              <p className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-white mt-5 sm:mt-5 md:mt-7 lg:mt-10 text-left max-w-4xl mx-auto">
                {language === "en" 
                  ? <>
                      <span>Hungry? Busy? We've got you covered! Our on-site meal vending solutions offer fresh, delicious, and nutritious food whenever you need it. Whether you're at work, on campus, or on the go, enjoy high-quality meals anytime, anywhere — quick, convenient, and hassle-free.</span>
                    </>
                  : <>
                      <span>Hungrig? Beschäftigt? Wir haben die Lösung für Sie! Unsere vor Ort Mahlzeiten Verkaufslösungen bieten Ihnen frische, köstliche und nahrhafte Speisen, wann immer Sie sie brauchen. Ob bei der Arbeit, auf dem Campus oder unterwegs, genießen Sie jederzeit und überall hochwertige Mahlzeiten.</span>
                    </>
                }
              </p>
              <style>
                {`
                  @media (max-width: 768px) {
                    .bg-[length:100%_100%] {
                      background-size: cover;
                    }
                    .text-4xl {
                      font-size: 2rem;
                    }
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      );
  };
  
  export default Introduct;
