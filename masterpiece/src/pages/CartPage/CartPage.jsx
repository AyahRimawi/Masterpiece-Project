import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useCartStore from "./CartStore";

const CartPage = () => {
  const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
    useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleRemoveItem = async (itemId) => {
    try {
      await removeCartItem(itemId);
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Failed to remove item. Please try again.");
    }
  };

  const handleQuantityChange = async (itemId, currentQuantity, change) => {
    const newQuantity = Math.max(1, currentQuantity + change);
    try {
      await updateCartItem(itemId, newQuantity);
      toast.success("Cart updated successfully");
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to update cart. Please try again."
      );
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!cart || !cart.items || cart.items.length === 0)
    return <div className="text-center mt-8">Your cart is empty</div>;

  const total = cart.items.reduce((sum, item) => {
    const price =
      item.variantId && item.variantId.price ? item.variantId.price : 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.items.map((item) => (
        <div key={item._id} className="flex items-center border-b py-4">
          <img
            src={item.variantId?.overviewPicture || "placeholder-image-url"}
            alt={item.variantId?.name || "Product"}
            className="w-20 h-20 object-cover mr-4"
          />
          <div className="flex-grow">
            <h2 className="font-semibold">
              {item.productId?.name || "Product Name"}
            </h2>
            <p className="text-gray-600">
              Color: {item.variantId?.color || "N/A"}, Size:{" "}
              {item.variantId?.size || "N/A"}
            </p>
            <p className="text-gray-600">
              Price: ${item.variantId?.price?.toFixed(2) || "0.00"}
            </p>
            <div className="flex items-center mt-2">
              <button
                onClick={() =>
                  handleQuantityChange(item._id, item.quantity, -1)
                }
                className="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item._id, item.quantity, 1)}
                className="bg-gray-200 px-2 py-1 rounded"
                disabled={item.quantity >= item.variantId?.quantity}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => handleRemoveItem(item._id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-8 text-xl font-bold">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default CartPage;