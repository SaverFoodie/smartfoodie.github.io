import React from 'react';

function OurFood() {
  return (
    <>
      <div className="text-4xl font-bold text-center text-gray-800 tracking-wider mx-auto leading-relaxed italic mb-10 mt-5">
        Experience the perfect blend of convenience and culinary excellence
      </div>
      <div style={styles.container}>
        <div style={styles.imageContainer} className="flex !flex-col lg:!flex-row ">
          <img src="./1.jpg" alt="Pasta Dish" style={styles.image} className="shadow-xl" /> 
          <div style={styles.content}> 
            <h1 style={styles.heading}>Fresh, Convenient, and Affordable</h1>
            <ul style={styles.list}>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Fresh & Hot Meals - Meals are freshly heated using steam technology, preserving nutrients and flavor.</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Time-Saving & Hassle-Free - No need to travel to restaurants; hot meals are available on-site.</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Low-Cost & High-Quality - Affordable meal options with optimized pricing through automation.</li>
            </ul>
          </div>
        </div>
        <div style={{ height: '30px' }} />
        <div style={styles.imageContainer} className="flex !flex-col lg:!flex-row">
          <div style={styles.content}> 
            <h1 style={styles.heading}>Diverse, Delicious and Nutritious</h1>
            <ul style={styles.list}>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Diverse & Customizable Menu - Over 50 dishes, including a variety of cuisines, with dietary-friendly options.</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Warm & Tasty Cuisine - Delicious, nutrient-rich dishes served with flavor and enjoyment.</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Nutritional & Balanced Choices - Meals are prepared using healthy cooking methods to ensure well-balanced nutrition.</li>
            </ul>
          </div>
          <img src="./2.jpg" alt="Pasta Dish" style={styles.image} /> 
        </div>
        <div style={{ height: '30px' }} />
        <div style={styles.imageContainer} className="flex !flex-col lg:!flex-row">
          <img src="./box.jpg" alt="Pasta Dish" style={styles.image} /> 
          <div style={styles.content}> 
            <h1 style={styles.heading}>Sustainable, Eco-friendly, and Responsible</h1>
            <ul style={styles.list}>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Locally Sourced Ingredients - Reducing the carbon footprint by prioritizing local suppliers.</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Eco-Friendly Packaging - Boxes made with paper and metal, reduce plastic pollution.</li>
              <li style={{ ...styles.listItem, fontSize: '1.2em' }}>Smart Waste Reduction - Minimizes food waste and enhances resource efficiency with smart planning.</li>
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
    backgroundColor: '#FFE0B2',
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
