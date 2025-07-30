import React from 'react';
import { useLanguage } from "../language";


const InstagramButton = () => {
  const { language } = useLanguage();
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/smartfoodie_gmbh?igsh=MmpkNjI4Y3E2anQ1&utm_source=qr', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/smartfoodie-gmbh/', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@smartfoodie.steam', '_blank');
  };

  return (
    <div style={{ position: 'fixed', right: '16px', top: '75%',
       display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      gap: '1px', 
      zIndex: 1000,
      '@media (max-width: 600px)': {
        top: '80%',
      }
    }}>
      <div className="relative group">
        <button
          onClick={handleInstagramClick}
          className="bg-white text-white py-2 px-2 rounded-full shadow-lg hover:scale-110 transition mb-2"
          style={{ 
            zIndex: 1000,
          }}
        >
          <img 
            src="/ins.png" 
            alt="Instagram" 
            className="w-7 h-7 sm:w-7 sm:h-7 w-5 h-5" 
          />
        </button>
        <div className="absolute hidden group-hover:block right-full mr-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-1 py-0.3 rounded-md text-sm whitespace-nowrap">
          {language === "en" ? "Follow us on Instagram" : "Folge uns auf Instagram"}
        </div>
      </div>
      
      <div className="relative group">
        <button
          onClick={handleLinkedInClick}
          className="bg-white text-white py-2 px-2 rounded-full shadow-lg hover:scale-110 transition mb-2"
          style={{ 
            zIndex: 1000,
          }}
        >
          <img 
            src="/In.png" 
            alt="LinkedIn" 
            className="w-7 h-7 sm:w-7 sm:h-7 w-5 h-5" 
          />
        </button>
        <div className="absolute hidden group-hover:block right-full mr-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-1 py-0.3 rounded-md text-sm whitespace-nowrap">
          {language === "en" ? "Follow us on LinkedIn" : "Folge uns auf LinkedIn"}
        </div>
      </div>

      <div className="relative group">
        <button
          onClick={handleTikTokClick}
          className="rounded-full shadow-lg hover:scale-110 transition overflow-hidden"
          style={{ 
            zIndex: 1000,
            width: '44px',
            height: '44px',
            padding: '0',
            border: 'none',
            background: 'none'
          }}
        >
          <img 
            src="/TikTok.png" 
            alt="TikTok" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </button>
        <div className="absolute hidden group-hover:block right-full mr-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-1 py-0.3 rounded-md text-sm whitespace-nowrap">
          {language === "en" ? "Follow us on TikTok" : "Folge uns auf TikTok"}
        </div>
      </div>
    </div>
  );
};

export default InstagramButton;