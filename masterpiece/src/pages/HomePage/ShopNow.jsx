// import React from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     id: 1,
//     title: "WOMEN",
//     image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=500",
//     color: "#E414D1",
//     path: "/category/women",
//     category: "Women",
//     subcategories: ["Pants", "Dress", "Shirt", "Skirt", "Pajamas"],
//   },
//   {
//     id: 2,
//     title: "MEN",
//     image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500",
//     color: "#5AA7FF",
//     path: "/category/men",
//     category: "Men",
//     subcategories: ["Pants", "Shirt", "Suit", "Pajamas"],
//   },
//   {
//     id: 3,
//     title: "KIDS",
//     image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=500",
//     color: "#FF8B45",
//     path: "/category/kids",
//     category: "Kids",
//     subcategories: ["Boy", "Girl", "Baby"],
//   },
//   {
//     id: 4,
//     title: "BABY",
//     image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500",
//     color: "#f3d602",
//     path: "/category/baby",
//     category: "Baby",
//     subcategories: ["Clothing", "Accessories", "Essentials"],
//   },
// ];

// const CategoryCard = ({ category }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(category.path, {
//       state: {
//         category: category.category,
//         subcategories: category.subcategories,
//       },
//     });
//   };

//   return (
//     <div
//       className="group relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-64 before:h-20 before:bg-gradient-to-bl from-sky-200 via-orange-200 before:rounded-t-2xl before:transition-all before:duration-500 before:scale-100 before:rounded-b-2xl before:hover:scale-95 before:hover:w-64 before:hover:h-60 before:hover:rounded-b-2xl w-64 h-60 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
//       style={{
//         background: `linear-gradient(to bottom left, rgb(186 230 253), rgb(255 237 213), ${category.color})`,
//       }}
//     >
//       <div
//         className="w-24 h-24 mt-6 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-20 group-hover:-translate-y-12 transition-all duration-500 relative overflow-hidden"
//         style={{ backgroundColor: category.color }}
//       >
//         <img
//           src={category.image}
//           alt={category.title}
//           className="transition-transform duration-1000 group-hover:scale-105 group-hover:-rotate-[360deg] group-hover:-translate-y-2 group-hover:-skew-y-6 group-hover:skew-x-6 absolute inset-0 w-full h-full object-cover"
//         />
//       </div>

//       <div className="z-10 group-hover:-translate-y-8 transition-all duration-500">
//         <span className="text-xl font-bold tracking-wider">
//           {category.title}
//         </span>
//       </div>

//       <button
//         onClick={handleClick}
//         className="px-4 py-1.5 text-white rounded-md z-10 hover:scale-125 transition-all duration-500"
//         style={{ backgroundColor: category.color }}
//       >
//         Shop Now
//       </button>
//     </div>
//   );
// };

// export function ShopNow() {
//   return (
//     <div className="w-full bg-white py-8 px-6 md:px-12 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
//           {categories.map((category) => (
//             <CategoryCard key={category.id} category={category} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     id: 1,
//     title: "WOMEN",
//     image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=500",
//     gradientColors: "from-[#D1349B]/40 via-[#F2C4DE]/40 to-[#E66BBF]/40",
//     btnGradient: "from-[#D1349B] to-[#E66BBF]",
//     borderGlow: "shadow-[#D1349B]/20",
//     path: "/category/women",
//     category: "Women",
//     subcategories: ["Pants", "Dress", "Shirt", "Skirt", "Pajamas"],
//   },
//   {
//     id: 2,
//     title: "MEN",
//     image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500",
//     gradientColors: "from-[#3B82F6]/40 via-[#BFDBFE]/40 to-[#60A5FA]/40",
//     btnGradient: "from-[#3B82F6] to-[#60A5FA]",
//     borderGlow: "shadow-[#3B82F6]/20",
//     path: "/category/men",
//     category: "Men",
//     subcategories: ["Pants", "Shirt", "Suit", "Pajamas"],
//   },
//   {
//     id: 3,
//     title: "KIDS",
//     image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
//     gradientColors: "from-[#14B8A6]/40 via-[#99F6E4]/40 to-[#2DD4BF]/40",
//     btnGradient: "from-[#14B8A6] to-[#2DD4BF]",
//     borderGlow: "shadow-[#14B8A6]/20",
//     path: "/category/kids",
//     category: "Kids",
//     subcategories: ["Boy", "Girl", "Baby"],
//   },
//   {
//     id: 4,
//     title: "BABY",
//     image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500",
//     gradientColors: "from-[#F59E0B]/40 via-[#FDE68A]/40 to-[#FBBF24]/40",
//     btnGradient: "from-[#F59E0B] to-[#FBBF24]",
//     borderGlow: "shadow-[#F59E0B]/20",
//     path: "/category/baby",
//     category: "Baby",
//     subcategories: ["Clothing", "Accessories", "Essentials"],
//   },
// ];

