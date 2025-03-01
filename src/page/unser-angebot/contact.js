import React from "react";

export default function Contact() {
  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-br from-orange-100 to-white">
      {/* Title section */}
      <div className="w-full text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 transition-colors duration-300">
          How can we help you?
        </h1>
      </div>
      {/* Content section */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Add flex container */}
        <div className="flex flex-col md:flex-row items-center gap-8 shadow-2xl rounded-2xl bg-white p-8">
          {/* Left half - text content */}
          <div className="w-full md:w-2/5 p-8">
            <h3 className="text-3xl font-semibold mb-6 text-orange-500">Contact Us</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you are interested in our services or have any questions, please feel free to contact us.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team will be happy to provide you with more information and personalized solutions.
            </p>
          </div>
          {/* Right half - content */}
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Smart Foodie GmbH
            </h2>
            <div className="transform transition-transform duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-orange-300 to-orange-500 p-6 rounded-xl shadow-lg">
                <img
                  src="./guo.jpg"
                  alt="Josephine Wichmann"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-semibold text-white mb-2">Theo Guo</h4>
                  <p className="text-orange-100 mb-4">Managing Director</p>
                  <div className="space-y-2">
                    <p className="text-white transition-colors">
                    📧 smartfoodie@smartfoodiegmbh.eu
                    </p>
                    <p className="text-white transition-colors">
                      📞 +49 15122019721
                    </p>
                    <p className="text-white transition-colors">
                      📍 Schellingstr. 109a, 80798 Munich
                    </p>
                  </div>
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
