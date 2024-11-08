// // SearchBar.js
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import user from "../../assets/user.png";
// import love from "../../assets/love.png";
// // import shoppingCart from "../../assets/shoppingCart.png";
// import AuthForm from "../../auth/AuthPopup";
// import { logoutUser } from "../../Redux/AuthRedux/authThunks";
// import CartIcon from "../../pages/CartPage/CartIcon";

// const SearchBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const togglePopup = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   const handleLogin = () => {
//     navigate("/ProfilePage");
//     setIsOpen(false);
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     setIsDropdownOpen(false);
//     navigate("/");
//   };

//   const handleFavoritesClick = () => {
//     if (isAuthenticated) {
//       navigate("/ProfilePage/favorites");
//     } else {
//       setIsOpen(true);
//     }
//   };

//   return (
//     <nav className="relative flex flex-wrap items-center justify-between p-4 bg-white">
//       <div className="flex flex-col md:flex-row items-center justify-between w-full">
//         {/* Left elements */}
//         <div className="flex items-center mb-4 md:mb-0">
//           <Link to="/" className="flex items-center">
//             <span className="font-semibold font-cursive text-[#193DB0] text-2xl md:text-4xl">
//               Second Chance
//             </span>
//           </Link>
//         </div>

//         {/* Center elements */}
//         <form className="flex items-center w-full md:w-1/3">
//           <input
//             type="search"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             type="submit"
//             className="ml-2 p-2 text-gray-600 bg-gray-200 rounded-md"
//             aria-label="Search"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </form>

//         {/* Right elements */}
//         <ul className="flex items-center space-x-4 mt-4 md:mt-0 mr-6 gap-12">
//           <li className="relative">
//             <button
//               className="flex items-center text-gray-600 hover:text-gray-900"
//               onClick={toggleDropdown}
//             >
//               <img
//                 src={user}
//                 className="w-7 h-7 md:w-9 md:h-9 cursor-pointer"
//                 alt="User Avatar"
//                 loading="lazy"
//               />
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
//                 {isAuthenticated ? (
//                   <>
//                     <Link
//                       to="/ProfilePage"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setIsDropdownOpen(false)}
//                     >
//                       Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Log out
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => {
//                         setIsDropdownOpen(false);
//                         setIsOpen(true);
//                       }}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Register
//                     </button>
//                     <button
//                       onClick={() => {
//                         setIsDropdownOpen(false);
//                         setIsOpen(true);
//                       }}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Sign in
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}
//           </li>
//           <li>
//             <button
//               className="flex items-center text-gray-600 hover:text-gray-900"
//               onClick={handleFavoritesClick}
//             >
//               <img
//                 src={love}
//                 className="w-7 h-7 md:w-9 md:h-9"
//                 alt="Love Icon"
//                 loading="lazy"
//               />
//             </button>
//           </li>
//           <li>
//             <Link to="/Cart">
//               <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//                 {" "}
//                 <CartIcon />
//               </div>
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <AuthForm isOpen={isOpen} onClose={togglePopup} onLogin={handleLogin} />
//     </nav>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserCircle2, Heart, Search } from "lucide-react";
import axios from "axios";
import AuthForm from "../../auth/AuthPopup";
import { logoutUser } from "../../Redux/AuthRedux/authThunks";
import CartIcon from "../../pages/CartPage/CartIcon";

