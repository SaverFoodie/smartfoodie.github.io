import React from 'react';

const FoodieSteps = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 px-6 py-10 bg-orange-100">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col md:w-1/3 space-y-6 text-center md:text-left md:ml-24">
        <h2 className="text-sm font-semibold text-gray-800 uppercase tracking-widest">How it works</h2>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          A Journey of Flavor.
        </h1>
        <p className="text-lg text-gray-700 italic">
        Enjoy fast and effortless meals with SmartFoodie. Get our app now!
        </p>
        <div className="flex justify-center">
          <img src="./qr.jpg" alt="QR Code" className="w-[15vh] h-[18vh]" />
        </div>
      </div>

      {/* Right Side: Steps */}
      <div className="flex flex-col md:ml-24 space-y-6">
        {[{
          number: "01",
          image: "step1.png",
          description: "Order or reserve a meal via the SmartFoodie app, or via the machine touchscreen"
        },
        {
          number: "02",
          image: "step2.png",
          description: "Wait till done and collect your chosen items from the machine"
        },
        {
          number: "03",
          image: "85.png",
          description: "Enjoy your delicious meal"
        }].map((step, index) => (
          <div key={index} className="flex items-start space-x-4 transition-transform transform hover:scale-105">
            {/* Step Number */}
            <div className="flex items-center justify-center w-10 h-10 bg-[#ff7043] text-white rounded-full font-semibold text-lg shadow-md">
              {step.number}
            </div>

            {/* Step Content */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 space-y-2 md:space-y-0 md:space-x-4 w-full h-40 hover:shadow-xl transition-shadow duration-300">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-32 h-32 object-cover rounded-lg shadow-sm"
              />
              <p className="text-gray-800 font-medium text-2xl text-left flex items-center justify-center h-full break-words leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodieSteps;
