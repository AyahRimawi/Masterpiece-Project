// src/components/AddToCartButton.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import useCartStore from "./CartStore";

const AddToCartButton = ({ productId, variantId, maxQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleAddToCart = async () => {
    try {
      await addToCart(productId, variantId, quantity);
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  return (
    <div className="flex items-center mt-4">
      <input
        type="number"
        min="1"
        max={maxQuantity}
        value={quantity}
        onChange={(e) =>
          setQuantity(
            Math.min(maxQuantity, Math.max(1, parseInt(e.target.value)))
          )
        }
        className="w-16 px-2 py-1 border rounded mr-2"
      />
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
