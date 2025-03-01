import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeFooter() {
    const navigate = useNavigate();
    return (
      <div style={styles.warmthButtonContainer}>
        <p style={styles.warmthText}>Infusing every dish with warmth and flavor.</p>
        <p style={styles.warmthText}>Experience the future with our smart meal vendering solutions.</p>
        <p style={styles.warmthText}>Join us for a taste of something unique!</p>
        <p style={styles.warmthText}>Made with Love in Munich.</p>
        <button className="px-6 py-3 bg-[#F16E21] text-white rounded-full text-lg font-bold mt-7 hover:bg-orange-600 transition"
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }} 
            >
              Meeting us!
        </button>
      </div>
    );
  }


  const styles = {
    warmthButtonContainer: {
        backgroundImage: 'url("./back2.jpg")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
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