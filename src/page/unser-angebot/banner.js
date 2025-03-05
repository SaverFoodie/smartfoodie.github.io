import { useLanguage } from '../../language';

const Banner = () => {
  const { language } = useLanguage();
  return (
    <section className="flex justify-center items-center bg-[#FFF6E5] py-10 sm:py-16 md:py-20 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] font-sans px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row items-center max-w-[1200px] w-full gap-8 md:gap-12 lg:gap-16">
        <div className="flex-1 w-full lg:pr-5">
          <h1 className="mt-6 sm:mt-8 lg:mt-12 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1A1F] mb-6 sm:mb-8 lg:mb-10 leading-tight">
          {language === "en" ? "The round-the-clock on-site dining solution" : "Die 24/7 On-Site-Essenslösung"}
          </h1>

          <ul className="mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-10 space-y-4 md:space-y-6 text-[#2A1A1F] list-none text-base sm:text-lg">
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Convenience: On-site, freshly heated meals save time and effort." : "Bequem: Mahlzeiten auf dem Standort, frisch erhitzt, sparen Zeit und Mühe."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Affordability: Automation ensures high-quality meals at a low cost." : "Günstig: Automatisierung sorgt für hochwertige Mahlzeiten zu niedrigen Kosten."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Taste: Steam technology for optimal flavor and preserving nutrients." : "Geschmack: Dampftechnologie für optimalen Geschmack und Erhaltung von Nährstoffen."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Fast: Freshly steamed, warm meals in under 2 minutes." : "Schnell: Frisch gedämpft, warm in unter 2 Minuten."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Sustainability: Eco-friendly packaging and locally sourced ingredients." : "Nachhaltigkeit: Umweltfreundliche Verpackung und lokal eingesetzte Zutaten."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "No costs: No capital investment or additional effort required." : "Keine Kosten: Keine Kapitalinvestition oder zusätzliche Anstrengungen erforderlich."}</li>
            <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Risk-Free: Try it free for 3 months with no obligation." : "Keine Risiken: Versuchen Sie es kostenlos für 3 Monate mit keinerlei Verpflichtung."}</li>
          </ul>

        </div>

        <div className="flex-1 w-full max-w-full sm:max-w-[600px] lg:max-w-[900px] mt-6 sm:mt-8 lg:mt-0 lg:ml-10 transform translate-x-0 md:translate-x-3 lg:translate-x-6">
          <img
            src="./3.jpg"
            alt="Smart fridge with food"
            className="w-full h-auto sm:h-[400px] md:h-[450px] lg:h-[600px] object-cover rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;




