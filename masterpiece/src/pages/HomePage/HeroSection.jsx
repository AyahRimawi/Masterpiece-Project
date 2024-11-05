// import { Carousel } from "@material-tailwind/react";
// import { TERipple } from "tw-elements-react";

// export function HeroSection() {
//   return (
//     <>
//       <div className="flex flex-wrap justify-between md:ml-16 mt-10 border-red-100">
//         {/* col 1 .. start */}
//         <div className="flex-1 md:w-1/2 min-w-[300px] md:mr-20 hidden md:block">
//           <Carousel
//             className="rounded-xl"
//             navigation={({ setActiveIndex, activeIndex, length }) => (
//               <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//                 {new Array(length).fill("").map((_, i) => (
//                   <span
//                     key={i}
//                     className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                       activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//                     }`}
//                     onClick={() => setActiveIndex(i)}
//                   />
//                 ))}
//               </div>
//             )}
//           >
//             <img
//               src="https://i.imgur.com/JhAvKhu_d.webp?maxwidth=760&fidelity=grand"
//               alt="image 1"
//               className="h-[615px] w-full object-fill"
//             />
//             {/* <img
//               src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//               alt="image 2"
//               className="h-auto w-full object-cover"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//               alt="image 3"
//               className="h-auto w-full object-cover"
//             /> */}
//           </Carousel>
//         </div>
//         {/* col 1 .. end */}
//         {/* --------------------------------------------------------------------- */}
//         {/* col 2 .. start */}
//         <div className="flex-1 max-w-lg min-w-[300px] flex flex-col">
//   <div className="flex flex-col ">
//     {/* card 1 .. start */}
//     <div>
//       <div className="relative overflow-hidden mx-auto mb-8 w-72 sm:w-80 md:w-[450px] md:mr-16 h-56 sm:h-48 md:h-72 rounded-3xl cursor-pointer md:text-2xl font-bold bg-[#00C3C8] md:mb-10">
//         <div className="z-10 absolute w-full h-full peer"></div>
//         <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#56E2E6] transition-all duration-500"></div>
//         <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#56E2E6] transition-all duration-500">
//           <TERipple>
//             <button
//               type="button"
//               className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-b shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//             >
//               Discover Now
//             </button>
//           </TERipple>
//         </div>
//         <div className="w-full h-full items-center justify-center text-white text-4xl text-center flex uppercase">
//           NEW ARRIVALS
//         </div>
//       </div>
//     </div>
//     {/* card 1 .. end */}
//     {/* ==================================== */}
//     {/* card 2 .. start */}
//     <div>
//       <div className="relative overflow-hidden mx-auto w-72 sm:w-80 md:w-[450px] md:mr-16 h-56 sm:h-48 md:h-72 rounded-3xl cursor-pointer md:text-2xl font-bold bg-[#FF8B45]">
//         <div className="z-10 absolute w-full h-full peer"></div>
//         <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#FDAE7E] transition-all duration-500"></div>
//         <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#FDAE7E] transition-all duration-500">
//           <TERipple>
//             <button
//               type="button"
//               className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-b shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_#3b71ca] dark:hover:shadow-[0_8px_9px_-4px_#3b71ca] dark:focus:shadow-[0_8px_9px_-4px_#3b71ca] dark:active:shadow-[0_8px_9px_-4px_#3b71ca]"
//             >
//               Hurry Up
//             </button>
//           </TERipple>
//         </div>
//         <div className="w-full h-full items-center text-white text-3xl justify-center flex uppercase">
//           BESTSELLERS
//         </div>
//       </div>
//     </div>
//     {/* card 2 .. end */}
//   </div>
// </div>

//         {/* col 2 .. end */}
//       </div>
//     </>
//   );
// }

// import React from "react";
// import { ArrowRight } from "lucide-react";

// export function HeroSection() {
//   return (
//     <div className="relative h-screen w-full bg-white overflow-hidden">
//       {/* Main Container */}
//       <div className="h-full w-full flex flex-row-reverse relative">
//         {/* Image Section (Right Side) */}
//         <div className="w-2/3 h-full relative">
//           {/* Main Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')",
//             }}
//           />
//           {/* Gradient Overlay for smooth transition */}
//           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white" />
//         </div>

//         {/* Content Section (Left Side) */}
//         <div className="w-1/3 h-full flex items-center relative">
//           {/* Vertical Text */}
//           <div className="absolute -right-12 top-1/2 -translate-y-1/2 transform -rotate-90 text-gray-200 text-9xl font-bold opacity-50 whitespace-nowrap">
//             FASHION
//           </div>

//           {/* Main Content */}
//           <div className="px-12 z-10">
//             <div className="space-y-6 max-w-lg">
//               <span className="text-red-500 font-medium tracking-wide">
//                 NEW COLLECTION 2024
//               </span>

//               <h1 className="text-5xl font-bold text-gray-900 leading-tight">
//                 Discover Your Perfect Style
//               </h1>

//               <p className="text-gray-600 text-lg">
//                 Explore our latest collection of premium clothing designed for
//                 those who appreciate quality and style.
//               </p>

//               <div className="flex space-x-4 pt-4">
//                 <button className="bg-black text-white px-8 py-4 flex items-center space-x-2 hover:bg-gray-900 transition-colors">
//                   <span>Shop Now</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>

//                 <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all">
//                   View Collection
//                 </button>
//               </div>

