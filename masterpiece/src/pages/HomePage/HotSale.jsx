import dress from "../../assets/dress.png";
import hat from "../../assets/hat.png";
import short from "../../assets/short.png";
import trouser from "../../assets/trouser.png";
import shirts from "../../assets/shirts.png";

export function HotSale() {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 md:mt-10">
        {/* circule 1 */}
        <div className="flex flex-col items-center gap-5 group mx-2 cursor-pointer">
          <div className="w-44 sm:w-52 md:w-32 aspect-square flex items-center justify-center rounded-full shadow-lg overflow-hidden bg-gradient-to-b from-[#6713D2] via-[#9419B4] to-[#CC208E] ">
            <p className="md:text-3xl text-[#F7FA4A] font-bold mt-2 text-center">
              HOT SALE
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-cursive text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#193DB0] dark:after:bg-[#193DB0] text-gray-600 dark:text-[#193DB0] text-center">
              HOT SALE
            </p>
          </div>
        </div>
        {/* circule 2 */}
        <div className="flex flex-col items-center gap-5 group mx-2 cursor-pointer">
          <div className="bg-gradient-to-r w-44 sm:w-52 md:w-32 aspect-square flex items-center justify-center rounded-full shadow-lg overflow-hidden">
            <img
              src={shirts}
              alt="3D Effect"
              //   تكبير الصورة
              className="transition-transform duration-1000 ease-in-out group-hover:scale-125 w-2/3 h-3/4 object-center object-cover"
              //   تدوير الصوؤة
              //   className="transition-transform duration-1000 group-hover:scale-105 group-hover:-rotate-[360deg] group-hover:-translate-y-2 group-hover:-skew-y-6 group-hover:skew-x-6 w-full h-full object-center object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="font-cursive text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#193DB0] dark:after:bg-[#193DB0] text-gray-600 dark:text-[#193DB0] text-center">
              T-SHIRTS
            </p>
          </div>
        </div>
        {/* circule 3 */}
        <div className="flex flex-col items-center gap-5 group mx-2 cursor-pointer">
          <div className="bg-gradient-to-r w-44 sm:w-52 md:w-32 aspect-square flex items-center justify-center rounded-full shadow-lg overflow-hidden">
            <img
              src={hat}
              alt="3D Effect"
              className="transition-transform duration-1000 ease-in-out group-hover:scale-125 w-2/3 h-3/4 object-center object-cover"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="font-cursive text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#193DB0] dark:after:bg-[#193DB0] text-gray-600 dark:text-[#193DB0] text-center">
              HAT
            </p>
          </div>
        </div>
        {/* circule 4 */}
        <div className="flex flex-col items-center gap-5 group mx-2 cursor-pointer">
          <div className="bg-gradient-to-r w-44 sm:w-52 md:w-32 aspect-square flex items-center justify-center rounded-full shadow-lg overflow-hidden">
            <img
              src={short}
              alt="3D Effect"
              className="transition-transform duration-1000 ease-in-out group-hover:scale-125 w-2/3 h-3/4 object-center object-cover"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="font-cursive text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#193DB0] dark:after:bg-[#193DB0] text-gray-600 dark:text-[#193DB0] text-center">
              SHORT
            </p>
          </div>
        </div>
        {/* circule 5 */}
        <div className="flex flex-col items-center gap-5 group mx-2 cursor-pointer">
          <div className="bg-gradient-to-r w-44 sm:w-52 md:w-32 aspect-square flex items-center justify-center rounded-full shadow-lg overflow-hidden">
            <img
              src={trouser}
              alt="3D Effect"
              className="transition-transform duration-1000 ease-in-out group-hover:scale-125 w-2/3 h-3/4 object-center object-cover"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="font-cursive text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#193DB0] dark:after:bg-[#193DB0] text-gray-600 dark:text-[#193DB0] text-center">
              TROUSER
            </p>
          </div>
        </div>
        {/* circule 6 */}
        <div className="flex flex-col items-center gap-5 group mx-2 cursor-pointer">
          <div className="bg-gradient-to-r w-44 sm:w-52 md:w-32 aspect-square flex items-center justify-center rounded-full shadow-lg overflow-hidden">
            <img
              src={dress}
              alt="3D Effect"
              className="transition-transform duration-1000 ease-in-out group-hover:scale-125 w-2/3 h-3/4 object-center object-cover"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="font-cursive text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#193DB0] dark:after:bg-[#193DB0] text-gray-600 dark:text-[#193DB0] text-center">
              DRESSES
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
