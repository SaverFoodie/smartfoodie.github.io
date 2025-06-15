import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../language';

const Storyline = () => {
  const { language } = useLanguage();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const sceneVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 15
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3 + (i * 0.2),
        duration: 0.5
      }
    })
  };

  const finalMessageVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 1.2,
        duration: 0.5
      }
    }
  };

  const scenes = [
    {
      text: language === "en" 
        ? "3 AM, finals week, stomach growling... but the fridge is empty 😫"
        : "3 Uhr morgens, Prüfungswoche, Magen knurrt... aber der Kühlschrank ist leer 😫",
      image: "student.jpg",
    },
    {
      text: language === "en"
        ? "Suburb job, same lunchbox... and cooking again tonight? 😩"
        : "Job im Vorort, immer Brotdose... und wieder kochen heute Abend? 😩",
      image: "employee.jpg",
    },
    {
      text: language === "en"
        ? "Night shift at 2 AM, saving lives... but surviving on stale sandwiches 🥱"
        : "Nachtschicht um 2 Uhr, Leben retten... aber überleben mit trockenen Sandwiches 🥱",
      image: "doctor.jpg",
    },
    {
      text: language === "en"
        ? "Party ends, winter night... hungry but everything's closed 🥶"
        : "Party vorbei, Winternacht... hungrig, aber alles zu 🥶",
      image: "party.jpg",
    }
  ];

  return (
    <div ref={ref} className="relative w-full min-h-screen py-4 sm:py-8 md:py-12 px-2 sm:px-4 flex items-center justify-center bg-transparent">
      {/* Main Container with Sticker Effect */}
      <motion.div 
        className="relative w-full max-w-[1200px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={backgroundVariants}
          className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300"
        >
          {/* Sticker Background Effect */}
          <div className="absolute -inset-3 bg-gradient-to-br from-orange-300/20 to-lime-300/10 rounded-3xl blur-sm"></div>
          <div className="relative bg-white border-4 border-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] transform-gpu">
            
            {/* Tape Decorations */}
            <div className="absolute -top-4 -right-4 w-16 h-8 bg-gradient-to-r from-yellow-200/80 to-yellow-300/80 rounded-sm rotate-45 shadow-md border border-yellow-400/30"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-6 bg-gradient-to-r from-orange-200/80 to-orange-300/80 rounded-sm -rotate-12 shadow-md border border-orange-400/30"></div>
            
            {/* Inner Dashed Border */}
            <div className="absolute inset-4 border-2 border-dashed border-orange-300/30 rounded-2xl pointer-events-none"></div>

            {/* Title with Sticker Effect */}
            <motion.div
              variants={titleVariants}
              className="text-center mb-5 sm:mb-8 md:mb-10 relative"
            >
              <div className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300/20 to-orange-300/10 rounded-2xl blur-sm"></div>
                <div className="relative bg-gradient-to-r from-yellow-100 via-orange-50 to-lime-100 rounded-2xl p-5 sm:p-7 md:p-9 border-4 border-white shadow-2xl">
                  {/* Title Tape */}
                  <div className="absolute -top-3 -left-3 w-12 h-6 bg-gradient-to-r from-lime-200/80 to-lime-300/80 rounded-sm rotate-12 shadow-md border border-lime-400/30"></div>
                  <div className="absolute -bottom-3 -right-3 w-10 h-5 bg-gradient-to-r from-yellow-200/80 to-orange-300/80 rounded-sm -rotate-45 shadow-md border border-orange-400/30"></div>
                  
                  {/* Inner dashed border for title */}
                  <div className="absolute inset-2 border-2 border-dashed border-orange-400/20 rounded-xl pointer-events-none"></div>
                  
                  <motion.h2 
                    className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 mb-0 font-['Playfair_Display'] tracking-wide"
                  >
                    {language === "en" ? "It All Started with a Stomach Growl..." : "Alles begann mit einem knurrenden Magen..."}
                  </motion.h2>
                </div>
              </div>
            </motion.div>

            {/* Comic Panels Grid with Sticker Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 lg:gap-9 max-w-[900px] mx-auto">
              {scenes.map((scene, index) => (
                <motion.div
                  key={`scene-${index}`}
                  custom={index}
                  variants={sceneVariants}
                  className="group relative"
                >
                  {/* Sticker Panel Effect */}
                  <div className={`relative transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-1'} hover:rotate-0 transition-transform duration-300`}>
                    <div className={`absolute -inset-2 ${
                      index === 0 ? 'bg-gradient-to-br from-yellow-300/20 to-orange-300/10' :
                      index === 1 ? 'bg-gradient-to-br from-orange-300/20 to-lime-300/10' :
                      index === 2 ? 'bg-gradient-to-br from-lime-300/20 to-yellow-300/10' :
                      'bg-gradient-to-br from-yellow-300/20 to-lime-300/10'
                    } rounded-2xl blur-sm`}></div>
                    
                    <div className="relative bg-white border-4 border-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu overflow-hidden p-4 sm:p-6">
                      {/* Panel Tape Decorations */}
                     
                      
                      {/* Inner dashed border */}
                      <div className={`absolute inset-2 border-2 border-dashed ${
                        index === 0 ? 'border-yellow-400/20' :
                        index === 1 ? 'border-orange-400/20' :
                        index === 2 ? 'border-lime-400/20' :
                        'border-yellow-400/20'
                      } rounded-xl pointer-events-none`}></div>

                      <div className="relative z-10">
                        <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-4 border-2 border-gray-200 shadow-inner">
                          <motion.img
                            src={`./${scene.image}`}
                            alt={scene.text}
                            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            variants={{
                              hidden: { opacity: 0, scale: 1.1 },
                              visible: { 
                                opacity: 1,
                                scale: 1,
                                transition: {
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 15,
                                  delay: 0.1 + (index * 0.2)
                                }
                              }
                            }}
                          />
                        </div>
                        
                        {/* Text Bubble with Warm Colors */}
                        <motion.div 
                          custom={index}
                          variants={textVariants}
                          className={`relative ${
                            index === 0 ? 'bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100' :
                            index === 1 ? 'bg-gradient-to-r from-orange-100 via-lime-50 to-orange-100' :
                            index === 2 ? 'bg-gradient-to-r from-lime-100 via-yellow-50 to-lime-100' :
                            'bg-gradient-to-r from-yellow-100 via-lime-50 to-yellow-100'
                          } rounded-lg p-4 border-2 border-white shadow-lg`}
                        >
                          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-tight sm:leading-relaxed font-semibold">
                            {scene.text}
                          </p>
                          {/* Speech bubble tail */}
                          <div className={`absolute -top-2 left-6 w-4 h-4 ${
                            index === 0 ? 'bg-gradient-to-br from-yellow-100 to-orange-50' :
                            index === 1 ? 'bg-gradient-to-br from-orange-100 to-lime-50' :
                            index === 2 ? 'bg-gradient-to-br from-lime-100 to-yellow-50' :
                            'bg-gradient-to-br from-yellow-100 to-lime-50'
                          } border-l-2 border-t-2 border-white rotate-45 shadow-md`}></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Final Message with Sticker Effect */}
            <motion.div
              variants={finalMessageVariants}
              className="mt-7 sm:mt-10 md:mt-14 text-center max-w-2xl mx-auto px-2 sm:px-4 relative"
            >
              <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-400/20 to-lime-400/10 rounded-3xl blur-sm"></div>
                <div className="relative bg-gradient-to-r from-orange-100 via-yellow-50 to-lime-100 rounded-2xl p-5 sm:p-7 md:p-9 border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
                  {/* Final Message Tape Decorations */}
                  <div className="absolute -top-4 left-1/4 w-16 h-8 bg-gradient-to-r from-yellow-200/80 to-orange-300/80 rounded-sm rotate-12 shadow-md border border-orange-400/30"></div>
                  <div className="absolute -bottom-4 right-1/4 w-14 h-7 bg-gradient-to-r from-lime-200/80 to-lime-300/80 rounded-sm -rotate-12 shadow-md border border-lime-400/30"></div>
                  
                  {/* Inner dashed border */}
                  <div className="absolute inset-3 border-2 border-dashed border-orange-400/30 rounded-xl pointer-events-none"></div>
                  
                  <p className="relative z-10 text-sm sm:text-lg md:text-xl lg:text-2xl text-orange-900 leading-tight sm:leading-relaxed font-bold">
                    {language === "en"
                      ? "Wouldn't you wish for a hot meal vending machine to satisfy your hunger? That's exactly why SmartFoodie was born – to provide fresh, delicious, hot meals to anyone, anytime, anywhere."
                      : "Würden Sie sich nicht einen warmen Mahlzeitenautomaten wünschen, der Ihren Hunger stillt? Genau deshalb wurde SmartFoodie geboren – um frisches, leckeres, warmes Essen für jeden, jederzeit und überall bereitzustellen."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Storyline;
