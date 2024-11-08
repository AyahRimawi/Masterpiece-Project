import React, { useState } from "react";

const categories = [
  {
    id: 1,
    title: "WOMEN",
    image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=500",
    hoverEffect: "hover:shadow-rose-400/30",
    subtitle: "Pants • Dress • Shirt • Skirt • Pajamas",
  },
  {
    id: 2,
    title: "MEN",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500",
    hoverEffect: "hover:shadow-blue-400/30",
    subtitle: "Pants • Shirt • Suit • Pajamas",
  },
  {
    id: 3,
    title: "KIDS",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
    hoverEffect: "hover:shadow-yellow-400/30",
    subtitle: "Boy • Girl • Baby",
  },
  {
    id: 4,
    title: "PANTS",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    hoverEffect: "hover:shadow-indigo-400/30",
    subtitle: "Men & Women Collections",
  },
  {
    id: 5,
    title: "SHIRTS",
    image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500",
    hoverEffect: "hover:shadow-emerald-400/30",
    subtitle: "Casual & Formal Styles",
  },
  {
    id: 6,
    title: "DRESSES",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    hoverEffect: "hover:shadow-purple-400/30",
    subtitle: "Evening & Hijab Dresses",
  },
];

const CategoryCircle = ({ category, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-5 group cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(category.id);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
    >
      <div
        className={`
          relative w-24 sm:w-40 md:w-32 aspect-square 
          rounded-full shadow-xl transition-all duration-700
          ${category.hoverEffect}
          overflow-hidden
          transform perspective-1000
          ${isHovered ? "scale-110 -translate-y-2" : "scale-100"}
          ${
            category.isSpecial
              ? `bg-gradient-to-b ${category.bgGradient}`
              : "bg-white"
          }
          before:absolute before:inset-0 before:z-10 before:bg-black/0 before:transition-colors before:duration-700
          group-hover:before:bg-black/10
        `}
      >
        {category.isSpecial ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center transform transition-transform duration-700 group-hover:scale-110">
              <p className="text-lg md:text-2xl text-white font-bold mb-1">
                {category.title}
              </p>
              <p className="text-xs md:text-sm text-white/90">
                {category.subtitle}
              </p>
            </div>
            <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-700 ease-out" />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/20 group-hover:opacity-0 transition-opacity duration-700" />
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-125 filter group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                <p className="text-white text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                  {category.subtitle}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="overflow-hidden relative">
        <p
          className={`
            font-medium text-lg sm:text-xl text-center
            relative z-10
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-full after:h-0.5 after:bg-[#193DB0]
            after:origin-left after:transition-transform after:duration-500
            after:scale-x-0 group-hover:after:scale-x-100
            ${isHovered ? "text-[#193DB0]" : "text-gray-600"}
            transition-colors duration-300
          `}
        >
          {category.title}
        </p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0" />
      </div>
    </div>
  );
};

const HotSale = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="w-full bg-white py-8 px-6 md:px-12 lg:px-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Shop By Category
          </h2> */}
          <h2 className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gray-300"></span>
            <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">
              Shop By Category
            </span>
            <span className="h-px w-8 bg-gray-300"></span>
          </h2>
          {/* <p className="text-gray-600">Discover our collections for everyone</p> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {categories.map((category) => (
            <CategoryCircle
              key={category.id}
              category={category}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotSale;