// const CategoryCard = ({ category }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative w-full max-w-[320px] h-[380px] rounded-2xl overflow-hidden group">
//       {/* Glassmorphism Background */}
//       <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />

//       {/* Animated Gradient Background */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${category.gradientColors} animate-gradient-xy`}
//       />

//       {/* Diagonal Shine Lines */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-[200%] h-full animate-shine-lines transform -rotate-45 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//         <div className="absolute top-0 left-[-100%] w-[200%] h-full animate-shine-lines-delayed transform -rotate-45 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>

//       {/* Wave Effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
//         <div className="absolute bottom-0 left-0 right-0 h-24 animate-wave bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
//         <div className="absolute bottom-0 left-0 right-0 h-24 animate-wave-delayed bg-gradient-to-r from-white/10 via-white/5 to-white/10" />
//       </div>

//       {/* Content Container */}
//       <div className="relative h-full flex flex-col items-center justify-center gap-6 p-6">
//         {/* Image Container with Internal Shine */}
//         <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl ring-2 ring-white/50">
//           <img
//             src={category.image}
//             alt={category.title}
//             className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
//           />
//           {/* Internal Image Shine */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-[-100%] w-[200%] h-full animate-internal-shine transform -rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//           </div>
//         </div>

//         {/* Title with Glow */}
//         <h3 className="text-2xl font-bold text-white drop-shadow-lg animate-pulse-subtle">
//           {category.title}
//         </h3>

//         {/* Button with Gradient */}
//         <button
//           onClick={() =>
//             navigate(category.path, {
//               state: {
//                 category: category.category,
//                 subcategories: category.subcategories,
//               },
//             })
//           }
//           className={`
//             relative px-8 py-2 rounded-lg
//             bg-gradient-to-r ${category.btnGradient}
//             text-white font-medium
//             transform transition-all duration-300
//             hover:scale-105 active:scale-95
//             shadow-lg ${category.borderGlow}
//             overflow-hidden
//           `}
//         >
//           <span className="relative z-10">Shop Now</span>
//           {/* Button Shine Effect */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-[-100%] w-[200%] h-full animate-button-shine transform -rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export function ShopNow() {
//   return (
//     <div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
//           {categories.map((category) => (
//             <CategoryCard key={category.id} category={category} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     id: 1,
//     title: "WOMEN",
//     image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=500",
//     gradientColors: "from-[#D1349B]/40 via-[#F2C4DE]/40 to-[#E66BBF]/40",
//     btnGradient: "from-[#D1349B] to-[#E66BBF]",
//     borderGlow: "shadow-[#D1349B]/20",
//     path: "/category/women",
//     category: "Women",
//     subcategories: ["Pants", "Dress", "Shirt", "Skirt", "Pajamas"],
//   },
//   {
//     id: 2,
//     title: "MEN",
//     image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500",
//     gradientColors: "from-[#3B82F6]/40 via-[#BFDBFE]/40 to-[#60A5FA]/40",
//     btnGradient: "from-[#3B82F6] to-[#60A5FA]",
//     borderGlow: "shadow-[#3B82F6]/20",
//     path: "/category/men",
//     category: "Men",
//     subcategories: ["Pants", "Shirt", "Suit", "Pajamas"],
//   },
//   {
//     id: 3,
//     title: "KIDS",
//     image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
//     gradientColors: "from-[#14B8A6]/40 via-[#99F6E4]/40 to-[#2DD4BF]/40",
//     btnGradient: "from-[#14B8A6] to-[#2DD4BF]",
//     borderGlow: "shadow-[#14B8A6]/20",
//     path: "/category/kids",
//     category: "Kids",
//     subcategories: ["Boy", "Girl", "Baby"],
//   },
//   {
//     id: 4,
//     title: "BABY",
//     image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500",
//     gradientColors: "from-[#F59E0B]/40 via-[#FDE68A]/40 to-[#FBBF24]/40",
//     btnGradient: "from-[#F59E0B] to-[#FBBF24]",
//     borderGlow: "shadow-[#F59E0B]/20",
//     path: "/category/baby",
//     category: "Baby",
//     subcategories: ["Clothing", "Accessories", "Essentials"],
//   },
// ];

// const CategoryCard = ({ category }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative w-full max-w-[320px] h-[280px] rounded-2xl overflow-hidden group">
//       {/* Glassmorphism Base */}
//       <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />

//       {/* Animated Background */}
//       <div
//         className={`
//           absolute inset-0 bg-gradient-to-br ${category.gradientColors}
//           [animation:gradientMove_3s_ease-in-out_infinite]
//           [@keyframes_gradientMove]:from-{transform:translateX(0%)_translateY(0%)}
//           [@keyframes_gradientMove]:to-{transform:translateX(100%)_translateY(100%)}
//         `}
//       />

