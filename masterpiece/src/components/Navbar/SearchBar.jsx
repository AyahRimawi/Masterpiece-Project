import user from "../../assets/user.png";
import love from "../../assets/love.png";
import shoppingCart from "../../assets/shoppingCart.png";
import { Link } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";


const SearchBar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between p-4 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left elements */}
        <div className="flex items-center mb-4 md:mb-0">
          <a className="flex items-center" href="#">
            <span className="font-semibold font-cursive text-[#193DB0] text-2xl md:text-4xl">
              Shein JO
            </span>
          </a>
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
          <li>
            <a
              className="flex items-center text-gray-600 hover:text-gray-900"
              href="#"
            >
              <Link to={"/ProfilePage"}>
                <img
                  src={user}
                  className="w-7 h-7 md:w-9 md:h-9"
                  alt="User Avatar"
                  loading="lazy"
                />
              </Link>{" "}
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-gray-600 hover:text-gray-900"
              href="#"
            >
              <img
                src={love}
                className="w-7 h-7 md:w-9 md:h-9"
                alt="Love Icon"
                loading="lazy"
              />
            </a>
          </li>
          <Link to={"/CartItem"}>
            <li>
              <a
                className="flex items-center text-gray-600 hover:text-gray-900"
                href="#"
              >
                <img
                  src={shoppingCart}
                  className="w-7 h-7 md:w-9 md:h-9"
                  alt="Shopping Cart"
                  loading="lazy"
                />
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default SearchBar;
