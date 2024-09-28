
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ category, subCategory, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRelatedProducts();
  }, [category, subCategory]);

  const fetchRelatedProducts = async () => {
    try {
      const response = await axios.get(
        `/api/product/getProductsBySubCategory/${subCategory}`
      );
      setRelatedProducts(
        response.data
          .filter(
            (product) =>
              product.category === category && product._id !== currentProductId
          )
          .slice(0, 20)
      );
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {relatedProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg overflow-hidden shadow-sm cursor-pointer"
            onClick={() => handleProductClick(product._id)}
          >
            <img
              src={product.overviewPicture}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">JD {product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
