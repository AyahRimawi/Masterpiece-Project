import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/Products/ProductList";
import ProductApproval from "../components/Products/ProductApproval";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/admin/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleProductAction = async (action, productId, reason) => {
    try {
      await axios.post(`/api/admin/products/${productId}/${action}`, {
        reason,
      });
      fetchProducts();
    } catch (error) {
      console.error(`Error ${action} product:`, error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProductList
            products={products}
            onSelectProduct={setSelectedProduct}
          />
        </div>
        <div>
          <ProductApproval
            selectedProduct={selectedProduct}
            onAction={handleProductAction}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
