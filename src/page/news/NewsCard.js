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
      summary: language === "en" ? "Hello World!" : "Hallo Welt!",
      date: language === "en" ? "22-02-2024" : "22.02.2024",
      image: "./SF.jpg",
      docFile_en: "Founding of SmartFoodie GmbH_EN.docx",
      docFile_de: "Founding of SmartFoodie GmbH_DE.docx"
    },
    {
        id: 2,
        title: language === "en" ? "Spring Festival in Munich" : "Frühlingsfest in München",
        summary: language === "en" ? "We served as a food supplier at the Chinese Spring Festival event in Munich!" : "Wir waren als Lebensmittellieferant beim chinesischen Frühlingsfest in München tätig!",
        date: language === "en" ? "26-01-2025" : "26.01.2025",
        image: "./news2.jpg",
        docFile_en: "spring festival_EN.docx",
        docFile_de: "spring festival_DE.docx"
    },
    {
      id: 3,
      title: language === "en" 
        ? "SmartFoodie @ EDEKA Eren Edition" 
        : "SmartFoodie @ EDEKA Eren Edition",
      summary: language === "en"
        ? "From dumplings to udon — Munich's taste buds lit up at our 2-day pop-up with EDEKA." 
        : "Von Dumplings bis Udon - Münchens Geschmacksknospen wurden bei unserem zweitägigen Pop-up mit EDEKA begeistert.",
      date: language === "en" ? "06-04-2025" : "06.04.2025",
      image: "./news_edeka.jpg",  
      docFile_en: "smartfoodie-edeka-news_EN.docx",
      docFile_de: "smartfoodie-edeka-news_DE.docx"
    },
    
    {
      id: 4,
      title: language === "en" 
        ? "Featured in StartupValley Magazine" 
        : "Erschienen im StartupValley Magazin",
      summary: language === "en"
        ? "How SmartFoodie is shaping the future of healthy, hot meals through Steam Cuisine."
        : "Wie SmartFoodie mit Steam Cuisine die Zukunft gesunder, warmer Mahlzeiten gestaltet.",
      date: language === "en" ? "20-04-2025" : "20.04.2025",  
      image: "./news_startupvalley.jpg",  
      docFile_en: "smartfoodie-startupvalley-feature_EN.docx",
      docFile_de: "smartfoodie-startupvalley-feature_DE.docx"
    },
    {
      id: 5,
      title: language === "en" 
        ? "SmartFoodie Opens at Klinikum Großhadern" 
        : "SmartFoodie Eröffnet im Klinikum Großhadern",
      summary: language === "en"
        ? "SmartFoodie opens its e-Bistro24H at Klinikum Großhadern, bringing fresh and tasty meals right into the hospital."
        : "SmartFoodie eröffnet sein e-Bistro24H im Klinikum Großhadern und bringt frische, leckere Mahlzeiten direkt ins Haus.",
      date: language === "en" ? "14-05-2025" : "14.05.2025",
      image: "./klinikum_blog.jpg",
      docFile_en: "SmartFoodie Opens at Klinikum Großhadern.docx",
      docFile_de: "SmartFoodie eröffnet im Klinikum Großhadern.docx"
    }
    
      
  ];

  const handleClick = (newsId) => {
    // Navigate to the news detail page with the news ID
    navigate(`/news/${newsId}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 
        className="headline" 
        style={{ 
          fontWeight: 'bold', 
          fontSize: 'clamp(2em, 5vw, 3em)', 
          textAlign: 'center', 
          marginTop: '0px',
          marginBottom: '10px', 
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
          color: '#616161',
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
      
      {/* More news teaser */}
      <h2 className="text-2xl font-bold text-center text-gray-600 mt-16">
        {language === "en" ? "The journey continues with more memorable moments..." : "Die Reise geht weiter mit weiteren unvergesslichen Momenten..."}
      </h2>
    </div>
  );
};

export default News;
