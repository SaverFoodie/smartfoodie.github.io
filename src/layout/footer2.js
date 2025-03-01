import React from "react";

export default function Footer2() {
  return (
    <div className="flex items-center justify-center py-0 px-0 md:px-0">
      {/* Footer Bottom Section */}
      <div className="bg-orange-300 w-full py-3 px-4 md:px-20 mt-0 flex flex-col md:flex-row justify-between items-center border-t border-gray-300">
        <div className="flex justify-between w-full">
          <div className="flex-1 text-center text-gray-600">
            <p className="text-base">Copyright © 2024 – Smart Foodie GmbH</p>
          </div>
          <div className="flex-1 text-center text-gray-600">
            <p className="text-base">Tel.: +49 15122019721</p>
          </div>
          <div className="flex-1 text-center text-gray-600">
            <p className="text-base">E-Mail: smartfoodie@smartfoodiegmbh.eu</p>
          </div>
        </div>
      </div>
    </div>
  );
}


