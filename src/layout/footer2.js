import React from "react";

export default function Footer2() {
  return (
    <div className="w-full">
      {/* Footer Bottom Section */}
      <div className="bg-orange-300 w-full py-3 px-4 md:px-20 mt-0">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-center text-gray-600 w-full md:w-1/3">
            <p className="text-sm md:text-base">Copyright © 2024 – Smart Foodie GmbH</p>
          </div>
          <div className="text-center text-gray-600 w-full md:w-1/3">
            <p className="text-sm md:text-base">Tel.: +49 15122019721</p>
          </div>
          <div className="text-center text-gray-600 w-full md:w-1/3">
            <p className="text-sm md:text-base">E-Mail: smartfoodie@smartfoodiegmbh.eu</p>
          </div>
        </div>
      </div>
    </div>
  );
}


