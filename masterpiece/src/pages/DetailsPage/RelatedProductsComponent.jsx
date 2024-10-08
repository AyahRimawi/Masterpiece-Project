import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ category, subCategory, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRelatedProducts();
  }, [category, subCategory, currentProductId]);

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

  const handleProductClick = (selectedVariant) => {
    navigate(`/product/${selectedVariant._id}`);
  };

  const getRandomVariant = (variants) => {
    return variants[Math.floor(Math.random() * variants.length)];
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => {
          const randomVariant = getRandomVariant(product.variants);
          return (
            <div
              key={randomVariant._id}
              className="border rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
              onClick={() => handleProductClick(randomVariant)}
            >
              <img
                src={randomVariant.overviewPicture}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600">
                  JD {randomVariant.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {product.availableColors.length} color(s) available
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
