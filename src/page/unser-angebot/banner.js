const Banner = () => {
  return (
    <section className="flex justify-center items-center bg-[#FFF6E5] py-20 min-h-[700px] font-sans">
      <div className="flex flex-col lg:flex-row items-center max-w-[1200px] w-full gap-16">
        <div className="flex-1 pr-5">
          <h1 className="mt-12 text-4xl lg:text-5xl font-bold text-[#2A1A1F] mb-10 leading-tight">
          The round-the-clock on-site dining solution
          </h1>

          <ul className="mt-8 mb-10 space-y-6 text-[#2A1A1F] list-none text-lg">
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">Convenience: On-site, freshly heated meals save time and effort.</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">Affordability: Automated processes ensure high-quality meals at a low cost.</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">Taste: Steam technology preserves flavors and nutrients for delicious meals.</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">Sustainability: Eco-friendly packaging and locally sourced ingredients reduce environmental impact.</li>
          </ul>

        {/*
          <button  className="px-6 py-3 bg-[#F16E21] text-white rounded-full text-lg font-bold mt-12 hover:bg-orange-600 transition"
           onClick={() =>
                  document
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
            Arrange an initial meeting
         </button>
        
        */}
          

        </div>

        <div className="flex-1 max-w-[900px] mt-8 lg:mt-0 lg:ml-10 translate-x-6">
          <img
            src="./3.jpg"
            alt="Smart fridge with food"
            className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;




