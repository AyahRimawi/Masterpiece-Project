
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart } from 'lucide-react';
// import useCartStore from './CartStore';

// const CartIcon = () => {
//   const cart = useCartStore((state) => state.cart);

//   const itemCount = cart?.items.reduce((total, item) => total + item.quantity, 0) || 0;

//   return (
//     <Link to="/cart" className="relative">
//       <ShoppingCart className="w-6 h-6 text-gray-700" />
//       {itemCount > 0 && (
//         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//           {itemCount}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default CartIcon;




import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import useCartStore from "./CartStore";

const CartIcon = () => {
  const cart = useCartStore((state) => state.cart);
  const itemCount =
    cart?.items.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <Link to="/cart" className="relative block group">
      <div className="relative w-14 h-14 flex items-center justify-center">
        {" "}
        {/* زيادة الحجم من 11 إلى 14 */}
        {/* Circular background that appears on hover */}
        <div className="absolute inset-0 bg-transparent rounded-full transition-all duration-300 group-hover:bg-gray-100" />
        {/* Pulsing background circle */}
        <div className="absolute inset-0 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500" />
        {/* تكبير أيقونة السلة */}
        <ShoppingBag
          className="w-7 h-7 text-gray-600 group-hover:text-gray-900 transform group-hover:scale-110 transition-all duration-300 relative z-10" // زيادة الحجم من 6 إلى 7
          strokeWidth={1.5}
        />
        {/* Outer ring effect */}
        <div className="absolute inset-0 rounded-full border border-gray-200 opacity-0 group-hover:opacity-100 transform scale-110 group-hover:scale-105 transition-all duration-300" />
        {/* تكبير وتحريك العداد */}
        {itemCount > 0 && (
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6">
            {" "}
            {/* زيادة الحجم وتعديل الموضع */}
            <div className="absolute inset-0 rounded-full bg-red-500 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {" "}
                {/* زيادة حجم الخط من xs إلى sm */}
                {itemCount}
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;