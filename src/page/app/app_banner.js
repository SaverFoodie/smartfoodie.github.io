import React from "react";
import "./app_banner.css";
import { useLanguage } from "../../language";

const AppBanner = () => {
  const { language, setLanguage } = useLanguage();

  const copy = {
    de: {
      title: "SmartFoodie App",
      subtitle: "Rund um die Uhr. Rundum smart.",
      android: "Bei Google Play",
      ios: "Im App Store",
    },
    en: {
      title: "SmartFoodie App",
      subtitle: "Around the clock. Smart all around.",
      android: "Get it on Google Play",
      ios: "Download on the App Store",
    },
  };

  const t = copy[language] || copy.de;
  const badge = {
    apple: language === "de" ? "/appleStoreDe.svg" : "/appleStoreEn.svg",
    google: language === "de" ? "/googlePlayDe.png" : "/googlePlayEn.png",
  };

  return (
    <div className="app-banner">
      <div className="lang-switch" role="tablist" aria-label="language switcher">
        <button
          role="tab"
          aria-selected={language === "de"}
          className={`lang-btn ${language === "de" ? "active" : ""}`}
          onClick={() => setLanguage("de")}
        >
          DE
        </button>
        <button
          role="tab"
          aria-selected={language === "en"}
          className={`lang-btn ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
      <div className="app-card">
        <img className="app-logo" src="/logo.png" alt="SmartFoodie" />
        <h1 className="app-title">{t.title}</h1>
        <p className="app-subtitle">{t.subtitle}</p>
        <div className="download-actions">
          <a
            className="download-btn badge"
            href="https://play.google.com/store/apps/details?id=cn.ifoodgermany.app"
            target="_blank"
            rel="noreferrer"
            aria-label={language === "de" ? "Jetzt bei Google Play" : "Get it on Google Play"}
          >
            <img className="store-badge" src={badge.google} alt={language === "de" ? "Google Play Badge" : "Google Play Badge"} />
          </a>
          <a
            className="download-btn badge"
            href="https://apps.apple.com/de/app/smartfoodie/id6526464424"
            target="_blank"
            rel="noreferrer"
            aria-label={language === "de" ? "Im App Store" : "Download on the App Store"}
          >
            <img className="store-badge" src={badge.apple} alt={language === "de" ? "App Store Abzeichen" : "App Store Badge"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;


