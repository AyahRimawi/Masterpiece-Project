import dressSection from "../../assets/dressSection.png";

export function Dress() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#faf9fce5] via-[#99939b] to-[#312f3008]">
        <div className="flex flex-col items-center justify-between ml-8 mr-12 mt-16 md:flex-row md:w-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal w-auto mx-auto ">
            <h3 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Rent a Dress
            </h3>
            <button className="flex-1 w-32 mt-14 mx-auto duration-300 bg-[rgba(0,0,0)] border border-white text-white font-bold py-1 px-2 rounded hover:bg-white hover:text-black">
              Shop Now
            </button>
          </div>
          <div>
            <img
              className="object-fit w-full p-8 h-[400px] md:h-[400px] md:w-[700px]"
              src={dressSection}
              alt="Noteworthy technology acquisitions 2021"
            />
          </div>
        </div>
      </div>
    </>
  );
}
