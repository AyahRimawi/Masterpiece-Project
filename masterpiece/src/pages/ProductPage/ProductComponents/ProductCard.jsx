import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, Star, ShoppingBag, Heart } from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({
  product,
  showFavoriteButton = true,
  onRemoveFavorite = null,
}) => {
  const { _id, name, variants, averageRating } = product;
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false);
  const isInFavoritesPage = location.pathname.includes("favorites");

  useEffect(() => {
    if (variants && variants.length > 0) {
      setSelectedVariant(variants[0]);
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [variants]);

  useEffect(() => {
    if (isAuthenticated && product._id && showFavoriteButton) {
      checkIsFavorite();
    }
  }, [isAuthenticated, product._id, showFavoriteButton]);

  const checkIsFavorite = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const favorites = response.data;
      setIsFavorite(favorites.some((fav) => fav._id === product._id));
    } catch (error) {
      console.error("Error checking favorite status:", error);
    }
  };

  const handleFavoriteClick = async (e) => {
    e.stopPropagation();

    if (!isAuthenticated) {
      toast.info("Please login to add items to favorites");
      return;
    }

    if (isTogglingFavorite) return;

    try {
      setIsTogglingFavorite(true);
      const token = localStorage.getItem("token");

      if (isInFavoritesPage) {
        await onRemoveFavorite?.(product._id);
      } else {
        const response = await axios.post(
          `/api/favorites/toggle/${product._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(response.data.isFavorite);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast.error("Failed to update favorites");
    } finally {
      setIsTogglingFavorite(false);
    }
  };

  const handleColorClick = (variantId) => {
    const variant = variants.find((v) => v._id === variantId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const handleProductClick = () => {
    if (selectedVariant) {
      navigate(`/product/${selectedVariant._id}`);
    }
  };

  if (!selectedVariant) return null;

  if (isLoading) {
    return (
      <div className="w-full max-w-[300px] aspect-[3/4] flex items-center justify-center">
        <div className="animate-bounce">
          <ShoppingBag size={40} className="text-indigo-500 animate-pulse" />
        </div>
      </div>
    );
  }

  const uniqueColors = Array.from(
    new Set(variants.map((variant) => variant.color))
  );

  return (
    <div className="relative w-full max-w-[300px] aspect-[3/4] [perspective:1000px] group animate-[slideUp_0.5s_ease-out]">
      {showFavoriteButton && (
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 md:top-4 md:right-4 z-20 p-1.5 md:p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${
            isTogglingFavorite && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isTogglingFavorite}
        >
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
              isInFavoritesPage || isFavorite
                ? "text-red-500 fill-current"
                : "text-gray-400"
            }`}
          />
        </button>
      )}

      <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="relative w-full h-full rounded-lg bg-zinc-900 overflow-hidden">
            {/* Animated Background Circles */}
            <div className="absolute w-full h-full">
              <div className="absolute w-24 h-24 rounded-full bg-indigo-300/50 filter blur-xl animate-[floating_3s_ease-in-out_infinite]" />
              <div className="absolute w-40 h-40 rounded-full bg-violet-300/50 filter blur-xl left-20 animate-[floating_3s_ease-in-out_1s_infinite]" />
              <div className="absolute w-16 h-16 rounded-full bg-purple-500/50 filter blur-xl left-40 -top-10 animate-[floating_3s_ease-in-out_2s_infinite]" />
            </div>

            {/* Product Image */}
            <div className="absolute inset-0">
              <img
                src={selectedVariant.overviewPicture}
                alt={name}
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
              <div className="w-fit px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs md:text-sm border border-white/20">
                New Arrival
              </div>

              <div className="space-y-1 md:space-y-2">
                <div className="p-2 md:p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 space-y-1 md:space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="text-white font-bold text-base md:text-lg w-3/4">
                      {name}
                    </p>
                    <div className="p-1 md:p-1.5 bg-white/20 backdrop-blur-sm rounded-md">
                      <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-white/70 text-xs">
                    Available Colors: {uniqueColors.length} • Rating:{" "}
                    {averageRating.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {/* Product Image */}
            <img
              src={selectedVariant.overviewPicture}
              alt={name}
              className="absolute w-full h-full object-cover"
            />

            {/* Glass Effect */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {name}
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  JD {selectedVariant.price.toFixed(2)}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={`drop-shadow-lg ${
                        index < averageRating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-zinc-600 text-zinc-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Color Selection */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-white drop-shadow-lg">
                    Select Color:
                  </p>
                  <div className="flex gap-2">
                    {uniqueColors.map((color, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleColorClick(
                            variants.find((v) => v.color === color)._id
                          );
                        }}
                        className={`w-5 h-5 md:w-6 md:h-6 rounded-full duration-200 hover:scale-110drop-shadow-lg ${
                          selectedVariant.color.toLowerCase() ===
                          color.toLowerCase()
                            ? "ring-2 ring-white ring-offset-2 ring-offset-black/20"
                            : ""
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Glass Effect Button */}
              <button
                onClick={handleProductClick}
                className="w-full py-2 md:py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-semibold duration-200 hover:bg-white/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
