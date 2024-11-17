import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Loader, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ProductPage/ProductComponents/ProductCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // تصفية المنتجات التي لديها كمية أكبر من صفر
  const availableItems = favorites.filter((product) =>
    product.variants.some((variant) => variant.quantity > 0)
  );

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = availableItems.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(availableItems.length / itemsPerPage);

  // تعديل رقم الصفحة الحالية إذا كانت أكبر من العدد الكلي للصفحات
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [availableItems.length]);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`px-3 py-1 mx-1 rounded-md text-sm ${
            currentPage === i
              ? "bg-[#193db0] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchFavorites();
    }
  }, [isAuthenticated]);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Authentication required");
        setLoading(false);
        return;
      }

      const response = await axios.get("/api/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        // حذف المنتجات التي كميتها صفر تلقائياً
        const productsToRemove = response.data.filter(
          (product) => !product.variants.some((variant) => variant.quantity > 0)
        );

        // حذف المنتجات من المفضلة
        for (const product of productsToRemove) {
          try {
            await axios.delete(`/api/favorites/${product._id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          } catch (error) {
            console.error(`Error removing product ${product._id}:`, error);
          }
        }

        // تحديث القائمة بالمنتجات المتوفرة فقط
        setFavorites(
          response.data.filter((product) =>
            product.variants.some((variant) => variant.quantity > 0)
          )
        );
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
      setError(error.response?.data?.message || "Failed to fetch favorites");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFavorite = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Authentication required");
        return;
      }

      await axios.delete(`/api/favorites/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavorites(favorites.filter((fav) => fav._id !== productId));
      toast.success("Removed from favorites");
    } catch (error) {
      console.error("Error removing favorite:", error);
      toast.error("Failed to remove from favorites");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <Heart className="w-10 h-10 md:w-12 md:h-12 text-gray-300 mb-3" />
        <h3 className="text-base md:text-lg font-medium text-gray-700 text-center">
          Please login to view favorites
        </h3>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader className="w-6 h-6 text-[#193db0] animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-6 px-4">{error}</div>;
  }

  if (availableItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <Heart className="w-10 h-10 md:w-12 md:h-12 text-gray-300 mb-3" />
        <h3 className="text-base md:text-lg font-medium text-gray-700 text-center">
          No favorites yet
        </h3>
        <p className="text-xs md:text-sm text-gray-500 mt-2 text-center">
          Products you like will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 py-4">
      <div className="flex flex-wrap justify-center gap-4">
        <AnimatePresence>
          {currentItems.map((product) => (
            <motion.div
              key={product._id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-[220px] md:w-[240px]"
            >
              <div className="w-full h-full transform transition-transform duration-300 hover:scale-[1.02]">
                <ProductCard
                  product={product}
                  showFavoriteButton={true}
                  onRemoveFavorite={handleRemoveFavorite}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-2">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          {renderPaginationButtons()}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;