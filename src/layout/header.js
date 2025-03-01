import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../logo";
import { useLanguage } from "../language";

function Header() {
  const { language, setLanguage } = useLanguage();
  const router = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    router(path); 
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="header">
      <nav className="flex items-center justify-between w-full">
        <div className="w-[250px] cursor-pointer" onClick={() => { router("home"); window.scrollTo(0, 0); }}>
          <Logo />
        </div>
        <div className="lg:hidden flex items-center">
          <button className="menu-button" onClick={toggleMenu}>{language === "en" ? "Menu" : "Menü"}</button>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col space-y-2 lg:hidden">
            <li className="cursor-pointer" onClick={() => handleNavigation("home")}>{language === "en" ? "Home" : "Startseite"}</li>
            <li className="cursor-pointer" onClick={() => handleNavigation("products&solutions")}>{language === "en" ? "Products&Solutions" : "Produkte&Lösungen"}</li>
            <li className="cursor-pointer" onClick={() => handleNavigation("our-food")}>{language === "en" ? "Our Food" : "Unser Essen"}</li>
            <li className="cursor-pointer" onClick={() => handleNavigation("news")}>{language === "en" ? "Company News" : "Firma News"}</li>
            <li className="cursor-pointer" onClick={() => handleNavigation("contact")}>{language === "en" ? "Contact us" : "Kontakt"}</li>
          </ul>
        )}
        <ul className="flex-row lg:flex flex-col lg:flex-row text-base space-x-8 ml-[40%] whitespace-nowrap hidden cursor-pointer">
          <li 
            className={`${pathname === "/home" ? "active-link" : "nav-link"} hover:scale-110 transition-transform duration-200`}
            onClick={() => handleNavigation("/home")}
          >
            {language === "en" ? "Home" : "Startseite"}
          </li>
          {/*<li
            className={pathname === "/why-smartfoodie" ? "active-link" : "nav-link"}
            onClick={() => router("why-smartfoodie")}
          >
            Why SmartFoodie
          </li> */}
          <li
            className={`${pathname === "/products&solutions" ? "active-link" : "nav-link"} hover:scale-110 transition-transform duration-200`}
            onClick={() => handleNavigation("/products&solutions")}
          >
            {language === "en" ? "Products&Solutions" : "Produkte&Lösungen"}
          </li>
          <li
            className={`${pathname === "/our-food" ? "active-link" : "nav-link"} hover:scale-110 transition-transform duration-200`}
            onClick={() => handleNavigation("/our-food")}
          >
            {language === "en" ? "Our Food" : "Unser Essen"}
          </li>
          <li
            className={`${pathname === "/news" ? "active-link" : "nav-link"} hover:scale-110 transition-transform duration-200`}
            onClick={() => handleNavigation("news")}
          >
            {language === "en" ? "Company News" : "Firma News"}
          </li>
          <li
            className={`${pathname === "/contact" ? "active-link" : "nav-link"} hover:scale-110 transition-transform duration-200`}
            onClick={() => handleNavigation("/contact")}
          >
            {language === "en" ? "Contact us" : "Kontakt"}
          </li>
        </ul>

        <div className="relative flex items-center hidden lg:flex space-x-4">
          <div className="group" style={{ marginLeft: '16px' }}>
            <select
              className="language-button"
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              style={{ outline: 'none', border: 'none' }}
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
        <div className="flex lg:hidden">--</div>
      </nav>
      {/* Mobile Menu */}
      <div className="mobile-menu hidden lg:flex flex-col">
        {/* Add mobile menu items here */}
      </div>
    </div>
  );
}

export default Header;
