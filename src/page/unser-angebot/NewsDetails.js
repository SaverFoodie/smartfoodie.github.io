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
    {
      id: 1,
      title: language === "en" ? "Founding of SmartFoodie GmbH" : "Gründung von SmartFoodie GmbH",
      docFile: "Founding of SmartFoodie GmbH.docx",
      date: "2024-02-22"
    },
    {
      id: 2,
      title: language === "en" ? "Spring Festival in Munich" : "Frühlingsfest in München",
      docFile: "spring festival.docx",
      date: "2025-01-26"
    },
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
        const filePath = `${process.env.PUBLIC_URL}/news/${item.docFile}`;
        
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
    navigate('/news');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-white" style={{ 
      margin: 0, 
      minHeight: '100vh', 
      padding: '30px 0 30px 0'
    }}>
      <div className="news-detail-container" style={{ 
        maxWidth: '100%',  
        margin: '0 auto',
        padding: '0',
      }}>
        {windowWidth <= 768 && (
          <button 
            onClick={handleBack}
            className="back-button"
            style={{
              padding: '4px 8px',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginBottom: '15px',
              marginLeft: '10px',
              fontWeight: 'bold'
            }}
          >
            {language === "en" ? "←Back" : "←Zurück"}
          </button>
        )}
        
        {newsItem && !loading && !error && (
          <div className="news-header" style={{ 
            textAlign: 'center', 
            marginBottom: '30px',
            marginTop: '30px',
            padding: '0 20px'
          }}>
            <h1 style={{ 
              fontSize: windowWidth <= 768 ? '28px' : windowWidth <= 1024 ? '36px' : '50px', 
              fontWeight: 'bold',
              color: '#222',
              marginBottom: '10px'
            }}>
              {newsItem.title}
            </h1>
            <p style={{ 
              fontSize: windowWidth <= 768 ? '14px' : windowWidth <= 1024 ? '36px' : '18px', 
              color: '#666',
              fontStyle: 'italic'
            }}>
              {new Date(newsItem.date).toLocaleDateString(
                language === 'en' ? 'en-US' : 'de-DE', 
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </p>
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
