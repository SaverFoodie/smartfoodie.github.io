import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../language";

function Logo({ isScrolled }) {
    const location = useLocation();
    // 在首页或机器页面时，只有在滚动后才显示 logo
    if ((location.pathname === "/" || location.pathname === "/products-and-solutions") && !isScrolled) {
        return null;
    }
    return <img className={"w-20 lg:w-[200px]"} src="/header.png" />;
}

function Header() {
  const { language, setLanguage } = useLanguage();
  const router = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const isHomePage = pathname === "/";
  const isMachinesPage = pathname === "/products-and-solutions";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // 当滚动超过 100px 时改变样式
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          menuButtonRef.current && 
          !menuButtonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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

  const shouldUseTransparentBg = (isHomePage || isMachinesPage) && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 ${shouldUseTransparentBg ? 'bg-transparent' : 'bg-white shadow-md'} z-50 transition-colors duration-300`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => { router("/"); window.scrollTo(0, 0); }}>
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 font-semibold">
              {[
                { path: "/", text: { en: "Home", de: "Startseite" } },
                { path: "/products-and-solutions", text: { en: "Products&Solutions", de: "Produkte&Lösungen" } },
                { path: "/our-food", text: { en: "Our Food", de: "Unser Essen" } },
                { path: "/blogs", text: { en: "Blogs", de: "Blogs" } },
                { path: "/events", text: { en: "Events", de: "Veranstaltungen" } },
                { path: "/contact", text: { en: "Contact us", de: "Kontakt" } }
              ].map((item) => (
                <li 
                  key={item.path}
                  className={`${
                    pathname === item.path || (item.path === "/events" && pathname.startsWith("/events")) 
                      ? "active-link" 
                      : "nav-link"
                  } hover:scale-110 transition-transform duration-200 ${
                    shouldUseTransparentBg 
                      ? "!text-white hover:!text-[#ffb700]" 
                      : "!text-gray-800 hover:!text-[#ffb700]"
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {language === "en" ? item.text.en : item.text.de}
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div className="ml-4">
              <select
                className={`language-button px-3 py-1 rounded-md border ${
                  shouldUseTransparentBg 
                    ? "border-white text-white bg-transparent hover:bg-white/10" 
                    : "border-gray-300 text-gray-800 bg-white hover:bg-gray-50"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en" className={shouldUseTransparentBg ? "bg-gray-800" : "bg-white"}>English</option>
                <option value="de" className={shouldUseTransparentBg ? "bg-gray-800" : "bg-white"}>Deutsch</option>
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              ref={menuButtonRef}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                shouldUseTransparentBg 
                  ? "text-white hover:text-[#ffb700] hover:bg-white/10" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300`}
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
      <div ref={menuRef} className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className={`px-1 pt-1 pb-1 space-y-0.5 sm:px-2 ${
          shouldUseTransparentBg 
            ? "bg-black/80 backdrop-blur-sm" 
            : "bg-white"
        } shadow-lg`}>
          <ul className="space-y-1">
            {[
              { path: "/", text: { en: "Home", de: "Startseite" } },
              { path: "/products-and-solutions", text: { en: "Products&Solutions", de: "Produkte&Lösungen" } },
              { path: "/our-food", text: { en: "Our Food", de: "Unser Essen" } },
              { path: "/blogs", text: { en: "Blogs", de: "Blogs" } },
              { path: "/events", text: { en: "Events", de: "Veranstaltungen" } },
              { path: "/contact", text: { en: "Contact us", de: "Kontakt" } }
            ].map((item) => (
              <li 
                key={item.path}
                className={`cursor-pointer px-2 py-1 text-sm rounded-md ${
                  shouldUseTransparentBg 
                    ? "text-white hover:bg-white/10" 
                    : "text-gray-800 hover:bg-gray-100"
                } transition-colors duration-300`}
                onClick={() => handleNavigation(item.path)}
              >
                {language === "en" ? item.text.en : item.text.de}
              </li>
            ))}
            <li className="px-2 py-1">
              <select
                className={`language-button w-full px-2 py-1 text-sm rounded-md border ${
                  shouldUseTransparentBg 
                    ? "border-white text-white bg-transparent hover:bg-white/10" 
                    : "border-gray-300 text-gray-800 bg-white hover:bg-gray-50"
                } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-300`}
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en" className={shouldUseTransparentBg ? "bg-gray-800" : "bg-white"}>English</option>
                <option value="de" className={shouldUseTransparentBg ? "bg-gray-800" : "bg-white"}>Deutsch</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
