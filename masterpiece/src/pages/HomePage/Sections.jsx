// Sections.js
import React from "react";
import part1 from "../../assets/part1.png";
import part2 from "../../assets/part2.png";
import part3 from "../../assets/part3.png";
import part4 from "../../assets/part4.png";

const SectionCard = ({
  image,
  buttons,
  setBasicActive,
  navigateWithFilter,
}) => {
  const handleButtonClick = (button) => {
      window.scrollTo(0, 0);
    switch (button.toLowerCase()) {
      case "women":
        navigateWithFilter("tab2", "all");
        break;
      case "men":
        navigateWithFilter("tab3", "all");
        break;
      case "kids":
        navigateWithFilter("tab4", "all");
        break;
      case "baby":
      case "maternity":
      case "newborn":
        navigateWithFilter("tab4", "all");
        break;
      case "pajamas":
        navigateWithFilter("tab3", "Pajamas");
        break;
      case "underwear":
        navigateWithFilter("tab2", "Pajamas");
        break;
    }
  };

  return (
    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-xl h-96 w-full transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group">
      <img
        src={image}
        alt="Section"
        className="object-fit w-full h-full transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 md:space-x-36 bg-black/30 backdrop-blur-sm transform transition-transform duration-300">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button)}
            className="flex-1 max-w-[200px] duration-300 bg-white/60 backdrop-blur-md border border-white/80 text-black font-bold py-2 px-4 rounded-lg
            transform transition-all hover:scale-105 hover:bg-white hover:shadow-lg
            active:scale-95 relative overflow-hidden group/btn"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-black">
              {button}
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300
              before:absolute before:content-[''] before:top-0 before:-left-[100%] before:w-full before:h-full
              before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent
              before:skew-x-[45deg] before:animate-shine"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export function Sections({ setBasicActive, navigateWithFilter }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
        <SectionCard
          image={part1}
          buttons={["Men", "Women"]}
          setBasicActive={setBasicActive}
          navigateWithFilter={navigateWithFilter}
        />
        <SectionCard
          image={part2}
          buttons={["Kids", "Baby"]}
          setBasicActive={setBasicActive}
          navigateWithFilter={navigateWithFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <SectionCard
          image={part3}
          buttons={["Maternity", "Newborn"]}
          setBasicActive={setBasicActive}
          navigateWithFilter={navigateWithFilter}
        />
        <SectionCard
          image={part4}
          buttons={["Pajamas", "Underwear"]}
          setBasicActive={setBasicActive}
          navigateWithFilter={navigateWithFilter}
        />
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(45deg); }
          100% { transform: translateX(200%) skewX(45deg); }
        }
        .animate-shine:before {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
}
