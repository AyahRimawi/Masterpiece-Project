import women1 from "../../assets/pic 1.png";

export function Sections() {
  return (
    <>
      <div
        className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-xl max-w-sm md:h-72"
        style={{ backgroundImage: `url(${women1})` }}
      >
        <div className="absolute inset-0 bg-white/0 rounded-lg"></div>
        <div className="relative p-4 z-10 flex flex-col justify-between h-full">
          <div></div> {/* هذا الفضاء سيبقي المحتوى العلوي متروك */}
          <div className="flex space-x-28 mt-auto">
            <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-2 rounded hover:bg-white hover:text-black">
              Men
            </button>
            <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-2 rounded hover:bg-white hover:text-black">
              Women
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
