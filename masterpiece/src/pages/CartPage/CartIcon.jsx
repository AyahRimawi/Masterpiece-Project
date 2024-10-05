
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import useCartStore from './CartStore';

const CartIcon = () => {
  const cart = useCartStore((state) => state.cart);

  const itemCount = cart?.items.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;