//               {/* Social Links */}
//               <div className="pt-12">
//                 <p className="text-gray-500 mb-4">Follow Us</p>
//                 <div className="flex space-x-6">
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-black transition-colors"
//                   >
//                     Instagram
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-black transition-colors"
//                   >
//                     Facebook
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-black transition-colors"
//                   >
//                     Twitter
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
//     collection: "SUMMER 2024",
//     title: "Elegant Essentials",
//     subtitle: "Discover timeless pieces for your wardrobe",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
//     collection: "PREMIUM LINE",
//     title: "Luxury Collection",
//     subtitle: "Exclusive designs for distinguished taste",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
//     collection: "NEW ARRIVALS",
//     title: "Urban Style",
//     subtitle: "Contemporary fashion for modern lifestyle",
//   },
// ];

// export function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const nextSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }
//   };

//   const prevSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (isTransitioning) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [isTransitioning]);

//   return (
//     <div className="relative h-screen w-full bg-white overflow-hidden">
//       {/* Main Container */}
//       <div className="h-full w-full flex flex-row-reverse relative">
//         {/* Image Section (Right Side) */}
//         <div className="w-3/4 h-full relative">
//           {/* Slider Images */}
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                 currentSlide === index ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
//                 style={{
//                   backgroundImage: `url('${slide.image}')`,
//                   transform: isTransitioning ? "scale(1.05)" : "scale(1)",
//                 }}
//               />
//             </div>
//           ))}

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-white" />

//           {/* Navigation Arrows */}
//           <div className="absolute bottom-8 right-8 flex space-x-4">
//             <button
//               onClick={prevSlide}
//               className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
//               disabled={isTransitioning}
//             >
//               <ChevronLeft className="w-6 h-6 text-white" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
//               disabled={isTransitioning}
//             >
//               <ChevronRight className="w-6 h-6 text-white" />
//             </button>
//           </div>

//           {/* Slide Indicators */}
//           <div className="absolute bottom-8 left-8 flex space-x-2">
//             {slides.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-1 transition-all duration-300 ${
//                   currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Content Section (Left Side) */}
//         <div className="absolute inset-0 z-10">
//           <div className="h-full flex items-center ml-16 max-w-2xl">
//             {/* Vertical Text */}
//             <div className="absolute -right-12 top-1/2 -translate-y-1/2 transform -rotate-90 text-gray-200/20 text-9xl font-bold opacity-50 whitespace-nowrap pointer-events-none">
//               FASHION
//             </div>

//             {/* Main Content */}
//             <div className="space-y-6">
//               <span className="text-red-500 font-medium tracking-wide">
//                 {slides[currentSlide].collection}
//               </span>

//               <h1 className="text-6xl font-bold text-gray-900 leading-tight transition-all duration-500">
//                 {slides[currentSlide].title}
//               </h1>

//               <p className="text-gray-600 text-xl max-w-lg">
//                 {slides[currentSlide].subtitle}
//               </p>

//               <div className="flex space-x-4 pt-8">
//                 <button className="bg-black text-white px-8 py-4 flex items-center space-x-2 hover:bg-gray-900 transition-colors">
//                   <span>Shop Now</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>

//                 <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all">
//                   View Collection
//                 </button>
//               </div>

//               {/* Social Links */}
//               <div className="pt-12">
//                 <p className="text-gray-500 mb-4">Follow Us</p>
//                 <div className="flex space-x-6">
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-black transition-colors"
//                   >
//                     Instagram
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-black transition-colors"
//                   >
//                     Facebook
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-black transition-colors"
//                   >
//                     Twitter
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// ----------------------------------


import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
    collection: "SUMMER 2024",
    title: "Elegant Essentials",
    subtitle: "Discover timeless pieces for your wardrobe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
    collection: "PREMIUM LINE",
    title: "Urban Style",
    subtitle: "Contemporary fashion for modern lifestyle",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    collection: "NEW ARRIVALS",
    title: "Luxury Collection",
    subtitle: "Exclusive designs for distinguished taste",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="min-h-screen w-full bg-white py-8 px-6 md:px-12 lg:px-12 flex items-center">
      {/* Main Container with shadow and rounded corners */}
      <div className="w-full h-[85vh] relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-full w-full flex flex-row-reverse relative">
          {/* Image Section (Right Side) */}
          <div className="w-3/4 h-full relative rounded-l-2xl overflow-hidden">
            {/* Slider Images */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    transform: isTransitioning ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-white" />

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-8 flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Section (Left Side) */}
          <div className="absolute inset-0 z-10">
            <div className="h-full flex items-center ml-16 max-w-2xl">
              {/* Vertical Text */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 transform -rotate-90 text-gray-200/20 text-9xl font-bold opacity-50 whitespace-nowrap pointer-events-none">
                FASHION
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <span className="text-red-500 font-medium tracking-wide">
                  {slides[currentSlide].collection}
                </span>

                <h1 className="text-6xl font-bold text-gray-900 leading-tight transition-all duration-500">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-gray-600 text-xl max-w-lg">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex space-x-4 pt-8">
                  <button className="bg-black text-white px-8 py-4 flex items-center space-x-2 hover:bg-gray-900 transition-colors rounded-lg">
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all rounded-lg">
                    View Collection
                  </button>
                </div>

                {/* Social Links */}
                <div className="pt-12">
                  <p className="text-gray-500 mb-4">Follow Us</p>
                  <div className="flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
