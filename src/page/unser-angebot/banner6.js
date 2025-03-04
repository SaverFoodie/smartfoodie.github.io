import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../language';


function HomeFooter() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [showBackground, setShowBackground] = React.useState(window.innerWidth > 768);

  React.useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    ...styles.warmthButtonContainer,
    backgroundImage: showBackground ? 'url("./back2.jpg")' : 'none',
  };

  return (
    <div style={containerStyle}>
      <p style={styles.warmthText}>{language === "en" ? "Infusing every dish with warmth and flavor." : "Mit Wärme und Geschmack in jede Mahlzeit einfließen."}</p>
      <p style={styles.warmthText}>{language === "en" ? "Experience the future with our smart meal vendering solutions." : "Erleben Sie die Zukunft mit unseren intelligenten Mahlzeitenautomaten."}</p>
      <p style={styles.warmthText}>{language === "en" ? "Join us for a taste of something unique!" : "Treten Sie uns bei, um etwas Einzigartiges zu erleben!"}</p>
      <p style={styles.warmthText}>{language === "en" ? "Made with Love in Munich." : "Gemacht mit Liebe in München."}</p>
      <button className="px-6 py-3 bg-[#F16E21] text-white rounded-full text-lg font-bold mt-7 hover:bg-orange-600 transition"
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }} 
          >
            {language === "en" ? "Meeting us!" : "Treffen Sie uns!"}
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
    fontSize: '1.7em', 
    marginBottom: '15px', 
    color: 'black',
  },
};
  
export default HomeFooter;