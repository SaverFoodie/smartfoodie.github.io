import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLanguage } from "../../language";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Locations() {
  const { language } = useLanguage();
  const [copiedAddress, setCopiedAddress] = useState(null);

  const locations = [
    {
      id: 1,
      name: language === "en" ? "SmartFoodie @STF" : "SmartFoodie @STF",
      address: "Zeppelinstraße 33, 85748 Garching bei München",
      coordinates: [48.2526, 11.6167]
    },
    {
      id: 2,
      name: language === "en" ? "SmartFoodie @EDEKA Eren" : "SmartFoodie @EDEKA Eren",
      address: "Tegernseer Landstraße 64, 81541 München",
      coordinates: [48.1159, 11.5801]
    },
    {
      id: 3,
      name: language === "en" ? "SmartFoodie e-Bistro24H @Klinikum Großhadern" : "SmartFoodie e-Bistro24H @Klinikum Großhadern",
      address: "Marchioninistraße 15, 81377 München",
      coordinates: [48.1107, 11.4693]
    }
  ];

  const copyAddress = (address) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    });
  };

  return (
    <div className="w-full">
      {/* Transition divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center py-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        </div>
      </div>

      {/* Title section with improved styling */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          {language === "en" ? "Some of Our Locations" : "Einige unserer Standorte"}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {language === "en" 
            ? "Experience SmartFoodie's innovative dining solutions at our partner locations across Munich. Each location offers a unique taste of our fresh, convenient meals." 
            : "Erlebe die innovativen Dining-Lösungen von SmartFoodie an unseren Partnerstandorten in ganz München. Jeder Standort bietet dir einen einzigartigen Geschmack unserer frischen und bequemen Mahlzeiten."}
        </p>
      </div>

      {/* Locations grid with improved container */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col h-full hover:shadow-2xl"
            >
              {/* Map container */}
              <div className="h-48 relative flex-shrink-0">
                <MapContainer
                  center={location.coordinates}
                  zoom={15}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                  dragging={false}
                  zoomControl={false}
                  doubleClickZoom={false}
                  touchZoom={false}
                  boxZoom={false}
                  keyboard={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={location.coordinates}>
                    <Popup>
                      <div className="text-center">
                        <h3 className="font-semibold text-orange-600">{location.name}</h3>
                        <p className="text-sm text-gray-800 mt-1">{location.address}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Location details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {location.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 text-lg">📍</span>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyAddress(location.address)}
                  className="w-full bg-gradient-to-r from-orange-300 to-orange-500 text-white py-3 px-4 rounded-xl hover:from-orange-400 hover:to-orange-600 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 mt-4 shadow-md hover:shadow-lg"
                >
                  {copiedAddress === location.address ? (
                    <>
                      <span className="text-lg">✓</span>
                      {language === "en" ? "Copied!" : "Kopiert!"}
                    </>
                  ) : (
                    <>
                      <span className="text-lg">📋</span>
                      {language === "en" ? "Copy Address" : "Adresse kopieren"}
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer message with improved styling */}
      <div className="max-w-6xl mx-auto px-4 text-center pb-16">
        <div className="bg-transparent rounded-2xl p-8 ">
          <h3 className="text-2xl font-bold text-gray-700 mb-3">
            {language === "en" ? "Expanding Soon" : "Bald an weiteren Standorten"}
          </h3>
          <p className="text-gray-600 text-lg">
            {language === "en" 
              ? "We're growing to bring SmartFoodie closer to you. Check back soon for our new locations!" 
              : "Wir wachsen, um SmartFoodie näher zu dir zu bringen. Schau bald wieder vorbei für unsere neuen Standorte!"}
          </p>
        </div>
      </div>
    </div>
  );
}
