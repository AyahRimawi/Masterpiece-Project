import part1 from "../../assets/part1.png";
import part2 from "../../assets/part2.png";
import part3 from "../../assets/part3.png";
import part4 from "../../assets/part4.png";

export function Sections() {
  return (
    <>
      {/* //   Part 1 start */}
      <div className="mx-8 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* section 1 */}
          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-xl h-96 md:w-[97%] flex items-center justify-center">
            <img
              src={part1}
              alt="Women 1"
              className="object-fit w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-48 bg-black/30">
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Men
              </button>
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Women
              </button>
            </div>
          </div>
          {/* section 2 */}
          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-xl h-96 md:w-[97%] md:mr-6 flex items-center justify-center">
            <img
              src={part2}
              alt="Women 2"
              className="object-fit w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-48 bg-black/30">
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Kids
              </button>
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Baby
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //   Part 1 end */}
      {/* // ------------------------------------------------------- */}

      <div className="mx-8 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* section 1 */}
          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-xl h-96 md:w-[97%] flex items-center justify-center">
            <img
              src={part3}
              alt="Women 1"
              className="object-fit w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center md:space-x-48 space-x-28 bg-black/30">
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Maternity
              </button>
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Newborn
              </button>
            </div>
          </div>
          {/* section 2 */}
          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-xl h-96 md:w-[97%] md:mr-6 flex items-center justify-center">
            <img
              src={part4}
              alt="Women 2"
              className="object-fit w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center md:space-x-48 space-x-28 bg-black/30">
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Pajamas
              </button>
              <button className="flex-1 duration-300 bg-[rgba(255,255,255,0.6)] border border-white text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
                Underwear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
