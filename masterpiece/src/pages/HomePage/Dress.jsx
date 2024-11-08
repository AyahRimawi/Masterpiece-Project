// import React, { useState, useEffect } from "react";
// import dressSection from "../../assets/dressSection.png";

// export function Dress() {
//   const [text, setText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
//   const fullText =
//     "Elegance is not about being noticed, it's about being remembered.";

//   useEffect(() => {
//     if (isTyping) {
//       if (text.length < fullText.length) {
//         const timeout = setTimeout(() => {
//           setText(fullText.slice(0, text.length + 1));
//         }, 100);
//         return () => clearTimeout(timeout);
//       } else {
//         const timeout = setTimeout(() => {
//           setIsTyping(false);
//         }, 3000);
//         return () => clearTimeout(timeout);
//       }
//     } else {
//       if (text.length > 0) {
//         const timeout = setTimeout(() => {
//           setText(text.slice(0, -1));
//         }, 50);
//         return () => clearTimeout(timeout);
//       } else {
//         setIsTyping(true);
//       }
//     }
//   }, [text, isTyping]);

//   return (
//     <div className="bg-white">
//       <div className="flex flex-col items-center justify-between ml-8 mr-12 mt-16 md:flex-row md:w-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <div className="flex flex-col justify-between p-4 leading-normal w-auto mx-auto">
//           <h3 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
//             Dresses
//           </h3>

//           {/* Animated Text */}
//           <div className="min-h-[60px] text-center my-4">
//             <p className="text-lg text-gray-700 italic">
//               {text}
//               <span className="animate-blink ml-1">|</span>
//             </p>
//           </div>

//           {/* Enhanced Button */}
//           <button
//             className="flex-1 w-32 mt-8 mx-auto duration-300
//             bg-[rgba(0,0,0)] border border-white text-white font-bold
//             py-1 px-2 rounded hover:bg-white hover:text-black
//             relative overflow-hidden group"
//           >
//             <span className="relative z-10">Shop Now</span>
//             <div
//               className="absolute inset-0 w-0 bg-white transition-all duration-[400ms]
//               group-hover:w-full"
//             />
//           </button>
//         </div>

