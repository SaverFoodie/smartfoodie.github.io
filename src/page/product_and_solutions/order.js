import React from 'react';
import { useLanguage } from '../../language';

const FoodieSteps = () => {
  const { language } = useLanguage();

  const translations = {
    mainTitle: {
      en: "How to Enjoy SmartFoodie",
      de: "So genießen Sie SmartFoodie"
    },
    mainSubtitle: {
      en: "Experience the future of dining with our smart vending machines. Simply scan, select, and enjoy fresh, delicious meals anytime, anywhere.",
      de: "Erleben Sie die Zukunft des Essens mit unseren intelligenten Automaten. Einfach scannen, auswählen und frische, köstliche Mahlzeiten jederzeit und überall genießen."
    },
    videoDescription: {
      en: "Watch our video to understand how to order on machine",
      de: "Sehen Sie sich unser Video an, um zu verstehen, wie man am Automaten bestellt"
    },
    videoNotSupported: {
      en: "Your browser does not support video playback.",
      de: "Ihr Browser unterstützt keine Videowiedergabe."
    },
    qrTitle: {
      en: "Get Started Now",
      de: "Jetzt Starten"
    },
    promoText: {
      en: "New users get 20% off when downloading now!",
      de: "Neue Nutzer erhalten 20% Rabatt beim Download!"
    }
  };

  return (
    <div className="flex flex-col bg-orange-100">
      {/* Title Section */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {translations.mainTitle[language]}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.mainSubtitle[language]}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center space-y-10 lg:space-y-0 lg:space-x-8 px-4 sm:px-6 pb-12">
        {/* Left Side: Video */}
        <div className="flex flex-col w-full sm:w-4/5 lg:w-1/2 mx-auto lg:mx-0">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {language === "en" ? "Ordering on Machine" : "Bestellen am Automaten"}
              </h1>
              <p className="text-base sm:text-lg text-gray-700">
                {translations.videoDescription[language]}
              </p>
            </div>
            <div className="relative w-full flex-grow" style={{ paddingTop: '56.25%' }}>
              <video
                controls
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              >
                <source src="/videos/order-process-compressed.mp4" type="video/mp4" />
                {translations.videoNotSupported[language]}
              </video>
            </div>
          </div>
        </div>

        {/* Right Side: Steps and QR Code */}
        <div className="flex flex-col w-full sm:w-4/5 lg:w-1/2 mx-auto lg:mx-0">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col relative">
            {/* QR Code positioned absolutely in top right */}
            <div className="absolute top-6 right-6 flex flex-col items-center">
              <img src="./qr.jpg" alt="QR Code" className="w-[10vh] h-[13vh]" />
              <span className="text-sm font-semibold text-gray-800 uppercase tracking-widest mt-2">
                {translations.qrTitle[language]}
              </span>
            </div>

            <div className="mb-6 pr-[12vh]"> {/* Add padding to prevent text overlap with QR code */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {language === "en" ? "Ordering on APP" : "Bestellen über die App"}
              </h1>
              <p className="text-base sm:text-lg text-gray-700">
                {language === "en" ? "Get SmartFoodie APP now!" : "Holen Sie sich jetzt die SmartFoodie APP!"}
              </p>
              <p className="text-base sm:text-lg text-orange-600 font-semibold mt-2">
                {translations.promoText[language]}
              </p>
            </div>

            <div className="flex-grow space-y-5">
              {[{
                number: "01",
                description: language === "en" ? "Select your preferred dining option: on-site or temporary storage" : "Wählen Sie Ihre bevorzugte Essensoption: vor Ort oder temporäre Lagerung"
              },
              {
                number: "02",
                description: language === "en" ? "Browse and select your favorite dish from our menu" : "Durchsuchen Sie unser Menü und wählen Sie Ihr Lieblingsgericht"
              },
              {
                number: "03",
                description: language === "en" ? "Complete your payment securely" : "Führen Sie Ihre Zahlung sicher durch"
              },
              {
                number: "04",
                description: language === "en" ? "Wait for preparation and collect your meal from the machine" : "Warten Sie auf die Zubereitung und holen Sie Ihre Mahlzeit am Automaten ab"
              }].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 transition-transform transform hover:scale-102 bg-gray-50 rounded-lg p-5 min-h-[80px]">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#ff7043] text-white rounded-full font-semibold text-lg shadow-md">
                    {step.number}
                  </div>
                  
                  <p className="text-gray-800 font-medium text-lg flex-grow flex items-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodieSteps;