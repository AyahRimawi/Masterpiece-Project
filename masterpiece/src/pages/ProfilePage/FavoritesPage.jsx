import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Loader } from "lucide-react";
import ProductCard from "../ProductPage/ProductComponents/ProductCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
        // فلترة المنتجات التي لديها على الأقل متغير واحد مع كمية أكبر من 0
        const availableProducts = response.data.filter((product) =>
          product.variants.some((variant) => variant.quantity > 0)
        );
        setFavorites(availableProducts);
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
        <Heart className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mb-4" />
        <h3 className="text-lg md:text-xl font-medium text-gray-700 text-center">
          Please login to view favorites
        </h3>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader className="w-8 h-8 text-[#193db0] animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-8 px-4">{error}</div>;
  }

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <Heart className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mb-4" />
        <h3 className="text-lg md:text-xl font-medium text-gray-700 text-center">
          No favorites yet
        </h3>
        <p className="text-sm md:text-base text-gray-500 mt-2 text-center">
          Products you like will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 place-items-center">
        <AnimatePresence>
          {favorites.map((product) => (
            <motion.div
              key={product._id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center product-card-wrapper"
            >
              <div className="w-full transform transition-transform duration-300 hover:scale-[1.02]">
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

      <style jsx>{`
        .product-card-wrapper {
          width: 100%;
          max-width: 320px;
          min-width: 280px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .product-card-wrapper {
            max-width: 100%;
            min-width: 100%;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .product-card-wrapper {
            max-width: 300px;
            min-width: 260px;
          }
        }

        @media (min-width: 1025px) {
          .product-card-wrapper {
            max-width: 320px;
            min-width: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default FavoritesPage;
