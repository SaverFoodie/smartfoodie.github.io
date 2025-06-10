import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../language';

const Storyline = () => {
  const { language } = useLanguage();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

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
      scale: 0.95,
      y: 20
    },
    visible: (i) => ({ 
      opacity: 1,
      scale: 1,
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
    <div ref={ref} className="relative w-full min-h-screen bg-gradient-to-b from-orange-50 to-white py-20 px-4 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-[1000px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Title Section */}
        <motion.div
          variants={titleVariants}
          className="text-center mb-14"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-['Playfair_Display'] tracking-wide"
          >
            {language === "en" ? "It All Started with a Stomach Growl..." : "Alles begann mit einem knurrenden Magen..."}
          </motion.h2>
        </motion.div>

        {/* Comic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[800px] mx-auto">
          {scenes.map((scene, index) => (
            <motion.div
              key={`scene-${index}`}
              custom={index}
              variants={sceneVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/2] mb-3 transform transition-all duration-500 hover:shadow-xl">
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
              <motion.p 
                custom={index}
                variants={textVariants}
                className="text-lg md:text-xl text-gray-600 leading-relaxed px-2"
              >
                {scene.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          variants={finalMessageVariants}
          className="mt-14 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-semibold">
            {language === "en"
              ? "Wouldn't you wish for a hot meal vending machine to satisfy your hunger? That's exactly why SmartFoodie was born – to provide fresh, delicious, hot meals to anyone, anytime, anywhere."
              : "Würden Sie sich nicht einen warmen Mahlzeitenautomaten wünschen, der Ihren Hunger stillt? Genau deshalb wurde SmartFoodie geboren – um frisches, leckeres, warmes Essen für jeden, jederzeit und überall bereitzustellen."}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Storyline;
