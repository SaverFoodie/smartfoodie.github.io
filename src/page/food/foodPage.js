import React, { useMemo, useCallback } from "react";
import { useLanguage } from "../../language";

// Move products data outside component to avoid recreation on each render
const getProducts = (language) => [
  { name: language === "en" ? "Steamed Beef Bulgongi Dumplings" : "Gedämpfte Rinder-Bulgogi-Dumplings", img: "./meals/1.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Steamed Beef Dumplings with BBQ Flavor" : "Gedämpfte Rindfleisch-Dumplings mit BBQ-Geschmack", img: "./meals/2.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Steamed Pork & Vegetable Dumplings" : "Gedämpfte Schweinefleisch & Gemüse-Dumplings", img: "./meals/3.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Steamed Chicken & Vegetable Dumplings" : "Gedämpfte Hähnchen & Gemüse-Dumplings", img: "./meals/4.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Vegetarian Steamed Tofu & Vegetabels Dumplings" : "Vegetarische Gedämpfte Tofu & Gemüse-Dumplings", img: "./meals/5.jpg", tag: ["vegan", "dimSum"] },
  { name: language === "en" ? "Vegetarian Steamed Mixed Vegetables Dumplings" : "Vegetarische Gedämpfte Gemischte Gemüse-Dumplings", img: "./meals/6.jpg", tag: ["vegan", "dimSum"] },
  { name: language === "en" ? "Vegetarian Steamed Leek Dumplings" : "Vegetarische Gedämpfte Lauch-Dumplings", img: "./meals/7.jpg", tag: ["vegan", "dimSum"] },
  { name: language === "en" ? "Vegetarian Steamed Glass Noodle Dumplings" : "Vegetarische Gedämpfte Glasnudeln-Dumplings", img: "./meals/8.jpg", tag: ["vegan", "dimSum"] },
  { name: language === "en" ? "Steamed Shrimp Dumplings" : "Gedämpfte Garnelen-Dumplings", img: "./meals/9.png", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Shrimp Dim-Sums " : "Garnelen-Dim-Sums", img: "./meals/9.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Chicken & Vegetable Soup Dumplings (Xiaolongbaos)" : "Gedämpfte Hähnchen & Gemüse-Suppen-Dumpling (Xiaolongbaos)", img: "./meals/10.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Chicken & Coriander Soup Dumplings (Xiaolongbaos)" : "Gedämpfte Hähnchen & Koriander-Suppen-Dumpling (Xiaolongbaos)", img: "./meals/11.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Pork & Vegetable Soup Dumplings (Xiaolongbaos)" : "Gedämpfte Schweinefleisch & Gemüse-Suppen-Dumpling (Xiaolongbaos)", img: "./meals/12.jpg", tag: ["non-vegan","dimSum"] },
  { name: language === "en" ? "Vegetarian Mushroom Baozi" : "Vegetarische Gedämpfte Pilzen-Baozi", img: "./meals/13.jpg", tag: ["vegan", "dimSum"] },
  { name: language === "en" ? "Vegetarian Pickled Bamboo Shoots Baozi" : "Vegetarische Gedämpfte Sauerkraut-Bambussprossen-Baozi", img: "./meals/14.jpg", tag: ["vegan", "dimSum"] },
  { name: language === "en" ? "Fried Rice with BBQ-flavored Chicken & Vegetable" : "Gebratener Reis mit Hähnchen & Gemüse - BBQ-Geschmack", img: "./meals/15.jpg", tag: ["non-vegan","rice"] },   
  { name: language === "en" ? "Fried Rice with Kimchi & Chicken" : "Gebratener Reis mit Kimchi & Hähnchen", img: "./meals/16.jpg", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Fried Rice with Teriyaki-flavored Chicken" : "Gebratener Reis mit Hähnchen - Teriyaki-Geschmack", img: "./meals/17.jpg", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Fried Rice with Shrimp" : "Gebratener Reis mit Garnelen", img: "./meals/18.jpg", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Roasted Cabbage Rice Bowl" : "Gebratene Kohl Reis Bowl", img: "./meals/19.jpg", tag: ["vegan","rice"] },
  { name: language === "en" ? "Pork Belly & Cabbage Rice Bowl" : "Schweinebauch & Kohl Reis Bowl", img: "./meals/20.jpg", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Beef & Carrot Rice Bowl" : "Rindfleisch & Karotten Reis Bowl", img: "./meals/21.jpg", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Beef with Black Pepper Rice Bowl" : "Rindfleisch mit schwarzem Pfeffer Reis Bowl", img: "./meals/22.jpg", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Vegetarian Eggplant Rice Bowl" : "Vegetarisch Auberginen Reis Bowl", img: "./meals/23.png", tag: ["vegan","rice"] },
  { name: language === "en" ? "Roasted Lamb with Cumin Rice bowl" : "Gebratenes Lammfleisch mit Kreuzkümmel Reis Bowl", img: "./meals/24.png", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Pepper & Fried Pork Rice bowl" : "Gebratener Schweinebauch & Pfeffer Reis Bowl", img: "./meals/25.png", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Kung Pao Chicken Rice Bowl" : "Kung Pao Hähnchen Reis Bowl", img: "./meals/26.jpg", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Kung Pao Tofu Rice Bowl" : "Kung Pao Tofu und Gemüse Reis Bowl", img: "./meals/27.jpg", tag: ["vegan","rice"] },
  { name: language === "en" ? "Mapo Tofu Rice Bowl" : "Mapo Tofu Reis Bowl", img: "./meals/28.png", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Curry-Beef-Potato Reis Bowl" : "Curry-Rindfleisch & Kartoffeln Reis Bowl", img: "./meals/29.png", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Beef & Bean Curd Rice bowl" : "Rindfleisch & Yuba(Tofu Produkt) Reis Bowl", img: "./meals/30.png", tag: ["non-vegan","rice"] },
  { name: language === "en" ? "Braised Beef Noodle" : "Geschmorte Rindfleisch Nudeln", img: "./meals/31.jpg", tag: ["non-vegan","noodle"] },
  { name: language === "en" ? "Tonkotsu Ramen" : "Tonkotsu-Ramen", img: "./meals/32.jpg", tag: ["non-vegan","noodle"] },
  { name: language === "en" ? "Tonkotsu Udon" : "Tonkotsu-Udon", img: "./meals/33.jpg", tag: ["non-vegan","noodle"] },
  { name: language === "en" ? "Buns with Red Bean Filling" : "Süße Buns mit roter Bohnenfüllung", img: "./meals/90.jpg", tag: ["vegan","dessert"] },
  { name: language === "en" ? "Buns with Lotus Seed Paste Filling" : "Süße Buns mit Lotus Füllung", img: "./meals/91.jpg", tag: ["vegan","dessert"] },
  { name: language === "en" ? "Buns with Mocha Filling" : "Süße Buns mit Mocha Füllung", img: "./meals/92.png", tag: ["vegan","dessert"] },
  { name: language === "en" ? "Buns with Pudding Filling" : "Süße Buns mit Custard Füllung", img: "./meals/93.jpg", tag: ["vegan","dessert"] },
];

// Memoized filter button component
const FilterButton = React.memo(({ filter, isActive, onClick, emoji, label, color = "orange" }) => (
  <button 
    className={`group relative w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
      isActive
        ? `bg-gradient-to-r from-${color}-100 to-${color}-50 text-${color}-800 border border-${color}-200/60 shadow-md` 
        : `bg-white/80 text-gray-700 border border-gray-200/60 hover:bg-gradient-to-r hover:from-${color}-50 hover:to-white hover:border-${color}-200/60`
    }`}
    onClick={onClick}
    aria-pressed={isActive}
  >
    <span className="flex items-center justify-start gap-3">
      <span className="text-base">{emoji}</span>
      <span>{label}</span>
    </span>
  </button>
));

// Memoized product card component
const ProductCard = React.memo(({ product, language }) => {
  const tagDisplay = useMemo(() => {
    if (product.tag.includes("dimSum")) return "Dim Sum";
    if (product.tag.includes("noodle")) return language === "en" ? "Noodle-Bowl" : "Nudel-Bowl";
    if (product.tag.includes("dessert")) return language === "en" ? "Dessert" : "Nachtisch";
    return language === "en" ? "Rice-Bowl" : "Reis-Bowl";
  }, [product.tag, language]);

  return (
    <div 
      className="group relative product-card bg-gradient-to-b from-amber-50/90 to-orange-50/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 min-h-[420px] flex flex-col"
      style={{
        border: '3px solid',
        borderImage: 'linear-gradient(45deg, #f59e0b, #d97706, #f59e0b) 1',
        boxShadow: `
          0 4px 20px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.4),
          0 0 0 1px rgba(245, 158, 11, 0.2)
        `
      }}
    >
      <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-amber-400/70"></div>
      <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-amber-400/70"></div>
      <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-amber-400/70"></div>
      <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-amber-400/70"></div>
      
      <div className="relative z-10 p-2 flex-1 flex flex-col">
        <div className="relative overflow-hidden rounded-xl flex-shrink-0">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-64 object-cover"
            loading="lazy"
            style={{
              filter: 'sepia(3%) saturate(105%) brightness(101%)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/15 via-transparent to-transparent opacity-0"></div>
          
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-amber-100/95 to-orange-100/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-md border border-amber-300/60">
              {product.tag.includes("vegan") ? "🌱" : "🍖"}
              <span className="ml-2 text-amber-800">{tagDisplay}</span>
            </span>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col justify-center min-h-[120px]">
          <div className="flex justify-center mb-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
            <div className="w-1 h-1 bg-amber-400/60 rounded-full mx-2"></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
          </div>
          
          <h3 className="text-lg font-semibold text-amber-900 text-center leading-relaxed px-2">
            {product.name}
          </h3>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-30" 
           style={{
             background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(0, 0, 0, 0.05) 100%)'
           }}>
      </div>
    </div>
  );
});

const ProductList = () => {
  const [activeFilter, setActiveFilter] = React.useState([]);
  const { language } = useLanguage();

  // Memoize products to avoid recreation on each render
  const products = useMemo(() => getProducts(language), [language]);

  // Memoize filter function
  const filterProducts = useCallback((product) => {
    if (activeFilter.length === 0) return true;

    const isVegan = product.tag.includes('vegan');
    const isNonVegan = product.tag.includes('non-vegan');
    const isRiceDish = product.tag.includes('rice');
    const isNoodleDish = product.tag.includes('noodle');
    const isDimSum = product.tag.includes('dimSum');
    const isDessert = product.tag.includes('dessert');

    const filterVegan = activeFilter.includes('vegan');
    const filterNonVegan = activeFilter.includes('non-vegan');
    const filterRice = activeFilter.includes('rice');
    const filterNoodle = activeFilter.includes('noodle');
    const filterDimSum = activeFilter.includes('dimSum');
    const filterDessert = activeFilter.includes('dessert');

    const matchesDiet = (!filterVegan && !filterNonVegan) || (filterVegan && isVegan) || (filterNonVegan && isNonVegan);
    
    const matchesCategory = (!filterRice && !filterNoodle && !filterDimSum && !filterDessert) || 
                          (filterRice && isRiceDish) || 
                          (filterNoodle && isNoodleDish) || 
                          (filterDimSum && isDimSum) ||
                          (filterDessert && isDessert);

    return matchesDiet && matchesCategory;
  }, [activeFilter]);

  // Memoize filtered products
  const filteredProducts = useMemo(() => products.filter(filterProducts), [products, filterProducts]);

  // Memoize toggle filter function
  const toggleFilter = useCallback((filter) => {
    setActiveFilter((prev) => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
         {language === "en" ? "Food is our passion." : "Lebensmittel sind unsere Leidenschaft."}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {language === "en" ? "Explore a curated selection of our diverse product offerings." : "Entdecken Sie eine ausgewählte Auswahl unserer vielfältigen Produktangebote."}
        </p>
        
        <div className="flex flex-col lg:flex-row lg:items-start">
          <aside className="w-full lg:w-1/5 pr-6 mb-8 lg:mb-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 relative overflow-hidden">
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
                    <FilterButton
                      filter="vegan"
                      isActive={activeFilter.includes('vegan')}
                      onClick={() => toggleFilter('vegan')}
                      emoji="🌱"
                      label={language === "en" ? "Vegetarian" : "Vegetarisch"}
                      color="green"
                    />
                    <FilterButton
                      filter="non-vegan"
                      isActive={activeFilter.includes('non-vegan')}
                      onClick={() => toggleFilter('non-vegan')}
                      emoji="🍖"
                      label={language === "en" ? "Non-Vegetarian" : "Nicht-Vegetarisch"}
                      color="orange"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-4 pl-1">
                    {language === "en" ? "Dish Type" : "Gerichtstyp"}
                  </h3>
                  <div className="space-y-3">
                    <FilterButton
                      filter="rice"
                      isActive={activeFilter.includes('rice')}
                      onClick={() => toggleFilter('rice')}
                      emoji="🍚"
                      label={language === "en" ? "Rice-Bowl" : "Reis-Bowl"}
                      color="orange"
                    />
                    <FilterButton
                      filter="noodle"
                      isActive={activeFilter.includes('noodle')}
                      onClick={() => toggleFilter('noodle')}
                      emoji="🍜"
                      label={language === "en" ? "Noodle-Bowl" : "Nudel-Bowl"}
                      color="orange"
                    />
                    <FilterButton
                      filter="dimSum"
                      isActive={activeFilter.includes('dimSum')}
                      onClick={() => toggleFilter('dimSum')}
                      emoji="🥟"
                      label={language === "en" ? "Dim Sum" : "Dim Sum"}
                      color="orange"
                    />
                    <FilterButton
                      filter="dessert"
                      isActive={activeFilter.includes('dessert')}
                      onClick={() => toggleFilter('dessert')}
                      emoji="🍰"
                      label={language === "en" ? "Dessert" : "Nachtisch"}
                      color="pink"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4 w-full lg:w-3/4">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={`${product.img}-${index}`} 
                product={product} 
                language={language}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-600 mt-16">
          {language === "en" ? "Stay tuned for more exciting dishes ..." : "Bleiben Sie dran für weitere leckere Gerichte..."}
        </h2>
      </div>
    </div>
  );
};

export default ProductList;
