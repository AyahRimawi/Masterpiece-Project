// ShopNow.js
import React from "react";

const categories = [
  {
    id: 1,
    title: "WOMEN",
    image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=500",
    gradientColors: "from-[#D1349B]/40 via-[#F2C4DE]/40 to-[#E66BBF]/40",
    btnGradient: "from-[#D1349B] to-[#E66BBF]",
    borderGlow: "shadow-[#D1349B]/20",
    path: "/category/women",
    category: "Women",
    subcategories: ["Pants", "Dress", "Shirt", "Skirt", "Pajamas"],
  },
  {
    id: 2,
    title: "MEN",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500",
    gradientColors: "from-[#3B82F6]/40 via-[#BFDBFE]/40 to-[#60A5FA]/40",
    btnGradient: "from-[#3B82F6] to-[#60A5FA]",
    borderGlow: "shadow-[#3B82F6]/20",
    path: "/category/men",
    category: "Men",
    subcategories: ["Pants", "Shirt", "Suit", "Pajamas"],
  },
  {
    id: 3,
    title: "KIDS",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
    gradientColors: "from-[#14B8A6]/40 via-[#99F6E4]/40 to-[#2DD4BF]/40",
    btnGradient: "from-[#14B8A6] to-[#2DD4BF]",
    borderGlow: "shadow-[#14B8A6]/20",
    path: "/category/kids",
    category: "Kids",
    subcategories: ["Boy", "Girl", "Baby"],
  },
  {
    id: 4,
    title: "BABY",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500",
    gradientColors: "from-[#F59E0B]/40 via-[#FDE68A]/40 to-[#FBBF24]/40",
    btnGradient: "from-[#F59E0B] to-[#FBBF24]",
    borderGlow: "shadow-[#F59E0B]/20",
    path: "/category/baby",
    category: "Baby",
    subcategories: ["Clothing", "Accessories", "Essentials"],
  },
];

const CategoryCard = ({ category, setBasicActive, navigateWithFilter }) => {
  const handleShopNowClick = () => {
      window.scrollTo(0, 0);
    switch (category.category) {
      case "Women":
        navigateWithFilter("tab2", "all");
        break;
      case "Men":
        navigateWithFilter("tab3", "all");
        break;
      case "Kids":
        navigateWithFilter("tab4", "all");
        break;
      case "Baby":
        navigateWithFilter("tab4", "all");
        break;
    }
  };

  return (
    <div className="relative w-full max-w-[320px] h-[280px] rounded-2xl overflow-hidden group">
      {/* Glassmorphism Base */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/50" />

      {/* Animated Background */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${category.gradientColors}
          [animation:gradientMove_3s_ease-in-out_infinite]
          [@keyframes_gradientMove]:from-{transform:translateX(0%)_translateY(0%)}
          [@keyframes_gradientMove]:to-{transform:translateX(100%)_translateY(100%)}
        `}
      />

      {/* Rotating Shine Effect */}
      <div
        className="
          absolute inset-0 
          before:absolute before:inset-0 
          before:bg-gradient-to-tr before:from-transparent before:via-black/5 before:to-transparent
          [transform-origin:center]
          [animation:spin_8s_linear_infinite]
        "
      />

      {/* Content Wrapper */}
      <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-black/10 shadow-xl">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-800 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
          {category.title}
        </h3>

        <button
          onClick={handleShopNowClick}
          className={`
            relative px-6 py-2 rounded-lg
            bg-gradient-to-r ${category.btnGradient}
            text-white font-medium
            transition-all duration-300
            hover:-translate-y-1 hover:scale-110 active:scale-95
            hover:shadow-lg hover:shadow-black/20
            overflow-hidden
            [animation:glow_1.5s_ease-in-out_infinite]
          `}
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent [animation:buttonShine_2s_linear_infinite]" />
        </button>
      </div>
    </div>
  );
};

export function ShopNow({ setBasicActive, navigateWithFilter }) {
  return (
    <div className="w-full bg-white">
      <div className="hidden sm:block w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                setBasicActive={setBasicActive}
                navigateWithFilter={navigateWithFilter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
