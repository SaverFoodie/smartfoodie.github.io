import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../language';

function HomeFooter() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFontSize = () => {
    if (windowWidth <= 480) return '1em';
    if (windowWidth <= 768) return '1.4em';
    if (windowWidth <= 1024) return '1.6em';
    return '1.8em';
  };

  const getContainerHeight = () => {
    if (windowWidth <= 480) return '50vh';
    if (windowWidth <= 768) return '70vh';
    if (windowWidth <= 1024) return '80vh';
    return '85vh';
  };

  const getButtonStyles = () => {
    if (windowWidth <= 480) {
      return {
        fontSize: '0.8rem',
        padding: '0.4rem 0.8rem',
        alignSelf: 'center', 
      };
    }
    if (windowWidth <= 768) {
      return {
        fontSize: '0.8rem',
        padding: '0.4rem 0.9rem',
        alignSelf: 'center',
      };
    }
    if (windowWidth <= 1024) {
      return {
        fontSize: '1rem',
        padding: '0.5rem 1.0rem',
        alignSelf: 'flex-start',
        marginLeft: '15%',
      };
    }
    return {
      fontSize: '1.1rem',
      padding: '0.6rem 1.2rem',
      alignSelf: 'flex-start',
      marginLeft: '25%',
    };
  };

  const getContentWrapperStyles = () => {
    return {
      ...styles.contentWrapper,
      width: windowWidth <= 768 ? '100%' : '60%',
      paddingLeft: windowWidth <= 480 ? '3vw' : windowWidth <= 768 ? '4vw' : '5vw',
      paddingRight: windowWidth <= 480 ? '3vw' : windowWidth <= 768 ? '4vw' : '5vw',
      paddingTop: windowWidth <= 480 ? '20px' : '30px',
      paddingBottom: windowWidth <= 480 ? '20px' : '30px',
      alignItems: windowWidth <= 768 ? 'center' : 'flex-start',
      textAlign: windowWidth <= 768 ? 'center' : 'left',
      gap: windowWidth <= 480 ? '10px' : '15px',
    };
  };

  const getOverlayStyles = () => {
    if (windowWidth <= 768) {
      return {
        ...styles.overlay,
        background: 'rgba(0, 0, 0, 0.6)',
      };
    }
    return styles.overlay;
  };

  const containerStyle = {
    ...styles.warmthButtonContainer,
    backgroundImage: 'url("./footer.jpg")',
    height: getContainerHeight(),
  };

  const textStyle = {
    ...styles.warmthText,
    fontSize: getFontSize(),
    maxWidth: windowWidth <= 768 ? '100%' : '80%',
    textAlign: windowWidth <= 768 ? 'center' : 'left',
  };

  return (
    <div style={containerStyle}>
      <div style={getOverlayStyles()}></div>
      <div style={getContentWrapperStyles()}>
        <h2 style={{
          ...textStyle,
          fontSize: windowWidth <= 480 ? '1.2em' : windowWidth <= 768 ? '1.6em' : windowWidth <= 1024 ? '1.8em' : '2.2em',
          fontWeight: 'bold',
          marginBottom: windowWidth <= 480 ? '10px' : '15px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {language === "en" ? "Transform Your Dining for Multiple Scenarios" : "Transformieren Sie Ihr Dining-Erlebnis für verschiedene Szenarien"}
        </h2>
        
        <p style={{
          ...textStyle,
          fontSize: windowWidth <= 480 ? '0.95em' : windowWidth <= 768 ? '1.1em' : windowWidth <= 1024 ? '1.3em' : '1.4em',
          marginBottom: windowWidth <= 480 ? '8px' : '12px',
          
        }}>
          {language === "en" 
            ? "Experience the future of dining in workplaces, campuses, public spaces, and beyond with our innovative steam-powered vending machines – fresh, hot meals ready in just 2 minutes, 24/7." 
            : "Erleben Sie die Zukunft des Dining an Arbeitsplätzen, Hochschulen, öffentlichen Orten und mehr mit unseren innovativen Dampf-Verkaufsautomaten – frische, warme Mahlzeiten in nur 2 Minuten, 24/7."}
        </p>
        
        <p style={{
          ...textStyle,
          fontSize: windowWidth <= 480 ? '0.95em' : windowWidth <= 768 ? '1.1em' : windowWidth <= 1024 ? '1.3em' : '1.4em',
          marginBottom: windowWidth <= 480 ? '8px' : '12px',
          opacity: '0.95'
        }}>
          {language === "en" 
            ? "No upfront costs • 3-month free trial • Nourishing meals • Smart choices at a smart price" 
            : "Null Vorkosten • 3 Monate gratis • Gesunde Mahlzeiten • Smarte Wahl zum besten Preis"}
        </p>
        
        <p style={{
          ...textStyle,
          fontSize: windowWidth <= 480 ? '0.85em' : windowWidth <= 768 ? '1em' : windowWidth <= 1024 ? '1.1em' : '1.2em',
          marginBottom: windowWidth <= 480 ? '15px' : '20px',
          fontStyle: 'italic',
          opacity: '0.9'
        }}>
          {language === "en" ? "Made with Love in Munich" : "Gemacht mit Liebe in München"}
        </p>
        
        <button 
          className="bg-gradient-to-r from-[#F16E21] to-orange-600 text-white rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          style={{
            ...styles.button,
            ...getButtonStyles(),
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          onClick={() => {
            navigate('/kontakt');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }} 
        >
          {language === "en" ? "Start Free Trial Now!" : "Jetzt Kostenlos Testen!"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  warmthButtonContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '85vh',
    padding: '0',
    borderRadius: '0px',
    position: 'relative',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  warmthText: {
    marginBottom: '15px',
    color: 'white',
    width: 'auto',
    padding: '0',
    lineHeight: '1.4',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0) 100%)',
    zIndex: 1,
  },
  button: {
    marginTop: '1rem',
    width: 'auto',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  }
};

export default HomeFooter;