//         <div>
//           <img
//             className="object-fit w-full p-8 h-[400px] md:h-[400px] md:w-[700px]"
//             src={dressSection}
//             alt="Noteworthy technology acquisitions 2021"
//           />
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx global>{`
//         @keyframes blink {
//           0%,
//           100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0;
//           }
//         }

//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// import React from "react";

// const dressCards = [
//   {
//     title: "Evening",
//     image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
//     rotate: -35,
//   },
//   {
//     title: "Bridal",
//     image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500",
//     rotate: -25,
//   },
//   {
//     title: "Party",
//     image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
//     rotate: -15,
//   },
//   {
//     title: "Casual",
//     image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500",
//     rotate: 5,
//   },
//   {
//     title: "Cocktail",
//     image: "https://images.unsplash.com/photo-1583391733956-6f9d458220a6?w=500",
//     rotate: 15,
//   },
//   {
//     title: "Summer",
//     image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
//     rotate: 25,
//   },
//   {
//     title: "Luxury",
//     image: "https://images.unsplash.com/photo-1613914141621-5eaf2e62c563?w=500",
//     rotate: 35,
//   },
// ];

// export function Dress() {
//   return (
//     <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden">
//       <div className="relative flex justify-center items-center min-h-[600px]">
//         {/* Cards Container */}
//         <div className="flex items-center justify-center">
//           {dressCards.map((card, index) => (
//             <div
//               key={index}
//               className="group relative transition-all duration-700 ease-out"
//               style={{
//                 marginLeft: index === 0 ? "0px" : "-100px",
//                 zIndex: dressCards.length - index,
//               }}
//             >
//               <div
//                 style={{
//                   transform: `rotate(${card.rotate}deg)`,
//                 }}
//                 className={`
//                   relative w-[260px] h-[360px]
//                   bg-gradient-to-br from-white/20 to-white/5
//                   border border-black/5 rounded-2xl
//                   shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)]
//                   backdrop-blur-sm
//                   overflow-hidden
//                   transition-all duration-700 ease-out
//                   transform-gpu

//                   group-hover:rotate-0
//                   group-hover:z-50
//                   group-hover:translate-y-[-20px]
//                   group-hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)]

//                   hover:mx-12
//                 `}
//               >
//                 {/* Image Container */}
//                 <div className="absolute inset-0 w-full h-full">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>

//                 {/* Title */}
//                 <div className="absolute bottom-0 w-full p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
//                   <h3 className="text-xl font-semibold text-white">
//                     {card.title}
//                   </h3>
//                 </div>

//                 {/* Shine Effect */}
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100
//                     transition-opacity duration-700
//                     bg-gradient-to-tr from-white/0 via-white/20 to-white/0
//                     [transform:translateX(-100%)]
//                     group-hover:[transform:translateX(100%)]
//                     [transition:transform_750ms]"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom Animation Keyframes */}
//       <style jsx global>{`
//         @keyframes shine {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(100%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";

// const dressCards = [
//   {
//     title: "Evening",
//     quantity: "150+",
//     image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
//     description: "Timeless Elegance",
//     bgGradient: "from-purple-900/20 via-purple-800/20 to-purple-900/20",
//   },
//   {
//     title: "Couture",
//     quantity: "200+",
//     image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
//     description: "Exclusive Design",
//     bgGradient: "from-rose-900/20 via-rose-800/20 to-rose-900/20",
//   },
//   {
//     title: "Bridal",
//     quantity: "180+",
//     image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500",
//     description: "Perfect Moment",
//     bgGradient: "from-amber-900/20 via-amber-800/20 to-amber-900/20",
//   },
//   {
//     title: "Designer",
//     quantity: "120+",
//     image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
//     description: "Luxury Collection",
//     bgGradient: "from-emerald-900/20 via-emerald-800/20 to-emerald-900/20",
//   },
// ];

// export function Dress() {
//   const [text, setText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
//   const fullText =
//     "Where timeless elegance meets contemporary sophistication. Each piece tells a unique story of luxury and refinement.";

//   useEffect(() => {
//     if (isTyping) {
//       if (text.length < fullText.length) {
//         const timeout = setTimeout(() => {
//           setText(fullText.slice(0, text.length + 1));
//         }, 50);
//         return () => clearTimeout(timeout);
//       } else {
//         const timeout = setTimeout(() => {
//           setIsTyping(false);
//         }, 3000);
//         return () => clearTimeout(timeout);
//       }
//     } else {
//       if (text.length > 0) {
//         const timeout = setTimeout(() => {
//           setText(text.slice(0, -1));
//         }, 30);
//         return () => clearTimeout(timeout);
//       } else {
//         setIsTyping(true);
//       }
//     }
//   }, [text, isTyping]);

//   return (
//     <div className="w-full min-h-screen bg-white py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
//           {/* Left Side - Typing Text */}
//           <div className="w-full lg:w-1/2 space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-sm uppercase tracking-widest text-gray-500 font-medium">
//                 Exclusive Collection
//               </h2>
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
//                 Handcrafted for
//                 <br />
//                 Perfection
//               </h1>
//             </div>

//             <div className="relative">
//               <div className="min-h-[120px]">
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   {text}
//                   <span className="ml-1 animate-blink">|</span>
//                 </p>
//               </div>

//               <div className="mt-8">
//                 <button className="group relative px-8 py-3 bg-black text-white rounded-full overflow-hidden">
//                   <span className="relative z-10">Explore Collection</span>
//                   <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Elegant Cards Grid */}
//           <div className="w-full lg:w-1/2">
//             <div className="relative w-[400px] h-[500px] mx-auto">
//               <div className="grid grid-cols-2 gap-6 transform">
//                 {dressCards.map((card, index) => (
//                   <div key={index} className="group perspective-1000">
//                     <div
//                       className={`
//                         relative w-[190px] h-[240px]
//                         rounded-2xl overflow-hidden
//                         transform-gpu transition-all duration-700
//                         hover:scale-110 hover:rotate-0 hover:z-10
//                         ${
//                           index === 0
//                             ? "-rotate-[15deg]"
//                             : index === 1
//                             ? "rotate-[15deg]"
//                             : index === 2
//                             ? "-rotate-[15deg]"
//                             : "rotate-[15deg]"
//                         }
//                         shadow-[0_8px_30px_rgb(0,0,0,0.12)]
//                         hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)]
//                         backdrop-blur-sm
//                       `}
//                     >
//                       {/* Glass Background */}
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} backdrop-blur-sm`}
//                       />

//                       {/* Image */}
//                       <div className="absolute inset-0 transition-transform duration-1000">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
//                       </div>

//                       {/* Content */}
//                       <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-300">
//                         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                           <p className="text-white/90 text-sm font-medium mb-1">
//                             {card.description}
//                           </p>
//                           <h3 className="text-white text-xl font-bold mb-1">
//                             {card.title}
//                           </h3>
//                           <p className="text-white/90 text-lg font-semibold">
//                             {card.quantity}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Shine Effects */}
//                       <div className="absolute inset-0">
//                         <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[linear-gradient(to_right,transparent_0%,white_50%,transparent_100%)] group-hover:[transform:translateX(100%)]" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes blink {
//           0%,
//           100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0;
//           }
//         }

//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </div>
//   );
// }


// import React from "react";

// const dressCards = [
//   {
//     title: "Evening",
//     image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
//   },
//   {
//     title: "Couture",
//     image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
//   },
//   {
//     title: "Bridal",
//     image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500",
//   },
//   {
//     title: "Designer",
//     image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
//   }
// ];

// export function Dress() {
//   return (
//     <div className="w-full py-16 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Left Side - Text */}
//           <div className="w-full lg:w-1/3">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Elegance in Every Detail
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Discover our exclusive collection of dresses, where elegance meets contemporary style.
//             </p>
//             <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors">
//               Explore Collection
//             </button>
//           </div>

//           {/* Right Side - Card Container */}
//           <div className="w-full lg:w-2/3">
//             <div className="relative flex justify-center items-center">
//               <div className="container flex justify-center">
//                 {dressCards.map((card, index) => (
//                   <div
//                     key={index}
//                     className="group"
//                     style={{
//                       marginLeft: index === 0 ? '0' : '-80px',
//                       zIndex: index
//                     }}
//                   >
//                     <div
//                       className={`
//                         relative w-[180px] h-[240px]
//                         rounded-2xl overflow-hidden
//                         transform-gpu transition-all duration-500 ease-out
//                         hover:scale-110 hover:rotate-0 hover:translate-x-4
//                         ${index === 0 ? '-rotate-12' :
//                           index === 1 ? '-rotate-6' :
//                           index === 2 ? 'rotate-6' : 'rotate-12'}
//                         shadow-lg hover:shadow-xl
//                         hover:z-50
//                       `}
//                     >
//                       {/* Image */}
//                       <div className="absolute inset-0">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         />
//                       </div>

