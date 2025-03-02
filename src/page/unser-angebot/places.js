import React from 'react';

const FoodiePlaces = () => {
  return (
    <div className="relative bg-[length:100%_100%] bg-center h-[80vh]" style={{ backgroundImage: "url('./place1.jpg')" }}>
      <div className="flex flex-col items-center justify-start pt-[25vh] h-full bg-gray-300 bg-opacity-10">
        <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-lg">On-site Catering Solutions</h1>
        <br />
        <p className="text-2xl text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2"> Workplaces & Factories - Ideal for employees and shift workers needing quick, tasty and affordable meals.</p>
        <p className="text-2xl text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2"> Universities & Schools – Ensuring students and faculty have easy access to good nourishment around the clock.</p>
        <p className="text-2xl text-orange-600 flex items-start before:content-['•'] before:text-[#ffb700] before:mr-2 ml-4 mt-2"> Public Facilities & Institutions – Suitable for hospitals, airports, government buildings and more.</p>
      </div>
    </div>    
  );
};

export default FoodiePlaces;
