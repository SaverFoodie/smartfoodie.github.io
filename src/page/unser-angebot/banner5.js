import React from 'react';
import './news.css';  
import { useLanguage } from '../../language';
import { useNavigate } from 'react-router-dom';

const News = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const newsData = [
    {
      id: 1,
      title: language === "en" ? "Founding of SmartFoodie GmbH" : "Gründung von SmartFoodie GmbH",
      summary: language === "en" ? "Hello World!" : "Hello World!",
      date: "22-02-2024",
      image: "./SF.jpg",
      docFile: "Founding of SmartFoodie GmbH.docx"
    },
    {
        id: 2,
        title: language === "en" ? "Spring Festival in Munich" : "Frühlingsfest in München",
        summary: language === "en" ? "We served as a food supplier at the Chinese Spring Festival event in Munich!" : "Wir haben als Food-Lieferant am chinesischen Frühlingsfest in München gearbeitet!",
        date: "26-01-2025",
        image: "./news2.jpg",
        docFile: "spring festival.docx"
    },
  ];

  const handleClick = (newsId) => {
    // Navigate to the news detail page with the news ID
    navigate(`/news/${newsId}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-white" style={{ margin: 0, minHeight: '100vh', padding: '70px 15px 0 15px' }}>
      <h1 
        className="headline" 
        style={{ 
          fontWeight: 'bold', 
          fontSize: 'clamp(2em, 5vw, 3em)', 
          textAlign: 'center', 
          marginTop: '0px',
          marginBottom: '30px', 
          fontFamily: 'Arial, sans-serif' 
        }}
      >
        {language === "en" ? "Savoring Moments Together." : "Gemeinsam Augenblicke Genießen."}
      </h1>
      <p 
        style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(1em, 3vw, 1.3em)', 
          marginBottom: '30px',
          padding: '0 10px'
        }}
      >
        {language === "en" ? "Journey with us through the ever-evolving tapestry of culinary delights," : "Reisen Sie mit uns durch die immer wachsende Tapete der kulinarischen Genießerlebnisse,"}<br />
        {language === "en" ? "immerse yourself in our stories of flavor and innovation, where every bite tells a tale!" : "tauchen Sie ein in unsere Geschichten von Geschmack und Innovation, wo jeder Bissen eine Geschichte erzählt!"}
      </p>
      
      <div className="news-container">
        {[...newsData].reverse().map(news => (
          <div 
            className="news-item" 
            key={news.id}
            onClick={() => handleClick(news.id)}
            role="button"
            tabIndex={0}
          >
            {news.image && (
              <div className="news-image-container">
                <img className="news-image" src={news.image} alt={news.title} />
              </div>
            )}
            <div className="news-content">
              <h2 className="news-title">
                {news.title}
              </h2>
              <p className="news-summary">
                {news.summary}
              </p>
              <div className="news-footer">
                <p className="news-date">
                  {news.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
