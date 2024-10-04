
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { _id, name, variants, averageRating } = product;
  const [selectedVariant, setSelectedVariant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (variants && variants.length > 0) {
      setSelectedVariant(variants[0]);
    }
  }, [variants]);

  const handleColorClick = (variantId) => {
    const variant = variants.find((v) => v._id === variantId);
    setSelectedVariant(variant);
  };

  // const handleProductClick = () => {
  //   navigate(`/product/${_id}`);
  // };
const handleProductClick = () => {
  navigate(`/product/${selectedVariant._id}`);
};

  if (!selectedVariant) return null;

  const uniqueColors = Array.from(
    new Set(variants.map((variant) => variant.color))
  );

  return (
    <div className="flex justify-center items-end mb-6">
      <div className="bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl w-72">
        <div className="h-48 rounded-t-lg overflow-hidden">
          <img
            src={selectedVariant.overviewPicture}
            alt={name}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600 font-bold">
            JD {selectedVariant.price.toFixed(2)}
          </p>
          <div className="flex items-center my-2">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`text-${
                  index < averageRating ? "yellow-400" : "gray-400"
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-500 text-sm">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <div className="flex space-x-2 mb-4">
            {uniqueColors.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                  selectedVariant.color.toLowerCase() === color.toLowerCase()
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() =>
                  handleColorClick(variants.find((v) => v.color === color)._id)
                }
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-lg px-3 py-1 hover:bg-gray-300 transition">
              <Heart size={16} /> <span className="ml-1">Favorite</span>
            </button>
            <button
              className="flex items-center justify-center bg-[#193dc2] text-white rounded-lg px-3 py-1 hover:bg-blue-600 transition"
              onClick={handleProductClick}
            >
              <ShoppingCart size={16} />{" "}
              <span className="ml-1">View Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
