import { useLanguage } from '../../language';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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
    <div className="bg-transparent w-full overflow-hidden">
      <section ref={sectionRef} className="flex justify-center items-center py-6 sm:py-16 md:py-20 min-h-[400px] md:min-h-[600px] lg:min-h-[700px] font-sans px-2 sm:px-0">
        <div className="flex flex-col lg:flex-row items-center max-w-[1200px] w-full gap-6 md:gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 w-full lg:pr-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={slideInLeftVariants}
          >
            {/* 贴纸效果组件 */}
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* 贴纸边框和阴影 */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#1a237e]/20 to-[#1a237e]/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-white border-2 sm:border-4 border-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
                {/* 胶带效果 */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-6 sm:w-16 sm:h-8 bg-gradient-to-r from-yellow-200/80 to-yellow-300/80 rounded-sm rotate-45 shadow-md border border-yellow-400/30"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-4 sm:w-12 sm:h-6 bg-gradient-to-r from-blue-200/80 to-blue-300/80 rounded-sm -rotate-12 shadow-md border border-blue-400/30"></div>
                
                {/* 内边界效果 */}
                <div className="absolute inset-2 sm:inset-3 border-2 border-dashed border-[#1a237e]/20 rounded-xl pointer-events-none"></div>
                
                {/* 内容区域 */}
                <div className="relative z-10">
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide">
                    {language === "en" ? "The 24/7 on-site dining solution" : "Die 24/7 On-Site-Essenslösung"}
                  </h1>

                  <p className="text-lg sm:text-xl text-[#2A1A1F] mb-8 leading-relaxed">
                    {language === "en" 
                      ? "SmartFoodie GmbH delivers innovative catering solutions through automated vending machines with steamers, providing fresh, hot meals in 2 minutes. Perfect for companies, universities, and institutions seeking convenient food options."
                      : "SmartFoodie GmbH bietet innovative Catering-Lösungen durch automatisierte Verkaufsautomaten mit Dampfgarern, die in 2 Minuten frische, warme Mahlzeiten liefern. Ideal für Unternehmen, Universitäten und Institutionen, die nach praktischen Essensoptionen suchen."}
                  </p>

                  <ul className="mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-10 space-y-4 md:space-y-6 text-[#2A1A1F] list-none text-base sm:text-lg">
                    <li className="flex items-start before:content-['•'] before:text-[#1a237e] before:mr-3 before:text-xl before:font-bold hover:translate-x-1 transition-transform duration-300">
                      {language === "en" ? "Smart: Automated vending machines with steam technology for fresh, hot meals" : "Komfort: Vor Ort frisch erwärmte Mahlzeiten - spart Zeit und Aufwand."}
                    </li>
                    <li className="flex items-start before:content-['•'] before:text-[#1a237e] before:mr-3 before:text-xl before:font-bold hover:translate-x-1 transition-transform duration-300">
                      {language === "en" ? "Fast: Ready-to-eat meals in just 2 minutes" : "Erschwinglichkeit: Automatisierung gewährleistet hochwertige Mahlzeiten zu niedrigen Kosten."}
                    </li>
                    <li className="flex items-start before:content-['•'] before:text-[#1a237e] before:mr-3 before:text-xl before:font-bold hover:translate-x-1 transition-transform duration-300">
                      {language === "en" ? "Sustainable: Eco-friendly packaging and local ingredients" : "Geschmack: Dampftechnologie für optimalen Geschmack und Erhaltung von Nährstoffen."}
                    </li>
                    <li className="flex items-start before:content-['•'] before:text-[#1a237e] before:mr-3 before:text-xl before:font-bold hover:translate-x-1 transition-transform duration-300">
                      {language === "en" ? "Cost-effective: No upfront investment, try free for 3 months" : "Schnell: Genießen Sie frisch gedämpfte, warme Mahlzeiten in weniger als 2 Minuten."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-full sm:max-w-[600px] lg:max-w-[900px] mt-4 sm:mt-8 lg:mt-0 lg:ml-10"
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

      {/* Innovative Catering Solutions详细描述部分 */}
      <section className="flex justify-center items-center py-8 md:py-12 lg:py-16 font-sans">
        <div className="max-w-[1000px] w-full px-4 md:px-6 lg:px-8">
          <motion.div 
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeInVariants}
          >
            {/* 贴纸效果组件 */}
            <div className="relative transform rotate-0 hover:rotate-1 transition-transform duration-300">
              {/* 贴纸边框和阴影 */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#1a237e]/15 to-purple-400/10 rounded-3xl blur-lg"></div>
              <div className="relative bg-white border-4 border-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] transform-gpu">
                                  {/* 胶带效果 */}
                  <div className="absolute -top-3 -right-10 w-24 h-10 bg-gradient-to-r from-yellow-200/80 to-yellow-300/80 rounded-sm -rotate-45 shadow-md border border-yellow-400/30"></div>
                  <div className="absolute -bottom-3 -left-9 w-24 h-10 bg-gradient-to-r from-green-200/80 to-green-300/80 rounded-sm rotate-45 shadow-md border border-green-400/30"></div>
                {/* 内边界效果 */}
                <div className="absolute inset-4 border-2 border-dashed border-[#1a237e]/15 rounded-2xl pointer-events-none"></div>
                
                {/* 内容区域 */}
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1a237e] font-bold mb-6 md:mb-8 uppercase tracking-wide">
                    {language === "en" ? "Partnership" : "Partnerschaft"}
                  </h2>
                  
                  <div className="text-lg md:text-xl text-[#2A1A1F] leading-relaxed space-y-4 md:space-y-6 mb-8 md:mb-10">
                    <p>
                      {language === "en" 
                        ? "We provide automated vending machines with steam technology at no upfront cost. Our partnership includes machine installation, maintenance, and regular food supply - you simply provide the space."
                        : "Wir stellen automatisierte Essensautomaten mit modernster Dampfgar-Technologie ohne Vorabkosten zur Verfügung. Unser Partnerschaft umfasst Maschineninstallation, Wartung und regelmäßige Befüllung - Sie stellen einfach den Platz zur Verfügung."}
                    </p>
                    
                    <p>
                      {language === "en" 
                        ? "Try our solution risk-free for 3 months. Enjoy fresh, hot meals 24/7 - for your employees and customers."
                        : "Testen Sie unsere Lösung 3 Monate lang risikofrei. 24/7 frische, warme Mahlzeiten genießen - für Ihre Mitarbeiter und Kunden."}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      window.location.href = '/contact';
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F16E21] to-orange-600 text-white rounded-full font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <span>{language === "en" ? "Start Partnership" : "Partnerschaft Starten"}</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 过渡部分 */}
      <div className="flex justify-center items-center py-6 md:py-8">
        <motion.div 
          className="text-center max-w-[1000px] px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#1a237e] font-bold mb-4 md:mb-6">
            {language === "en" ? "Why Choose SmartFoodie?" : "Warum SmartFoodie Wählen?"}
          </h3>
          <p className="text-xl text-[#555] leading-relaxed">
            {language === "en" 
              ? "Discover the key advantages that make our solution the perfect choice for your organization"
              : "Entdecken Sie die wichtigsten Vorteile, die unsere Lösung zur perfekten Wahl für Ihr Unternehmen machen"}
          </p>
        </motion.div>
      </div>

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
            {/* 贴纸效果组件 */}
            <div className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full">
              {/* 贴纸边框和阴影 */}
              <div className="absolute -inset-2 bg-gradient-to-l from-green-400/20 to-green-300/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-white border-4 border-white rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
                {/* 胶带效果 */}
                <div className="absolute -top-3 -left-3 w-12 h-6 bg-gradient-to-r from-green-200/80 to-green-300/80 rounded-sm rotate-12 shadow-md border border-green-400/30"></div>
                
                {/* 内边界效果 */}
                <div className="absolute inset-2 border-2 border-dashed border-green-400/20 rounded-xl pointer-events-none"></div>
                
                {/* 内容区域 */}
                <div className="relative z-10">
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide text-left">
                    {language === "en" ? "Fresh, Convenient, and Affordable" : "Frisch, Bequem, und Günstig"}
                  </h1>
                  <ul className="mt-4 md:mt-6 list-none mb-4 md:mb-5 text-[#222222] text-left">
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
                </div>
              </div>
            </div>
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
            {/* 贴纸效果组件 */}
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300 w-full">
              {/* 贴纸边框和阴影 */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-purple-300/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-white border-4 border-white rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
                {/* 胶带效果 */}
                <div className="absolute -top-3 -right-3 w-14 h-7 bg-gradient-to-r from-purple-200/80 to-purple-300/80 rounded-sm -rotate-45 shadow-md border border-purple-400/30"></div>
                
                {/* 内边界效果 */}
                <div className="absolute inset-2 border-2 border-dashed border-purple-400/20 rounded-xl pointer-events-none"></div>
                
                {/* 内容区域 */}
                <div className="relative z-10">
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide text-left">
                    {language === "en" ? "Diverse, Delicious and Nutritious" : "Vielseitig, Geschmackvoll und Nährstoffreich"}
                  </h1>
                  <ul className="mt-4 md:mt-6 list-none mb-4 md:mb-5 text-[#222222] text-left">
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
              </div>
            </div>
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
            {/* 贴纸效果组件 */}
            <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300 w-full">
              {/* 贴纸边框和阴影 */}
              <div className="absolute -inset-2 bg-gradient-to-l from-orange-400/20 to-orange-300/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-white border-4 border-white rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
                {/* 胶带效果 */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-r from-orange-200/80 to-orange-300/80 rounded-sm rotate-6 shadow-md border border-orange-400/30"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-5 bg-gradient-to-r from-red-200/80 to-red-300/80 rounded-sm rotate-45 shadow-md border border-red-400/30"></div>
                
                {/* 内边界效果 */}
                <div className="absolute inset-2 border-2 border-dashed border-orange-400/20 rounded-xl pointer-events-none"></div>
                
                {/* 内容区域 */}
                <div className="relative z-10">
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-bold mb-4 md:mb-6 mt-2 md:mt-3 uppercase tracking-wide text-left">
                    {language === "en" ? "Sustainable, Eco-friendly, and Responsible" : "Nachhaltig, Umweltfreundlich, und Verantwortungsbewusst"}
                  </h1>
                  <ul className="mt-4 md:mt-6 list-none mb-4 md:mb-5 text-[#222222] text-left">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduct;




