import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../language";

export default function Footer() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handlePrivacyClick = () => {
    navigate('/datenschutz');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleImpressumClick = () => {
    navigate('/impressum');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="w-full">
      <div className="bg-orange-400 w-full py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left w-full md:w-1/4">
              <p className="text-gray-800 text-xs md:text-sm whitespace-nowrap">
                Copyright © 2024 - SmartFoodie GmbH
              </p>
            </div>
            <div className="text-center w-full md:w-2/4 flex items-center justify-center">
              <div className="flex items-center space-x-6">
                <a
                  onClick={handlePrivacyClick}
                  className="text-gray-800 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-1 cursor-pointer whitespace-nowrap"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium">
                    {language === "en" ? "Privacy Policy" : "Datenschutzerklärung"}
                  </span>
                </a>
                <a
                  onClick={handleImpressumClick}
                  className="text-gray-800 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-1 cursor-pointer whitespace-nowrap"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M7 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium">
                    {language === "en" ? "Legal Notice" : "Impressum"}
                  </span>
                </a>
              </div>
            </div>
            <div className="text-center md:text-right w-full md:w-1/4">
              <div className="flex items-center justify-center md:justify-end space-x-6">
                <a href="tel:+49 15122019721" className="text-gray-800 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-1 whitespace-nowrap">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium">+49 15122019721</span>
                </a>
                <a href="mailto:info@smartfoodiegmbh.eu" className="text-gray-800 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-1 whitespace-nowrap">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium">info@smartfoodiegmbh.eu</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


