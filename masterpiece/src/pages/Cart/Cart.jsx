import React, { useState } from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
  <div className="flex justify-between items-center border-b border-gray-200 py-4">
    <div className="flex items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover mr-4"
      />
      <div>
        <h3 className="text-[#193db0] font-semibold">{item.name}</h3>
        <p className="text-[#193db0]">${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        className="text-[#193db0] px-2 py-1 border border-[#193db0] rounded-l"
      >
        -
      </button>
      <span className="px-4 py-1 border-t border-b border-[#193db0] text-[#193db0]">
        {item.quantity}
      </span>
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        className="text-[#193db0] px-2 py-1 border border-[#193db0] rounded-r"
      >
        +
      </button>
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  </div>
);

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#193db0]">Your Cart</h1>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={removeItem}
          onUpdateQuantity={updateQuantity}
        />
      ))}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-[#193db0]">
          Total: ${total.toFixed(2)}
        </h2>
        <button className="mt-4 bg-[#193db0] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
