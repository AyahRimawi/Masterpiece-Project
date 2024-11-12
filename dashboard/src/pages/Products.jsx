// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductList from "../components/Products/ProductList";
// import ProductApproval from "../components/Products/ProductApproval";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("/api/admin/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleProductAction = async (action, productId, reason) => {
//     try {
//       await axios.post(`/api/admin/products/${productId}/${action}`, {
//         reason,
//       });
//       fetchProducts();
//     } catch (error) {
//       console.error(`Error ${action} product:`, error);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-semibold text-gray-800">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2">
//           <ProductList
//             products={products}
//             onSelectProduct={setSelectedProduct}
//           />
//         </div>
//         <div>
//           <ProductApproval
//             selectedProduct={selectedProduct}
//             onAction={handleProductAction}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


// -------------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [showModal, setShowModal] = useState(false);
//   const [rejectionReason, setRejectionReason] = useState("");
//   const productsPerPage = 8;

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     filterProducts();
//   }, [statusFilter, products]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("/api/admin/products");
//       setProducts(response.data);
//       setFilteredProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const filterProducts = () => {
//     let filtered = [...products];
//     if (statusFilter !== "all") {
//       filtered = products.filter(
//         (product) => product.approvalStatus === statusFilter
//       );
//     }
//     setFilteredProducts(filtered);
//     setCurrentPage(1);
//   };

//   const handleStatusChange = (newStatus) => {
//     setStatusFilter(newStatus);
//   };

//   const handleProductAction = async (action) => {
//     try {
//       await axios.post(`/api/admin/products/${selectedProduct._id}/${action}`, {
//         reason: rejectionReason,
//       });
//       setShowModal(false);
//       setRejectionReason("");
//       fetchProducts();
//       setSelectedProduct(null);
//     } catch (error) {
//       console.error("Error processing product action:", error);
//     }
//   };

