import React from 'react';
import { useLanguage } from '../../language';

function OurFood() {
  const { language } = useLanguage();
  return (
    <>
      <div className="text-4xl font-bold text-center text-gray-800 tracking-wider mx-auto leading-relaxed italic mb-10 mt-5">
        {language === "en" ? "when Convenience meets culinary excellence" : "wann Bequemlichkeit trifft kulinarische Exzellenz"}
      </div>
      <div style={styles.container}>
        <div style={styles.imageContainer} className="flex !flex-col lg:!flex-row ">
          <img src="./1.jpg" alt="Pasta Dish" style={styles.image} className="shadow-xl" /> 
          <div style={styles.content}> 
            <h1 style={styles.heading}>{language === "en" ? "Fresh, Convenient, and Affordable" : "Frisch, Bequem, und Günstig"}</h1>
            <ul style={styles.list}>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Fresh & Hot Meals - Meals are heated using steam, preserving nutrients and flavor." : "Frisch & Warm Mahlzeiten - Mahlzeiten werden mit Dampf erhitzt, um Nährstoffe und Geschmack zu erhalten."}</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Time-Saving & Hassle-Free - Skip the restaurant trip, hot meals on site for maximum convenience." : "Zeitsparend & Stressfrei - kein Restaurantbesuch, warm Mahlzeiten auf dem Standort für maximale Bequemlichkeit."}</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Affordable Excellence - Savor quality, flavorful meals at a price that fits everyone's budget." : "Günstige Auszeichnung - Genießen Sie Qualität, kulinarische Geschmacksknospen bei einem Preis, der jedem passt."}</li>
            </ul>
          </div>
        </div>
        <div style={{ height: '30px' }} />
        <div style={styles.imageContainer} className="flex !flex-col lg:!flex-row">
          <div style={styles.content}> 
            <h1 style={styles.heading}>{language === "en" ? "Diverse, Delicious and Nutritious" : "Vielseitig, Geschmackvoll und Nährstoffreich"}</h1>
            <ul style={styles.list}>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Diverse & Customizable Menu - Over 50 dishes, including a variety of cuisines, with dietary-friendly options." : "Vielseitig & Anpassbar - Über 50 Mahlzeiten, einschließlich einer Vielzahl von Küchen, mit diätetisch freundlichen Optionen."}</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Warm & Tasty Cuisine - Delicious, nutrient-rich dishes served with flavor and enjoyment." : "Warm & Geschmackvoll - Geschmackvolle, nährstoffreiche Mahlzeiten mit Geschmack und Genuss."}</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Nutritional & Balanced Choices - Meals are prepared and developed by nutrition experts to ensure well-balanced nutrition." : "Nährstoffreich & Ausgewogen - Mahlzeiten werden von Nahrungsmittelexperten vorbereitet und entwickelt, um eine ausgewogene Ernährung zu gewährleisten."}</li>
            </ul>
          </div>
          <img src="./2.jpg" alt="Pasta Dish" style={styles.image} /> 
        </div>
        <div style={{ height: '30px' }} />
        <div style={styles.imageContainer} className="flex !flex-col lg:!flex-row">
          <img src="./box.jpg" alt="Pasta Dish" style={styles.image} /> 
          <div style={styles.content}> 
            <h1 style={styles.heading}>{language === "en" ? "Sustainable, Eco-friendly, and Responsible" : "Nachhaltig, Umweltfreundlich, und Verantwortungsbewusst"}</h1>
            <ul style={styles.list}>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Locally Sourced Ingredients - Reducing the carbon footprint by prioritizing local suppliers." : "Lokal eingesetzte Zutaten - Reduzierung des Kohlenstofffußabdrucks durch Priorisierung lokaler Anbieter."}</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "Eco-Friendly Packaging - Boxes made from recycable materials." : "Umweltschonende Verpackung - Boxen aus recycelbaren Materialien."}</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>{language === "en" ? "AI-Powered Waste Reduction - Reduces food waste and optimizes meal choices for customers." : "Künstliche Intelligenz-gesteuerte Müllreduktion - Reduziert Lebensmittelverschwendung und optimiert Mahlzeitenauswahl für Kunden."}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    fontFamily: '"Poppins", sans-serif',
    backgroundColor: '#FFFBE6',
    gap: '10px',
    maxWidth: '1400px',
    margin: '0 auto',
    borderRadius: '50px',
  },
  content: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 0',
    padding: '15px',
    backgroundColor: 'transparent',
    borderRadius: '25px',
    
  },
  heading: {
    fontSize: '2.5em',
    color: '#1a237e',
    fontWeight: '700',
    marginBottom: '20px',
    marginTop: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  list: {
    marginTop: '30px',
    listStyleType: 'none',
    padding: '0 20px',
    marginBottom: '20px',
    color: '#222222',
  },
  listItem: {
    marginBottom: '25px',
    lineHeight: '1.6',
    position: 'relative',
    paddingLeft: '25px',
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: '0',
      color: '#1a237e',
    }
  },
  imageContainer: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: '150px',
    marginTop: '10px',
    width: '100%',
    padding: '5px',
  },
  image: {
    width: '450px',
    height: '450px',
    borderRadius: '25px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
};

export default OurFood;
