import { useLanguage } from '../../language';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Introduct = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '100px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-orange-100">
      <section ref={sectionRef} className="flex justify-center items-center py-10 sm:py-16 md:py-20 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] font-sans px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center max-w-[1200px] w-full gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 w-full lg:pr-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInLeftVariants}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide">
              {language === "en" ? "The 24/7 on-site dining solution" : "Die 24/7 On-Site-Essenslösung"}
            </h1>

            <p className="text-lg sm:text-xl text-[#2A1A1F] mb-8">
              {language === "en" 
                ? "SmartFoodie GmbH delivers innovative catering solutions through automated vending machines with steamers, providing fresh, hot meals in 2 minutes. Perfect for companies, universities, and institutions seeking convenient food options."
                : "SmartFoodie GmbH bietet innovative Catering-Lösungen durch automatisierte Verkaufsautomaten mit Dampfgarern, die in 2 Minuten frische, warme Mahlzeiten liefern. Ideal für Unternehmen, Universitäten und Institutionen, die nach praktischen Essensoptionen suchen."}
            </p>

            <ul className="mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-10 space-y-4 md:space-y-6 text-[#2A1A1F] list-none text-base sm:text-lg">
              <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Smart: Automated vending machines with steam technology for fresh, hot meals" : "Komfort: Vor Ort frisch erwärmte Mahlzeiten - spart Zeit und Aufwand."}</li>
              <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Fast: Ready-to-eat meals in just 2 minutes" : "Erschwinglichkeit: Automatisierung gewährleistet hochwertige Mahlzeiten zu niedrigen Kosten."}</li>
              <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Sustainable: Eco-friendly packaging and local ingredients" : "Geschmack: Dampftechnologie für optimalen Geschmack und Erhaltung von Nährstoffen."}</li>
              <li className="flex items-start before:content-['•'] before:text-[#2A1A1F] before:mr-2">{language === "en" ? "Cost-effective: No upfront investment, try free for 3 months" : "Schnell: Genießen Sie frisch gedämpfte, warme Mahlzeiten in weniger als 2 Minuten."}</li>
            </ul>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-full sm:max-w-[600px] lg:max-w-[900px] mt-6 sm:mt-8 lg:mt-0 lg:ml-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInRightVariants}
          >
            <img
              src="./1.png"
              alt="Smart fridge with food"
              className="w-full h-auto lg:h-[570px] object-fill rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <div className="flex flex-col items-center p-4 md:p-8 lg:p-10 gap-4 md:gap-6 lg:gap-10 max-w-[1400px] mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-20 w-full py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInVariants}
        >
          <motion.img 
            src="./1.jpg" 
            alt="Pasta Dish" 
            className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto aspect-square object-cover rounded-2xl shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInLeftVariants}
          /> 
          <motion.div 
            className="flex flex-col justify-start items-start text-left max-w-full lg:max-w-[600px] p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInRightVariants}
          > 
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide text-left px-4 md:px-6">
              {language === "en" ? "Fresh, Convenient, and Affordable" : "Frisch, Bequem, und Günstig"}
            </h1>
            <ul className="mt-4 md:mt-6 list-none px-4 md:px-6 mb-4 md:mb-5 text-[#222222] text-left">
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e] text-left">
                {language === "en" ? "Fresh & Hot Meals - Meals are heated using steam, preserving nutrients and flavor." : "Frisch & Warm Mahlzeiten - Mahlzeiten werden dampfgegart, wodurch Nährstoffe und Geschmack erhalten bleiben."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e] text-left">
                {language === "en" ? "Time-Saving & Hassle-Free - Skip the restaurant trip, hot meals on site for maximum convenience." : "Zeitsparend & Stressfrei - Sparen Sie sich den Weg ins Restaurant und genießen Sie warme Mahlzeiten direkt vor Ort für maximalen Komfort."}
              </li>
              <li className="mb-4 md:mb-6 leading-relaxed relative pl-6 text-base md:text-lg lg:text-xl before:content-['•'] before:absolute before:left-0 before:text-[#1a237e] text-left">
                {language === "en" ? "Affordable Excellence - Savor quality, flavorful meals at a price that fits everyone's budget." : "Preiswerte Spitzenqualität: Genießen Sie hochwertige, schmackhafte Gerichte zu einem budgetfreundlichen Preis.​"}
              </li>
            </ul>
          </motion.div>
        </motion.div>       
        
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-20 w-full py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInVariants}
        >
          <motion.div 
            className="flex flex-col justify-start items-start text-left max-w-full lg:max-w-[600px] p-4 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInLeftVariants}
          > 
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide text-left px-4 md:px-6">
              {language === "en" ? "Diverse, Delicious and Nutritious" : "Vielseitig, Geschmackvoll und Nährstoffreich"}
            </h1>
            <ul className="mt-4 md:mt-6 list-none px-4 md:px-6 mb-4 md:mb-5 text-[#222222] text-left">
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
          </motion.div>
          <motion.img 
            src="./2.jpg" 
            alt="Pasta Dish" 
            className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto aspect-square object-cover rounded-2xl shadow-xl order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInRightVariants}
          /> 
        </motion.div>       
        
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-20 w-full py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInVariants}
        >
          <motion.img 
            src="./box.jpg" 
            alt="Pasta Dish" 
            className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto aspect-square object-cover rounded-2xl shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInLeftVariants}
          /> 
          <motion.div 
            className="flex flex-col justify-start items-start text-left max-w-full lg:max-w-[600px] p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInRightVariants}
          > 
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide text-left px-4 md:px-6">
              {language === "en" ? "Sustainable, Eco-friendly, and Responsible" : "Nachhaltig, Umweltfreundlich, und Verantwortungsbewusst"}
            </h1>
            <ul className="mt-4 md:mt-6 list-none px-4 md:px-6 mb-4 md:mb-5 text-[#222222] text-left">
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduct;




