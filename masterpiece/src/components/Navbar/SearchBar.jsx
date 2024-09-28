// SearchBar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user from "../../assets/user.png";
import love from "../../assets/love.png";
import shoppingCart from "../../assets/shoppingCart.png";
import AuthForm from "../../auth/AuthPopup";
import { logoutUser } from "../../Redux/AuthRedux/authThunks";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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

  return (
    <nav className="relative flex flex-wrap items-center justify-between p-4 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left elements */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <span className="font-semibold font-cursive text-[#193DB0] text-2xl md:text-4xl">
              Shein JO
            </span>
          </Link>
        </div>

        {/* Center elements */}
        <form className="flex items-center w-full md:w-1/3">
          <input
            type="search"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            type="submit"
            className="ml-2 p-2 text-gray-600 bg-gray-200 rounded-md"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>

        {/* Right elements */}
        <ul className="flex items-center space-x-4 mt-4 md:mt-0 mr-6 gap-12">
          <li className="relative">
            <button
              className="flex items-center text-gray-600 hover:text-gray-900"
              onClick={toggleDropdown}
            >
              <img
                src={user}
                className="w-7 h-7 md:w-9 md:h-9 cursor-pointer"
                alt="User Avatar"
                loading="lazy"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/ProfilePage"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Register
                    </button>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(true);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center text-gray-600 hover:text-gray-900"
              onClick={handleFavoritesClick}
            >
              <img
                src={love}
                className="w-7 h-7 md:w-9 md:h-9"
                alt="Love Icon"
                loading="lazy"
              />
            </button>
          </li>
          <li>
            <Link to="/Cart">
              <img
                src={shoppingCart}
                className="w-7 h-7 md:w-9 md:h-9"
                alt="Shopping Cart"
                loading="lazy"
              />
            </Link>
          </li>
        </ul>
      </div>
      <AuthForm isOpen={isOpen} onClose={togglePopup} onLogin={handleLogin} />
    </nav>
  );
};

export default SearchBar;