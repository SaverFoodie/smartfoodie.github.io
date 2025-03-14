import React from "react";
import { useLanguage } from "../../language";

const ProductList = () => {
  const [activeFilter, setActiveFilter] = React.useState([]);
  const { language } = useLanguage();

  const products = [
    { name: language === "en" ? "Eggplant in Sweet and Sour Sauce" : "Auberginen in Süß-Sauer-Sauce", img: "./95.png", tag: ["vegan", "main"] },
    { name: language === "en" ? "Tender Beef with Peppers" : "Gemüse- und Pfefferkörpersteak", img: "./81.png", tag: ["non-vegan","main"] },
    {
      name: language === "en" ? "Tender Beef with Vegetables and Black Pepper" : "Gemüse- und Pfefferkörpersteak",
      img: "./90.png",
      tag: ["non-vegan","main"],
    },
    { name: language === "en" ? "Stuffed Buns with Pork" : "Gyozas mit verschiedenen Füllungen", img: "./84.png", tag: ["non-vegan","dimSum"] },
    { name: language === "en" ? "Beef Rib Stew with Potatoes" : "Rindereintopf mit Kartoffeln", img: "./91.png", tag: ["non-vegan","main"] },
    { name: language === "en" ? "Spaghetti Bolognese" : "Spaghetti Bolognese", img: "./86.png", tag: ["non-vegan","main"] },
    { name: language === "en" ? "Chili Con Carne" : "Chili Con Carne", img: "./87.png", tag: ["non-vegan","main"] },
    { name: language === "en" ? "Pork Belly Fried with Peppers" : "Schweinebauch mit Pepperoni", img: "./88.png", tag: ["non-vegan","main"] },
    { name: language === "en" ? "Tender Lamb Fried with Cumin" : "Lamm mit Gemüse und Kreuzkümmel", img: "./89.png", tag: ["non-vegan","main"] },
  ];

  const toggleFilter = (filter) => {
    setActiveFilter((prev) => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const filterProducts = (product) => {
    if (activeFilter.length === 0) return true;

    const isVegan = product.tag.includes('vegan');
    const isNonVegan = product.tag.includes('non-vegan');
    const isMainDish = product.tag.includes('main');
    const isDimSum = product.tag.includes('dimSum');

    const filterVegan = activeFilter.includes('vegan');
    const filterNonVegan = activeFilter.includes('non-vegan');
    const filterMain = activeFilter.includes('main');
    const filterDimSum = activeFilter.includes('dimSum');

    const matchesDiet = (!filterVegan && !filterNonVegan) || (filterVegan && isVegan) || (filterNonVegan && isNonVegan);
    const matchesCategory = (!filterMain && !filterDimSum) || (filterMain && isMainDish) || (filterDimSum && isDimSum);

    return matchesDiet && matchesCategory;
};

  const filteredProducts = products.filter(filterProducts);
  return (
    <div className="bg-gradient-to-br from-orange-100 to-white">
      <div className="container mx-auto px-4 py-16 min-h-screen bg-transparent">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
         {language === "en" ? "Food is our passion." : "Lebensmittel sind unsere Leidenschaft."}
        </h1>
        {/* Updated Headline */}
        <p className="text-xl text-center text-gray-600 mb-12">
          {language === "en" ? "Explore a curated selection of our diverse product offerings." : "Entdecken Sie eine ausgewählte Auswahl unserer vielfältigen Produktangebote."}
        </p>
        
        <div className="flex flex-col md:flex-row">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-1/5 pr-6 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-orange-500 mb-4">
              {language === "en" ? "Filter by:" : "Filtern nach:"}
            </h2>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                {language === "en" ? "Ingredients" : "Zutaten"}
              </h3>
              <button 
                className={`block w-full md:w-[150px] h-[45px] rounded-full filter-button transition-all duration-300 ease-in-out hover:shadow-lg ${
                  activeFilter.includes('vegan') 
                    ? 'bg-orange-500 text-white border-none' 
                    : 'border-2 border-orange-400 text-gray-700 hover:bg-orange-50'
                }`}
                onClick={() => toggleFilter('vegan')}
                aria-pressed={activeFilter.includes('vegan')}
              >
                <span className="flex items-center justify-center gap-2">
                  🌱 <span className="font-medium">{language === "en" ? "Vegan" : "Vegan"}</span>
                </span>
              </button>
              <div className="mb-4" />
              <button 
                className={`block w-full md:w-[150px] h-[45px] rounded-full filter-button transition-all duration-300 ease-in-out hover:shadow-lg ${
                  activeFilter.includes('non-vegan') 
                    ? 'bg-orange-500 text-white border-none' 
                    : 'border-2 border-orange-400 text-gray-700 hover:bg-orange-50'
                }`}
                onClick={() => toggleFilter('non-vegan')}
                aria-pressed={activeFilter.includes('non-vegan')}
              >
                <span className="flex items-center justify-center gap-2">
                  🍖 <span className="font-medium">{language === "en" ? "Non-Vegan" : "Nicht-Vegan"}</span>
                </span>
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                {language === "en" ? "Dish Type" : "Gerichtstyp"}
              </h3>
              <button 
                className={`block w-full md:w-[150px] h-[45px] rounded-full filter-button transition-all duration-300 ease-in-out hover:shadow-lg ${
                  activeFilter.includes('main') 
                    ? 'bg-orange-500 text-white border-none' 
                    : 'border-2 border-orange-400 text-gray-700 hover:bg-orange-50'
                }`}
                onClick={() => toggleFilter('main')}
                aria-pressed={activeFilter.includes('main')}
              >
                <span className="flex items-center justify-center gap-2">
                  🍽️ <span className="font-medium">{language === "en" ? "Main Dish" : "Hauptgericht"}</span>
                </span>
              </button>
              <div className="mb-4" />
              <button 
                className={`block w-full md:w-[150px] h-[45px] rounded-full filter-button transition-all duration-300 ease-in-out hover:shadow-lg ${
                  activeFilter.includes('dimSum') 
                    ? 'bg-orange-500 text-white border-none' 
                    : 'border-2 border-orange-400 text-gray-700 hover:bg-orange-50'
                }`}
                onClick={() => toggleFilter('dimSum')}
                aria-pressed={activeFilter.includes('dimSum')}
              >
                <span className="flex items-center justify-center gap-2">
                  🥟 <span className="font-medium">{language === "en" ? "Dim Sum" : "Dim Sum"}</span>
                </span>
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4 w-full md:w-3/4">
            {filteredProducts.map((product, index) => (
              <div 
                key={index} 
                className="product-card bg-white rounded-xl shadow-[0_4px_12px_rgba(251,146,60,0.15)] hover:shadow-[0_8px_24px_rgba(251,146,60,0.2)] transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {product.tag.includes("vegan") ? "🌱 " : "🍖 "}
                      {product.tag.includes("dimSum") ? "Dim Sum" : language === "en" ? "Main Dish" : "Hauptgericht"}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* New Headline */}
        <h2 className="text-2xl font-bold text-center text-gray-600 mt-16">
          {language === "en" ? "Stay tuned for more exciting dishes ..." : "Bleiben Sie dran für weitere leckere Gerichte..."}
        </h2>
      </div>
    </div>
  );
};

export default ProductList;
