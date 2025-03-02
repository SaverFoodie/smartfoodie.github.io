import React from 'react';
import './news.css';  
import { useLanguage } from '../../language';

const News = () => {
  const { language } = useLanguage();

  const newsData = [
    {
      id: 1,
      title: language === "en" ? "Founding of SmartFoodie GmbH" : "Gründung von SmartFoodie GmbH",
      summary: language === "en" ? "Today, we are established!" : "Heute sind wir gegründet!",
      date: "22-02-2024",
      image: "./SF.jpg"
    },
    {
        id: 2,
        title: language === "en" ? "Spring Festival in Munich" : "Frühlingsfest in München",
        summary: language === "en" ? "We served as a food supplier at the Chinese Spring Festival event in Munich!" : "Wir haben als Food-Lieferant am chinesischen Frühlingsfest in München gearbeitet!",
        date: "26-01-2025",
        image: "./news2.jpg"
    },
  ];

  const handleClick = (url) => {
    window.open(url || 'about:blank', '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-white" style={{ margin: 0, minHeight: '100vh' }}>
      <div style={{ height: '60px' }}></div>
      <h1 className="headline" style={{ fontWeight: 'bold', fontSize: '3em', textAlign: 'center', marginTop: '0px', marginBottom: '40px', fontFamily: 'Arial, sans-serif' }}>
        SmartFoodie News
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.3em', marginBottom: '40px' }}>
        {language === "en" ? "Stay updated with the latest and greatest in the world of food!" : "Bleiben Sie auf dem Laufenden mit den neuesten und größten Ereignissen in der Welt der Lebensmittel!"}<br />
        {language === "en" ? "Dive into our exciting news articles and discover something new today!" : "Entdecken Sie etwas Neues heute in unseren spannenden Nachrichtenartikeln!"}
      </p>
      
      <div className="news-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...newsData].reverse().map(news => (
          <div 
            className="news-item" 
            key={news.id}
            /////
            // onClick={() => handleClick()}
            /////
            style={{ margin: '15px 15px' }}
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