//       {/* Rotating Shine Effect */}
//       <div
//         className="
//           absolute inset-0
//           before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-white/10 before:to-transparent
//           [transform-origin:center]
//           [animation:spin_8s_linear_infinite]
//         "
//       />

//       {/* Continuous Shimmer */}
//       <div
//         className="
//           absolute inset-0 skew-x-12
//           before:absolute before:inset-0
//           before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
//           [animation:shimmer_2s_linear_infinite]
//           [@keyframes_shimmer]:from-{left:-100%}
//           [@keyframes_shimmer]:to-{left:200%}
//         "
//       />

//       {/* Content Wrapper */}
//       <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6">
//         {/* Image Container */}
//         <div
//           className="
//             relative w-24 h-24 rounded-full overflow-hidden
//             ring-2 ring-white/50 shadow-xl
//             [animation:float_6s_ease-in-out_infinite]
//             [@keyframes_float]:from-{transform:translateY(0px)}
//             [@keyframes_float]:via-{transform:translateY(-10px)}
//             [@keyframes_float]:to-{transform:translateY(0px)}
//           "
//         >
//           <img
//             src={category.image}
//             alt={category.title}
//             className="
//               w-full h-full object-cover
//               [animation:spin_20s_linear_infinite]
//             "
//           />
//           {/* Image Shine */}
//           <div
//             className="
//               absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
//               [animation:shine_2s_linear_infinite]
//               [@keyframes_shine]:from-{transform:translateX(-100%)}
//               [@keyframes_shine]:to-{transform:translateX(100%)}
//             "
//           />
//         </div>

//         {/* Title */}
//         <h3
//           className="
//             text-xl font-bold text-white drop-shadow-lg
//             [animation:pulse_2s_ease-in-out_infinite]
//             [@keyframes_pulse]:from-{opacity:0.8}
//             [@keyframes_pulse]:to-{opacity:1}
//           "
//         >
//           {category.title}
//         </h3>

