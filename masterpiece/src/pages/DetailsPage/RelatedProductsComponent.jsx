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

      const productsWithStock = response.data.filter((product) => {
        const hasAvailableStock = product.variants.some(
          (variant) => variant.quantity > 0
        );
        return (
          product.category === category &&
          product._id !== currentProductId &&
          hasAvailableStock
        );
      });

      setRelatedProducts(productsWithStock.slice(0, 20));
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  const handleProductClick = (selectedVariant) => {
    navigate(`/product/${selectedVariant._id}`);
  };

  const getRandomVariantWithStock = (variants) => {
    const availableVariants = variants.filter(
      (variant) => variant.quantity > 0
    );
    if (availableVariants.length === 0) return null;
    return availableVariants[
      Math.floor(Math.random() * availableVariants.length)
    ];
  };

  if (relatedProducts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No related products available at the moment.
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => {
          const randomVariant = getRandomVariantWithStock(product.variants);
          if (!randomVariant) return null;

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
                <h3 className="font-semibold text-lg mb-1 truncate">
                  {product.name}
                </h3>
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