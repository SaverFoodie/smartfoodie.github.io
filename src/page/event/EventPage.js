import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../language';
import './EventCard.css';
import storeIcon from '../../logo_default.svg'; // Adjust path if needed

const EventPage = () => {
  const { language } = useLanguage();
  const [featuredEventBg, setFeaturedEventBg] = useState('/event-images/featured.jpg');

  // Event data - future events first, then past events
  const events = [
    // UPCOMING EVENTS - These will be checked for featuring
    {
      id: 'SmartFoodie Free-Tasting-Event im Klinikum Großhadern',
      title: language === "en" ? "SmartFoodie Free-Tasting-Event at Klinikum Großhadern" : "SmartFoodie Free-Tasting-Event im Klinikum Großhadern",
      date: language === "en" ? "May 9, 2025" : "9. Mai 2025",
      location: language === "en" ? "Munich" : "München",
      featured: true,
      description: language === "en" 
        ? "Taste It Today — Fresh, Steamed Meals in Minutes!"
        : "Heute probieren — Heiße Mahlzeiten frisch aus dem Automaten!",
      image: '/event-images/featured.jpg', // Using actual featured image
      docFile_en: "SmartFoodie Tasting Event at Klinikum Großhadern_EN.docx",
      docFile_de: "SmartFoodie Tasting Event at Klinikum Großhadern_DE.docx"
    },
    {
      id: 'Steam Cuisine Coming to EDEKA Eren',
      title: language === "en" ? "Steam Cuisine Coming to EDEKA Eren" : "Steam Cuisine kommt zu EDEKA Eren",
      date: language === "en" ? "April 5, 2025" : "5. April 2025",
      location: language === "en" ? "Munich" : "München",
      featured: false,
      image: '/event-images/EdekaEvent.png', // 使用featured.jpg替换placeholder
      docFile_en: "Steam Cuisine Coming to EDEKA Eren_EN.docx",
      docFile_de: "Steam Cuisine Coming to EDEKA Eren_DE.docx"
    }
  ];

  // Find the featured event (upcoming event with featured flag)
  const featuredEvent = events.find(event => event.featured);
  
  // Get non-featured events
  const regularEvents = events.filter(event => !event.featured);

  // Check if the featured event image loads correctly
  useEffect(() => {
    if (featuredEvent) {
      const img = new Image();
      img.src = featuredEvent.image;
      img.onload = () => {
        setFeaturedEventBg(featuredEvent.image);
      };
      img.onerror = () => {
        setFeaturedEventBg('/event-images/featured.jpg');
      };
    }
  }, [featuredEvent]);

  // Format date to check if event is upcoming or past
  const isUpcomingEvent = (dateString) => {
    // Extract just the year, month, and day regardless of format
    const parts = dateString.match(/\d+/g);
    let eventDate;
    
    if (language === "de" && parts?.length >= 3) {
      // For German date format (day.month.year)
      eventDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    } else {
      // For English date format (month day, year)
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
      
      // Convert month name to month number if needed
      let month = parts?.[0];
      if (isNaN(month)) {
        month = monthNames.findIndex(m => dateString.includes(m)) + 1;
      }
      
      eventDate = new Date(parseInt(parts?.[parts.length - 1]), month - 1, parseInt(parts?.[1]));
    }
    
    const today = new Date();
    return eventDate > today;
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-white" style={{ margin: 0, minHeight: '100vh', padding: '70px 15px 0 15px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0' }}>
        <h1 className="text-5xl font-bold text-center mb-10" style={{ color: '#212121' }}>
          {language === "en" ? "Celebrating Food. Creating Connections." : "Essen Feiern. Verbindungen Schaffen."}
        </h1>
        <p className="text-xl text-center mb-8" style={{ color: '#616161' }}>
          {language === "en" 
            ? "Join us on a journey of flavor, innovation, and shared experiences — where every event opens a new chapter." 
            : "Begleiten Sie uns auf einer Reise voller Geschmack, Innovation und gemeinsamer Erlebnisse — wo jedes Event ein neues Kapitel eröffnet."}
        </p>
      </div>
      
      <div className="event-container">
        {/* Featured Event */}
        {featuredEvent && (
          <Link 
            to={`/events/${featuredEvent.id}`} 
            className="featured-event"
            style={{ 
              backgroundImage: `url(${featuredEventBg})`,
            }}
          >
            <div className="featured-content">
              <h2>{featuredEvent.title}</h2>
              <p className="event-date">{featuredEvent.date}</p>
              <p>{featuredEvent.location}</p>
              <p>{featuredEvent.description}</p>
            </div>
          </Link>
        )}
        
        {/* Regular Events */}
        {regularEvents.map(event => {
          const isPastEvent = !isUpcomingEvent(event.date);
          return (
            <Link 
              key={event.id} 
              to={`/events/${event.id}`} 
              className={`event-card ${isPastEvent ? 'past-event' : ''}`}
            >
              <div className={`event-image-container ${isPastEvent ? 'past-event-image' : ''}`}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="event-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = storeIcon; // Fallback to logo if image fails to load
                  }}
                />
              </div>
              <div className={`event-content ${isPastEvent ? 'past-event-content' : ''}`}>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">
                  {event.date}
                </p>
                <p className="event-location">{event.location}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventPage;
