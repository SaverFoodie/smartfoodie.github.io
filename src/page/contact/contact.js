import React from "react";
import { useLanguage } from "../../language";

export default function Contact() {
  const { language } = useLanguage();
  return (
    <div className="w-full min-h-[100vh]">
      {/* Title section */}
      <div className="w-full text-center py-10 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 transition-colors duration-300 px-4">
          {language === "en" ? "Try out for free" : "Probieren Sie kostenlos"}
        </h1>
      </div>
      {/* Content section */}
      <div className="max-w-6xl mx-auto px-4 pb-10 sm:pb-16">
        {/* Add flex container */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 shadow-xl md:shadow-2xl rounded-2xl bg-white p-4 sm:p-6 md:p-8">
          {/* Left half - text content */}
          <div className="w-full md:w-2/5 p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6 text-orange-500">{language === "en" ? "Contact Us" : "Kontaktieren Sie uns"}</h3>
            <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-base md:text-lg">
              {language === "en" ? "If you are interested in our services or have any questions, please feel free to contact us." : "Wenn Sie an unseren Leistungen interessiert sind oder Fragen haben, kontaktieren Sie uns bitte."}
            </p>
            <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-base md:text-lg">
              {language === "en" ? "Our team will be happy to provide you with more information and personalized solutions." : "Unser Team wird sich freuen, Ihnen mehr Informationen zu geben und personalisierte Lösungen zu erstellen. "}
            </p>
          </div>
          {/* Right half - content */}
          <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800">
              SmartFoodie GmbH
            </h2>
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-gradient-to-r from-orange-300 to-orange-500 p-4 sm:p-6 rounded-xl shadow-lg">
                <img
                  src="./guo.jpg"
                  alt="Theo Guo"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="text-center md:text-left w-full">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">{language === "en" ? "Theo Guo" : "Theo Guo"}</h4>
                  <p className="text-orange-100 mb-3 sm:mb-4">{language === "en" ? "Sales Manager" : "Verkaufsmanager"}</p>
                  <div className="space-y-2 flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-6 md:flex-col md:gap-x-0">
                    <p className="text-white transition-colors text-sm sm:text-base">
                    📧 info@smartfoodiegmbh.eu
                    </p>
                    <p className="text-white transition-colors text-sm sm:text-base">
                      📞 +49 15122019721
                    </p>
                    <p className="text-white transition-colors text-sm sm:text-base">
                      📍 Schellingstr. 109a, 80798 München
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//webpackage
