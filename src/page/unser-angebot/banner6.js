import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../language';


function HomeFooter() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [showBackground, setShowBackground] = React.useState(window.innerWidth > 768);
  const [fontSize, setFontSize] = React.useState(getFontSize(window.innerWidth));
  const [containerHeight, setContainerHeight] = React.useState(getContainerHeight(window.innerWidth));

  function getFontSize(width) {
    if (width <= 480) return '1.1em';      // Mobile
    if (width <= 768) return '1.4em';      // Tablet
    if (width <= 1024) return '1.7em';     // Small desktop
    return '2em';                          // Large desktop
  }

  function getContainerHeight(width) {
    if (width <= 480) return '60vh';       // Mobile
    if (width <= 768) return '70vh';       // Tablet
    if (width <= 1024) return '80vh';      // Small desktop
    return '85vh';                         // Large desktop
  }

  React.useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth > 768);
      setFontSize(getFontSize(window.innerWidth));
      setContainerHeight(getContainerHeight(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    ...styles.warmthButtonContainer,
    backgroundImage: showBackground ? 'url("./back2.jpg")' : 'none',
    height: containerHeight,
  };

  const textStyle = {
    ...styles.warmthText,
    fontSize: fontSize,
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>{language === "en" ? "Infusing every dish with warmth and flavor." : "Wir verleihen jedem Gericht Wärme und Aroma."}</p>
      <p style={textStyle}>{language === "en" ? "Experience the future of dining with our smart meal vendering solutions." : "Erleben Sie die Zukunft mit unseren Dampf-Essensautomaten."}</p>
      <p style={textStyle}>{language === "en" ? "Join us and be at the forefront of innovation!" : "Innovation fängt mit einer innovativen Ernährung an."}</p>
      <p style={textStyle}>{language === "en" ? "Made with Love in Munich." : "Gemacht mit Liebe in München."}</p>
      <button className="px-6 py-3 bg-[#F16E21] text-white rounded-full text-lg font-bold mt-7 hover:bg-orange-600 transition"
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }} 
          >
            {language === "en" ? "Try out for free!" : "Probieren Sie kostenlos!"}
      </button>
    </div>
  );
}


const styles = {
  warmthButtonContainer: {
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '85vh',
    padding: '0',
    borderRadius: '0px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '15vh',
  },
  warmthText: {
    marginBottom: '15px', 
    color: 'black',
  },
};
  
export default HomeFooter;