//   // Pagination calculations
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   return (
//     <div className="p-6">
//       {/* Filter Section */}
//       <div className="mb-6">
//         <div className="flex flex-wrap gap-4 items-center justify-between">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Products Management
//           </h1>
//           <div className="flex gap-2">
//             <button
//               onClick={() => handleStatusChange("all")}
//               className={`px-4 py-2 rounded-lg transition-colors ${
//                 statusFilter === "all"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => handleStatusChange("Pending")}
//               className={`px-4 py-2 rounded-lg transition-colors ${
//                 statusFilter === "Pending"
//                   ? "bg-yellow-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               Pending
//             </button>
//             <button
//               onClick={() => handleStatusChange("Approved")}
//               className={`px-4 py-2 rounded-lg transition-colors ${
//                 statusFilter === "Approved"
//                   ? "bg-green-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               Approved
//             </button>
//             <button
//               onClick={() => handleStatusChange("Rejected")}
//               className={`px-4 py-2 rounded-lg transition-colors ${
//                 statusFilter === "Rejected"
//                   ? "bg-red-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               Rejected
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Products List */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Product
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Category
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Seller
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {currentProducts.map((product) => (
//                 <tr
//                   key={product._id}
//                   onClick={() => {
//                     setSelectedProduct(product);
//                     setShowModal(true);
//                   }}
//                   className="hover:bg-gray-50 cursor-pointer transition-colors"
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {product.name}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-600">
//                       {product.category}
//                     </div>
//                     {product.subCategory && (
//                       <div className="text-xs text-gray-500">
//                         {product.subCategory}
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-600">
//                       {product.seller.name}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
//                       ${
//                         product.approvalStatus === "Approved"
//                           ? "bg-green-100 text-green-800"
//                           : product.approvalStatus === "Pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {product.approvalStatus}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="mt-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//         <div className="flex flex-1 justify-between sm:hidden">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//         </div>
//         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//           <div>
//             <p className="text-sm text-gray-700">
//               Showing{" "}
//               <span className="font-medium">{indexOfFirstProduct + 1}</span> to{" "}
//               <span className="font-medium">
//                 {Math.min(indexOfLastProduct, filteredProducts.length)}
//               </span>{" "}
//               of <span className="font-medium">{filteredProducts.length}</span>{" "}
//               results
//             </p>
//           </div>
//           <div>
//             <nav
//               className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//               aria-label="Pagination"
//             >
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span className="sr-only">Previous</span>
//                 <svg
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                 }
//                 disabled={currentPage === totalPages}
//                 className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span className="sr-only">Next</span>
//                 <svg
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Product Details Modal */}
//       {showModal && selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Product Details
//                 </h2>
//                 <button
//                   onClick={() => {
//                     setShowModal(false);
//                     setSelectedProduct(null);
//                     setRejectionReason("");
//                   }}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Product Information */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4">
//                     Basic Information
//                   </h3>
//                   <div className="space-y-3">
//                     <p>
//                       <span className="font-medium">Name:</span>{" "}
//                       {selectedProduct.name}
//                     </p>
//                     <p>
//                       <span className="font-medium">Category:</span>{" "}
//                       {selectedProduct.category}
//                     </p>
//                     <p>
//                       <span className="font-medium">Subcategory:</span>{" "}
//                       {selectedProduct.subCategory}
//                     </p>
//                     <p>
//                       <span className="font-medium">Seller:</span>{" "}
//                       {selectedProduct.seller.name}
//                     </p>
//                     <p>
//                       <span className="font-medium">Status:</span>{" "}
//                       {selectedProduct.approvalStatus}
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold mb-4">Description</h3>
//                   <p className="text-gray-600">{selectedProduct.description}</p>
//                 </div>
//               </div>

//               {/* Variants */}
//               {selectedProduct.variants && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-4">
//                     Product Variants
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {selectedProduct.variants.map((variant, index) => (
//                       <div key={index} className="bg-gray-50 p-4 rounded-lg">
//                         <div className="space-y-2">
//                           <div className="aspect-w-16 aspect-h-9 mb-4">
//                             <img
//                               src={variant.overviewPicture}
//                               alt={`Variant ${index + 1}`}
//                               className="object-cover rounded-lg"
//                             />
//                           </div>
//                           <p className="text-sm">
//                             <span className="font-medium">SKU:</span>{" "}
//                             {variant.shein_code}
//                           </p>
//                           <p className="text-sm">
//                             <span className="font-medium">Color:</span>{" "}
//                             {variant.color}
//                           </p>
//                           <p className="text-sm">
//                             <span className="font-medium">Sizes:</span>{" "}
//                             {variant.size.join(", ")}
//                           </p>
//                           <p className="text-sm">
//                             <span className="font-medium">Price:</span> $
//                             {variant.price}
//                           </p>
//                           <p className="text-sm">
//                             <span className="font-medium">Stock:</span>{" "}
//                             {variant.quantity}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Action Buttons */}
//               {selectedProduct.approvalStatus === "Pending" && (
//                 <div className="border-t pt-6">
//                   <div className="space-y-4">
//                     <div className="flex gap-4">
//                       <button
//                         onClick={() => handleProductAction("approve")}
//                         className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//                       >
//                         Approve Product
//                       </button>
//                       <button
//                         onClick={() => {
//                           if (!rejectionReason.trim()) {
//                             alert("Please provide a reason for rejection");
//                             return;
//                           }
//                           handleProductAction("reject");
//                         }}
//                         className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                       >
//                         Reject Product
//                       </button>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="rejectionReason"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         Rejection Reason (required for rejection)
//                       </label>
//                       <textarea
//                         id="rejectionReason"
//                         value={rejectionReason}
//                         onChange={(e) => setRejectionReason(e.target.value)}
//                         rows="3"
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Please provide a detailed reason for rejection..."
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;
// -----------------------------
// =======================================================

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductList from "../components/Products/ProductList";
// import ProductApproval from "../components/Products/ProductApproval";
// import ProductFilter from "../components/Products/ProductFilter";
// import Pagination from "../components/Products/Pagination";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [statusFilter, setStatusFilter] = useState("all");
//   const productsPerPage = 10;

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     filterProducts();
//   }, [statusFilter, products]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("/api/admin/products");
//       setProducts(response.data);
//       setFilteredProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const filterProducts = () => {
//     let filtered = [...products];
//     if (statusFilter !== "all") {
//       filtered = products.filter(
//         (product) => product.approvalStatus === statusFilter
//       );
//     }
//     setFilteredProducts(filtered);
//     setCurrentPage(1);
//   };

//   const handleProductAction = async (action, productId, reason) => {
//     try {
//       await axios.post(`/api/admin/products/${productId}/${action}`, {
//         reason,
//       });
//       fetchProducts();
//       setSelectedProduct(null);
//     } catch (error) {
//       console.error(`Error ${action} product:`, error);
//     }
//   };

//   // Pagination logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   return (
//     <div className="space-y-6 p-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-semibold text-gray-800">Products</h1>
//         <ProductFilter
//           statusFilter={statusFilter}
//           onFilterChange={setStatusFilter}
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2">
//           <ProductList
//             products={currentProducts}
//             onSelectProduct={setSelectedProduct}
//           />
//           <div className="mt-4">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={setCurrentPage}
//             />
//           </div>
//         </div>
//         <div>
//           <ProductApproval
//             selectedProduct={selectedProduct}
//             onAction={handleProductAction}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

// =========================================

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/Products/ProductList";
import ProductApproval from "../components/Products/ProductApproval";
import ProductFilter from "../components/Products/ProductFilter";
import Pagination from "../components/Products/Pagination";
import ImageModal from "../components/Products/ImageModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [statusFilter, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/admin/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filterProducts = () => {
    let filtered = [...products];
    if (statusFilter !== "all") {
      filtered = products.filter(
        (product) => product.approvalStatus === statusFilter
      );
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleProductAction = async (action, productId, reason) => {
    try {
      if (action === "delete") {
        await axios.delete(`/api/admin/products/${productId}`);
      } else {
        await axios.post(`/api/admin/products/${productId}/${action}`, {
          reason,
        });
      }
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      console.error(`Error ${action} product:`, error);
    }
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Products</h1>
        <ProductFilter
          statusFilter={statusFilter}
          onFilterChange={setStatusFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProductList
            products={currentProducts}
            onSelectProduct={setSelectedProduct}
          />
          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div>
          <ProductApproval
            selectedProduct={selectedProduct}
            onAction={handleProductAction}
            onImageClick={setSelectedImage}
          />
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Products;