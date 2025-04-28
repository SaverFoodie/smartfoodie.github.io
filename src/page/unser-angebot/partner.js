import React from 'react';
import { useLanguage } from '../../language';

const Partner = () => {
  const { language } = useLanguage();
  
  const partnerImages = [
    './partner/eren.png',
    './partner/zd.png',
    './partner/sunlit.png',
    './partner/Klinikum.jpg'
  ];

  return (
    <div className="partners-container">
      <h2 className="partners-title">
        {language === 'de' ? 'Unsere Partner' : 'Some of Our Partners'}
      </h2>
      <div className="partners-grid">
        {partnerImages.map((image, index) => (
          <div key={index} className="partner-card">
            <img 
              src={image} 
              alt="Partner logo"
              className="partner-logo"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .partners-container {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .partners-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #1a237e;
          font-weight: 700;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .partner-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
          width: 100%;
          max-width: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .partner-logo {
          width: 100%;
          height: auto;
          object-fit: contain;
          max-height: 100px;
        }

        @media (max-width: 768px) {
          .partners-container {
            padding: 2rem 1rem;
          }
          
          .partners-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Partner;
