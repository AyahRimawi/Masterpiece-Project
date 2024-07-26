import { Carousel } from "@material-tailwind/react";
import { TERipple } from "tw-elements-react";

export function HeroSection() {
  return (
    <>
      <div className="flex flex-wrap justify-between md:ml-16 mt-10 border-red-100">
        {/* col 1 .. start */}
        <div className="flex-1 md:w-1/2 min-w-[300px] md:mr-20 hidden md:block">
          <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="https://i.imgur.com/JhAvKhu_d.webp?maxwidth=760&fidelity=grand"
              alt="image 1"
              className="h-[615px] w-full object-fill"
            />
            {/* <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-auto w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-auto w-full object-cover"
            /> */}
          </Carousel>
        </div>
        {/* col 1 .. end */}
        {/* --------------------------------------------------------------------- */}
        {/* col 2 .. start */}
        <div className="flex-1 max-w-lg min-w-[300px] flex flex-col">
  <div className="flex flex-col ">
    {/* card 1 .. start */}
    <div>
      <div className="relative overflow-hidden mx-auto mb-8 w-72 sm:w-80 md:w-[450px] md:mr-16 h-56 sm:h-48 md:h-72 rounded-3xl cursor-pointer md:text-2xl font-bold bg-[#00C3C8] md:mb-10">
        <div className="z-10 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#56E2E6] transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#56E2E6] transition-all duration-500">
          <TERipple>
            <button
              type="button"
              className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-b shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Discover Now
            </button>
          </TERipple>
        </div>
        <div className="w-full h-full items-center justify-center text-white text-4xl text-center flex uppercase">
          NEW ARRIVALS
        </div>
      </div>
    </div>
    {/* card 1 .. end */}
    {/* ==================================== */}
    {/* card 2 .. start */}
    <div>
      <div className="relative overflow-hidden mx-auto w-72 sm:w-80 md:w-[450px] md:mr-16 h-56 sm:h-48 md:h-72 rounded-3xl cursor-pointer md:text-2xl font-bold bg-[#FF8B45]">
        <div className="z-10 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#FDAE7E] transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#FDAE7E] transition-all duration-500">
          <TERipple>
            <button
              type="button"
              className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-b shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_#3b71ca] dark:hover:shadow-[0_8px_9px_-4px_#3b71ca] dark:focus:shadow-[0_8px_9px_-4px_#3b71ca] dark:active:shadow-[0_8px_9px_-4px_#3b71ca]"
            >
              Hurry Up
            </button>
          </TERipple>
        </div>
        <div className="w-full h-full items-center text-white text-3xl justify-center flex uppercase">
          BESTSELLERS
        </div>
      </div>
    </div>
    {/* card 2 .. end */}
  </div>
</div>

        {/* col 2 .. end */}
      </div>
    </>
  );
}