const IconButton = ({
  icon: Icon,
  onClick,
  label,
  className = "",
  showDropdown,
  children,
}) => (
  <div className="relative">
    <button
      onClick={onClick}
      className="relative w-14 h-14 flex items-center justify-center group focus:outline-none" // زيادة الحجم من 11 إلى 14
      aria-label={label}
    >
      {/* Circular background that appears on hover */}
      <div className="absolute inset-0 bg-transparent rounded-full transition-all duration-300 group-hover:bg-gray-100" />

      {/* Pulsing background circle */}
      <div className="absolute inset-0 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500" />

      {/* تكبير الأيقونة */}
      <Icon
        className={`w-7 h-7 text-gray-600 group-hover:text-gray-900 transform group-hover:scale-110 transition-all duration-300 relative z-10 ${className}`} // زيادة الحجم من 6 إلى 7
        strokeWidth={1.5}
      />

      {/* Outer ring effect */}
      <div className="absolute inset-0 rounded-full border border-gray-200 opacity-0 group-hover:opacity-100 transform scale-110 group-hover:scale-105 transition-all duration-300" />
    </button>
    {showDropdown && children}
  </div>
);

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const searchProducts = useCallback(async (term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setIsSearching(true);
      const { data } = await axios.get(`/api/product/search`, {
        params: { term: term },
      });
      setSearchResults(data.slice(0, 5));
    } catch (error) {
      console.error("Error searching products:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm) {
        searchProducts(searchTerm);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, searchProducts]);

  const togglePopup = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogin = () => {
    navigate("/ProfilePage");
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsDropdownOpen(false);
    navigate("/");
  };

  const handleFavoritesClick = () => {
    if (isAuthenticated) {
      navigate("/ProfilePage/favorites");
    } else {
      setIsOpen(true);
    }
  };

  const handleProductClick = (variantId) => {
    setSearchTerm("");
    setSearchResults([]);
    navigate(`/product/${variantId}`);
  };

  return (
    <div className="relative">
      <nav className="relative flex flex-wrap items-center justify-between p-4 bg-white mx-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left elements - Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <span
                className="font-['Poppins'] text-2xl md:text-4xl"
                style={{
                  animation: "glow 2s ease-in-out infinite alternate",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "#000",
                }}
              >
                Second Chance
                <style>
                  {`
                    @keyframes glow {
                      from {
                        text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 15px #000;
                      }
                      to {
                        text-shadow: 0 0 10px #000, 0 0 20px #000, 0 0 30px #000;
                      }
                    }
                  `}
                </style>
              </span>
            </Link>
          </div>

          {/* Center elements - Search Bar */}
          <div className="relative flex items-center w-full md:w-1/3">
            <div className="relative w-full">
              <input
                type="search"
                className="w-full p-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400 transition-all duration-300"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Right elements - Icons */}
          <ul className="flex items-center gap-6 mt-4 md:mt-0">
            <li className="relative">
              <IconButton
                icon={UserCircle2}
                onClick={toggleDropdown}
                label="User menu"
                showDropdown={isDropdownOpen}
              >
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-20">
                    {isAuthenticated ? (
                      <>
                        <Link
                          to="/ProfilePage"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          Log out
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsOpen(true);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          Register
                        </button>
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsOpen(true);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </div>
                )}
              </IconButton>
            </li>
            <li>
              <IconButton
                icon={Heart}
                onClick={handleFavoritesClick}
                label="Favorites"
              />
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </div>
      </nav>

      {/* Search Results Dropdown */}
      {searchTerm && (
        <div className="absolute left-6 right-6 bg-white border border-gray-200 rounded-md mt-1 z-50 max-h-[60vh] overflow-y-auto">
          <div className="p-2">
            {isSearching ? (
              <div className="flex justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {searchResults.map((product) => (
                  <div
                    key={product._id}
                    onClick={() =>
                      handleProductClick(product.randomVariant._id)
                    }
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                  >
                    {product.randomVariant?.overviewPicture && (
                      <img
                        src={product.randomVariant.overviewPicture}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </h3>
                      {product.randomVariant && (
                        <p className="text-sm text-gray-500">
                          JD {product.randomVariant.price.toFixed(2)}
                        </p>
                      )}
                      {product.availableColors?.length > 0 && (
                        <p className="text-xs text-gray-400">
                          {product.availableColors.length} colors available
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500">
                No products found
              </div>
            )}
          </div>
        </div>
      )}

      <AuthForm isOpen={isOpen} onClose={togglePopup} onLogin={handleLogin} />
    </div>
  );
};

export default SearchBar;
