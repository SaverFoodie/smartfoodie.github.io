import React from "react";
import { useLanguage } from "../../language";

const ProductList = () => {
  const [activeFilter, setActiveFilter] = React.useState([]);
  const { language } = useLanguage();

  const products = [
    { name: language === "en" ? "Ramen" : "Ramen", img: "./meals/96.jpg", tag: ["non-vegan","noodle"] },
    {
      name: language === "en" ? "Tender Beef with Vegetables and Black Pepper" : "Gemüse- und Pfefferkörpersteak",
      img: "./meals/90.png",
      tag: ["non-vegan","rice"],
    },
    { name: language === "en" ? "Beef Goulash with Spaetzle" : "Rindergulasch mit Spätzle", img: "./meals/99.jpg", tag: ["non-vegan","noodle"] },
    { name: language === "en" ? "Spaghetti Bolognese" : "Spaghetti Bolognese", img: "./meals/86.png", tag: ["non-vegan","noodle"] },
    { name: language === "en" ? "Dumplings" : "Teigtaschen", img: "./meals/98.jpg", tag: ["non-vegan","dimSum"] },
    { name: language === "en" ? "Dim-Sums with Shrimp" : "Dim Sums mit Garnelen", img: "./meals/97.jpg", tag: ["non-vegan","dimSum"] },
    { name: language === "en" ? "Stuffed Buns with Pork" : "Gyozas mit verschiedenen Füllungen", img: "./meals/84.png", tag: ["non-vegan","dimSum"] },
    { name: language === "en" ? "Chili Con Carne" : "Chili Con Carne", img: "./meals/87.png", tag: ["non-vegan","rice"] },
    { name: language === "en" ? "Beef Rib Stew with Potatoes" : "Rindereintopf mit Kartoffeln", img: "./meals/91.png", tag: ["non-vegan","rice"] },
    { name: language === "en" ? "Eggplant in Sweet and Sour Sauce" : "Auberginen in Süß-Sauer-Sauce", img: "./meals/95.png", tag: ["vegan", "rice"] },
    { name: language === "en" ? "Tender Beef with Peppers" : "Gemüse- und Pfefferkörpersteak", img: "./meals/81.png", tag: ["non-vegan","rice"] },   
    { name: language === "en" ? "Pork Belly Fried with Peppers" : "Schweinebauch mit Pepperoni", img: "./meals/88.png", tag: ["non-vegan","rice"] },
    { name: language === "en" ? "Tender Lamb Fried with Cumin" : "Lamm mit Gemüse und Kreuzkümmel", img: "./meals/89.png", tag: ["non-vegan","rice"] },
    { name: language === "en" ? "Kung Pao Chicken" : "Kungpao Hähnchen", img: "./meals/92.png", tag: ["non-vegan","rice"] },
    
   
    
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
    const isRiceDish = product.tag.includes('rice');
    const isNoodleDish = product.tag.includes('noodle');
    const isDimSum = product.tag.includes('dimSum');

    const filterVegan = activeFilter.includes('vegan');
    const filterNonVegan = activeFilter.includes('non-vegan');
    const filterRice = activeFilter.includes('rice');
    const filterNoodle = activeFilter.includes('noodle');
    const filterDimSum = activeFilter.includes('dimSum');

    const matchesDiet = (!filterVegan && !filterNonVegan) || (filterVegan && isVegan) || (filterNonVegan && isNonVegan);
    
    const matchesCategory = (!filterRice && !filterNoodle && !filterDimSum) || 
                          (filterRice && isRiceDish) || 
                          (filterNoodle && isNoodleDish) || 
                          (filterDimSum && isDimSum);

    return matchesDiet && matchesCategory;
};

  const filteredProducts = products.filter(filterProducts);
  return (
    <div>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
         {language === "en" ? "Food is our passion." : "Lebensmittel sind unsere Leidenschaft."}
        </h1>
        {/* Updated Headline */}
        <p className="text-xl text-center text-gray-600 mb-12">
          {language === "en" ? "Explore a curated selection of our diverse product offerings." : "Entdecken Sie eine ausgewählte Auswahl unserer vielfältigen Produktangebote."}
        </p>
        
        <div className="flex flex-col lg:flex-row lg:items-start">
          {/* Filter Sidebar */}
          <aside className="w-full lg:w-1/5 pr-6 mb-8 lg:mb-0">
            {/* Elegant Filter Container */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 relative overflow-hidden">
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-pink-50/30 to-yellow-50/40"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-pink-400 rounded-full"></span>
                  {language === "en" ? "Filter by" : "Filtern nach"}
                </h2>

                <div className="mb-7">
                  <h3 className="text-sm font-medium text-gray-600 mb-4 pl-1">
                    {language === "en" ? "Ingredients" : "Zutaten"}
                  </h3>
                  <div className="space-y-3">
                    <button 
                      className={`group relative w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                        activeFilter.includes('vegan') 
                          ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200/60 shadow-md' 
                          : 'bg-white/80 text-gray-700 border border-gray-200/60 hover:bg-gradient-to-r hover:from-green-50 hover:to-white hover:border-green-200/60'
                      }`}
                      onClick={() => toggleFilter('vegan')}
                      aria-pressed={activeFilter.includes('vegan')}
                    >
                      <span className="flex items-center justify-start gap-3">
                        <span className="text-base">🌱</span>
                        <span>{language === "en" ? "Vegetarian" : "Vegetarisch"}</span>
                      </span>
                      {activeFilter.includes('vegan') && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </button>
                    
                    <button 
                      className={`group relative w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                        activeFilter.includes('non-vegan') 
                          ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 border border-orange-200/60 shadow-md' 
                          : 'bg-white/80 text-gray-700 border border-gray-200/60 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white hover:border-orange-200/60'
                      }`}
                      onClick={() => toggleFilter('non-vegan')}
                      aria-pressed={activeFilter.includes('non-vegan')}
                    >
                      <span className="flex items-center justify-start gap-3">
                        <span className="text-base">🍖</span>
                        <span>{language === "en" ? "Non-Vegetarian" : "Nicht-Vegetarisch"}</span>
                      </span>
                      {activeFilter.includes('non-vegan') && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-4 pl-1">
                    {language === "en" ? "Dish Type" : "Gerichtstyp"}
                  </h3>
                  <div className="space-y-3">
                    <button 
                      className={`group relative w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                        activeFilter.includes('rice') 
                          ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 border border-orange-200/60 shadow-md' 
                          : 'bg-white/80 text-gray-700 border border-gray-200/60 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white hover:border-orange-200/60'
                      }`}
                      onClick={() => toggleFilter('rice')}
                      aria-pressed={activeFilter.includes('rice')}
                    >
                      <span className="flex items-center justify-start gap-3">
                        <span className="text-base">🍚</span>
                        <span>{language === "en" ? "Rice-Bowl" : "Reis-Bowl"}</span>
                      </span>
                      {activeFilter.includes('rice') && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </button>
                    
                    <button 
                      className={`group relative w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                        activeFilter.includes('noodle') 
                          ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 border border-orange-200/60 shadow-md' 
                          : 'bg-white/80 text-gray-700 border border-gray-200/60 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white hover:border-orange-200/60'
                      }`}
                      onClick={() => toggleFilter('noodle')}
                      aria-pressed={activeFilter.includes('noodle')}
                    >
                      <span className="flex items-center justify-start gap-3">
                        <span className="text-base">🍜</span>
                        <span>{language === "en" ? "Noodle-Bowl" : "Nudel-Bowl"}</span>
                      </span>
                      {activeFilter.includes('noodle') && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </button>
                    
                    <button 
                      className={`group relative w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                        activeFilter.includes('dimSum') 
                          ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 border border-orange-200/60 shadow-md' 
                          : 'bg-white/80 text-gray-700 border border-gray-200/60 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white hover:border-orange-200/60'
                      }`}
                      onClick={() => toggleFilter('dimSum')}
                      aria-pressed={activeFilter.includes('dimSum')}
                    >
                      <span className="flex items-center justify-start gap-3">
                        <span className="text-base">🥟</span>
                        <span>{language === "en" ? "Dim Sum" : "Dim Sum"}</span>
                      </span>
                      {activeFilter.includes('dimSum') && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4 w-full lg:w-3/4 grid-rows-[repeat(auto-fit,360px)]">
            {filteredProducts.map((product, index) => (
              <div 
                key={index} 
                className="group relative product-card bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-200/50 h-90"
              >
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Simple overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Simplified tag */}
                    {product.tag && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-md border border-gray-200/50">
                          {product.tag.includes("vegan") ? "🌱" : "🍖"}
                          <span className="ml-1 text-gray-700">
                            {product.tag.includes("dimSum") 
                              ? "Dim Sum" 
                              : product.tag.includes("noodle")
                                ? (language === "en" ? "Noodle-Bowl" : "Nudel-Bowl")
                                : (language === "en" ? "Rice-Bowl" : "Reis-Bowl")}
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 text-center leading-relaxed">
                      {product.name}
                    </h3>
                  </div>
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
