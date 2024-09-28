import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductComponents/ProductCard";

const CategoryPage = ({ category, subcategories }) => {
  const [products, setProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // --------------
  useEffect(() => {
    fetchProducts();
  }, [category, selectedSubcategory]);
  // ------------
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      let url = `/api/product/getProductsByCategory/${category}`;
      if (selectedSubcategory) {
        url = `/api/product/getProductsBySubCategory/${selectedSubcategory}`;
      }
      const response = await axios.get(url);

      console.log("API response:", response); // Debug log

      if (response.headers["content-type"].includes("application/json")) {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (
          typeof response.data === "object" &&
          Array.isArray(response.data.products)
        ) {
          setProducts(response.data.products);
        } else {
          console.error("Unexpected data format:", response.data);
          throw new Error(
            `Invalid JSON format received from server. Expected array or object with products array, got ${typeof response.data}`
          );
        }
      } else if (response.headers["content-type"].includes("text/html")) {
        console.error("Received HTML instead of JSON:", response.data);
        throw new Error(
          "Server returned HTML instead of JSON. This may indicate a server misconfiguration or that you're not reaching the API endpoint."
        );
      } else {
        console.error(
          "Unexpected content type:",
          response.headers["content-type"]
        );
        throw new Error(
          `Unexpected content type: ${response.headers["content-type"]}`
        );
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(`Failed to load products: ${error.message}`);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };
  // ----------------------
  const handleProductClick = (productId) => {
    // تخزين ID المنتج في localStorage
    localStorage.setItem("selectedProductId", productId);

    // التوجيه إلى صفحة تفاصيل المنتج
    navigate(`/product/${productId}`);
  };

  // ----------------------
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // -------------
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={fetchProducts}>Retry</button>
        <div>
          <h3>Debugging Information:</h3>
          <p>Category: {category}</p>
          <p>Subcategory: {selectedSubcategory || "None"}</p>
          <p>API URL: {`/api/product/getProductsByCategory/${category}`}</p>
        </div>
      </div>
    );
  }
// -----------------
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-6">{category}</h1> */}
      <div className="mb-6">
        {/* <h2 className="text-xl font-semibold mb-2">Filter by:</h2> */}
        <div className="flex space-x-4">
          {subcategories.map((subcat) => (
            <label key={subcat} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="subcategory"
                value={subcat}
                checked={selectedSubcategory === subcat}
                onChange={() => setSelectedSubcategory(subcat)}
              />
              <span className="ml-2">{subcat}</span>
            </label>
          ))}
        </div>
      </div>
      {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => handleProductClick(product._id)}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
