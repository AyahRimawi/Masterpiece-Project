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
//       let url = `/api/product/getProductsByCategory/${category}`;
//       console.log("Fetching products from URL:", url); // طباعة الرابط
//       if (selectedSubcategory && selectedSubcategory !== "all") {
//         url = `/api/product/getProductsBySubCategory/${selectedSubcategory}`;
//         console.log("Fetching products for subcategory:", selectedSubcategory); // طباعة الفئة الفرعية
//       }

//       const response = await axios.get(url);
//       console.log("Response data:", response.data); // طباعة البيانات المستلمة
//       console.log("Response status:", response.status); // طباعة حالة الاستجابة

//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error); // طباعة الأخطاء
//       setError(`Failed to load products: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) return <div className="text-center py-10">Loading...</div>;
//   if (error)
//     return <div className="text-center py-10 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-6 flex flex-wrap gap-2">
//         <Button
//           color={selectedSubcategory === "all" ? "blue" : "gray"}
//           onClick={() => setSelectedSubcategory("all")}
//         >
//           All
//         </Button>
//         {subcategories.map((subcat) => (
//           <Button
//             key={subcat}
//             color={selectedSubcategory === subcat ? "blue" : "gray"}
//             onClick={() => setSelectedSubcategory(subcat)}
//           >
//             {subcat}
//           </Button>
//         ))}
//       </div>
//       {products.length === 0 ? (
//         <div className="text-center py-10">No products found.</div>
//       ) : (
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.1,
//               },
//             },
//           }}
//         >
//           {products.map((product) => (
//             <motion.div
//               key={product._id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;


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
//       let url = `/api/products/category/${category}`;
//       if (selectedSubcategory && selectedSubcategory !== "all") {
//         url = `/api/products/subcategory/${selectedSubcategory}`;
//       }
//       console.log("Fetching products from URL:", url);
//       const response = await axios.get(url);
//       console.log("Response data:", response.data);
//       console.log("Response status:", response.status);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setError(`Failed to load products: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) return <div className="text-center py-10">Loading...</div>;
//   if (error)
//     return <div className="text-center py-10 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-6 flex flex-wrap gap-2">
//         <Button
//           color={selectedSubcategory === "all" ? "blue" : "gray"}
//           onClick={() => setSelectedSubcategory("all")}
//         >
//           All
//         </Button>
//         {subcategories.map((subcat) => (
//           <Button
//             key={subcat}
//             color={selectedSubcategory === subcat ? "blue" : "gray"}
//             onClick={() => setSelectedSubcategory(subcat)}
//           >
//             {subcat}
//           </Button>
//         ))}
//       </div>
//       {products.length === 0 ? (
//         <div className="text-center py-10">No products found.</div>
//       ) : (
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.1,
//               },
//             },
//           }}
//         >
//           {products.map((product) => (
//             <motion.div
//               key={product._id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;

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
//       let url = `/api/product/getProductsByCategory/${category}`;
//       if (selectedSubcategory && selectedSubcategory !== "all") {
//         url = `/api/product/getProductsBySubCategory/${selectedSubcategory}`;
//       }
//       console.log("Fetching products from URL:", url);
//       const response = await axios.get(url);
//       console.log("Response data:", response.data);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setError(`Failed to load products: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import ProductCard from "../ProductComponents/ProductCard";

const CategoryPage = ({ category, subcategories }) => {
  const [products, setProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [category, selectedSubcategory]);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `/api/product/getProductsByCategoryAndSubCategory/${category}/${selectedSubcategory}`;
      console.log("Fetching products from URL:", url);
      const response = await axios.get(url);
      console.log("Response data:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(`Failed to load products: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          color={selectedSubcategory === "all" ? "blue" : "gray"}
          onClick={() => setSelectedSubcategory("all")}
        >
          All
        </Button>
        {subcategories.map((subcat) => (
          <Button
            key={subcat}
            color={selectedSubcategory === subcat ? "blue" : "gray"}
            onClick={() => setSelectedSubcategory(subcat)}
          >
            {subcat}
          </Button>
        ))}
      </div>
      {products.length === 0 ? (
        <div className="text-center py-10">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
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