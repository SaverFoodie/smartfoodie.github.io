import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { renderAsync } from 'docx-preview';
import { useLanguage } from '../../language';
import './EventCard.css';

const EventDetails = () => {
  const { eventId } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [eventItem, setEventItem] = useState(null);

  // Sample event data - in a production environment, this could be fetched from an API
  const eventData = [
    {
      id: 'SmartFoodie Tasting Event at Klinikum Großhadern',
      title: language === "en" ? "SmartFoodie Tasting Event at Klinikum Großhadern" : "SmartFoodie Verkostungsevent im Klinikum Großhadern",
      docFile: "SmartFoodie Tasting Event at Klinikum Großhadern.docx",
      date: "April 30, 2025",
      location: "Munich"
    },
    {
      id: 'Steam Cuisine Coming to EDEKA Eren',
      title: language === "en" ? "Steam Cuisine Coming to EDEKA Eren" : "Steam Cuisine kommt zu EDEKA Eren",
      docFile: "Steam Cuisine Coming to EDEKA Eren.docx",
      date: "April 5, 2025",
      location: "Munich"
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
    const foundEvent = eventData.find(event => event.id === eventId);
    
    if (foundEvent) {
      setEventItem(foundEvent);
      setLoading(true);
      
      // Attempt to fetch and render the Word document
      fetch(`/events/${foundEvent.docFile}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(language === "en" 
              ? "Document not found. It might be under preparation."
              : "Dokument nicht gefunden. Es ist möglicherweise in Vorbereitung.");
          }
          return response.arrayBuffer();
        })
        .then(buffer => {
          if (containerRef.current) {
            // Clear any previous content
            while (containerRef.current.firstChild) {
              containerRef.current.removeChild(containerRef.current.firstChild);
            }
            
            // Render the document using docx-preview
            return renderAsync(buffer, containerRef.current, null, {
              className: 'docx-viewer',
              inWrapper: false,
              ignoreWidth: false,
              ignoreHeight: false,
              defaultFont: {
                family: 'Arial',
                color: '#333333',
              },
              // On mobile, use full screen width minus minimal padding
              containerWidth: windowWidth < 768 ? windowWidth - 10 : undefined,
              backgroundColor: 'transparent'
            });
          }
        })
        .then(() => {
          setLoading(false);
          
          // Apply additional styles to make document fit on small screens
          if (windowWidth < 768 && containerRef.current) {
            const docContainer = containerRef.current.querySelector('.document-container');
            if (docContainer) {
              docContainer.style.width = '100%';
              docContainer.style.maxWidth = '100%';
              docContainer.style.margin = '0';
              docContainer.style.padding = '0';
            }
            
            // Find all page elements and make them fit the screen
            const pages = containerRef.current.querySelectorAll('.page');
            pages.forEach(page => {
              page.style.width = '100%';
              page.style.maxWidth = '100%';
              page.style.margin = '0 0 10px 0';
              page.style.transform = 'none';
            });
          }
        })
        .catch(err => {
          console.error("Error loading document:", err);
          setError(err.message);
          setLoading(false);
        });
    } else {
      setError(language === "en" ? "Event not found" : "Veranstaltung nicht gefunden");
      setLoading(false);
    }
  }, [eventId, language, windowWidth]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-white" style={{ margin: 0, minHeight: '100vh', padding: '30px 0 30px 0' }}>
      <div className="event-details-container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: windowWidth < 768 ? '0 5px' : '0 20px' 
      }}>
        <button 
          onClick={handleGoBack}
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
          ← {language === "en" ? "Back to Events" : "Zurück zu Veranstaltungen"}
        </button>

        {eventItem && (
          <div className="event-header" style={{ marginBottom: '15px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1A237E', marginBottom: '10px' }}>
              {eventItem.title}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '18px', color: '#555', justifyContent: 'center' }}>
              <span>
                <strong>{language === "en" ? "Date:" : "Datum:"}</strong> {eventItem.date}
              </span>
              <span>
                <strong>{language === "en" ? "Location:" : "Ort:"}</strong> {eventItem.location}
              </span>
            </div>
          </div>
        )}

        <div className="document-container" style={{ 
          backgroundColor: 'transparent', 
          borderRadius: '10px', 
          padding: 0,
          margin: '0 auto',
          width: windowWidth < 768 ? '100%' : undefined,
          maxWidth: windowWidth < 768 ? '100%' : '1000px',
          display: 'flex',
          justifyContent: 'center'
        }}>
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
          
          <style>
            {`
              @media (max-width: 768px) {
                .docx-viewer {
                  width: 100% !important;
                  max-width: 100% !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }
                .docx-viewer .document-container {
                  width: 100% !important;
                  max-width: 100% !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }
                .docx-viewer .page {
                  width: 100% !important;
                  max-width: 100% !important;
                  margin: 0 0 10px 0 !important;
                  transform: none !important;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
                }
                .docx-viewer .page > div {
                  width: 100% !important;
                  max-width: 100% !important;
                }
              }
              
              .docx-viewer .document-container {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
              }
              
              .docx-viewer .page {
                margin: 0 auto 10px auto !important;
              }
            `}
          </style>
          
          <div 
            ref={containerRef} 
            className="docx-viewer"
            style={{
              backgroundColor: 'transparent',
              padding: 0,
              minHeight: '500px',
              width: '100%',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