//                       {/* Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                       {/* Title */}
//                       <div className="absolute bottom-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-white text-lg font-semibold text-center">
//                           {card.title}
//                         </h3>
//                       </div>

//                       {/* Shine Effect */}
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500
//                         before:absolute before:inset-0 before:w-full before:h-full
//                         before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
//                         before:-translate-x-full before:animate-[shine_1s_ease_infinite]
//                       " />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes shine {
//           100% {
//             transform: translateX(100%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// import React from "react";

// const dressCards = [
//   {
//     title: "Evening",
//     image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
//   },
//   {
//     title: "Couture",
//     image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
//   },
//   {
//     title: "Bridal",
//     image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500",
//   },
//   {
//     title: "Designer",
//     image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
//   },
//   {
//     title: "Summer",
//     image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
//   },

//   {
//     title: "Classic",
//     image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=500",
//   },
// ];

// export function Dress() {
//   return (
//     <div className="w-full py-16 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Left Side - Text */}
//           <div className="w-full lg:w-1/3">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Elegance in Every Detail
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Discover our exclusive collection of dresses, where elegance meets
//               contemporary style.
//             </p>
//             <button className="relative overflow-hidden group bg-black text-white px-8 py-3 rounded-lg transition-all duration-300">
//               <span className="relative z-10 group-hover:text-black transition-colors duration-300">
//                 Explore Collection
//               </span>
//               <div className="absolute inset-0 bg-white/80 backdrop-blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//             </button>
//           </div>

//           {/* Right Side - Card Container */}
//           <div className="w-full lg:w-2/3">
//             <div className="relative flex justify-center items-center">
//               <div className="container flex justify-center">
//                 {dressCards.map((card, index) => (
//                   <div
//                     key={index}
//                     className="group"
//                     style={{
//                       marginLeft: index === 0 ? "0" : "-80px",
//                       zIndex: index,
//                     }}
//                   >
//                     <div
//                       className={`
//                         relative w-[180px] h-[240px]
//                         rounded-2xl overflow-hidden
//                         transform-gpu transition-all duration-500 ease-out
//                         hover:scale-110 hover:rotate-0 hover:translate-x-4 hover:-translate-y-4
//                         ${
//                           index === 0
//                             ? "-rotate-[21deg]"
//                             : index === 1
//                             ? "-rotate-[14deg]"
//                             : index === 2
//                             ? "-rotate-[7deg]"
//                             : index === 3
//                             ? "rotate-[0deg]"
//                             : index === 4
//                             ? "rotate-[7deg]"
//                             : index === 5
//                             ? "rotate-[14deg]"
//                             : "rotate-[21deg]"
//                         }
//                         shadow-lg hover:shadow-xl
//                         hover:z-50
//                       `}
//                     >
//                       {/* Image */}
//                       <div className="absolute inset-0">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         />
//                       </div>

//                       {/* Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                       {/* Title */}
//                       <div className="absolute bottom-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-white text-lg font-semibold text-center">
//                           {card.title}
//                         </h3>
//                       </div>

//                       {/* Shine Effect */}
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .animate-shine {
//           animation: shine 1s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }


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

export function Dress() {
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
            <button className="relative overflow-hidden group bg-black text-white px-8 py-3 rounded-lg transition-all duration-300">
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
                    className={`group ${card.mobileHide ? 'hidden lg:block' : ''}`}
                    style={{
                      marginLeft: index === 0 ? "0" : "-80px",
                      zIndex: index,
                    }}
                  >
                    <div
                      className={`
                        relative w-[160px] md:w-[180px] h-[220px] md:h-[240px]
                        rounded-2xl overflow-hidden
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
                      {/* Image */}
                      <div className="absolute inset-0">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Title */}
                      <div className="absolute bottom-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-lg font-semibold text-center">
                          {card.title}
                        </h3>
                      </div>

                      {/* Shine Effect */}
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

      <style jsx global>{`
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
