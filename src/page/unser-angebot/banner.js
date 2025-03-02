import { useLanguage } from '../../language';

const Banner = () => {
  const { language } = useLanguage();
  return (
    <section className="flex justify-center items-center bg-[#FFF6E5] py-20 min-h-[700px] font-sans">
      <div className="flex flex-col lg:flex-row items-center max-w-[1200px] w-full gap-16">
        <div className="flex-1 pr-5">
          <h1 className="mt-12 text-4xl lg:text-5xl font-bold text-[#2A1A1F] mb-10 leading-tight">
          {language === "en" ? "The round-the-clock on-site dining solution" : "Die 24/7 On-Site-Essenslösung"}
          </h1>

          <ul className="mt-8 mb-10 space-y-6 text-[#2A1A1F] list-none text-lg">
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Convenience: On-site, freshly heated meals save time and effort." : "Bequem: Mahlzeiten auf dem Standort, frisch erhitzt, sparen Zeit und Mühe."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Affordability: Automation ensures high-quality meals at a low cost." : "Günstig: Automatisierung sorgt für hochwertige Mahlzeiten zu niedrigen Kosten."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Taste: Steam technology for optimal flavor and preserving nutrients." : "Geschmack: Dampftechnologie für optimalen Geschmack und Erhaltung von Nährstoffen."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Fast: Freshly steamed, warm meals in under 2 minutes." : "Schnell: Frisch gedämpft, warm in unter 2 Minuten."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Sustainability: Eco-friendly packaging and locally sourced ingredients." : "Nachhaltigkeit: Umweltfreundliche Verpackung und lokal eingesetzte Zutaten."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "No costs: No capital investment or additional effort required." : "Keine Kosten: Keine Kapitalinvestition oder zusätzliche Anstrengungen erforderlich."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Risk-Free: Try it free for 3 months with no obligation." : "Keine Risiken: Versuchen Sie es kostenlos für 3 Monate mit keinerlei Verpflichtung."}</li>
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




