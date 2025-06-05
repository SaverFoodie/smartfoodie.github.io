import React from 'react';
import { useLanguage } from '../../language';

const RecommendationBanner = () => {
  const { language } = useLanguage();
  const bannerText = {
    de: {
      title: "bis zu 2000€",
      body: "zwischen 800 - 2000€",
      subtext: "für Ihre Restaurantempfehlungen",
      button: "Jetzt Empfehlen"
    },
    en: {
      title: "up to €2000",
      body: "between €800 - €2000",
      subtext: "for your restaurant recommendations",
      button: "Recommend Now"
    }
  };
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-10 font-['Poppins',sans-serif] bg-orange-100 gap-4 md:gap-6 lg:gap-10 max-w-[1400px] mx-auto rounded-3xl md:rounded-[50px] my-8 overflow-hidden">
      {/* 左侧文案 */}
      <div className="flex-1 flex flex-col justify-center items-start md:pr-10 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#2A1A1F] mb-4 leading-tight font-['Cormorant_Garamond',serif]">
          {language === 'en' ? (
            <>
              Recommend SmartFoodie &{' '}
              <span className="text-[#ffb700] text-4xl md:text-5xl font-semibold font-['Cormorant_Garamond',serif]">{bannerText.en.title}</span> reward!
            </>
          ) : (
            <>
              SmartFoodie empfehlen &{' '}
              <span className="text-[#ffb700] text-4xl md:text-5xl font-semibold font-['Cormorant_Garamond',serif]">{bannerText.de.title}</span> kassieren!
            </>
          )}
        </h2>
        <p className="text-base md:text-lg text-[#2A1A1F] font-semibold mb-6 max-w-xl">
          {language === 'en'
            ? 'Bring SmartFoodie to your university, company, or gym – anywhere fresh, hot food is needed around the clock.'
            : 'Bring SmartFoodie an deine Uni, Firma oder ins Fitnessstudio – überall dorthin, wo frisches, heißes Essen rund um die Uhr gefragt ist.'}
        </p>
        <div className="mb-6 text-[#2A1A1F] text-base md:text-lg font-semibold">
          {language === 'en'
            ? `As soon as our machine is successfully installed, you will receive ${bannerText.en.body} reward!`
            : `Sobald unser Lebensmittelautomat erfolgreich installiert ist, erhältst du ${bannerText.de.body} Prämie!`}
        </div>
        <div className="text-base md:text-lg text-[#2A1A1F] font-medium">
          {language === 'en'
            ? <>Details: <a href="mailto:info@smartfoodiegmbh.eu" className="underline text-blue-700">info@smartfoodiegmbh.eu</a></>
            : <>Details unter: <a href="mailto:info@smartfoodiegmbh.eu" className="underline text-blue-700">info@smartfoodiegmbh.eu</a></>}
        </div>
      </div>
      {/* 右侧图片 */}
      <div className="flex-1 flex justify-center items-center w-full md:w-auto">
        <div className="relative w-full max-w-lg aspect-[2/1] md:aspect-auto flex items-center justify-center">
          <img
            src="/food.png"
            alt="SmartFoodie Empfehlung Banner"
            className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[340px] md:max-h-[420px]"
            style={{ background: '#fffbe6' }}
          />
        </div>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap');
      `}</style>
    </section>
  );
};

const RecommendationWithTitle = () => {
  const { language } = useLanguage();
  return (
    <div style={{width: '100%'}}>
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-[#222] font-bold" style={{fontSize: '2.5rem', marginBottom: '3rem'}}>
          {language === 'en' ? 'Referral Reward' : 'Empfehlung mit Prämie'}
        </h2>
      </div>
      <RecommendationBanner />
    </div>
  );
};

export default RecommendationWithTitle;
