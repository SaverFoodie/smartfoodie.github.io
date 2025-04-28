import React from 'react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../language';

const Introduct = () => {
  const { language } = useLanguage();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
         <div className="relative bg-cover bg-center h-[80vh] min-h-[450px] md:min-h-[550px] lg:min-h-[650px]" style={{ backgroundImage: "url('./title_test1.jpg')" }}>
          {/* <div className="fixed bottom-60 right-2 bg-black text-white text-xs p-2 rounded-lg opacity-70 z-50">
            <div className="block sm:hidden">当前屏幕：小于 640px(默认)</div>
            <div className="hidden sm:block md:hidden">当前屏幕：≥ 640p(sm)</div>
            <div className="hidden md:block lg:hidden">当前屏幕：≥ 768px(md)</div>
            <div className="hidden lg:block xl:hidden">当前屏幕：≥ 1024px(lg)</div>
            <div className="hidden xl:block 2xl:hidden">当前屏幕：≥ 1280px(xl)</div>
            <div className="hidden 2xl:block">当前屏幕：≥ 1536px(2xl)</div>
          </div> */}

          {/* <div className="fixed bottom-30 right-2 bg-black text-white text-xs p-2 rounded-lg opacity-70 z-50">
            当前视口高度: {viewportHeight}px
          </div> */}

          <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-5 px-4">
            <div className="absolute left-[5%] right-[5%] md:left-[10%] md:right-[35%] lg:left-[10%] lg:right-[45%] xl:left-[10%] xl:right-[50%] 2xl:right-[50%] bg-black bg-opacity-30 p-8 sm:p-8 md:p-10 lg:p-10 xl:p-10 2xl:p-12 rounded-t-3xl top-[50%] sm:top-[65%] md:top-[50%] lg:top-[50%] xl:top-[35%] 2xl:top-[50%] bottom-0 max-h-[90%] overflow-y-auto"> 
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-white drop-shadow-lg text-center">
                Innovative Meal Vending Solutions
              </h1>
              <p className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-white mt-4 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-6 2xl:mt-8 text-left max-w-4xl mx-auto">
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