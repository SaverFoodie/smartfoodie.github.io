import React from "react";

export default function Footer2() {
  return (
    <footer className="w-full">
      <div className="bg-orange-400 w-full py-6 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left w-full md:w-1/3">
              <p className="text-gray-800 font-medium text-sm md:text-base">
                Copyright © 2024 - SmartFoodie GmbH
              </p>
            </div>
            <div className="text-center w-full md:w-1/3 flex items-center justify-center">
              <a href="tel:+49 15122019721" className="text-gray-800 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm md:text-base font-medium">+49 15122019721</span>
              </a>
            </div>
            <div className="text-center md:text-right w-full md:w-1/3">
              <a href="mailto:smartfoodie@smartfoodiegmbh.eu" className="text-gray-800 hover:text-gray-900 transition-colors duration-300 flex items-center justify-center md:justify-end space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm md:text-base font-medium">smartfoodie@smartfoodiegmbh.eu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


