
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Heart, ShoppingCart } from "lucide-react";

// const ProductCard = ({ product }) => {
//   const { _id, name, variants, averageRating } = product;
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (variants && variants.length > 0) {
//       setSelectedVariant(variants[0]);
//     }
//   }, [variants]);

//   const handleColorClick = (variantId) => {
//     const variant = variants.find((v) => v._id === variantId);
//     setSelectedVariant(variant);
//   };

//   // const handleProductClick = () => {
//   //   navigate(`/product/${_id}`);
//   // };
// const handleProductClick = () => {
//   navigate(`/product/${selectedVariant._id}`);
// };

//   if (!selectedVariant) return null;

//   const uniqueColors = Array.from(
//     new Set(variants.map((variant) => variant.color))
//   );

//   return (
//     <div className="flex justify-center items-end mb-6">
//       <div className="bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl w-72">
//         <div className="h-48 rounded-t-lg overflow-hidden">
//           <img
//             src={selectedVariant.overviewPicture}
//             alt={name}
//             className="w-full h-full object-fill"
//           />
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
//           <p className="text-blue-600 font-bold">
//             JD {selectedVariant.price.toFixed(2)}
//           </p>
//           <div className="flex items-center my-2">
//             {Array.from({ length: 5 }, (_, index) => (
//               <span
//                 key={index}
//                 className={`text-${
//                   index < averageRating ? "yellow-400" : "gray-400"
//                 }`}
//               >
//                 ★
//               </span>
//             ))}
//             <span className="ml-2 text-gray-500 text-sm">
//               {averageRating.toFixed(1)}
//             </span>
//           </div>
//           <div className="flex space-x-2 mb-4">
//             {uniqueColors.map((color, index) => (
//               <div
//                 key={index}
//                 className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
//                   selectedVariant.color.toLowerCase() === color.toLowerCase()
//                     ? "border-blue-500"
//                     : "border-gray-300"
//                 }`}
//                 style={{ backgroundColor: color.toLowerCase() }}
//                 onClick={() =>
//                   handleColorClick(variants.find((v) => v.color === color)._id)
//                 }
//               />
//             ))}
//           </div>
//           <div className="flex space-x-2">
//             <button className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-lg px-3 py-1 hover:bg-gray-300 transition">
//               <Heart size={16} /> <span className="ml-1">Favorite</span>
//             </button>
//             <button
//               className="flex items-center justify-center bg-[#193dc2] text-white rounded-lg px-3 py-1 hover:bg-blue-600 transition"
//               onClick={handleProductClick}
//             >
//               <ShoppingCart size={16} />{" "}
//               <span className="ml-1">View Details</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCart, Star } from "lucide-react";

// const ProductCard = ({ product }) => {
//   const { _id, name, variants, averageRating } = product;
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (variants && variants.length > 0) {
//       setSelectedVariant(variants[0]);
//     }
//   }, [variants]);

//   const handleColorClick = (variantId) => {
//     const variant = variants.find((v) => v._id === variantId);
//     setSelectedVariant(variant);
//   };

//   const handleProductClick = () => {
//     navigate(`/product/${selectedVariant._id}`);
//   };

//   if (!selectedVariant) return null;

//   const uniqueColors = Array.from(
//     new Set(variants.map((variant) => variant.color))
//   );

//   return (
//     <div className="relative w-[300px] h-[400px] [perspective:1000px] group">
//       <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//         {/* Front Side */}
//         <div className="absolute w-full h-full [backface-visibility:hidden]">
//           <div className="relative w-full h-full rounded-lg bg-zinc-900 overflow-hidden">
//             {/* Animated Background Circles */}
//             <div className="absolute w-full h-full">
//               <div className="absolute w-24 h-24 rounded-full bg-orange-300/50 filter blur-xl animate-[floating_3s_ease-in-out_infinite]" />
//               <div className="absolute w-40 h-40 rounded-full bg-red-300/50 filter blur-xl left-20 animate-[floating_3s_ease-in-out_1s_infinite]" />
//               <div className="absolute w-16 h-16 rounded-full bg-red-500/50 filter blur-xl left-40 -top-10 animate-[floating_3s_ease-in-out_2s_infinite]" />
//             </div>

//             {/* Product Image */}
//             <div className="absolute inset-0">
//               <img
//                 src={selectedVariant.overviewPicture}
//                 alt={name}
//                 className="w-full h-full object-cover opacity-90"
//               />
//             </div>

//             {/* Content Overlay */}
//             <div className="absolute inset-0 p-4 flex flex-col justify-between">
//               {/* Top Badge */}
//               <div className="w-fit px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm">
//                 New Arrival
//               </div>

//               {/* Bottom Content */}
//               <div className="space-y-2">
//                 <div className="p-3 rounded-lg bg-black/60 backdrop-blur-sm space-y-2">
//                   <div className="flex justify-between items-start">
//                     <p className="text-white font-bold text-lg w-3/4">{name}</p>
//                     <div className="p-1.5 bg-emerald-500 rounded-md">
//                       <ShoppingCart size={16} className="text-white" />
//                     </div>
//                   </div>
//                   <p className="text-white/70 text-xs">
//                     Available Colors: {uniqueColors.length} • Rating:{" "}
//                     {averageRating.toFixed(1)}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Back Side */}
//         <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
//           <div className="relative w-full h-full rounded-lg overflow-hidden">
//             {/* Full Product Image */}
//             <img
//               src={selectedVariant.overviewPicture}
//               alt={name}
//               className="absolute w-full h-full object-cover"
//             />

//             {/* Semi-transparent Overlay */}
//             <div className="absolute inset-0 bg-black/50" />

//             {/* Content */}
//             <div className="absolute inset-0 p-6 flex flex-col justify-between">
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-bold text-white">{name}</h3>
//                 <p className="text-3xl font-bold text-orange-400">
//                   JD {selectedVariant.price.toFixed(2)}
//                 </p>

//                 {/* Rating Stars */}
//                 <div className="flex gap-1">
//                   {[...Array(5)].map((_, index) => (
//                     <Star
//                       key={index}
//                       size={16}
//                       className={`${
//                         index < averageRating
//                           ? "fill-orange-400 text-orange-400"
//                           : "fill-zinc-600 text-zinc-600"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Color Selection */}
//                 <div className="space-y-2">
//                   <p className="text-sm text-white/90">Select Color:</p>
//                   <div className="flex gap-2">
//                     {uniqueColors.map((color, index) => (
//                       <button
//                         key={index}
//                         onClick={() =>
//                           handleColorClick(
//                             variants.find((v) => v.color === color)._id
//                           )
//                         }
//                         className={`w-6 h-6 rounded-full duration-200 hover:scale-110 ${
//                           selectedVariant.color.toLowerCase() ===
//                           color.toLowerCase()
//                             ? "ring-2 ring-orange-400 ring-offset-2 ring-offset-black/50"
//                             : ""
//                         }`}
//                         style={{ backgroundColor: color.toLowerCase() }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Action Button */}
//               <button
//                 onClick={handleProductClick}
//                 className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold duration-200 hover:scale-[1.02] active:scale-[0.98]"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes floating {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(10px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductCard;


// ------------------------------------------------------------------


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Star, ShoppingBag } from "lucide-react";

const ProductCard = ({ product }) => {
  const { _id, name, variants, averageRating } = product;
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (variants && variants.length > 0) {
      setSelectedVariant(variants[0]);
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [variants]);

  const handleColorClick = (variantId) => {
    const variant = variants.find((v) => v._id === variantId);
    setSelectedVariant(variant);
  };

  const handleProductClick = () => {
    navigate(`/product/${selectedVariant._id}`);
  };

  if (!selectedVariant) return null;

  if (isLoading) {
    return (
      <div className="w-[300px] h-[400px] flex items-center justify-center">
        <div className="animate-bounce">
          <ShoppingBag size={40} className="text-indigo-500 animate-pulse" />
        </div>
      </div>
    );
  }

  const uniqueColors = Array.from(
    new Set(variants.map((variant) => variant.color))
  );

  return (
    <div className="relative w-[300px] h-[400px] [perspective:1000px] group animate-[slideUp_0.5s_ease-out]">
      <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="relative w-full h-full rounded-lg bg-zinc-900 overflow-hidden">
            {/* Animated Background Circles */}
            <div className="absolute w-full h-full">
              <div className="absolute w-24 h-24 rounded-full bg-indigo-300/50 filter blur-xl animate-[floating_3s_ease-in-out_infinite]" />
              <div className="absolute w-40 h-40 rounded-full bg-violet-300/50 filter blur-xl left-20 animate-[floating_3s_ease-in-out_1s_infinite]" />
              <div className="absolute w-16 h-16 rounded-full bg-purple-500/50 filter blur-xl left-40 -top-10 animate-[floating_3s_ease-in-out_2s_infinite]" />
            </div>

            {/* Product Image */}
            <div className="absolute inset-0">
              <img
                src={selectedVariant.overviewPicture}
                alt={name}
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              {/* Top Badge */}
              <div className="w-fit px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-sm border border-white/20">
                New Arrival
              </div>

              {/* Bottom Content */}
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="text-white font-bold text-lg w-3/4">{name}</p>
                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-md">
                      <ShoppingCart size={16} className="text-white" />
                    </div>
                  </div>
                  <p className="text-white/70 text-xs">
                    Available Colors: {uniqueColors.length} • Rating:{" "}
                    {averageRating.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {/* Full Product Image */}
            <img
              src={selectedVariant.overviewPicture}
              alt={name}
              className="absolute w-full h-full object-cover"
            />

            {/* Very Light Glass Effect */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {name}
                </h3>
                <p className="text-3xl font-bold text-white drop-shadow-lg">
                  JD {selectedVariant.price.toFixed(2)}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      strokeWidth={1.5}
                      className={`drop-shadow-lg ${
                        index < averageRating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-zinc-600 text-zinc-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Color Selection */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-white drop-shadow-lg">
                    Select Color:
                  </p>
                  <div className="flex gap-2">
                    {uniqueColors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleColorClick(
                            variants.find((v) => v.color === color)._id
                          )
                        }
                        className={`w-6 h-6 rounded-full duration-200 hover:scale-110 drop-shadow-lg ${
                          selectedVariant.color.toLowerCase() ===
                          color.toLowerCase()
                            ? "ring-2 ring-white ring-offset-2 ring-offset-black/20"
                            : ""
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Glass Effect Button */}
              <button
                onClick={handleProductClick}
                className="w-full py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold duration-200 hover:bg-white/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;