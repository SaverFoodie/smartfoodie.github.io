import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { renderAsync } from 'docx-preview';
import { useLanguage } from '../../language';
import './news.css';

const NewsDetails = () => {
  const { newsId } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [newsItem, setNewsItem] = useState(null);

  const newsData = [
   // {
   //   id: 1,
   //   title: language === "en" ? "Founding of SmartFoodie GmbH" : "Gründung von SmartFoodie GmbH",
   //   docFile_en: "Founding of SmartFoodie GmbH_EN.docx",
   //   docFile_de: "Founding of SmartFoodie GmbH_DE.docx",
   //   date: language === "en" ? "2024-02-22" : "22.02.2024"
   // },
    {
      id: 2,
      title: language === "en" ? "Spring Festival in Munich" : "Frühlingsfest in München",
      docFile_en: "spring festival_EN.docx",
      docFile_de: "spring festival_DE.docx",
      date: language === "en" ? "2025-01-26" : "26.01.2025"
    },
    //{
    //  id: 3,
    //  title: language === "en" 
    //    ? "SmartFoodie @ EDEKA Eren" 
    //    : "SmartFoodie @ EDEKA Eren Edition",
    //  summary: language === "en"
    //    ? "From dumplings to udon — Munich's taste buds lit up at our 2-day pop-up with EDEKA." 
    //    : "Von Dumplings bis Udon - Münchens Geschmacksknospen wurden bei unserem zweitägigen Pop-up mit EDEKA begeistert.",
    //  docFile_en: "smartfoodie-edeka-news_EN.docx",
    //  docFile_de: "smartfoodie-edeka-news_DE.docx",
    //  date: language === "en" ? "2025-04-06" : "06.04.2025"
    //},
    {
      id: 4,
      title: language === "en" 
        ? "Featured in StartupValley Magazine" 
        : "Erschienen im StartupValley Magazin",
      summary: language === "en"
        ? "How SmartFoodie is shaping the future of healthy, hot meals through Steam Cuisine."
        : "Wie SmartFoodie mit Steam Cuisine die Zukunft gesunder, warmer Mahlzeiten gestaltet.",
      docFile_en: "smartfoodie-startupvalley-feature_EN.docx",
      docFile_de: "smartfoodie-startupvalley-feature_DE.docx",
      date: language === "en" ? "2025-04-20" : "20.04.2025"
    },
    {
      id: 5,
      title: language === "en" 
        ? "SmartFoodie Opens at Klinikum Großhadern" 
        : "SmartFoodie Eröffnet im Klinikum Großhadern",
      summary: language === "en"
        ? "SmartFoodie opens its e-Bistro24H at Klinikum Großhadern, bringing fresh and tasty meals right into the hospital."
        : "SmartFoodie eröffnet sein e-Bistro24H im Klinikum Großhadern und bringt frische, leckere Mahlzeiten direkt ins Haus.",
      docFile_en: "SmartFoodie Opens at Klinikum Großhadern.docx",
      docFile_de: "SmartFoodie eröffnet im Klinikum Großhadern.docx",
      date: language === "en" ? "2025-05-14" : "14.05.2025"
    },
    {
      id: 6,
      title: language === "en" 
      ? "SmartFoodie Now at Backstage Munich" 
      : "SmartFoodie jetzt im Backstage München",
      summary: language === "en"
      ? "Located at one of Munich's most popular cultural and event venues, our machine offers artists, staff and visitors convenient access to fresh hot and cold meals - 24/7."
      : "In einem der beliebtesten Kultur- und Veranstaltungszentren Münchens versorgt unser Automat Künstler, Mitarbeitende und Besucher rund um die Uhr mit frischen, kalten und warmen Mahlzeiten.",
      docFile_en: "Backstage Blog英语.docx",
      docFile_de: "Backstage Blog德语.docx",
      date: language === "en" ? "23-07-2025" : "23.07.2025"
    },
    {
      id: 7,
      title: language === "en" 
      ? "SmartFoodie vending machine new at CrossFit Munich South" 
      : "SmartFoodie-Automat neu bei CrossFit Munich South",
      summary: language === "en"
      ? "SmartFoodie supplies the fitness community with delicious, nutrient-rich meals – quickly, easily and exactly when it matters most."
      : "SmartFoodie versorgt die Fitness-Community mit leckeren, nährstoffreichen Mahlzeiten - schnell, unkompliziert und genau dann, wenn es darauf ankommt.",
      docFile_en: "官网CrossFit Blog英语.docx",
      docFile_de: "官网CrossFit Blog德语.docx",
      date: language === "en" ? "01-08-2025" : "01.08.2025"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadDocx = async () => {
      try {
        setLoading(true);
        
        const item = newsData.find(item => item.id === parseInt(newsId));
        
        if (!item) {
          throw new Error(language === "en" ? "News not found" : "Nachricht nicht gefunden");
        }
        
        setNewsItem(item);
        // Get the appropriate docFile based on current language
        const docFile = language === "en" ? item.docFile_en : item.docFile_de;
        const filePath = `${process.env.PUBLIC_URL}/news/${docFile}`;
        
        const loadDocument = () => {
          return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', filePath, true);
            xhr.responseType = 'arraybuffer';
            
            xhr.onload = function() {
              if (xhr.status === 200) {
                resolve(xhr.response);
              } else {
                reject(new Error(language === "en" ? "Failed to load document" : "Dokument konnte nicht geladen werden"));
              }
            };
            
            xhr.onerror = function() {
              reject(new Error(language === "en" ? "Failed to load document" : "Dokument konnte nicht geladen werden"));
            };
            
            xhr.send();
          });
        };
        
        const retryLoad = async (retries = 0, maxRetries = 10) => {
          try {
            const arrayBuffer = await loadDocument();
            
            await renderAsync(arrayBuffer, containerRef.current, null, {
              className: 'docx-container',
              inWrapper: true,
            });
            
            const allElements = containerRef.current.querySelectorAll('*');
            allElements.forEach(el => {
              el.style.backgroundColor = 'transparent';
              if (el.tagName === 'SECTION' || el.classList.contains('docx-container')) {
                el.style.boxShadow = 'none';
              }
            });
            
            const docxContainer = containerRef.current.querySelector('.docx-container');
            if (docxContainer) {
              docxContainer.style.backgroundColor = 'transparent';
              docxContainer.style.boxShadow = 'none';
              docxContainer.style.maxWidth = '100%';
              docxContainer.style.Width = 'auto';
              docxContainer.style.marginTop = '0px';
              docxContainer.style.marginBottom = '0px';
              docxContainer.style.padding = '5px';
              
              const sections = docxContainer.querySelectorAll('.docx-wrapper section');
              sections.forEach(section => {
                section.style.backgroundColor = 'transparent';
                section.style.boxShadow = 'none';
                section.style.maxWidth = '100%';
                section.style.width = 'auto';
              });
              
              const tables = docxContainer.querySelectorAll('table');
              tables.forEach(table => {
                table.style.backgroundColor = 'transparent';
                table.style.maxWidth = '100%';
                table.style.width = 'auto';
              });
              
              const images = docxContainer.querySelectorAll('img');
              images.forEach(img => {
                img.style.backgroundColor = 'transparent';
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
              });
              
              const docxWrapper = docxContainer.querySelector('.docx-wrapper');
              if (docxWrapper) {
                docxWrapper.style.backgroundColor = 'transparent';
              }
            }
            setLoading(false);
          } catch (err) {
            if (retries < maxRetries) {
              setTimeout(() => retryLoad(retries + 1, maxRetries), 3000);
            } else {
              setError(language === "en" ? "Failed to load document after multiple attempts, please try refresh the page again later" : "Dokument konnte nach mehreren Versuchen nicht geladen werden, bitte versuchen Sie, die Seite später noch einmal zu aktualisieren.");
              setLoading(false);
            }
          }
        };
        
        retryLoad();
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadDocx();
  }, [newsId, language]);

  const handleBack = () => {
    navigate('/blogs');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // 帮助函数：根据语言格式化日期
  const formatDate = (dateString) => {
    try {
      // If in German, use the already formatted date string
      if (language === "de") {
        return dateString;
      }
      
      // For English, parse the date and format it
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }
      
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-white" style={{ 
      margin: 0, 
      minHeight: '100vh', 
      padding: '30px 0 30px 0'
    }}>
      <div className="news-detail-container" style={{ 
        maxWidth: '1200px',  
        margin: '0 auto',
        padding: windowWidth < 768 ? '0 5px' : '0 20px',
      }}>
        <button 
          onClick={handleBack}
          style={{ 
            backgroundColor: '#FF9800', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '30px', 
            cursor: 'pointer',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          ← {language === "en" ? "Back to Blogs" : "Zurück zu Blogs"}
        </button>
        
        {newsItem && !loading && !error && (
          <div className="news-header" style={{ 
            textAlign: 'center', 
            marginBottom: '15px',
            marginTop: '0',
            padding: '0 20px'
          }}>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold',
              color: '#1A237E',
              marginBottom: '10px'
            }}>
              {newsItem.title}
            </h1>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '15px', 
              fontSize: '18px', 
              color: '#555', 
              justifyContent: 'center' 
            }}>
              <span>
                <strong>{language === "en" ? "Date:" : "Datum:"}</strong> {formatDate(newsItem.date)}
              </span>
            </div>
          </div>
        )}
        
        {loading && (
          <div className="loading-container" style={{ textAlign: 'center', padding: '50px' }}>
            <div className="loading-spinner" style={{
              width: '40px',
              height: '40px',
              margin: '0 auto',
              border: '4px solid rgba(249, 115, 22, 0.2)',
              borderTop: '4px solid #f97316',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ marginTop: '15px' }}>
              {language === "en" ? "Loading document..." : "Dokument wird geladen..."}
            </p>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        )}
        
        {error && (
          <div className="error-container" style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>{error}</p>
          </div>
        )}
        
        <div 
          ref={containerRef} 
          className="docx-viewer"
          style={{
            backgroundColor: 'transparent',
            padding: '0px',
            minHeight: '500px',
            width: '100%',
            overflowX: 'auto'
          }}
        ></div>
      </div>
    </div>
  );
};


export default NewsDetails;
