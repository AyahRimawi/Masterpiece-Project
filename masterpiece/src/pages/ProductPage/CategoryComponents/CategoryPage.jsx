// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Button } from "@material-tailwind/react";
// import ProductCard from "../ProductComponents/ProductCard";

// const CategoryPage = ({ category, subcategories }) => {
//   const [products, setProducts] = useState([]);
//   const [selectedSubcategory, setSelectedSubcategory] = useState("all");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, [category, selectedSubcategory]);

//   const fetchProducts = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const url = `/api/product/getProductsByCategoryAndSubCategory/${category}/${selectedSubcategory}`;
//       const response = await axios.get(url);

//       // فلترة المنتجات لإظهار فقط المنتجات المعتمدة
//       const approvedProducts = response.data.filter(
//         (product) => product.approvalStatus === "Approved"
//       );

//       setProducts(approvedProducts);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setError(`Failed to load products: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // باقي الكود يبقى كما هو بدون تغيير
//   if (isLoading)
//     return (
//       <div className="min-h-[400px] flex items-center justify-center">
//         <div className="text-indigo-600 text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-indigo-200/20">
//           Loading...
//         </div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="min-h-[400px] flex items-center justify-center">
//         <div className="text-red-400 text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-red-200/20">
//           {error}
//         </div>
//       </div>
//     );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-zinc-800 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]">
//         {category}
//       </h1>

//       <div className="flex flex-wrap gap-2 mb-8">
//         <Button
//           className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 overflow-hidden group
//             ${
//               selectedSubcategory === "all"
//                 ? "bg-white/10 text-white backdrop-blur-md border border-white/20"
//                 : "bg-white/60 text-zinc-700 hover:bg-white/70 border border-zinc-200"
//             }`}
//           onClick={() => setSelectedSubcategory("all")}
//         >
//           {selectedSubcategory === "all" && (
//             <>
//               <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-indigo-500/30" />
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />
//             </>
//           )}
//           <span className="relative">All</span>
//         </Button>
//         {subcategories.map((subcat) => (
//           <Button
//             key={subcat}
//             className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 overflow-hidden group
//               ${
//                 selectedSubcategory === subcat
//                   ? "bg-white/10 text-white backdrop-blur-md border border-white/20"
//                   : "bg-white/60 text-zinc-700 hover:bg-white/70 border border-zinc-200"
//               }`}
//             onClick={() => setSelectedSubcategory(subcat)}
//           >
//             {selectedSubcategory === subcat && (
//               <>
//                 <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-indigo-500/30" />
//                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />
//               </>
//             )}
//             <span className="relative">{subcat}</span>
//           </Button>
//         ))}
//       </div>

//       {products.length === 0 ? (
//         <div className="min-h-[400px] flex items-center justify-center">
//           <div className="text-zinc-600 text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-zinc-200/20">
//             No products found.
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <motion.div
//               key={product._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 ease: [0.4, 0, 0.2, 1],
//               }}
//               className="flex justify-center"
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;


// CategoryPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import ProductCard from "../ProductComponents/ProductCard";

const CategoryPage = ({ category, subcategories, initialSubcategory = "all" }) => {
  const [products, setProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [category, selectedSubcategory]);

  useEffect(() => {
    setSelectedSubcategory(initialSubcategory);
  }, [initialSubcategory]);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `/api/product/getProductsByCategoryAndSubCategory/${category}/${selectedSubcategory}`;
      const response = await axios.get(url);

      const approvedProducts = response.data.filter(
        (product) => product.approvalStatus === "Approved"
      );

      setProducts(approvedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(`Failed to load products: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-indigo-600 text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-indigo-200/20">
          Loading...
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-red-400 text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-red-200/20">
          {error}
        </div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-zinc-800 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]">
        {category}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 overflow-hidden group
            ${
              selectedSubcategory === "all"
                ? "bg-white/10 text-white backdrop-blur-md border border-white/20"
                : "bg-white/60 text-zinc-700 hover:bg-white/70 border border-zinc-200"
            }`}
          onClick={() => setSelectedSubcategory("all")}
        >
          {selectedSubcategory === "all" && (
            <>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-indigo-500/30" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />
            </>
          )}
          <span className="relative">All</span>
        </Button>
        {subcategories.map((subcat) => (
          <Button
            key={subcat}
            className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 overflow-hidden group
              ${
                selectedSubcategory === subcat
                  ? "bg-white/10 text-white backdrop-blur-md border border-white/20"
                  : "bg-white/60 text-zinc-700 hover:bg-white/70 border border-zinc-200"
              }`}
            onClick={() => setSelectedSubcategory(subcat)}
          >
            {selectedSubcategory === subcat && (
              <>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-indigo-500/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />
              </>
            )}
            <span className="relative">{subcat}</span>
          </Button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-zinc-600 text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-zinc-200/20">
            No products found.
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex justify-center"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
