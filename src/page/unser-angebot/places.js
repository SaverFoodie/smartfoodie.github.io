import React from 'react';

const FoodiePlaces = () => {
  return (
    <div className="relative bg-[length:100%_100%] bg-center h-[80vh]" style={{ backgroundImage: "url('./place1.jpg')" }}>
      <div className="flex flex-col items-center justify-start pt-[25vh] h-full bg-gray-300 bg-opacity-10">
        <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-lg">On-site Catering Solutions</h1>
        <br />
        <p className="text-2xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 ml-4 mt-2"> Workplaces & Factories - Ideal for shift workers and employees needing quick meals.</p>
        <p className="text-2xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 ml-4 mt-2"> Universities & Schools – Ensuring students and faculty have easy access to fresh, healthy meals.</p>
        <p className="text-2xl text-gray-700 flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2 ml-4 mt-2"> Public Facilities & Institutions – Suitable for hospitals, airports, and government buildings.</p>
      </div>
    </div>    
  );
};

export default FoodiePlaces;