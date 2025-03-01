import React from "react";

const products = [
  { name: "Eggplant in Yuxiang Style", img: "./95.png", tag: ["vegan", "main"] },
  { name: "Tender Beef with Peppers", img: "./81.png", tag: ["non-vegan","main"] },
  {
    name: "Tender Beef with Vegetables and Black Pepper",
    img: "./90.png",
    tag: ["non-vegan","main"],
  },
  { name: "Stuffed Buns with Pork", img: "./84.png", tag: ["non-vegan","dimSum"] },
  { name: "Beef Rib Stew with Potatoes", img: "./91.png", tag: ["non-vegan","main"] },
  { name: "Spaghetti Bolognese", img: "./86.png", tag: ["non-vegan","main"] },
  { name: "Chili Con Carne", img: "./87.png", tag: ["non-vegan","main"] },
  { name: "Pork Belly Fried with Peppers", img: "./88.png", tag: ["non-vegan","main"] },
  { name: "Tender Lamb Fried with Cumin", img: "./89.png", tag: ["non-vegan","main"] },
];

const ProductList = () => {
  const [activeFilter, setActiveFilter] = React.useState([]);

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
        Food is our passion.
        </h1>
        {/* Updated Headline */}
        <p className="text-xl text-center text-gray-600 mb-12">
          Explore a curated selection of our diverse product offerings.
        </p>
        
        <div className="flex flex-col md:flex-row">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-1/5 pr-6 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-orange-500 mb-4">
              Filter by:
            </h2>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                Ingredients
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
                  🌱 <span className="font-medium">Vegan</span>
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
                  🍖 <span className="font-medium">Non-Vegan</span>
                </span>
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                Dish Type
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
                  🍽️ <span className="font-medium">Main Dish</span>
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
                  🥟 <span className="font-medium">Dim Sum</span>
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
                      {product.tag.includes("dimSum") ? "Dim Sum" : "Main Dish"}
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
          Stay tuned for more exciting options available...
        </h2>
      </div>
    </div>
  );
};

export default ProductList;
