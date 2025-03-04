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
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => { router("home"); window.scrollTo(0, 0); }}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li 
                className={`${pathname === "/home" ? "active-link" : "nav-link"} hover:scale-110 transition-transform duration-200`}
                onClick={() => handleNavigation("/home")}
              >
                {language === "en" ? "Home" : "Startseite"}
              </li>
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

            {/* Language Selector */}
            <div className="ml-4">
              <select
                className="language-button px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <ul className="space-y-2">
            <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100" onClick={() => handleNavigation("home")}>
              {language === "en" ? "Home" : "Startseite"}
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100" onClick={() => handleNavigation("products&solutions")}>
              {language === "en" ? "Products&Solutions" : "Produkte&Lösungen"}
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100" onClick={() => handleNavigation("our-food")}>
              {language === "en" ? "Our Food" : "Unser Essen"}
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100" onClick={() => handleNavigation("news")}>
              {language === "en" ? "Company News" : "Firma News"}
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100" onClick={() => handleNavigation("contact")}>
              {language === "en" ? "Contact us" : "Kontakt"}
            </li>
            <li className="px-3 py-2">
              <select
                className="language-button w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
