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

  // 复制图片数组以创建无缝滚动效果
  const duplicatedImages = [...partnerImages, ...partnerImages];

  return (
    <div className="partners-container">
      <h2 className="partners-title">
        {language === 'de' ? 'Unsere Partner' : 'Some of Our Partners'}
      </h2>
      <div className="partners-wrapper">
        <div className="partners-track">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="partner-card">
              <img 
                src={image} 
                alt="Partner logo"
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners-container {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
        }

        .partners-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #1a237e;
          font-weight: 700;
        }

        .partners-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .partners-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .partner-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 0 1rem;
          flex: 0 0 250px;
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

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .partners-container {
            padding: 2rem 1rem;
          }
          
          .partners-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .partner-card {
            flex: 0 0 200px;
            padding: 1rem;
          }
        }

        /* 当鼠标悬停时暂停动画 */
        .partners-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Partner;
