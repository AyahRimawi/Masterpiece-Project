// Products.jsx
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
      const token = localStorage.getItem("token"); // تأكد من وجود التوكن
      const response = await axios.get("/api/admin/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched products:", response.data); // للتأكد من البيانات
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filterProducts = () => {
    if (!products) return;
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
      const token = localStorage.getItem("token");
      if (action === "delete") {
        await axios.delete(`/api/admin/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await axios.post(
          `/api/admin/products/${productId}/${action}`,
          { reason },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      console.error(`Error ${action} product:`, error);
    }
  };

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
