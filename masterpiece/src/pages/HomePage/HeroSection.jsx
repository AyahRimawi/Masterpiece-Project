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


// // ---------------------------------------

// import { useState, useEffect, useRef } from "react";
// import { Play, Pause, RotateCcw } from "lucide-react";

// const HeroSection = () => {
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [isMouseDown, setIsMouseDown] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [isAutoRotating, setIsAutoRotating] = useState(true);
//   const [rotationSpeed, setRotationSpeed] = useState(100);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadedImages, setLoadedImages] = useState(0);

//   const containerRef = useRef(null);
//   const autoRotateRef = useRef(null);
//   const frameCount = 24;
//   const frames = Array.from(
//     { length: frameCount },
//     (_, i) => `/car-frames/frame-${i}.png`
//   );

//   useEffect(() => {
//     let loadedCount = 0;
//     frames.forEach((src) => {
//       const img = new Image();
//       img.onload = () => {
//         loadedCount++;
//         setLoadedImages(loadedCount);
//         if (loadedCount === frameCount) {
//           setIsLoading(false);
//         }
//       };
//       img.src = src;
//     });

//     return () => {
//       setIsLoading(true);
//       setLoadedImages(0);
//     };
//   }, []);

//   useEffect(() => {
//     if (isAutoRotating && !isLoading) {
//       autoRotateRef.current = setInterval(() => {
//         setCurrentFrame((prev) => (prev + 1) % frameCount);
//       }, rotationSpeed);
//     }

//     return () => {
//       if (autoRotateRef.current) {
//         clearInterval(autoRotateRef.current);
//       }
//     };
//   }, [isAutoRotating, rotationSpeed, isLoading]);

//   const handleManualInteractionStart = () => {
//     setIsAutoRotating(false);
//   };

//   const handleMouseDown = (e) => {
//     handleManualInteractionStart();
//     setIsMouseDown(true);
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//   };

//   const handleMouseUp = () => {
//     setIsMouseDown(false);
//   };

//   const handleMouseMove = (e) => {
//     if (!isMouseDown) return;
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2;

//     let frame = currentFrame + (walk > 0 ? 1 : -1);
//     if (frame >= frameCount) frame = 0;
//     if (frame < 0) frame = frameCount - 1;

//     setCurrentFrame(frame);
//     setStartX(x);
//   };

//   const handleTouchStart = (e) => {
//     handleManualInteractionStart();
//     const touch = e.touches[0];
//     setIsMouseDown(true);
//     setStartX(touch.pageX - containerRef.current.offsetLeft);
//   };

//   const handleTouchMove = (e) => {
//     if (!isMouseDown) return;
//     const touch = e.touches[0];
//     const x = touch.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2;

//     let frame = currentFrame + (walk > 0 ? 1 : -1);
//     if (frame >= frameCount) frame = 0;
//     if (frame < 0) frame = frameCount - 1;

//     setCurrentFrame(frame);
//     setStartX(x);
//   };

//   const handleReset = () => {
//     setCurrentFrame(0);
//     setIsAutoRotating(true);
//   };

//   const handleSpeedChange = (speed) => {
//     setRotationSpeed(speed);
//     if (!isAutoRotating) {
//       setIsAutoRotating(true);
//     }
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
//       {/* Enhanced Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 via-white/30 to-slate-200/50" />
//         <div className="absolute inset-0 backdrop-blur-[2px]" />

//         {/* Enhanced lighting effects */}
//         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
//         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-400/40 to-transparent" />
//       </div>

//       <div className="relative h-full w-full max-w-7xl mx-auto">
//         {isLoading && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-50 backdrop-blur-sm">
//             <div className="w-20 h-20 border-3 border-slate-300 border-t-slate-800 rounded-full animate-spin mb-4" />
//             <div className="text-slate-800 text-sm font-light">
//               Loading... {Math.round((loadedImages / frameCount) * 100)}%
//             </div>
//           </div>
//         )}

//         <div
//           ref={containerRef}
//           className="absolute inset-0 cursor-grab active:cursor-grabbing"
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleMouseUp}
//           onTouchMove={handleTouchMove}
//         >
//           <div className="absolute inset-0 flex items-center justify-center px-4">
//             <div className="relative w-full max-w-5xl aspect-video">
//               {/* Enhanced Shadow System */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5">
//                 {/* Base shadow layer */}
//                 <div className="w-full h-24 bg-slate-950/30 blur-3xl transform scale-y-50 rounded-full" />

//                 {/* Middle shadow layer */}
//                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-slate-900/25 blur-2xl transform scale-y-50 rounded-full" />

//                 {/* Top sharp shadow */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-slate-900/20 blur-xl transform scale-y-50 rounded-full" />
//               </div>

//               {/* Car Image with Enhanced Shadows */}
//               <div className="relative">
//                 <img
//                   key={currentFrame}
//                   src={frames[currentFrame]}
//                   alt="Car View"
//                   className="w-full h-full object-contain select-none transition-opacity duration-300"
//                   style={{
//                     filter: `
//                       drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4))
//                       drop-shadow(0 15px 12px rgba(0, 0, 0, 0.4))
//                       drop-shadow(0 8px 8px rgba(0, 0, 0, 0.2))
//                       drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1))
//                     `,
//                   }}
//                   draggable="false"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="absolute left-1/2 bottom-16 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 shadow-xl backdrop-blur-md">
//           <button
//             onClick={() => setIsAutoRotating(!isAutoRotating)}
//             className="p-2.5 rounded-full bg-slate-100"
//           >
//             {isAutoRotating ? (
//               <Pause className="w-5 h-5 text-slate-700" />
//             ) : (
//               <Play className="w-5 h-5 text-slate-700" />
//             )}
//           </button>

//           <div className="w-px h-5 bg-slate-300" />

//           <button
//             onClick={handleReset}
//             className="p-2.5 rounded-full bg-slate-100"
//           >
//             <RotateCcw className="w-5 h-5 text-slate-700" />
//           </button>

//           <div className="w-px h-5 bg-slate-300" />

//           <div className="flex items-center gap-1.5">
//             {[
//               { label: "Slow", value: 150 },
//               { label: "Medium", value: 100 },
//               { label: "Fast", value: 50 },
//             ].map((speed) => (
//               <button
//                 key={speed.label}
//                 onClick={() => handleSpeedChange(speed.value)}
//                 className={`
//                   px-3.5 py-1.5 rounded-full text-xs font-medium
//                   ${
//                     rotationSpeed === speed.value
//                       ? "bg-slate-800 text-white"
//                       : "bg-slate-100 text-slate-700"
//                   }
//                 `}
//               >
//                 {speed.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;