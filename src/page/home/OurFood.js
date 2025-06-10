import React from 'react';
import { useLanguage } from '../../language';
import { motion } from 'framer-motion';

function OurFood() {
  const { language } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };
  
  return (
    <>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 tracking-wider mx-auto leading-relaxed italic mb-6 md:mb-10 mt-4 md:mt-5 px-4">
        {language === "en" ? "When Convenience meets Culinary Excellence" : "Komfort trifft kulinarische Exzellenz"}
      </div>
      <div className="flex flex-col items-center p-4 md:p-8 lg:p-10 font-['Poppins',sans-serif] bg-orange-100 gap-4 md:gap-6 lg:gap-10 max-w-[1400px] mx-auto rounded-3xl md:rounded-[50px]">
        
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-20 w-full py-4"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <img src="./1.jpg" alt="Pasta Dish" className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto aspect-square object-cover rounded-2xl shadow-xl" /> 
          <div className="flex flex-col justify-center items-center text-center max-w-full lg:max-w-[600px] p-4"> 
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide">
              {language === "en" ? "Fresh, Convenient, and Affordable" : "Frisch, Bequem, und Günstig"}
            </h1>
            <ul className="mt-4 md:mt-6 list-none px-4 md:px-6 mb-4 md:mb-5 text-[#222222]">
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Fresh & Hot Meals - Meals are heated using steam, preserving nutrients and flavor." : "Frisch & Warm Mahlzeiten - Mahlzeiten werden dampfgegart, wodurch Nährstoffe und Geschmack erhalten bleiben."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Time-Saving & Hassle-Free - Skip the restaurant trip, hot meals on site for maximum convenience." : "Zeitsparend & Stressfrei - Sparen Sie sich den Weg ins Restaurant und genießen Sie warme Mahlzeiten direkt vor Ort für maximalen Komfort."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Affordable Excellence - Savor quality, flavorful meals at a price that fits everyone's budget." : "Preiswerte Spitzenqualität: Genießen Sie hochwertige, schmackhafte Gerichte zu einem budgetfreundlichen Preis.​"}
              </li>
            </ul>
          </div>
        </motion.div>       
        
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-20 w-full py-4"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="flex flex-col justify-center items-center text-center max-w-full lg:max-w-[600px] p-4 order-2 lg:order-1"> 
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide">
              {language === "en" ? "Diverse, Delicious and Nutritious" : "Vielseitig, Geschmackvoll und Nährstoffreich"}
            </h1>
            <ul className="mt-4 md:mt-6 list-none px-4 md:px-6 mb-4 md:mb-5 text-[#222222]">
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Diverse & Customizable Menu - Over 50 dishes, including a variety of cuisines, with dietary-friendly options." : "Umfangreiches & anpassbares Menü: Mehr als 50 Gerichte aus verschiedenen Küchenrichtungen, inklusive diätetischer Optionen."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Warm & Tasty Cuisine - Delicious, nutrient-rich dishes served with flavor and enjoyment." : "Warm & Geschmackvoll - Leckere, nährstoffreiche Speisen, die mit Genuss serviert werden."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Nutritional & Balanced Choices - Meals are prepared and developed by nutrition experts to ensure well-balanced nutrition." : "Nährstoffreich & Ausgewogen - Mahlzeiten werden von Nahrungsmittelexperten vorbereitet und entwickelt, um eine ausgewogene Ernährung zu gewährleisten."}
              </li>
            </ul>
          </div>
          <img src="./2.jpg" alt="Pasta Dish" className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto aspect-square object-cover rounded-2xl shadow-xl order-1 lg:order-2" /> 
        </motion.div>       
        
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-20 w-full py-4"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <img src="./box.jpg" alt="Pasta Dish" className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto aspect-square object-cover rounded-2xl shadow-xl" /> 
          <div className="flex flex-col justify-center items-center text-center max-w-full lg:max-w-[600px] p-4"> 
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide">
              {language === "en" ? "Sustainable, Eco-friendly, and Responsible" : "Nachhaltig, Umweltfreundlich, und Verantwortungsbewusst"}
            </h1>
            <ul className="mt-4 md:mt-6 list-none px-4 md:px-6 mb-4 md:mb-5 text-[#222222]">
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Locally Sourced Ingredients - Reducing the carbon footprint by prioritizing local suppliers." : "Lokal eingesetzte Zutaten - Reduzierung des Kohlenstofffußabdrucks durch Priorisierung lokaler Anbieter."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "Eco-Friendly Packaging - Boxes made from recycable materials." : "Umweltschonende Verpackung - Boxen aus recycelbaren Materialien."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e]">
                {language === "en" ? "AI-Powered Waste Reduction - Reduces food waste and optimizes meal choices for customers." : "KI-gestützte Abfallreduktion: Durch den Einsatz von Künstlicher Intelligenz reduzieren wir Lebensmittelverschwendung und optimieren die Mahlzeitenwahl für unsere Kunden."}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default OurFood;