//         {/* Button */}
//         <button
//           onClick={() =>
//             navigate(category.path, {
//               state: {
//                 category: category.category,
//                 subcategories: category.subcategories,
//               },
//             })
//           }
//           className={`
//             relative px-6 py-2 rounded-lg
//             bg-gradient-to-r ${category.btnGradient}
//             text-white font-medium
//             transform transition-all duration-300
//             hover:scale-105 active:scale-95
//             overflow-hidden
//             [animation:glow_1.5s_ease-in-out_infinite]
//             [@keyframes_glow]:from-{box-shadow:0_0_5px_rgba(255,255,255,0.5)}
//             [@keyframes_glow]:to-{box-shadow:0_0_20px_rgba(255,255,255,0.3)}
//           `}
//         >
//           <span className="relative z-10">Shop Now</span>
//           {/* Button Shine */}
//           <div
//             className="
//               absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
//               [animation:buttonShine_2s_linear_infinite]
//               [@keyframes_buttonShine]:from-{transform:translateX(-100%)}
//               [@keyframes_buttonShine]:to-{transform:translateX(100%)}
//             "
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export function ShopNow() {
//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
//           {categories.map((category) => (
//             <CategoryCard key={category.id} category={category} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "WOMEN",
    image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=500",
    gradientColors: "from-[#D1349B]/40 via-[#F2C4DE]/40 to-[#E66BBF]/40",
    btnGradient: "from-[#D1349B] to-[#E66BBF]",
    borderGlow: "shadow-[#D1349B]/20",
    path: "/category/women",
    category: "Women",
    subcategories: ["Pants", "Dress", "Shirt", "Skirt", "Pajamas"],
  },
  {
    id: 2,
    title: "MEN",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500",
    gradientColors: "from-[#3B82F6]/40 via-[#BFDBFE]/40 to-[#60A5FA]/40",
    btnGradient: "from-[#3B82F6] to-[#60A5FA]",
    borderGlow: "shadow-[#3B82F6]/20",
    path: "/category/men",
    category: "Men",
    subcategories: ["Pants", "Shirt", "Suit", "Pajamas"],
  },
  {
    id: 3,
    title: "KIDS",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
    gradientColors: "from-[#14B8A6]/40 via-[#99F6E4]/40 to-[#2DD4BF]/40",
    btnGradient: "from-[#14B8A6] to-[#2DD4BF]",
    borderGlow: "shadow-[#14B8A6]/20",
    path: "/category/kids",
    category: "Kids",
    subcategories: ["Boy", "Girl", "Baby"],
  },
  {
    id: 4,
    title: "BABY",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500",
    gradientColors: "from-[#F59E0B]/40 via-[#FDE68A]/40 to-[#FBBF24]/40",
    btnGradient: "from-[#F59E0B] to-[#FBBF24]",
    borderGlow: "shadow-[#F59E0B]/20",
    path: "/category/baby",
    category: "Baby",
    subcategories: ["Clothing", "Accessories", "Essentials"],
  },
];
// ... باقي الكود يبقى نفسه حتى CategoryCard

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-[320px] h-[280px] rounded-2xl overflow-hidden group">
      {/* Glassmorphism Base - تعديل الشفافية لتكون أكثر وضوحاً */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/50" />

      {/* Animated Background - تحسين التدرج ليكون أكثر وضوحاً */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${category.gradientColors}
          [animation:gradientMove_3s_ease-in-out_infinite]
          [@keyframes_gradientMove]:from-{transform:translateX(0%)_translateY(0%)}
          [@keyframes_gradientMove]:to-{transform:translateX(100%)_translateY(100%)}
        `}
      />

      {/* Rotating Shine Effect - زيادة التباين */}
      <div
        className="
          absolute inset-0 
          before:absolute before:inset-0 
          before:bg-gradient-to-tr before:from-transparent before:via-black/5 before:to-transparent
          [transform-origin:center]
          [animation:spin_8s_linear_infinite]
        "
      />

      {/* Continuous Shimmer - تحسين تأثير اللمعة */}
      <div
        className="
          absolute inset-0 skew-x-12
          before:absolute before:inset-0 
          before:w-1/2 before:bg-gradient-to-r 
          before:from-transparent 
          before:via-black/10
          before:to-transparent
          [animation:shimmer_2s_linear_infinite]
          [@keyframes_shimmer]:from-{left:-100%}
          [@keyframes_shimmer]:to-{left:200%}
        "
      />

      {/* إضافة طبقة إضافية للمعة */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-black/5 via-transparent to-white/10
          [animation:pulse_3s_ease-in-out_infinite]
          [@keyframes_pulse]:from-{opacity:0}
          [@keyframes_pulse]:via-{opacity:1}
          [@keyframes_pulse]:to-{opacity:0}
        "
      />

      {/* Content Wrapper */}
      <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6">
        {/* Static Image Container with Enhanced Shine */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-black/10 shadow-xl">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          {/* Image Shine Effect - تحسين تأثير اللمعة */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-r from-transparent via-black/10 to-transparent
              [animation:shine_2s_linear_infinite]
              [@keyframes_shine]:from-{transform:translateX(-100%)}
              [@keyframes_shine]:to-{transform:translateX(100%)}
            "
          />
          {/* إضافة طبقة لمعة ثانية */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              [animation:shine_2s_linear_infinite_500ms]
              [@keyframes_shine]:from-{transform:translateX(-100%)}
              [@keyframes_shine]:to-{transform:translateX(100%)}
            "
          />
        </div>

        {/* Title with Enhanced Shadow */}
        <h3
          className="
            text-xl font-bold text-gray-800 
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]
            [animation:pulse_2s_ease-in-out_infinite]
            [@keyframes_pulse]:from-{opacity:0.8}
            [@keyframes_pulse]:to-{opacity:1}
          "
        >
          {category.title}
        </h3>

        {/* Button with Enhanced Hover */}
        <button
          onClick={() =>
            navigate(category.path, {
              state: {
                category: category.category,
                subcategories: category.subcategories,
              },
            })
          }
          className={`
            relative px-6 py-2 rounded-lg
            bg-gradient-to-r ${category.btnGradient}
            text-white font-medium
            transition-all duration-300
            hover:-translate-y-1 hover:scale-110 active:scale-95
            hover:shadow-lg hover:shadow-black/20
            overflow-hidden
            [animation:glow_1.5s_ease-in-out_infinite]
            [@keyframes_glow]:from-{box-shadow:0_0_5px_rgba(0,0,0,0.2)}
            [@keyframes_glow]:to-{box-shadow:0_0_20px_rgba(0,0,0,0.1)}
          `}
        >
          <span className="relative z-10">Shop Now</span>
          {/* Button Shine with Enhanced Contrast */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-r from-transparent via-white/40 to-transparent
              [animation:buttonShine_2s_linear_infinite]
              [@keyframes_buttonShine]:from-{transform:translateX(-100%)}
              [@keyframes_buttonShine]:to-{transform:translateX(100%)}
            "
          />
        </button>
      </div>
    </div>
  );
};

// ... باقي الكود يبقى نفسه، لكن مع تغيير خلفية الصفحة
export function ShopNow() {
  return (
    <div className="w-full bg-white">
      {/* Hidden on Mobile (below sm breakpoint), Visible on Tablet and Above */}
      <div className="hidden sm:block w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* Optional: You can add alternative mobile content here */}
      <div className="sm:hidden">
        {/* يمكنك إضافة محتوى بديل للموبايل هنا إذا أردت */}
      </div>
    </div>
  );
}
