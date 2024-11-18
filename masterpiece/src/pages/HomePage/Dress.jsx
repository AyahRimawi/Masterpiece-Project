import React from "react";

const dressCards = [
  {
    title: "Evening",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
  },
  {
    title: "Couture",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
  },
  {
    title: "Bridal",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500",
  },
  {
    title: "Designer",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
    mobileHide: true,
  },
  {
    title: "Summer",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    mobileHide: true,
  },
  {
    title: "Classic",
    image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=500",
    mobileHide: true,
  },
];

export function Dress({ setBasicActive, navigateWithFilter }) {
  // Handle click for both button and cards
  const handleDressClick = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth", // للحصول على انتقال سلس
     });
    if (navigateWithFilter) {
      navigateWithFilter("tab6", "all");
    } else {
      setBasicActive("tab6");
    }
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Elegance in Every Detail
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover our exclusive collection of dresses, where elegance meets
              contemporary style.
            </p>
            <button
              onClick={handleDressClick}
              className="relative overflow-hidden group bg-black text-white px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Explore Collection
              </span>
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>

          {/* Right Side - Card Container */}
          <div className="w-full lg:w-2/3">
            <div className="relative flex justify-center items-center">
              <div className="container flex justify-center">
                {dressCards.map((card, index) => (
                  <div
                    key={index}
                    className={`group ${
                      card.mobileHide ? "hidden lg:block" : ""
                    }`}
                    style={{
                      marginLeft: index === 0 ? "0" : "-80px",
                      zIndex: index,
                    }}
                    onClick={handleDressClick}
                  >
                    <div
                      className={`
                        relative w-[160px] md:w-[180px] h-[220px] md:h-[240px]
                        rounded-2xl overflow-hidden cursor-pointer
                        transform-gpu transition-all duration-500 ease-out
                        hover:scale-110 hover:rotate-0 hover:translate-x-4 hover:-translate-y-4
                        ${
                          index === 0
                            ? "-rotate-[15deg]"
                            : index === 1
                            ? "rotate-[0deg]"
                            : index === 2
                            ? "rotate-[15deg]"
                            : index === 3
                            ? "rotate-[0deg]"
                            : index === 4
                            ? "rotate-[7deg]"
                            : "rotate-[14deg]"
                        }
                        shadow-lg hover:shadow-xl
                        hover:z-50
                      `}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute bottom-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-lg font-semibold text-center">
                          {card.title}
                        </h3>
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shine {
          animation: shine 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
