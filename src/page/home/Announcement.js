import React from 'react';
import { useLanguage } from '../../language';
import { FaBullhorn } from 'react-icons/fa';

const Announcement = () => {
  const { language } = useLanguage();

  const getAnnouncementText = () => {
    if (language === 'de') {
      return (
        <>
          <span className="font-semibold">Liebe Community,</span>
          <br />
          <span className="font-semibold">wir haben großartige Neuigkeiten: SmartFoodie hat ein neues Logo!</span>
          <br />
          <span className="font-semibold">Unser kleiner Küchenchef repräsentiert, was SmartFoodie ausmacht: höchste Qualitätsstandards & kommunikativer, offener Austausch mit euch.</span>
          <br />
          <span className="font-semibold">Unser Team und unsere Gerichte freuen sich wie immer auf euch!</span>
        </>
      );
    }
    return (
      <>
        <span className="font-semibold">Dear Community,</span>
        <br />
        <span className="font-semibold">we have great news: SmartFoodie has a new logo!</span>
        <br />
        <span className="font-semibold">Our little chef represents what SmartFoodie stands for: highest quality standards & communicative, open exchange with you.</span>
        <br />
        <span className="font-semibold">Our team and our dishes are looking forward to seeing you as always!</span>
      </>
    );
  };

  const getAnnouncementLabel = () => {
    return language === 'de' ? 'ANKÜNDIGUNG' : 'ANNOUNCEMENT';
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-orange-500 to-pink-400 py-8 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <FaBullhorn className="text-yellow-300 text-sm mr-2" />
            <span className="text-white text-sm font-medium">{getAnnouncementLabel()}</span>
          </div>
          
          <div className="text-white text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto mb-6">
            {getAnnouncementText()}
          </div>
          
          {/* New Logo */}
          <div className="flex justify-center">
            <div className="bg-[#fcf2e8] rounded-full p-6 shadow-lg">
              <img 
                src="./logo_main.png" 
                alt="SmartFoodie New Logo" 
                className="h-20 md:h-28 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement; 