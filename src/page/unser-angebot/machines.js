import React from 'react';

const FoodieMachine = () => {
  return (
    <div className="relative bg-[length:100%_100%] bg-center h-[80vh]" style={{ backgroundImage: "url('./machine.png')" }}>
      <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-10">
        <div className="ml-[45%]">
          <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-lg ml-10">Meal Vending Machines</h1>
          <br />
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2"> Fully Automated Serving - Built-in steamers prepare fresh and hot meals within just 2 minutes.</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2"> 24/7 Operation & Technical Support - Always available meals with dedicated maintenance and support.</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2"> Optimized Supply Chains - Partnering with local suppliers ensures fresh stock and cost efficiency.</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2"> SmartFoodie App Integration - Users can order, browse menus, and schedule pickups in real time.</p>
          <p className="text-xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 mt-2"> Multiple Payment Methods - PayPal, VISA, Mastercard, Girocard, Apple Pay, Google Pay, Alipay and WeChat.</p>
        </div>
      </div>
    </div>    
  );
};

export default FoodieMachine;