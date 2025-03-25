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
        fontSize: '0.9rem',
        padding: '0.2rem 0.4rem',
        alignSelf: 'center', 
      };
    }
    if (windowWidth <= 768) {
      return {
        fontSize: '1.1rem',
        padding: '0.4rem 0.8rem',
        alignSelf: 'center',
      };
    }
    if (windowWidth <= 1024) {
      return {
        fontSize: '1.2rem',
        padding: '0.65rem 1.1rem',
        alignSelf: 'flex-start',
        marginLeft: '15%',
      };
    }
    return {
      fontSize: '1.3rem',
      padding: '0.8rem 1.4rem',
      alignSelf: 'flex-start',
      marginLeft: '25%',
    };
  };

  const getContentWrapperStyles = () => {
    return {
      ...styles.contentWrapper,
      width: windowWidth <= 768 ? '100%' : '60%',
      paddingLeft: windowWidth <= 480 ? '3vw' : '5vw',
      paddingRight: windowWidth <= 480 ? '3vw' : '5vw',
      alignItems: windowWidth <= 768 ? 'center' : 'flex-start',
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
        <p style={textStyle}>{language === "en" ? "Experience the future of dining with our smart meal vendering solutions." : "Erleben Sie die Zukunft mit unseren Dampf-Essensautomaten."}</p>
        <p style={textStyle}>{language === "en" ? "Join us and be at the forefront of innovation!" : "Innovation fängt mit einer innovativen Ernährung an."}</p>
        <p style={textStyle}>{language === "en" ? "Made with Love in Munich." : "Gemacht mit Liebe in München."}</p>
        <button 
          className="bg-[#F16E21] text-white rounded-full font-bold hover:bg-orange-600 transition"
          style={{
            ...styles.button,
            ...getButtonStyles()
          }}
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }} 
        >
          {language === "en" ? "Try out for free!" : "Probieren Sie kostenlos!"}
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
    
    marginTop: '2rem',
    width: 'auto',
  }
};
  
export default HomeFooter;
